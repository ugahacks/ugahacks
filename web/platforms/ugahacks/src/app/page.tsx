"use client";

// import Image from "next/image";
import Image from "next/image";
import About from "./components/About";
import Banner from "./components/Banner";
import Events from "./components/Events";
import Footer from "./components/footer";
import Hero from "./components/Hero";
import Navbar from "./components/navbar";
import Team from "./components/Team";
export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Hero />
      <About />
      <Events />
      <Team />
      <a
        id="mlh-trust-badge"
        style={{
          display: "block",
          maxWidth: "100px",
          minWidth: "60px",
          position: "fixed",
          right: "40px",
          top: 60,
          width: "10%",
          zIndex: 10,
        }}
        href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2026-season&utm_content=white"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="https://logged-assets.s3.amazonaws.com/trust-badge/2027/mlh-trust-badge-2027-white.svg"
          alt="Major League Hacking 2027 Hackathon Season"
          width="100"
          height="100"
          style={{ width: "100%" }}
        />
      </a>
      <Footer />
    </>
  );
}
