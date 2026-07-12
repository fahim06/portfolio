import { useEffect, useState } from 'react';
import { scrollToSection } from '../utils/scroll.js';
import Icon from './Icon.jsx';
import styles from './BackToTop.module.css';

export default function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  if (!show) return null;
  return (
    <button type="button" className={styles.fab} onClick={() => scrollToSection('home')} aria-label="Back to top">
      <Icon name="arrow-up" size={18} />
    </button>
  );
}
