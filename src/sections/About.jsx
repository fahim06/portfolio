import { personalInfo, engineeringValues } from '../data/content.js';
import Card from '../components/Card.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import Reveal from '../components/Reveal.jsx';
import styles from './About.module.css';

export default function About() {
  const { aboutImage, summary } = personalInfo;
  return (
    <section id="about" className={styles.about} aria-labelledby="about-title">
      <SectionHeader index="02" eyebrow="About" title="Engineering with intent" id="about-title" />
      <div className={styles.grid}>
        <Card span={7} className={styles.narrative}>
          {summary.split('\n').filter(Boolean).map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </Card>
        <Card span={5} className={styles.photoCard}>
          <img className={styles.photo} src={aboutImage.url} alt={aboutImage.alt} loading="lazy" />
        </Card>
        {engineeringValues.map((v, i) => (
          <Reveal key={v.title} delay={i * 0.05} className={styles.valueWrap}>
            <Card span={3} className={styles.value}>
              <h3 className={styles.valueTitle}>{v.title}</h3>
              <p className={styles.valueDesc}>{v.description}</p>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
