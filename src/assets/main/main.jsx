import styles from './main.module.css';

export default function Main() {
  return (
    <section className={styles.main}>
      <div className={styles.overlay} />
      <div className={styles.content}>
        <p className={styles.invite}>
          With love and gratitude, we invite you to<br />
          share in the joy of our wedding day.
        </p>
        <div className={styles.divider} />
        <p className={styles.details}>
          Saturday, September 20, 2025<br />
          The Golden Elm Manor,<br />
          St. Augustine, New York
        </p>
      </div>
    </section>
  );
}