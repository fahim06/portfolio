import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion.js";
import { scrollToSection, scrollToTop } from "../../utils/scroll.js";

// On the home page this scrolls to the hero; on standalone pages
// (/accessibility, 404) the #home section isn't mounted, so it scrolls
// the current page to the top instead.
function goHome() {
  if (document.getElementById("home")) scrollToSection("home");
  else scrollToTop();
}
import styles from "./BackToTop.module.css";
import Icon from "./Icon.jsx";

export default function BackToTop() {
  const [show, setShow] = useState(false);
  const reduce = usePrefersReducedMotion();

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (reduce) {
    return show ? (
      <button
        type="button"
        className={styles.fab}
        onClick={goHome}
        aria-label="Back to top"
      >
        <Icon name="arrow-up" size={18} />
      </button>
    ) : null;
  }

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          type="button"
          className={styles.fab}
          onClick={goHome}
          aria-label="Back to top"
          initial={{ opacity: 0, scale: 0.6, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 12 }}
          transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.92 }}
        >
          <Icon name="arrow-up" size={18} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
