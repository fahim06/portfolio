import TimelineItem from "../components/TimelineItem.jsx";
import Card from "../components/ui/Card.jsx";
import SectionHeader from "../components/ui/SectionHeader.jsx";
import { experience } from "../data/experience.js";
import styles from "./Experience.module.css";

export default function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title">
      <SectionHeader
        index="04"
        eyebrow="Experience"
        emoji="💼"
        title="Where I've worked"
        id="experience-title"
      />
      <Card span={12}>
        <ul className={styles.timeline}>
          {experience.map((item) => (
            <TimelineItem key={item.id} item={item} />
          ))}
        </ul>
      </Card>
    </section>
  );
}
