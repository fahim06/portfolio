import Card from "../components/ui/Card.jsx";
import Reveal from "../components/ui/Reveal.jsx";
import SectionHeader from "../components/ui/SectionHeader.jsx";
import { achievements } from "../data/achievements.js";
import styles from "./Achievements.module.css";

// Skills the ICPC contests test — shown as context, not claimed rankings.
const FOCUS = [
  "Algorithms",
  "Data Structures",
  "Graph Theory",
  "Dynamic Programming",
  "Problem Solving",
];

export default function Achievements() {
  const a = achievements[0] ?? {};
  return (
    <section
      id="achievements"
      className={styles.section}
      aria-labelledby="achievements-title"
    >
      <SectionHeader
        index="08"
        eyebrow="Achievements"
        emoji="🏅"
        title="Milestones"
        id="achievements-title"
      />
      <Reveal variant="up" className={styles.featureWrap}>
        <Card span={12} className={styles.feature}>
          <div className={styles.medal} aria-hidden="true">
            🏅
          </div>
          <div className={styles.content}>
            <div className={styles.top}>
              <span className={styles.tag}>{a.tag}</span>
              <span className={styles.year}>{a.year}</span>
            </div>
            <h3 className={styles.title}>{a.title}</h3>
            <p className={styles.detail}>{a.detail}</p>
            <p className={styles.note}>{a.note}</p>
            <div className={styles.focus}>
              {FOCUS.map((f) => (
                <span key={f} className={styles.chip}>
                  {f}
                </span>
              ))}
            </div>
          </div>
        </Card>
      </Reveal>
    </section>
  );
}
