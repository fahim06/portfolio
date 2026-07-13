import { personalInfo } from '../data/content.js';
import Button from '../components/Button.jsx';
import Tag from '../components/Tag.jsx';
import Reveal from '../components/Reveal.jsx';
import Icon from '../components/Icon.jsx';
import styles from './Home.module.css';

export default function Home() {
  const { name, title, headline, statement, availability, email, heroImage, cvUrl, cvDownloadName } = personalInfo;
  return (
    <section id="home" className={styles.home} aria-labelledby="home-title">
      <Reveal className={styles.headline} delay={0}>
        <p className="eyebrow">{availability}</p>
        <h1 id="home-title" className={styles.name}>{name}</h1>
        <p className={styles.title}>{title}</p>
        <p className={styles.headlineText}>{headline}</p>
        <p className={styles.statement}>{statement}</p>
        <div className={styles.ctas}>
          <Button href={cvUrl} download={cvDownloadName} variant="primary">
            Download CV <Icon name="arrow-down" size={16} />
          </Button>
          <Button href={`mailto:${email}`} variant="secondary">Contact</Button>
        </div>
      </Reveal>

      <Reveal className={styles.portraitCard} delay={0.1}>
        <img className={styles.portrait} src={heroImage.url} alt={heroImage.alt} width="320" height="400" loading="eager" />
        <div className={styles.tags}>
          {['Python', 'Deep Learning', 'React', 'Django'].map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
