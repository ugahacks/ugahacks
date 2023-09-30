import Splash from "../components/Splash";
import About from "../components/About";
import Schedule from "../components/Schedule";
import FAQ from "../components/FAQ";
import Sponsors from "../components/Sponsors";
import Footer from "../components/Footer";
import Bubbles from "@/components/Bubbles/Bubbles";

export default function Home() {
  return (
    <>
      <Splash />
      <About />
      <Schedule />
      <FAQ />
      <Sponsors />
      <Bubbles />
      <div className="foot">
        <Footer />
      </div>
    </>
  );
}
