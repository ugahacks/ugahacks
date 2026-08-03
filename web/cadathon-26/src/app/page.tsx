import Checkers from "~/components/Checkers";
import Footer from "~/components/Footer";
import Info from "~/components/Info";
import Landing from "~/components/Landing";

export default function Home() {
  return (
    <>
      <Landing />

      <div className="h-10 sm:h-12">
        <Checkers marquee />
      </div>

      <Info />

      <Footer />
    </>
  );
}
