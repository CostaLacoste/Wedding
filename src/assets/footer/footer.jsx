import styles from "./footer.module.css";
import logo from "../../images/J&BBl.svg";

export default function Footer() {
  return (
    <footer className={styles.footer}>
       <img src={logo} alt="J&J" />
      <p className={styles.date}>
        SATURDAY,<br />
        SEPTEMBER 20, 2025
      </p>
    </footer>
  );
}