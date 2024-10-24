import Image from "next/image";
import Toplandingpage from "./components/Toplandingpage/Toplandingpage";
import SchedulePage from "./components/Schedule/Schedule";

import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <div className="bg-[#C4DB94] min-h-screen">
      <Toplandingpage />
      <SchedulePage />
      <Footer />
    </div>
  );
}
