import styles from "./styles/Main.module.css";

const Main = () => {
  return (
    <main className={styles.container}>
      <div className={styles.description}>
        <h2>HOW WE WORK</h2>
        <p>
          Viverra nam libero justo laoreet sit. Nisl nunc mi ipsum faucibus. Ut
          ornare lectus sit amet est placerat in egestas. Felis donec et odio
          pellentesque. Eget arcu dictum varius duis at consectetur lorem donec
          massa. Vitae auctor eu augue ut lectus arcu bibendum at varius. Tellus
          pellentesque eu tincidunt tortor aliquam nulla. Amet consectetur
          adipiscing elit duis tristique sollicitudin nibh sit.
        </p>
      </div>

      <div className={styles.cardWrapper}>
        <div className={styles.card}></div>
        <div className={styles.card}></div>
        <div className={styles.card}></div>
      </div>

      <div className={styles.cardContainer}>
        <div className={styles.cardGroup}>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
        </div>

        <div className={styles.cardHolder}></div>
      </div>
    </main>
  );
};

export { Main };
