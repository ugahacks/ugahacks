import { ReactElement } from "react";
import { BrowserView, MobileView } from "react-device-detect";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Splash from "../components/Splash";
import About from "../components/About";
import MobileSite from "../components/mobileSite";

export default function Home(): ReactElement {
  return (
    <>
      <BrowserView>
        <div className={styles.container}>
          <Head>
            <title>UGAHacks 7</title>
            <meta
              name="description"
              content="UGAHacks 7 - UGA's premier hackathon at MLC on February 18 - 20, 2022"
            />
            <link rel="icon" href="/icons/favicon.ico" />
          </Head>
          <Splash />
          <About />
        </div>
      </BrowserView>
      <MobileView>
        <MobileSite />
       </MobileView>
    </>
  );
}
