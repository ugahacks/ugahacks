import Image from "next/image";
import Link from "next/link";
import React from "react";
import img from "../public/generic_byte.png"; // Placeholder for the logo image
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

      <span className="pointer-events-none absolute -inset-32 h-[150vh] w-[150vw] animate-pulse rounded-full bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-purple-600/30 via-fuchsia-700/10 to-transparent blur-3xl" />
      <div className="grid grid-cols-2 items-center gap-6">
        {/* Left column: Logo */}
        <div className="flex justify-center">

          <Image
            src={img}
            alt="UGAHacks 11 Logo"
            width={320}
            height={320}
            priority
            className="mb-2 drop-shadow-2xl"
          />
        </div>
        {/* Right column: Sponsors */}
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-lg font-semibold text-purple-200">Confirmed Sponsors</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link className="hover:animate-pulse" href="https://research.uga.edu/" target="_blank">
              <Image
                src="/UGA_OFR_logo.png"
                alt="Sponsor 1"
                width={120}
                height={60}
                className="object-contain"
              />
            </Link>

            <Link className="hover:animate-pulse" href="https://GitHub.com" target="_blank">
              <Image
                src="/Github_logo.png"
                alt="Sponsor 2"
                width={80}
                height={60}
                className="object-contain"
              />
            </Link>
          </div>
        </div>
      </div>
      <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
        <span className="block">Code the Future</span>
        <span className="block bg-gradient-to-r from-pink-300 via-purple-400 to-indigo-500 bg-clip-text text-transparent">
          at UGAHacks 11
        </span>
      </h1>


      <p className="mt-6 max-w-xl text-center text-lg text-purple-200 sm:text-xl">
        48 hours of innovation, community, and creativity at the University of Georgia.
        <br className="hidden sm:block" />
        Build • Learn • Connect • Compete
      </p>
      <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
        <Link
          target="_blank"
          href="https://mybyte.ugahacks.com"
          className="rounded-full bg-gradient-to-r from-fuchsia-500 via-violet-600 to-indigo-600 px-8 py-3 text-base font-semibold text-white shadow-lg transition hover:via-pink-500 hover:to-purple-500 opacity-85"
        >
          Register
        </Link>
        <Link
          target="_blank"
          href="https://ugahacks.com"
          className="rounded-full border border-white/30 px-8 py-3 text-base font-medium text-purple-100 transition hover:bg-white/10"
        >
          Learn More
        </Link>
        <Link
          target="_blank"
          href="https://github.com/MLH/mlh-policies/blob/main/code-of-conduct.md"
          className="rounded-full border border-white/30 px-8 py-3 text-base font-medium text-purple-100 transition hover:bg-white/10"
        >
          MLH Code of Conduct
        </Link>
      </div>


      <footer className="mt-4 text-center text-sm text-purple-300">
        February 6th - 8th · Miller Learning Center · Athens, GA · Free to Attend · Food, Swag & Prizes
      </footer>
    </main >
  );
}
