import Image from "next/image";
import Splash from "./splash/Splash"
import Navbar from "../components/Navbar/Navbar";
import Team from "@/components/team/Team";
import Sponsors from "@/components/Sponsors/sponsors";


export default function Home() {
  return (
    <div className="main">
      <Splash />
      <Team/>
      <Sponsors/>
    </div>
  );
}
