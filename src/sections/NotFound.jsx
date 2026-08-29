import { useEffect } from "react";
import Button from "../components/ui/Button.jsx";
import SectionHeader from "../components/ui/SectionHeader.jsx";
import styles from "./NotFound.module.css";

export default function NotFound() {
  useEffect(() => {
    document.title = "Page not found — Fahim Yusuf";
    let meta = document.querySelector('meta[name="robots"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "robots");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", "noindex, nofollow");
    return () => meta.setAttribute("content", "index, follow");
  }, []);

  return (
    <section id="not-found" className={styles.page} aria-labelledby="not-found-title">
      <SectionHeader
        index="404"
        eyebrow="Not found"
        emoji="🧭"
        title="This page doesn't exist"
        id="not-found-title"
      />
      <div className={styles.body}>
        <p className={styles.lede}>
          The link may be mistyped, or the page may have moved. Everything on
          this site lives on one page — here are two ways back:
        </p>
        <div className={styles.actions}>
          <Button href="/" variant="primary">
            Back to home
          </Button>
          <Button href="/#contact" variant="secondary">
            Go to contact
          </Button>
        </div>
      </div>
    </section>
  );
}
