import { clsx } from "../utils/clsx.js";
import styles from "./ProjectCard.module.css";
import Card from "./ui/Card.jsx";
import Icon from "./ui/Icon.jsx";
import Tag from "./ui/Tag.jsx";

export default function ProjectCard({ project, featured = false }) {
  const { title, category, summary, stack, links, highlight } = project;

  if (project.flagship) {
    return <FlagshipCard project={project} />;
  }

  const { problem, approach, outcome } = project;
  return (
    <Card
      span={featured ? 12 : 4}
      className={clsx(
        styles.card,
        featured && styles.featured,
        highlight && styles.highlight,
      )}
    >
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

      <Stack stack={stack} />
      <Links links={links} />
    </Card>
  );
}

function FlagshipCard({ project }) {
  const {
    title,
    category,
    summary,
    status,
    problem,
    solution,
    architecture,
    highlights,
    roadmap,
    lessons,
    stack,
    links,
  } = project;
  return (
    <Card
      span={12}
      className={clsx(
        styles.card,
        styles.featured,
        styles.flagship,
        styles.highlight,
      )}
    >
      <div className={styles.top}>
        <div>
          <p className={styles.category}>{category}</p>
          <h3 className={styles.flagshipTitle}>{title}</h3>
        </div>
        <span className={styles.badge}>Flagship</span>
      </div>

      {status && (
        <p className={styles.status}>
          <span className={styles.statusDot} aria-hidden="true" /> {status}
        </p>
      )}
      <p className={styles.summary}>{summary}</p>

      <div className={styles.details}>
        {problem && <Detail label="Problem" text={problem} />}
        {solution && <Detail label="Solution" text={solution} />}
        {architecture && <Detail label="Architecture" text={architecture} />}
      </div>

      {highlights?.length > 0 && (
        <ListBlock label="Project Highlights" items={highlights} />
      )}
      {roadmap?.length > 0 && (
        <ListBlock label="Future Roadmap" items={roadmap} />
      )}
      {lessons && <Detail label="Lessons Learned" text={lessons} />}

      <Stack stack={stack} />
      <Links links={links} />
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

function ListBlock({ label, items }) {
  return (
    <div className={styles.detail}>
      <p className={styles.detailLabel}>{label}</p>
      <ul className={styles.list}>
        {items.map((it, i) => (
          <li key={i}>{it}</li>
        ))}
      </ul>
    </div>
  );
}

function Stack({ stack }) {
  return (
    <div className={styles.stack}>
      {stack.map((t) => (
        <Tag key={t}>{t}</Tag>
      ))}
    </div>
  );
}

function Links({ links }) {
  return (
    <div className={styles.links}>
      {links?.github && (
        <a
          className={styles.link}
          href={links.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name="github" size={16} /> Code
        </a>
      )}
      {links?.demo && (
        <a
          className={styles.link}
          href={links.demo}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name="external" size={16} /> Live
        </a>
      )}
    </div>
  );
}
