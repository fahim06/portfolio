import { sections } from '../constants/nav.js';
import { scrollToSection } from '../utils/scroll.js';
import { clsx } from '../utils/clsx.js';
import styles from './IndexRail.module.css';

export default function IndexRail({ active }) {
  return (
    <nav className={styles.rail} aria-label="Sections">
      <ul>
        {sections.map((s) => (
          <li key={s.id}>
            <button
              type="button"
              className={clsx(styles.item, active === s.id && styles.active)}
              onClick={() => scrollToSection(s.id)}
              aria-current={active === s.id ? 'true' : undefined}
              aria-label={`Go to ${s.label}`}
            >
              <span className={styles.index}>{s.index}</span>
              <span className={styles.label}>{s.label}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
