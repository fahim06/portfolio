import { useState } from "react";
import Button from "../ui/Button.jsx";
import Icon from "../ui/Icon.jsx";
import styles from "./ContactForm.module.css";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_MESSAGE = 10;

const INITIAL = { name: "", email: "", message: "", company: "" };

export default function ContactForm() {
  const [values, setValues] = useState(INITIAL);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [serverMsg, setServerMsg] = useState("");

  function update(field) {
    return (e) => {
      setValues((v) => ({ ...v, [field]: e.target.value }));
      if (errors[field]) setErrors((er) => ({ ...er, [field]: undefined }));
      if (status === "success" || status === "error") setStatus("idle");
    };
  }

  function validate() {
    const next = {};
    if (!values.name.trim()) next.name = "Please enter your name.";
    if (!values.email.trim()) next.email = "Please enter your email.";
    else if (!EMAIL_RE.test(values.email))
      next.email = "That email address looks invalid.";
    if (!values.message.trim()) next.message = "Please write a message.";
    else if (values.message.trim().length < MIN_MESSAGE)
      next.message = `Message should be at least ${MIN_MESSAGE} characters.`;
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (status === "submitting") return;

    if (values.company.trim()) {
      setStatus("success");
      setServerMsg("Thanks for reaching out — I'll get back to you soon.");
      return;
    }

    if (!validate()) return;

    setStatus("submitting");
    setServerMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.name.trim(),
          email: values.email.trim(),
          message: values.message.trim(),
          company: values.company.trim(),
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Failed to send message.");
      setStatus("success");
      setServerMsg(
        data.message || "Thanks for reaching out — I'll get back to you soon.",
      );
      setValues(INITIAL);
    } catch (err) {
      setStatus("error");
      setServerMsg(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again, or email me directly.",
      );
    }
  }

  const submitting = status === "submitting";

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      {/* Honeypot anti-spam field — visually hidden, ignored by people.
          `inert` keeps it out of the a11y tree and focus order (no
          aria-hidden-on-focusable-ancestor issue) while still being
          fillable by bots that set its value programmatically. */}
      <div className={styles.honey} inert>
        <label htmlFor="company-field">Company</label>
        <input
          id="company-field"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          value={values.company}
          onChange={update("company")}
        />
      </div>

      <div className={styles.row}>
        <Field label="Name" htmlFor="name" error={errors.name}>
          <input
            id="name"
            name="name"
            className={styles.input}
            value={values.name}
            onChange={update("name")}
            autoComplete="name"
            placeholder="Your name"
            disabled={submitting}
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
        </Field>
        <Field label="Email" htmlFor="email" error={errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            className={styles.input}
            value={values.email}
            onChange={update("email")}
            autoComplete="email"
            placeholder="you@example.com"
            disabled={submitting}
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
        </Field>
      </div>

      <Field label="Message" htmlFor="message" error={errors.message}>
        <textarea
          id="message"
          name="message"
          className={styles.textarea}
          value={values.message}
          onChange={update("message")}
          rows={5}
          placeholder="Tell me about your project or how I can help…"
          disabled={submitting}
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
      </Field>

      {status === "success" && (
        <p className={styles.success} role="status">
          <Icon name="check" size={16} /> {serverMsg}
        </p>
      )}
      {status === "error" && (
        <p className={styles.error} role="alert">
          {serverMsg}
        </p>
      )}

      <Button type="submit" variant="primary" loading={submitting}>
        {submitting ? (
          "Sending…"
        ) : (
          <>
            Send message <Icon name="external" size={16} />
          </>
        )}
      </Button>
    </form>
  );
}

function Field({ label, htmlFor, error, children }) {
  return (
    <div className={styles.field}>
      <label className={styles.label} htmlFor={htmlFor}>
        {label}
      </label>
      {children}
      {error && (
        <span className={styles.fieldError} id={`${htmlFor}-error`} role="alert">
          {error}
        </span>
      )}
    </div>
  );
}
