import Footer from "../components/layout/Footer.jsx";
import Header from "../components/layout/Header.jsx";
import Atmosphere from "../components/ui/Atmosphere.jsx";
import BackToTop from "../components/ui/BackToTop.jsx";
import ScrollProgress from "../components/ui/ScrollProgress.jsx";
import SkipLink from "../components/ui/SkipLink.jsx";
import styles from "./RootLayout.module.css";

export default function RootLayout({ children }) {
  return (
    <>
      <Atmosphere />
      <SkipLink />
      <ScrollProgress />
      <Header />
      <div className={styles.shell}>
        <main id="main" className={styles.main}>
          {children}
        </main>
      </div>
      <Footer />
      <BackToTop />
    </>
  );
}
