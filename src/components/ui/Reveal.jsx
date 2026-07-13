import { motion } from 'framer-motion';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion.js';

export default function Reveal({ children, delay = 0, as = 'div', className, style }) {
  const reduce = usePrefersReducedMotion();
  const Comp = motion[as] || motion.div;
  if (reduce) {
    return <Comp className={className} style={style}>{children}</Comp>;
  }
  return (
    <Comp
      className={className}
      style={style}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Comp>
  );
}
