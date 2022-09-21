import Head from "next/head";
import Splash from "./components/Splash";
import HallOfFame from "./components/HallOfFame";
import About from "./components/About";
import Schedule from "./components/Schedule";
import FAQ from "./components/FAQ";
import Sponsors from "./components/Sponsors";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
export default function Home() {
  return (
    <div>
      <Head>
        <title>UGAHacks 8</title>
        <meta
          name="description"
          content="UGAHacks 8 Event Site - Create your own adventure! February 3 - 5, 2023"
        />
        <link rel="icon" href="/icons/byteGoggleDown.png" />
      </Head>
      <Header />
      <Hero />
      {/* <Splash /> */}
      {/* <HallOfFame /> */}
      <About />
      {/* <Schedule /> */}
      <FAQ />
      <Sponsors />
      <Footer />
    </div>
  );
}
