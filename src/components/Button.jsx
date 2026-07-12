import { clsx } from '../utils/clsx.js';
import styles from './Button.module.css';

export default function Button({
  variant = 'primary',
  as,
  href,
  className,
  children,
  ...rest
}) {
  const Comp = as || (href ? 'a' : 'button');
  const classes = clsx(styles.btn, styles[variant], className);
  return (
    <Comp className={classes} href={href} {...rest}>
      {children}
    </Comp>
  );
}
