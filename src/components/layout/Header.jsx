import { useRef, useState } from "react";
import { site } from "../../config/site.js";
import { useScrollSpy } from "../../hooks/useScrollSpy.js";
import { useScrolled } from "../../hooks/useScrollState.js";
import { useClickOutside } from "../../hooks/useClickOutside.js";
import { scrollToSection } from "../../utils/scroll.js";
import styles from "./Header.module.css";
import ThemeToggle from "./ThemeToggle.jsx";

const NAV = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "certificates", label: "Certificates" },
  { id: "achievements", label: "Achievements" },
  { id: "techstack", label: "Tech Stack" },
  { id: "contact", label: "Contact" },
];
// Desktop pill shows the core five; the mobile dropdown lists everything.
const PRIMARY_IDS = new Set([
  "about",
  "skills",
  "experience",
  "projects",
  "contact",
]);
const DESKTOP_NAV = NAV.filter((n) => PRIMARY_IDS.has(n.id));
const SPY_IDS = ["home", ...NAV.map((n) => n.id)];

export default function Header() {
  const scrolled = useScrolled();
  const active = useScrollSpy(SPY_IDS);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null); // wraps trigger + panel for outside-click
  const triggerRef = useRef(null); // hamburger, for focus return

  const today = new Date();
  const weekday = today.toLocaleDateString("en-US", { weekday: "long" });
  const dateRest = today.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  // Close on outside-click + Escape (only while open).
  useClickOutside(menuRef, () => setMenuOpen(false), menuOpen);

  function go(id) {
    scrollToSection(id);
    if (menuOpen) {
      setMenuOpen(false);
      // The focused panel button unmounts on close — return focus to the trigger.
      triggerRef.current?.focus();
    }
  }

  return (
    <header className={styles.header} data-scrolled={scrolled}>
      <div className={styles.bar}>
        <button
          type="button"
          className={styles.brand}
          onClick={() => go("home")}
          aria-label="F. Yusuf — back to top"
        >
          <span className={styles.brandName}>{site.brandName}</span>
        </button>

        <nav className={styles.nav} aria-label="Sections">
          {DESKTOP_NAV.map((n) => (
            <button
              key={n.id}
              type="button"
              className={styles.link}
              data-active={active === n.id}
              onClick={() => go(n.id)}
            >
              {n.label}
            </button>
          ))}
        </nav>

        <div className={styles.actions}>
          <div className={styles.date}>
            <span className={styles.dateWeekday}>{weekday}</span> {dateRest}
          </div>
          <ThemeToggle />
          <div className={styles.menuWrap} ref={menuRef}>
            <button
              ref={triggerRef}
              type="button"
              className={styles.menuBtn}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls={menuOpen ? "mobile-nav" : undefined}
              onClick={() => setMenuOpen((o) => !o)}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden="true"
              >
                {menuOpen ? (
                  <>
                    <path d="M6 6l12 12" />
                    <path d="M18 6 6 18" />
                  </>
                ) : (
                  <>
                    <path d="M3 6h18" />
                    <path d="M3 12h18" />
                    <path d="M3 18h18" />
                  </>
                )}
              </svg>
            </button>
            {menuOpen && (
              <nav className={styles.panel} id="mobile-nav" aria-label="Mobile">
                {NAV.map((n) => (
                  <button
                    key={n.id}
                    type="button"
                    className={styles.panelLink}
                    data-active={active === n.id}
                    onClick={() => go(n.id)}
                  >
                    {n.label}
                  </button>
                ))}
              </nav>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
