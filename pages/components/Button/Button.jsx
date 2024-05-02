import styles from "./styles/Button.module.css";
import { useState } from "react";

const Button = ({ onClick, btnText }) => {
  const [isClicked, setClicked] = useState(true);

  return (
    <>
      <button className={styles.container} onClick={onClick}>
        {btnText}
      </button>
    </>
  );
};

export { Button };
