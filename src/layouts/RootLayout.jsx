import { sections } from '../config/navigation.js';
import { useScrollSpy } from '../hooks/useScrollSpy.js';
import SkipLink from '../components/ui/SkipLink.jsx';
import Header from '../components/layout/Header.jsx';
import IndexRail from '../components/layout/IndexRail.jsx';
import Footer from '../components/layout/Footer.jsx';
import BackToTop from '../components/ui/BackToTop.jsx';
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
