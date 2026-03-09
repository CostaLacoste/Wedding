import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span className={styles.monogram}>J&amp;J</span>
      <p className={styles.date}>
        SATURDAY,<br />
        SEPTEMBER 20, 2025
      </p>
    </footer>
  );
}