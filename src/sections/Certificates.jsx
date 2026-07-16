import Icon from "../components/ui/Icon.jsx";
import SectionHeader from "../components/ui/SectionHeader.jsx";
import { certificateGroups } from "../data/certificates.js";
import styles from "./Certificates.module.css";

const all = certificateGroups.flatMap((g) =>
  g.items.map((c) => ({ ...c, category: g.category })),
);

export default function Certificates() {
  return (
    <section
      id="certificates"
      className={styles.section}
      aria-labelledby="certificates-title"
    >
      <SectionHeader
        index="07"
        eyebrow="Certificates"
        emoji="🏆"
        title="Credentials"
        id="certificates-title"
      />
      <div className={styles.grid}>
        {all.map((c) => (
          <article key={c.title} className={styles.card}>
            <span className={styles.badge} aria-hidden="true">
              <Icon name="check" size={13} />
            </span>
            <div className={styles.body}>
              <span className={styles.tag}>{c.category}</span>
              <p className={styles.title}>{c.title}</p>
              <p className={styles.meta}>
                {c.issuer}
                {c.year ? ` · ${c.year}` : ""}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
