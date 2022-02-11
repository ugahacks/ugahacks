import { ReactElement } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Splash from "../components/Splash";
import NavBar from "../components/NavBar";
import Sponsors from "../components/Sponsors";
import Schedule from "../components/Schedule";
import TaskBar from "../components/TaskBar";

export default function Home(): ReactElement {
  const bodystyle = {
    overflow: 'hidden'
  }

  return (
    <div className={styles.container} style={bodystyle}>
      <Head>
        <title>UGAHacks 7</title>
        <meta
          name="description"
          content="UGAHacks 7 - UGA's premier hackathon at MLC on February 18 - 20, 2022"
        />
        <link rel="icon" href="/icons/favicon.ico" />
      </Head>

      <Splash />
      {/* <FAQ /> */}
      {/* <About /> */}
      {/* <Sponsors /> */}
      <NavBar />
      <TaskBar />
    
    </div>
  );
}
