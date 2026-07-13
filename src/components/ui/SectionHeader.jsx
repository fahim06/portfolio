import styles from './SectionHeader.module.css';

export default function SectionHeader({ index, title, eyebrow, id }) {
  return (
    <header className={styles.header}>
      <span className={styles.index} aria-hidden="true">{index}</span>
      <div>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h2 id={id} className={styles.title}>{title}</h2>
      </div>
    </header>
  );
}
