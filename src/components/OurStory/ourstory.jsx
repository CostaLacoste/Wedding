import styles from "./ourstory.module.css";

export default function OurStory() {
  return (
    <main className={styles.page}>

      {/* Polaroid 1 */}
      <div className={styles.polaroidWrap}>
        <div className={styles.polaroid}>
          <div className={styles.polaroidImg} style={{ background: "#d4cfc8" }} />
          <span className={styles.polaroidDate}>06/10/19</span>
        </div>
      </div>

      {/* Title */}
      <h1 className={styles.title}>WHERE THE WILD THINGS WED</h1>

      {/* Story paragraphs */}
      <div className={styles.text}>
        <p>
          We met at an art walk in Seattle, literally bumping into each other.
          We started hiking together, a lot. We both love the PNW, the
          mountains, the coast, everything. We'd be out on trails, just
          hanging out, talking around a fire. It clicked. We were on the same
          wavelength. One time, we were hiking and I complained about my
          boots and Jenny just stopped and started tying my laces for me.
          That's when I knew. It wasn't some grand gesture. It was just…us.
        </p>
        <p>
          We've built a life together. It's chill, it's real. We love low-key
          adventures, but also appreciate good wine with friends. From
          those first hikes to figuring out life together under countless starry
          skies, we've always found our best moments in the wild.
        </p>
      </div>

      {/* Polaroids 2 — overlapping */}
      <div className={styles.polaroidDouble}>
        <div className={`${styles.polaroid} ${styles.polaroidLeft}`}>
          <div className={styles.polaroidImg} style={{ background: "#1a1a1a" }} />
        </div>
        <div className={`${styles.polaroid} ${styles.polaroidRight}`}>
          <div className={styles.polaroidImg} style={{ background: "#c8d4e0" }} />
        </div>
      </div>

      {/* Closing text */}
      <div className={styles.text}>
        <p>
          It feels right to celebrate surrounded by the people who get us.
          We're stoked to start this next chapter with you.
        </p>
        <p>Onward and upward to the next adventure!</p>
      </div>

      {/* RSVP button */}
      <a href="#rsvp" className={styles.btn}>RSVP</a>

    </main>
  );
}