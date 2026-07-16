import SkillCluster from "../components/SkillCluster.jsx";
import Reveal from "../components/ui/Reveal.jsx";
import SectionHeader from "../components/ui/SectionHeader.jsx";
import { skillGroups } from "../data/skills.js";
import styles from "./Skills.module.css";

export default function Skills() {
  return (
    <section
      id="skills"
      className={styles.skills}
      aria-labelledby="skills-title"
    >
      <SectionHeader
        index="03"
        eyebrow="Skills"
        emoji="🧠"
        title="Tools of the trade"
        id="skills-title"
      />
      <div className={styles.grid}>
        {skillGroups.map((g, i) => (
          <Reveal key={g.title} delay={i * 0.05} className={styles.clusterWrap}>
            <SkillCluster title={g.title} items={g.items} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
