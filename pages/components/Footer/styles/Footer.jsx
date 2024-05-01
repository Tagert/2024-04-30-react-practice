import { ContactUs } from "../ContactUs/ContactUs";
import { Social } from "../Social/Social";
import styles from "./Footer.module.css";

const Footer = ({ text }) => {
  return (
    <footer className={styles.container}>
      <div className={styles.info}>
        <h4>STUDIO</h4>

        <ContactUs />

        <Social />
      </div>

      <div className={styles.copyright}>
        <p>{text}</p>
      </div>
    </footer>
  );
};

export { Footer };
