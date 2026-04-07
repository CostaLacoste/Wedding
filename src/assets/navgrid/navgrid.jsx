import styles from "./navgrid.module.css";

import card1 from "../../images/card1.png";
import card2 from "../../images/card2.png";
import card3 from "../../images/card3.png";
import card4 from "../../images/card4.png";

const ITEMS = [
  { label: "OUR STORY",   href: "#story",    img: card1 },
  { label: "THE DETAILS", href: "#details",  img: card2 },
  { label: "RSVP",        href: "#rsvp",     img: card3 },
  { label: "REGISTRY",    href: "#rsvp", img: card4 },
];

export default function NavGrid() {
  return (
    <section className={styles.grid}>
      {ITEMS.map((item) => (
        <a
          key={item.label}
          href={item.href}
          className={styles.card}
          style={{ backgroundImage: `url(${item.img})` }}
        >
          <span className={styles.label}>{item.label}</span>
        </a>
      ))}
    </section>
  );
}