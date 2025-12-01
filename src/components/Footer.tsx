import Link from "next/link";

const footerLinks = [
  { href: "https://github.com/fahim06", label: "GitHub", external: true },
  { href: "https://www.linkedin.com/in/fahim06/", label: "LinkedIn", external: true },
  { href: "mailto:fahim.yusuf06@gmail.com", label: "Email", external: true },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background-secondary border-t border-border">
      <div className="container py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-foreground-secondary text-sm">
              © {currentYear} Fahim Yusuf. Built with intention.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="text-foreground-secondary hover:text-accent transition-colors duration-200 text-sm"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Back to top */}
        <div className="mt-8 text-center">
          <a
            href="#top"
            className="inline-flex items-center gap-2 text-foreground-muted hover:text-foreground-secondary transition-colors duration-200 text-sm"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
