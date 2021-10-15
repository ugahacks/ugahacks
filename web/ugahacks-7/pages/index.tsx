import { ReactElement } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Splash from "../components/Splash";

export default function Home(): ReactElement {
  return (
    <div className={styles.container}>
      <Head>
        <title>UGAHacks 7</title>
        <meta
          name="description"
          content="UGAHacks 7 Event Site [[ event info here ]]"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Splash />
    </div>
  );
}
