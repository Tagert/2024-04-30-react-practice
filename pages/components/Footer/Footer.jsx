import { ContactUs } from "./ContactUs/ContactUs";
import { Social } from "./Social/Social";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <h4>Bailard Foundation</h4>

      <ContactUs />

      <Social />
    </footer>
  );
};

export { Footer };
