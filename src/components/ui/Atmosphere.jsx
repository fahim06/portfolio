import styles from "./Atmosphere.module.css";

export default function Atmosphere() {
  return (
    <div className={styles.atmosphere} aria-hidden="true">
      <div className={`${styles.blob} ${styles.blob1}`} />
      <div className={`${styles.blob} ${styles.blob2}`} />
      <div className={`${styles.blob} ${styles.blob3}`} />
      <div className={styles.grain} />
    </div>
  );
}
