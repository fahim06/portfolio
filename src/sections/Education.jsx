import { education } from '../data/education.js';
import Card from '../components/ui/Card.jsx';
import SectionHeader from '../components/ui/SectionHeader.jsx';
import styles from './Education.module.css';

export default function Education() {
  return (
    <section id="education" aria-labelledby="education-title">
      <SectionHeader id="education-title" index="06" eyebrow="Education" title="Academic foundation" />
      <div className={styles.grid}>
        {education.map((e) => (
          <Card key={e.id} span={6} className={styles.card}>
            <p className={styles.period}>{e.period}</p>
            <h3 className={styles.degree}>{e.degree}</h3>
            <p className={styles.school}>{e.institution} · {e.location}</p>
            <p className={styles.desc}>{e.description}</p>
            <ul className={styles.highlights}>
              {e.highlights.map((h, i) => <li key={i}>{h}</li>)}
            </ul>
          </Card>
        ))}
      </div>
    </section>
  );
}
