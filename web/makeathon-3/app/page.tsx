import Image from "next/image";
import Faq from "./components/FAQ/Faq";
import Toplandingpage from "./components/Toplandingpage/Toplandingpage";
export default function Home() {
  return (
    <div className="bg-[#C4DB94] min-h-screen">
      <Toplandingpage />
      <Faq />
    </div>
  );
}
