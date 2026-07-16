const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour
const MAX_REQUESTS = 5; // max 5 emails per hour per IP
const rateLimitMap = new Map();

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isValidEmail(email) {
  return EMAIL_RE.test(String(email));
}

// Strip newlines (header-injection guard) and HTML-escape for the email body.
export function sanitize(input) {
  return String(input)
    .replace(/[\r\n]+/g, "")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
    .trim();
}

export function isRateLimited(ip) {
  const now = Date.now();
  const record = rateLimitMap.get(ip);
  if (!record) {
    rateLimitMap.set(ip, { count: 1, timestamp: now });
    return false;
  }
  if (now - record.timestamp > RATE_LIMIT_WINDOW) {
    rateLimitMap.set(ip, { count: 1, timestamp: now });
    return false;
  }
  if (record.count >= MAX_REQUESTS) return true;
  record.count += 1;
  return false;
}

function escapeHtmlText(s) {
  // For the message body in HTML output, preserve newlines as <br>.
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\n/g, "<br>");
}

/**
 * Validate and send a contact message.
 * @param {{name?:string, email?:string, message?:string, company?:string}} body
 * @param {string} ip  client IP for rate limiting
 * @returns {Promise<{status:number, json:object}>}
 */
export async function handleContact(body = {}, ip = "unknown") {
  // Honeypot: real users never fill `company`; if present, pretend success.
  if (body.company && String(body.company).trim()) {
    return { status: 200, json: { message: "Email sent successfully!" } };
  }

  const { name, email, message } = body;

  if (isRateLimited(ip)) {
    return {
      status: 429,
      json: { error: "Too many requests. Please try again later." },
    };
  }
  if (!name || !email || !message) {
    return { status: 400, json: { error: "All fields are required." } };
  }
  if (!isValidEmail(email)) {
    return {
      status: 400,
      json: { error: "Please provide a valid email address." },
    };
  }
  if (name.length > 100) {
    return {
      status: 400,
      json: { error: "Name is too long (max 100 characters)." },
    };
  }
  if (email.length > 254) {
    return { status: 400, json: { error: "Email is too long." } };
  }
  if (message.length > 5000) {
    return {
      status: 400,
      json: { error: "Message is too long (max 5000 characters)." },
    };
  }

  const sanitizedName = sanitize(name);
  const sanitizedEmail = sanitize(email);
  const sanitizedMessage = sanitize(message);

  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.error(
      "[contact] Email credentials not configured (EMAIL_USER / EMAIL_PASS)",
    );
    return {
      status: 500,
      json: {
        error:
          "Email service is not configured. Please contact directly via email.",
      },
    };
  }

  const { default: nodemailer } = await import("nodemailer");
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_TO || process.env.EMAIL_USER,
    replyTo: sanitizedEmail,
    subject: `Portfolio Contact: Message from ${sanitizedName}`,
    text: `New message from your portfolio contact form:

Name: ${sanitizedName}
Email: ${sanitizedEmail}

Message:
${sanitizedMessage}

---
This email was sent from your portfolio website contact form.`,
    html: `<!DOCTYPE html><html><head><style>
  body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; color:#171717; }
  .container { max-width: 600px; margin: 0 auto; padding: 20px; }
  .header { background: var(--accent, #859462); color: #ffffff; padding: 20px; border-radius: 8px 8px 0 0; }
  .content { background: #f5f5f5; padding: 20px; border-radius: 0 0 8px 8px; }
  .field { margin-bottom: 16px; }
  .label { font-weight: 600; color: #525252; font-size: 12px; text-transform: uppercase; }
  .value { margin-top: 4px; }
  .message { background: #ffffff; padding: 16px; border-radius: 8px; margin-top: 16px; }
  .footer { margin-top: 20px; font-size: 12px; color: #737373; }
</style></head><body>
  <div class="container">
    <div class="header"><h2 style="margin:0;">New Contact Form Submission</h2></div>
    <div class="content">
      <div class="field"><div class="label">Name</div><div class="value">${sanitizedName}</div></div>
      <div class="field"><div class="label">Email</div><div class="value"><a href="mailto:${sanitizedEmail}">${sanitizedEmail}</a></div></div>
      <div class="field"><div class="label">Message</div><div class="message">${escapeHtmlText(sanitizedMessage)}</div></div>
      <div class="footer">This email was sent from your portfolio website contact form.</div>
    </div>
  </div>
</body></html>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { status: 200, json: { message: "Email sent successfully!" } };
  } catch (error) {
    console.error("[contact] Error sending email:", error);
    return {
      status: 500,
      json: {
        error: "Failed to send email. Please try again or contact directly.",
      },
    };
  }
}
