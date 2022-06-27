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
        <title>UGAHacks 8</title>
        <meta
          name="description"
          content="UGAHacks 8 Event Site - Create your own adventure! February 10 - 12, 2023"
        />
        <link rel="icon" href="/icons/byteGoggleDown.png" />
      </Head>

      <Splash />
      <HallOfFame />
      <About />
      <Schedule />
      <FAQ />
      <Sponsors />
      <Footer />
    </div>
  );
}
