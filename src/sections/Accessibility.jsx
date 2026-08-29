import { useEffect } from "react";
import Card from "../components/ui/Card.jsx";
import SectionHeader from "../components/ui/SectionHeader.jsx";
import { personalInfo } from "../data/personalInfo.js";
import styles from "./Accessibility.module.css";

// Factual statement — lists features verified in the codebase and makes no
// conformance or certification claims.
const PRACTICES = [
  {
    title: "Keyboard support",
    body: "Every interactive element is reachable by keyboard. A skip link jumps straight to the main content, focus indicators are always visible, and dropdown menus close on Escape.",
  },
  {
    title: "Screen reader support",
    body: "Pages use semantic landmarks and headings, each section is labelled, form fields have associated labels, and errors and status messages are announced.",
  },
  {
    title: "Motion and animation",
    body: "Animations are decorative and respect the operating system's reduced-motion setting — when it is on, movement is minimized.",
  },
  {
    title: "Color and contrast",
    body: "Dark, light, and system themes are designed independently with a palette tuned for comfortable contrast, including over the frosted-glass surfaces.",
  },
  {
    title: "Images and touch targets",
    body: "Content images carry descriptive alternative text, decorative graphics are hidden from assistive technology, and interactive targets are comfortably sized for touch.",
  },
];

export default function Accessibility() {
  useEffect(() => {
    document.title = "Accessibility — Fahim Yusuf";
  }, []);

  return (
    <section
      id="accessibility"
      className={styles.page}
      aria-labelledby="accessibility-title"
    >
      <SectionHeader
        index="A11y"
        eyebrow="Accessibility"
        emoji="♿"
        title="Accessibility on this site"
        id="accessibility-title"
      />
      <div className={styles.grid}>
        {PRACTICES.map((p) => (
          <Card key={p.title} span={6} className={styles.card}>
            <h3 className={styles.practice}>{p.title}</h3>
            <p className={styles.body}>{p.body}</p>
          </Card>
        ))}
        <Card span={6} className={styles.card}>
          <h3 className={styles.practice}>Known limitations</h3>
          <p className={styles.body}>
            This site has not been through a formal WCAG audit. If something
            gets in your way, I want to hear about it — email{" "}
            <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>{" "}
            and I&rsquo;ll fix it.
          </p>
        </Card>
      </div>
    </section>
  );
}
