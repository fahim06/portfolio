import { sections } from '../config/navigation.js';
import { useScrollSpy } from '../hooks/useScrollSpy.js';
import SkipLink from '../components/SkipLink.jsx';
import Header from '../components/Header.jsx';
import IndexRail from '../components/IndexRail.jsx';
import Footer from '../components/Footer.jsx';
import BackToTop from '../components/BackToTop.jsx';
import styles from './RootLayout.module.css';

export default function RootLayout({ children }) {
  const ids = sections.map((s) => s.id);
  const active = useScrollSpy(ids);
  return (
    <>
      <SkipLink />
      <Header active={active} />
      <div className={styles.shell}>
        <IndexRail active={active} />
        <main id="main" className={styles.main}>
          {children}
        </main>
      </div>
      <Footer />
      <BackToTop />
    </>
  );
}
