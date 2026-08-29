import ContactForm from "../components/forms/ContactForm.jsx";
import Card from "../components/ui/Card.jsx";
import Icon from "../components/ui/Icon.jsx";
import SectionHeader from "../components/ui/SectionHeader.jsx";
import { socials } from "../config/social.js";
import { personalInfo } from "../data/personalInfo.js";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title">
      <SectionHeader
        index="10"
        eyebrow="Contact"
        emoji="📬"
        title="Let's talk"
        id="contact-title"
      />
      <div className={styles.grid}>
        <Card span={7}>
          <ContactForm />
        </Card>
        <Card span={5} className={styles.info}>
          <div>
            <p className={styles.label}>Email</p>
            <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
          </div>
          <div>
            <p className={styles.label}>Location</p>
            <p className={styles.value}>{personalInfo.location}</p>
          </div>
          <div>
            <p className={styles.label}>Elsewhere</p>
            <div className={styles.socials}>
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target={s.url.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className={styles.social}
                  aria-label={s.name}
                >
                  <Icon name={s.icon} size={18} />
                </a>
              ))}
            </div>
          </div>
          <p className={styles.fallback}>
            Prefer email? <a href={`mailto:${personalInfo.email}`}>Send me a message directly</a>.
          </p>
        </Card>
      </div>
    </section>
  );
}
