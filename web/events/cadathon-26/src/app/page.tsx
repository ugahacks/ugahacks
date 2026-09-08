import Checkers from "~/components/Checkers";
import FAQ from "~/components/FAQ";
import Footer from "~/components/Footer";
import Info from "~/components/Info";
import Landing from "~/components/Landing";
import Partners from "~/components/Partners";
import RaceTrack from "~/components/track/RaceTrack";
import Schedule from "~/components/Schedule";
import Sponsors from "~/components/Sponsors";

export default function Home() {
  return (
    <RaceTrack>
      <Landing />

      {/* z-20 lifts the dividers above the road (z-10) but below the car
          (z-30), so the track runs under them and the car crosses them. */}
      <div className="relative z-20 h-10 sm:h-12">
        <Checkers marquee />
      </div>

      <Info />
      <Schedule />
      <FAQ />
      <Sponsors />
      <Partners />

      {/* The finish line: the car crosses this on its way into the footer. */}
      <div className="relative z-20 h-10 sm:h-12">
        <Checkers marquee />
      </div>

      <Footer />
    </RaceTrack>
  );
}
