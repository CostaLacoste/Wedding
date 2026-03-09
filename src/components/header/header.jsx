import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./header.module.css";

const NAV_LINKS = [
  { label: "HOME",      to: "/" },
  { label: "OUR STORY", to: "/story" },
  { label: "DETAILS",   to: "/details" },
  { label: "RSVP",      to: "/rsvp" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <header className={styles.header}>
        <div className={styles.brand}>
          <Link to="/" className={styles.monogramLink}>
            <span className={styles.monogram}>J&amp;J</span>
          </Link>
          <span className={styles.date}>June 23rd, 2025</span>
        </div>

        <nav className={styles.nav} aria-label="Main navigation">
          <ul className={styles.navList}>
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.to}
                  className={`${styles.navLink} ${location.pathname === link.to ? styles.active : ""}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className={styles.burger}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className={`${styles.line} ${menuOpen ? styles.lineTopOpen : ""}`} />
          <span className={`${styles.line} ${menuOpen ? styles.lineMidOpen : ""}`} />
          <span className={`${styles.line} ${menuOpen ? styles.lineBotOpen : ""}`} />
        </button>
      </header>

      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ""}`}>
        {NAV_LINKS.map((link) => (
          <Link
            key={link.label}
            to={link.to}
            className={styles.mobileLink}
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </>
  );
}