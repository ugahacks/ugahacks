import Image from "next/image";
// import Link from "next/link";
import React from "react";
// import img from "../public/generic_byte.png"; // Placeholder for the logo image
import WhatIsUGAHacks from "./components/WhatIsUGAHacks";
// import About from "./components/about";  
import OurTeam from "./components/OurTeam";
// import ourteam from "./components/ourteam";
export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-violet-800 via-fuchsia-900 to-indigo-950 px-4 py-2 text-white">
      <a
        id="mlh-trust-badge"
        style={{
          display: 'block',
          maxWidth: '100px',
          minWidth: '60px',
          position: 'fixed',
          right: '50px',
          top: 0,
          width: '10%',
          zIndex: 10000,
        }}
        href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2026-season&utm_content=black"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="https://s3.amazonaws.com/logged-assets/trust-badge/2026/mlh-trust-badge-2026-black.svg"
          alt="Major League Hacking 2026 Hackathon Season" width="100" height="100"
          style={{ width: '100%' }}
        />
      </a>

      {/* BODY SECTION */}
      <section>
        {/* 
        <Navbar/>
        <Hero/>
        */}
        <WhatIsUGAHacks/>
        {/*
        <Tracks/>
        <SponsorTracks/>
        <Schedule/>
        <FAQ/>
        <OurTeam/>
        <Sponsors/>
        */}
      </section>

      {/* <footer className="mt-4 text-center text-sm text-purple-300">
        February 6th - 8th · Miller Learning Center · Athens, GA · Free to Attend · Food, Swag & Prizes
      </footer> */}
    </main>
  );
}
