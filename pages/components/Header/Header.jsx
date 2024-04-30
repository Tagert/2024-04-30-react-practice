import styles from "./styles/Header.module.css";
import { Navbar } from "./Navbar/Navbar.jsx";

const Header = () => {
  return (
    <header className={styles.container}>
      <Navbar />
    </header>
  );
};

export { Header };
