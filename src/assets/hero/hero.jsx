import styles from "./hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>
        Jenny <span className={styles.ampersand}>&amp;</span> Jason
      </h1>
    </section>
  );
}