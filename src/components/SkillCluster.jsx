import Card from './Card.jsx';
import Tag from './Tag.jsx';
import styles from './SkillCluster.module.css';

export default function SkillCluster({ title, items }) {
  return (
    <Card span={3} className={styles.cluster}>
      <h3 className={styles.title}>{title}</h3>
      <ul className={styles.list}>
        {items.map((item) => (
          <li key={item}><Tag>{item}</Tag></li>
        ))}
      </ul>
    </Card>
  );
}
