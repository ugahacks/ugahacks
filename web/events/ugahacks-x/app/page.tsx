import Image from "next/image";
import Navbar from "../components/Navbar/Navbar";
import Splash from "./splash/Splash";
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
