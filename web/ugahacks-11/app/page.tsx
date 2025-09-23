import React from "react";
import About from "./components/About/About";
import Hero from "./components/Hero";
import Schedule from "./components/Schedule";
import SponsorTracks from "./components/SponsorTracks/SponsorTracks";
import Tracks from "./components/Tracks/Tracks";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <About />
      <Tracks />
      <SponsorTracks />
      <Schedule />

      <section className="h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">More Content Below</h2>
          <p className="text-lg">
            This section demonstrates scrolling functionality
          </p>
        </div>
      </section>
      
    </main>
  );
}
