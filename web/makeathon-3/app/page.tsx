import Image from "next/image";
import Toplandingpage from "./components/Toplandingpage/Toplandingpage";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <div className="bg-[#C4DB94] min-h-screen">
      <Toplandingpage />
      <Footer />
    </div>
  );
}
