import { clsx } from '../../utils/clsx.js';
import styles from './Card.module.css';

export default function Card({ as: Comp = 'div', span = 12, className, children, ...rest }) {
  return (
    <Comp
      className={clsx(styles.card, className)}
      style={{ '--span': span }}
      {...rest}
    >
      {children}
    </Comp>
  );
}
