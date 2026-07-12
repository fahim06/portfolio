import { useTheme } from '../hooks/useTheme.jsx';
import Icon from './Icon.jsx';
import styles from './ThemeToggle.module.css';

const META = {
  dark: { icon: 'moon', label: 'Dark' },
  light: { icon: 'sun', label: 'Light' },
  system: { icon: 'auto', label: 'System' },
};

export default function ThemeToggle() {
  const { preference, cycle } = useTheme();
  const meta = META[preference] || META.system;
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
