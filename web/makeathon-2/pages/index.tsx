import { ReactElement } from "react";
import Head from "next/head";

// Component Imports:
import Splash from "../components/Spalsh/";
import Schedule from "../components/Schedule";
import About from "../components/About";
import FAQ from "../components/FAQ";
import Sponsors from "../components/Sponsors";
import Footer from "../components/Footer/";

export default function Home(): ReactElement {
  const bodystyle = {
    overflow: "hidden",
  };

  return (
    <>
      <Head>
        <title>Makeathon II</title>
        <meta
          name="description"
          content="Makeathon II - Get ready to dive into a sea of possibilities with us during this 24-hour mini hackathon on October 21st-22nd at Driftmier Engineering Center"
        />
        <link rel="icon" href="/icons/favicon.ico" />
      </Head>

      <Splash />
      <About />
      <Schedule />
      <FAQ />
      <Sponsors />
      <Footer />
      <p>This is new text</p>
    </>
  );
}
