import { skillGroups } from '../data/skills.js';
import { projects } from '../data/projects.js';
import Card from '../components/ui/Card.jsx';
import SectionHeader from '../components/ui/SectionHeader.jsx';
import Tag from '../components/ui/Tag.jsx';
import styles from './TechStack.module.css';

export default function TechStack() {
  const all = new Set();
  skillGroups.forEach((g) => g.items.forEach((i) => all.add(i)));
  projects.forEach((p) => p.stack.forEach((s) => all.add(s)));
  const items = [...all];
  return (
    <section id="techstack" aria-labelledby="techstack-title">
      <SectionHeader index="08" eyebrow="Tech Stack" title="The full toolkit" id="techstack-title" />
      <Card span={12} className={styles.card}>
        <div className={styles.cloud}>
          {items.map((t) => <Tag key={t}>{t}</Tag>)}
        </div>
      </Card>
    </section>
  );
}
