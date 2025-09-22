import React from "react";
import Hero from "./components/Hero";
import Tracks from "./components/Tracks/Tracks";
import Schedule from "./components/Schedule";
import OurTeam from "./components/OurTeam/OurTeam";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <Schedule />
      <OurTeam />
      <section className="h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">More Content Below</h2>
          <p className="text-lg">
            This section demonstrates scrolling functionality
          </p>
        </div>
      </section>
      <Tracks />
    </main>
  );
}
