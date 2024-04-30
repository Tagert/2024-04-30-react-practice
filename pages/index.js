import styles from "../styles/Home.module.css";
import Head from "next/head";
import { Header } from "./components/Header/Header.jsx";
import { Main } from "./components/Main/Main.jsx";
import { Footer } from "./components/Footer/Footer.jsx";

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>How we work</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Main />

      <Footer />
    </div>
  );
};

export default Home;
