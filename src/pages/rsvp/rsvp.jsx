import { useState } from "react";
import styles from "./rsvp.module.css";

export default function RSVP() {
  const [attending, setAttending] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <main className={styles.page}>
        <div className={styles.thankYou}>
          <h1 className={styles.title}>THANK YOU</h1>
          <p className={styles.thankYouText}>
            We've received your response and can't wait to celebrate with you.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className={styles.page}>

      <div className={styles.header}>
        <h1 className={styles.title}>RSVP</h1>
        <p className={styles.subtitle}>Please respond by September 15th, 2025</p>
      </div>

      <form className={styles.form} onSubmit={handleSubmit}>

        <div className={styles.field}>
          <label className={styles.label}>Full Name</label>
          <input className={styles.input} type="text" placeholder="Your name" required />
        </div>

        <div className={styles.field}>
          <label className={styles.label}>Email</label>
          <input className={styles.input} type="email" placeholder="your@email.com" required />
        </div>

        <div className={styles.field}>
          <label className={styles.label}>Phone</label>
          <input className={styles.input} type="tel" placeholder="+1 (000) 000-0000" />
        </div>

        <div className={styles.field}>
          <label className={styles.label}>Will you be attending?</label>
          <div className={styles.radioGroup}>
            <button
              type="button"
              className={`${styles.radioBtn} ${attending === "yes" ? styles.radioBtnActive : ""}`}
              onClick={() => setAttending("yes")}
            >
              Joyfully accepts
            </button>
            <button
              type="button"
              className={`${styles.radioBtn} ${attending === "no" ? styles.radioBtnActive : ""}`}
              onClick={() => setAttending("no")}
            >
              Regretfully declines
            </button>
          </div>
        </div>

        {attending === "yes" && (
          <div className={styles.field}>
            <label className={styles.label}>Dietary Preferences</label>
            <input className={styles.input} type="text" placeholder="Vegetarian, gluten-free, allergies, etc." />
          </div>
        )}

        <button type="submit" className={styles.btn}>SEND RSVP</button>

      </form>
    </main>
  );
}