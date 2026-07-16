import Card from "../components/ui/Card.jsx";
import SectionHeader from "../components/ui/SectionHeader.jsx";
import SmartImage from "../components/ui/SmartImage.jsx";
import { personalInfo } from "../data/personalInfo.js";
import styles from "./About.module.css";

export default function About() {
  const { aboutImage, summary, aboutPoints } = personalInfo;
  return (
    <section id="about" className={styles.about} aria-labelledby="about-title">
      <SectionHeader
        index="02"
        eyebrow="About"
        emoji="👋"
        title="Engineering with intent"
        id="about-title"
      />
      <div className={styles.grid}>
        <Card span={7} className={styles.narrative}>
          <p>{summary}</p>
          {aboutPoints?.length > 0 && (
            <ul className={styles.points}>
              {aboutPoints.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          )}
        </Card>
        <Card span={5} className={styles.photoCard}>
          <SmartImage
            className={styles.photo}
            src={aboutImage.url}
            fallback={aboutImage.fallback}
            alt={aboutImage.alt}
            loading="lazy"
            width="500"
            height="600"
          />
        </Card>
      </div>
    </section>
  );
}
