import Card from '../components/ui/Card.jsx';
import SectionHeader from '../components/ui/SectionHeader.jsx';
import EmptyState from '../components/ui/EmptyState.jsx';
import styles from './Certificates.module.css';

export default function Certificates() {
  return (
    <section id="certificates" className={styles.section} aria-labelledby="certificates-title">
      <SectionHeader index="07" eyebrow="Certificates" title="Credentials" id="certificates-title" />
      <Card span={12}>
        <EmptyState
          title="In progress"
          note="Certificates and professional credentials will be listed here soon. Check back later."
        />
      </Card>
    </section>
  );
}
