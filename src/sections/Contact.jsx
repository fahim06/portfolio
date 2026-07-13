import { personalInfo } from '../data/personalInfo.js';
import { socials } from '../config/social.js';
import Card from '../components/Card.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import MailtoForm from '../components/MailtoForm.jsx';
import Icon from '../components/Icon.jsx';
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title">
      <SectionHeader index="10" eyebrow="Contact" title="Let's talk" id="contact-title" />
      <div className={styles.grid}>
        <Card span={7}>
          <MailtoForm />
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
                <a key={s.name} href={s.url} target={s.url.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className={styles.social} aria-label={s.name}>
                  <Icon name={s.icon} size={18} />
                </a>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
