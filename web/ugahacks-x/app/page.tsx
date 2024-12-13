'use client'
import Image from "next/image";
import Splash from "./splash/Splash";
import Navbar from "../components/Navbar/Navbar";
import Countdown from "../components/Countdown"

export default function Home() {
  return (
    <div className="main">
      <Navbar />
      <Splash />
      <Countdown />
    </div>
  );
}
