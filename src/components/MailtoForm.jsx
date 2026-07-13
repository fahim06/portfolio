import { useState } from 'react';
import { buildMailto } from '../utils/mailto.js';
import { personalInfo } from '../data/content.js';
import Icon from './Icon.jsx';
import Button from './Button.jsx';
import styles from './MailtoForm.module.css';

export default function MailtoForm() {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    const body = message + (name ? `\n\n— ${name}` : '');
    const href = buildMailto({ to: personalInfo.email, subject: subject || `Hello from ${name || 'your site'}`, body });
    window.location.href = href;
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.field}>
        <span className={styles.label}>Name</span>
        <input className={styles.input} value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" />
      </label>
      <label className={styles.field}>
        <span className={styles.label}>Subject</span>
        <input className={styles.input} value={subject} onChange={(e) => setSubject(e.target.value)} />
      </label>
      <label className={styles.field}>
        <span className={styles.label}>Message</span>
        <textarea className={styles.textarea} value={message} onChange={(e) => setMessage(e.target.value)} rows={5} required />
      </label>
      <Button type="submit" variant="primary">
        Send message <Icon name="external" size={16} />
      </Button>
      <p className={styles.hint}>Opens your email client — no data is sent to a server.</p>
    </form>
  );
}
