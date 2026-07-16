import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion.js";

// Entrance direction variants. `whileInView` fires once per element.
const VARIANTS = {
  up: { hidden: { opacity: 0, y: 24 }, shown: { opacity: 1, y: 0 } },
  down: { hidden: { opacity: 0, y: -24 }, shown: { opacity: 1, y: 0 } },
  left: { hidden: { opacity: 0, x: -28 }, shown: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: 28 }, shown: { opacity: 1, x: 0 } },
  zoom: {
    hidden: { opacity: 0, scale: 0.96 },
    shown: { opacity: 1, scale: 1 },
  },
  blur: {
    hidden: { opacity: 0, y: 16, filter: "blur(10px)" },
    shown: { opacity: 1, y: 0, filter: "blur(0px)" },
  },
  fade: { hidden: { opacity: 0 }, shown: { opacity: 1 } },
};

export default function Reveal({
  children,
  delay = 0,
  variant = "up",
  as = "div",
  className,
  style,
}) {
  const reduce = usePrefersReducedMotion();
  const Comp = motion[as] || motion.div;

  // Reduced-motion users get a plain, instantly-visible element.
  if (reduce) {
    return (
      <Comp className={className} style={style}>
        {children}
      </Comp>
    );
  }

  const v = VARIANTS[variant] || VARIANTS.up;
  return (
    <Comp
      className={className}
      style={style}
      variants={v}
      initial="hidden"
      whileInView="shown"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Comp>
  );
}
