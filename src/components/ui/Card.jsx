import { useRef } from "react";
import { clsx } from "../../utils/clsx.js";
import styles from "./Card.module.css";

export default function Card({ as: Comp = "div", span = 12, className, children, ...rest }) {
  const ref = useRef(null);

  function onMouseMove(event) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    el.style.setProperty("--my", `${event.clientY - rect.top}px`);
  }

  return (
    <Comp
      ref={ref}
      className={clsx(styles.card, className)}
      style={{ "--span": span }}
      onMouseMove={onMouseMove}
      {...rest}
    >
      {children}
    </Comp>
  );
}
