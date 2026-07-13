import { useEffect, useState } from 'react';
import { sections } from '../config/navigation.js';
import { scrollToSection } from '../utils/scroll.js';
import { personalInfo } from '../data/personalInfo.js';
import { clsx } from '../utils/clsx.js';
import ThemeToggle from './ThemeToggle.jsx';
import Icon from './Icon.jsx';
import styles from './Header.module.css';

export default function Header({ active }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return undefined;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open]);

  return (
    <header className={styles.header}>
      <div className={styles.bar}>
        <button
          type="button"
          className={styles.brand}
          onClick={() => scrollToSection('home')}
        >
          <span className={styles.monogram}>F</span>
          <span className={styles.name}>{personalInfo.name}</span>
        </button>

        <nav className={styles.desktopNav} aria-label="Sections">
          {sections.map((s) => (
            <button
              key={s.id}
              type="button"
              className={clsx(styles.navLink, active === s.id && styles.active)}
              onClick={() => scrollToSection(s.id)}
              aria-current={active === s.id ? 'page' : undefined}
            >
              {s.label}
            </button>
          ))}
        </nav>

        <div className={styles.actions}>
          <ThemeToggle />
          <button
            type="button"
            className={styles.menuBtn}
            aria-expanded={open}
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            <Icon name={open ? 'arrow-up' : 'arrow-down'} size={18} />
          </button>
        </div>
      </div>

      {open && (
        <nav className={styles.mobileNav} aria-label="Sections">
          {sections.map((s) => (
            <button
              key={s.id}
              className={clsx(styles.mobileLink, active === s.id && styles.active)}
              onClick={() => { scrollToSection(s.id); setOpen(false); }}
              aria-current={active === s.id ? 'page' : undefined}
            >
              <span className={styles.mobileIndex}>{s.index}</span>
              {s.label}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
}
