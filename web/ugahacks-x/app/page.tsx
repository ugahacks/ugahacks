'use client'
import Image from "next/image";
import Navbar from "../components/Navbar/Navbar";
import Splash from "./splash/Splash";
import Team from "@/components/team/Team";
import Sponsors from "@/components/Sponsors/sponsors";
import Countdown from "@/components/Countdown/Countdown";

export default function Home() {
  return (
    <div className="main">
      <Navbar />
      <Splash />
      <Countdown />
      <Team/>
      <Sponsors/>
    </div>
  );
}
