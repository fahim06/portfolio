import ProjectCard from "../components/ProjectCard.jsx";
import Reveal from "../components/ui/Reveal.jsx";
import SectionHeader from "../components/ui/SectionHeader.jsx";
import { projects } from "../data/projects.js";
import styles from "./Projects.module.css";

export default function Projects() {
  const sorted = [...projects].sort((a, b) => Number(b.featured) - Number(a.featured));
  return (
    <section id="projects" aria-labelledby="projects-title">
      <SectionHeader
        index="05"
        eyebrow="Projects"
        emoji="🚀"
        title="Selected work"
        id="projects-title"
      />
      <div className={styles.grid}>
        {sorted.map((p, i) => (
          <Reveal
            key={p.id}
            delay={(i % 3) * 0.05}
            className={styles.wrap}
            style={{ "--span": p.featured ? 12 : 4 }}
          >
            <ProjectCard project={p} featured={p.featured} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
