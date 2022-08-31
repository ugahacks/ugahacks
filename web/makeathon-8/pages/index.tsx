import Head from "next/head";
import Splash from "./components/Splash";
import HallOfFame from "./components/HallOfFame";
import About from "./components/About";
import Schedule from "./components/Schedule";
import FAQ from "./components/FAQ";
import Sponsors from "./components/Sponsors";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Makeathon</title>
        <meta
          name="description"
          content="Makeathon - THINK GREEN BUILD THE UNSEEN! October 1 - 2, 2022"
        />
        <link rel="icon" href="/icons/byteGoggleDown.png" />
      </Head>

      <Splash />
      {/* <HallOfFame /> */}
      <About />
      {/* <Schedule /> */}
      <FAQ />
      <Sponsors />
      <Footer />
    </div>
  );
}
