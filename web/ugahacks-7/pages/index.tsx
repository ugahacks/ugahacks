import { ReactElement } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Splash from "../components/Splash";
import About from "../components/About";
import FAQ from "../components/FAQ";

export default function Home(): ReactElement {
  return (
    <div className={styles.container}>
      <Head>
        <title>UGAHacks 7</title>
        <meta
          name="description"
          content="UGAHacks 7 - UGA's premier hackathon at MLC on February 18 - 20, 2022"
        />
        <link rel="icon" href="/icons/favicon.ico" />
      </Head>
      {/* <Splash />
      <About /> */}
      <FAQ />
    </div>
  );
}
