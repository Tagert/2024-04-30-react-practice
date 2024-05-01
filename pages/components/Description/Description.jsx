import styles from "./styles/Description.module.css";

const Description = ({ text }) => {
  return <p className={styles.container}>{text}</p>;
};

export { Description };
