import { motion } from "framer-motion";
import Button from "../components/ui/Button.jsx";
import Icon from "../components/ui/Icon.jsx";
import SmartImage from "../components/ui/SmartImage.jsx";
import Reveal from "../components/ui/Reveal.jsx";
import { resume } from "../config/resume.js";
import { personalInfo } from "../data/personalInfo.js";
import { scrollToSection } from "../utils/scroll.js";
import styles from "./Home.module.css";

// Verified metrics only (counts derived from src/data — no fabrication).
const METRICS = [
  { value: "7", label: "Projects shipped" },
  { value: "16", label: "Certifications" },
  { value: "ICPC '20", label: "Contest participant" },
];
const BADGES = ["Python", "Deep Learning", "React", "Django"];

const EASE = [0.22, 1, 0.36, 1];
const container = {
  hidden: {},
  shown: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};
const item = {
  hidden: { opacity: 0, y: 18 },
  shown: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

export default function Home() {
  const { name, title, headline, statement, availability, heroImage } =
    personalInfo;
  const { cvUrl, cvDownloadName } = resume;

  return (
    <section id="home" className={styles.home} aria-labelledby="home-title">
      <div className={styles.left}>
        <motion.div
          className={styles.stack}
          variants={container}
          initial="hidden"
          animate="shown"
        >
          <motion.p variants={item} className={styles.availability}>
            <span className={styles.dot} aria-hidden="true" /> {availability}
          </motion.p>
          <motion.h1 variants={item} id="home-title" className={styles.name}>
            {name}
          </motion.h1>
          <motion.p variants={item} className={styles.title}>
            {title}
          </motion.p>
          <motion.p variants={item} className={styles.headlineText}>
            {headline}
          </motion.p>
          <motion.p variants={item} className={styles.statement}>
            {statement}
          </motion.p>
          <motion.div variants={item} className={styles.ctas}>
            <Button href={cvUrl} download={cvDownloadName} variant="primary">
              Download CV <Icon name="arrow-down" size={16} />
            </Button>
            <Button
              variant="secondary"
              onClick={() => scrollToSection("projects")}
            >
              Explore work <Icon name="arrow-down" size={16} />
            </Button>
          </motion.div>
          <motion.dl variants={item} className={styles.metrics}>
            {METRICS.map((m) => (
              <div key={m.label} className={styles.metric}>
                <dt className={styles.metricValue}>{m.value}</dt>
                <dd className={styles.metricLabel}>{m.label}</dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>
      </div>

      <Reveal variant="zoom" delay={0.2} className={styles.portraitWrap}>
        <div className={styles.portraitCard}>
          <SmartImage
            className={styles.portrait}
            src={heroImage.url}
            fallback={heroImage.fallback}
            alt={heroImage.alt}
            width="320"
            height="400"
            loading="eager"
          />
          <div className={styles.badges}>
            {BADGES.map((b) => (
              <span key={b} className={styles.badge}>
                {b}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
