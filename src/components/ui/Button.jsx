import { clsx } from "../../utils/clsx.js";
import styles from "./Button.module.css";

export default function Button({
  variant = "primary",
  as,
  href,
  className,
  children,
  loading = false,
  disabled = false,
  ...rest
}) {
  const Comp = as || (href ? "a" : "button");
  const isDisabled = loading || disabled;
  const classes = clsx(
    styles.btn,
    styles[variant],
    loading && styles.loading,
    className,
  );
  return (
    <Comp
      className={classes}
      href={href}
      disabled={isDisabled}
      aria-busy={loading || undefined}
      {...rest}
    >
      {loading && <span className={styles.spinner} aria-hidden="true" />}
      {children}
    </Comp>
  );
}
