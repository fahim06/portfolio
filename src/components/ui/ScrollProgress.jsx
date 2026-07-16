import { useScrollProgress } from "../../hooks/useScrollState.js";
import styles from "./ScrollProgress.module.css";

// Thin reading-progress bar pinned to the very top of the viewport.
export default function ScrollProgress() {
  const progress = useScrollProgress();
  return (
    <div
      className={styles.track}
      role="progressbar"
      aria-label="Page scroll progress"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(progress * 100)}
      data-active={progress > 0}
    >
      <div
        className={styles.bar}
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  );
}
