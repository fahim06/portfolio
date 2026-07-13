import Icon from './ui/Icon.jsx';
import Tag from './ui/Tag.jsx';
import Card from './ui/Card.jsx';
import { clsx } from '../utils/clsx.js';
import styles from './ProjectCard.module.css';

export default function ProjectCard({ project, featured = false }) {
  const { title, category, summary, problem, approach, outcome, stack, links, highlight } = project;
  return (
    <Card span={featured ? 12 : 4} className={clsx(styles.card, featured && styles.featured, highlight && styles.highlight)}>
      <div className={styles.top}>
        <div>
          <p className={styles.category}>{category}</p>
          <h3 className={styles.title}>{title}</h3>
        </div>
        {highlight && <span className={styles.badge}>Featured</span>}
      </div>
      <p className={styles.summary}>{summary}</p>

      {featured && (
        <div className={styles.details}>
          <Detail label="Problem" text={problem} />
          <Detail label="Approach" text={approach} />
          <Detail label="Outcome" text={outcome} />
        </div>
      )}

      <div className={styles.stack}>
        {stack.map((t) => <Tag key={t}>{t}</Tag>)}
      </div>

      <div className={styles.links}>
        {links?.github && (
          <a className={styles.link} href={links.github} target="_blank" rel="noreferrer">
            <Icon name="github" size={16} /> Code
          </a>
        )}
        {links?.demo && (
          <a className={styles.link} href={links.demo} target="_blank" rel="noreferrer">
            <Icon name="external" size={16} /> Live
          </a>
        )}
      </div>
    </Card>
  );
}

function Detail({ label, text }) {
  return (
    <div className={styles.detail}>
      <p className={styles.detailLabel}>{label}</p>
      <p className={styles.detailText}>{text}</p>
    </div>
  );
}
