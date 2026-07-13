import Tag from './ui/Tag.jsx';
import EmptyState from './ui/EmptyState.jsx';
import styles from './TimelineItem.module.css';

export default function TimelineItem({ item }) {
  return (
    <li className={styles.item}>
      <div className={styles.marker} aria-hidden="true" />
      <div className={styles.body}>
        <div className={styles.head}>
          <h3 className={styles.role}>{item.role}</h3>
          <span className={styles.period}>{item.period || '—'}</span>
        </div>
        <p className={styles.company}>{item.company}{item.location ? ` · ${item.location}` : ''}</p>
        {item.description && <p className={styles.desc}>{item.description}</p>}
        {item.placeholder ? (
          <EmptyState title="Details coming soon" note="This role's responsibilities and impact will be added shortly." />
        ) : (
          <>
            <ul className={styles.resp}>
              {item.responsibilities.map((r, i) => (
                <li key={i}>{r}</li>
              ))}
            </ul>
            {item.impact && <p className={styles.impact}>{item.impact}</p>}
            {item.technologies?.length > 0 && (
              <div className={styles.tech}>
                {item.technologies.map((t) => <Tag key={t}>{t}</Tag>)}
              </div>
            )}
          </>
        )}
      </div>
    </li>
  );
}
