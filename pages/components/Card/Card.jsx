import styles from "./styles/Card.module.css";

const Card = ({ onClick, imgUrl, title, text }) => {
  return (
    <div className={styles.container} onClick={onClick}>
      <img src={imgUrl} />
      <h4>{title}</h4>
      <p>{text}</p>
    </div>
  );
};

export { Card };
