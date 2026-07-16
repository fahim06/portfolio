import { clsx } from "../../utils/clsx.js";
import styles from "./Tag.module.css";

export default function Tag({ children, mono = true, className }) {
  return (
    <span className={clsx(styles.tag, mono && styles.mono, className)}>
      {children}
    </span>
  );
}
