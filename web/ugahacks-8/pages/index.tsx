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
        <title>UGAHacks 6</title>
        <meta
          name="description"
          content="UGAHacks 6 Event Site - Boot up your dreams and build the future! February 5-7, 2021"
        />
        <link rel="icon" href="/icons/favicon.ico" />
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
