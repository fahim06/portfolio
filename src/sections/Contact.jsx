import ContactForm from "../components/forms/ContactForm.jsx";
import Card from "../components/ui/Card.jsx";
import Icon from "../components/ui/Icon.jsx";
import SectionHeader from "../components/ui/SectionHeader.jsx";
import { profileGroups } from "../config/social.js";
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

          <div className={styles.connect}>
            <h3 className={styles.connectTitle}>Connect &amp; Work With Me</h3>
            {profileGroups.map((group) => (
              <div key={group.label} className={styles.group}>
                <p className={styles.groupLabel}>{group.label}</p>
                <ul className={styles.profiles}>
                  {group.items.map((p) => (
                    <li key={p.name}>
                      <a
                        className={styles.profileLink}
                        href={p.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Icon name={p.icon} size={18} />
                        <span className={styles.profileText}>
                          <span className={styles.profileName}>{p.name}</span>
                          <span className={styles.profileDesc}>{p.description}</span>
                        </span>
                        <Icon name="external" size={13} className={styles.externalIcon} />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className={styles.fallback}>
            Prefer email? <a href={`mailto:${personalInfo.email}`}>Send me a message directly</a>.
          </p>
        </Card>
      </div>
    </section>
  );
}
