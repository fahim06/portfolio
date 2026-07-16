import styles from "./EmptyState.module.css";

export default function EmptyState({ title = "Nothing here yet", note = "" }) {
  return (
    <div className={styles.empty} role="note">
      <p className={styles.title}>{title}</p>
      {note && <p className={styles.note}>{note}</p>}
    </div>
  );
}
