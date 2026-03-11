import styles from "./registry.module.css";
import bgImage from "../../images/reg.png";

export default function Registry() {
  return (
    <section
      className={styles.registry}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className={styles.overlay} />
      <div className={styles.content}>
        <h2 className={styles.title}>REGISTRY</h2>
        <p className={styles.text}>
          Your presence is the most cherished gift. Should you wish to
          contribute, we've created a honeymoon registry to help us
          embark on a memorable adventure to the Amalfi Coast.
        </p>
        <a href="#registry" className={styles.btn}>
          GO TO REGISTRY
        </a>
      </div>
    </section>
  );
}