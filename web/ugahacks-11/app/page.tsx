import Image from "next/image";
// import Link from "next/link";
import React from "react";
import img from "../public/generic_byte.png"; // Placeholder for the logo image
import Hero from "../components/Hero";
export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <a
        id="mlh-trust-badge"
        style={{
          display: "block",
          maxWidth: "100px",
          minWidth: "60px",
          position: "fixed",
          right: "50px",
          top: 0,
          width: "10%",
          zIndex: 10000,
        }}
        href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2026-season&utm_content=black"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/mlh-trust-badge-2026-white.svg"
          alt="Major League Hacking 2026 Hackathon Season"
          width={100}
          height={100}
          style={{ width: "100%" }}
        />
      </a>
    </main>
  );
}
