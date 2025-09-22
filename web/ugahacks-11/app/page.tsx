import React from "react";
import Hero from "./components/Hero";
import Tracks from "./components/Tracks/Tracks";
import Schedule from "./components/Schedule";
import Sponsors from "./components/Sponsors";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <Schedule />

      <Sponsors />
      <Tracks />
    </main>
  );
}
