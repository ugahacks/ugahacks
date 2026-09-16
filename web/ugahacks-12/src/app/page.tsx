import About from "~/components/About/About";
import FilingCabinet from "~/components/FilingCabinet";
import RecapVideo from "~/components/RecapVideo";
import SponsorSection from "~/components/SponsorSection";
import SponsorTracks from "~/components/SponsorTracks/SponsorTracks";
import TapeMarquee from "~/components/TapeMarquee";
import Team from "~/components/Team/Team";
import { FAQ } from "~/components/FAQ";
import { Navbar } from "~/components/Navbar";
import { Schedule } from "~/components/Schedule";
import WhatIsUGAHacks from "~/components/WhatIsUGAHacks";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-1 flex-col">
        <TapeMarquee reverseStacking />

        {/* Hero / What Is UGAHacks */}
        <WhatIsUGAHacks />
        {/* About section with media */}
        <About />
        {/* Previous-year recap video */}
        <RecapVideo />
        {/* Sponsor tracks (folder display) */}
        <SponsorTracks />
        {/* Hackathon tracks (filing cabinet accordion) */}
        <section
          id="tracks"
          className="scroll-mt-nav bg-ink px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
          aria-labelledby="tracks-heading"
        >
          <h2
            id="tracks-heading"
            className="mb-12 text-center font-heading text-5xl font-bold text-gold sm:text-7xl lg:text-8xl"
          >
            Tracks
          </h2>
          <FilingCabinet />
        </section>
        {/* Sponsors grid */}
        <SponsorSection />
        {/* Schedule */}
        <Schedule />
        {/* FAQ */}
        <FAQ />
        {/* Team */}
        <Team />
        <TapeMarquee reverseStacking />
      </main>
    </>
  );
}