import Image from "next/image";
import Link from "next/link";
import React from "react";
import img from "../public/generic_byte.png"; // Placeholder for the logo image
export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-violet-800 via-fuchsia-900 to-indigo-950 px-4 py-2 text-white">
      {/* Decorative blurred spotlight */}
      <span className="pointer-events-none absolute -inset-32 h-[150vh] w-[150vw] animate-pulse rounded-full bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-purple-600/30 via-fuchsia-700/10 to-transparent blur-3xl" />

      {/* Logo */}
      <Image
        src={img} // swap with the real logo when available
        alt="UGAHacks 11 Logo"
        width={320}
        height={320}
        priority
        className="mb-2 drop-shadow-2xl"
      />
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
          href="/"
          className="rounded-full bg-gradient-to-r from-fuchsia-500 via-violet-600 to-indigo-600 px-8 py-3 text-base font-semibold text-white shadow-lg transition hover:via-pink-500 hover:to-purple-500 opacity-10"
        >
          Pre‑Register
        </Link>
        <Link
          target="_blank"
          href="https://ugahacks.com"
          className="rounded-full border border-white/30 px-8 py-3 text-base font-medium text-purple-100 transition hover:bg-white/10"
        >
          Learn More
        </Link>
      </div>

      <footer className="mt-4 text-center text-sm text-purple-300">
        February 6th - 8th · Athens, GA · Free to Attend · Food, Swag & Prizes
      </footer>
    </main>
  );
}
