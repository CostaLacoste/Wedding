import styles from "./details.module.css";
import bgHero   from "../../images/details.png";
import bgTravel from "../../images/card1.png";
import imgTravel1 from "../../images/card4.png";
import imgTravel2 from "../../images/card2.png";
import bgRegistry from "../../images/card3.png";

export default function Details() {
  return (
    <main className={styles.page}>

      {/* Hero photo */}
      <div
        className={styles.hero}
        style={{ backgroundImage: `url(${bgHero})` }}
      />

      {/* Invite card */}
      <div className={styles.inviteCard}>
        <p className={styles.inviteText}>
          We invite you to our wedding at Golden Elm Manor, an enchanting
          place where towering elms meet candlelit pathways. And where our
          next adventure begins.
        </p>
        <a href="#rsvp" className={styles.btn}>RSVP</a>
      </div>

      {/* Building photo */}
      <div
        className={styles.buildingPhoto}
        style={{ backgroundImage: `url(${bgHero})` }}
      />

      {/* Info grid */}
      <div className={styles.infoGrid}>
        <div className={styles.infoCol}>
          <p className={styles.infoLabel}>Date:</p>
          <p className={styles.infoText}>Saturday, September 20, 2025</p>
          <p className={styles.infoLabel}>Venue:</p>
          <p className={styles.infoText}>The Golden Elm Manor, St. Augustine, NY</p>
          <p className={styles.infoLabel}>Ceremony Begins:</p>
          <p className={styles.infoText}>4:30 PM</p>
          <p className={styles.infoLabel}>Reception:</p>
          <p className={styles.infoText}>6:00 PM – Midnight</p>
        </div>
        <div className={styles.infoCol}>
          <p className={styles.infoLabel}>Musical Guest:</p>
          <p className={styles.infoText}>The Starlight Quartet, followed by a surprise jazz ensemble.</p>
          <p className={styles.infoLabel}>Dinner:</p>
          <p className={styles.infoText}>A seasonal farm-to-table menu featuring dishes inspired by our favorite travels.</p>
        </div>
      </div>

      {/* Travel & Stay banner */}
      <div
        className={styles.travelBanner}
        style={{ backgroundImage: `url(${bgTravel})` }}
      >
        <div className={styles.travelOverlay} />
        <h2 className={styles.travelTitle}>TRAVEL &amp; STAY</h2>
      </div>

      {/* Travel blocks */}
      <div className={styles.travelGrid}>
        <div className={styles.travelBlock}>
          <p className={styles.travelText}>
            Golden Elm Manor is a 90-minute train ride from Grand Central
            Station, with direct routes to St. Augustine. Complimentary
            shuttles will be available from the station to the venue.
          </p>
          <div
            className={styles.travelImg}
            style={{ backgroundImage: `url(${imgTravel1})` }}
          />
        </div>
        <div className={`${styles.travelBlock} ${styles.travelBlockReverse}`}>
          <div
            className={styles.travelImg}
            style={{ backgroundImage: `url(${imgTravel2})` }}
          />
          <p className={styles.travelText}>
            We've reserved charming accommodations at The Wildflower Inn —
            Cozy &amp; quaint, right in town. The Fox &amp; Finch Manor — A
            historic stay just minutes from the venue.
          </p>
        </div>
      </div>

      {/* Registry */}
      <div
        className={styles.registry}
        style={{ backgroundImage: `url(${bgRegistry})` }}
      >
        <div className={styles.registryOverlay} />
        <div className={styles.registryContent}>
          <h2 className={styles.registryTitle}>REGISTRY</h2>
          <p className={styles.registryText}>
            Your presence is the most cherished gift. Should you wish to
            contribute, we've created a honeymoon registry to help us
            embark on a memorable adventure to the Amalfi Coast.
          </p>
          <a href="#registry" className={styles.btnDark}>GO TO REGISTRY</a>
        </div>
      </div>

    </main>
  );
}