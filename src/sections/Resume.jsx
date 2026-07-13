import { projects } from '../data/projects.js';
import { resume } from '../config/resume.js';
import Card from '../components/ui/Card.jsx';
import SectionHeader from '../components/ui/SectionHeader.jsx';
import Button from '../components/ui/Button.jsx';
import Icon from '../components/ui/Icon.jsx';
import styles from './Resume.module.css';

export default function Resume() {
  const highlights = projects.filter((p) => p.featured).map((p) => p.outcome);
  return (
    <section id="resume" aria-labelledby="resume-title">
      <SectionHeader index="09" eyebrow="Resume" title="At a glance" id="resume-title" />
      <div className={styles.grid}>
        <Card span={7} className={styles.highlights}>
          <h3 className={styles.sub}>Highlights</h3>
          <ul className={styles.list}>
            {highlights.map((h, i) => <li key={i}>{h}</li>)}
          </ul>
        </Card>
        <Card span={5} className={styles.cta}>
          <h3 className={styles.sub}>Full résumé</h3>
          <p className={styles.note}>Download the complete PDF for the full picture.</p>
          <Button href={resume.cvUrl} download={resume.cvDownloadName}>
            Download CV <Icon name="arrow-down" size={16} />
          </Button>
        </Card>
      </div>
    </section>
  );
}
