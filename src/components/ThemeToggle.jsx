import { useTheme } from '../hooks/useTheme.jsx';
import { THEME_META } from '../config/theme.js';
import Icon from './Icon.jsx';
import styles from './ThemeToggle.module.css';

export default function ThemeToggle() {
  const { preference, cycle } = useTheme();
  const meta = THEME_META[preference] || THEME_META.system;
  return (
    <button
      type="button"
      className={styles.toggle}
      onClick={cycle}
      aria-label={`Theme: ${meta.label}. Click to switch.`}
      title={`Theme: ${meta.label}`}
    >
      <Icon name={meta.icon} size={18} />
      <span className={styles.label}>{meta.label}</span>
    </button>
  );
}
