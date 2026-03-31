import { useState } from "react";
import { loginApi } from "../../api/authApi";
import styles from "./rsvp.module.css";

export default function RSVP() {
  const [attending, setAttending] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  function getErrorMessage(apiError) {
    if (apiError?.status === 403) return "This user is blocked.";
    if (apiError?.status === 500) return "Server error. Please try again later.";
    if (apiError?.status === 0) return "Network error. Check your internet connection.";
    if (apiError?.status === 401) return "Wrong email.";
    return "Something went wrong. Please try again.";
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      await loginApi({ email, password: "123456" });
      setSubmitted(true);
    } catch (apiError) {
      setError(getErrorMessage(apiError));
    } finally {
      setIsLoading(false);
    }
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
          <input
            className={styles.input}
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
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

        {error && <p className={styles.subtitle}>{error}</p>}

        <button type="submit" className={styles.btn} disabled={isLoading}>
          {isLoading ? "SENDING..." : "SEND RSVP"}
        </button>

      </form>
    </main>
  );
}