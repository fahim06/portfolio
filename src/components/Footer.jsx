import { personalInfo } from '../data/content.js';
import { socials } from '../constants/socials.js';
import { scrollToSection } from '../utils/scroll.js';
import Icon from './Icon.jsx';
import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.copy}>© {year} {personalInfo.name}. Built with React.</p>
        <div className={styles.links}>
          {socials.map((s) => (
            <a key={s.name} href={s.url} target={s.url.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className={styles.social} aria-label={s.name}>
              <Icon name={s.icon} size={18} />
            </a>
          ))}
          <button type="button" className={styles.top} onClick={() => scrollToSection('home')} aria-label="Back to top">
            <Icon name="arrow-up" size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
}
