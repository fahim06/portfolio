import styles from "./SectionHeader.module.css";

export default function SectionHeader({ index, title, eyebrow, emoji, id }) {
  return (
    <header className={styles.header}>
      <span className={styles.index} aria-hidden="true">
        {index}
      </span>
      <div className={styles.heading}>
        {eyebrow && (
          <p className="eyebrow">
            {emoji && (
              <span className={styles.emoji} aria-hidden="true">
                {emoji}
              </span>
            )}
            {eyebrow}
          </p>
        )}
        <h2 id={id} className={styles.title}>
          {title}
        </h2>
      </div>
    </header>
  );
}
