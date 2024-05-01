import styles from "./styles/Button.module.css";

const Button = ({ onClick }) => {
  return (
    <>
      <button className={styles.container} onClick={onClick}>
        ?
      </button>
    </>
  );
};

export { Button };
