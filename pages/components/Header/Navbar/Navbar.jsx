import styles from "./styles/Navbar.module.css";

const Navbar = () => {
  return (
    <navbar className={styles.container}>
      <h1>STUDIO</h1>

      <nav className={styles.navList}>
        <a href="#">About</a>
        <a href="#">News</a>
        <a href="#">Contact Us</a>
        <a href="#">Learn More</a>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="30"
          height="30"
          viewBox="0 0 50 50"
        >
          <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"></path>
        </svg>
      </nav>
    </navbar>
  );
};

export { Navbar };
