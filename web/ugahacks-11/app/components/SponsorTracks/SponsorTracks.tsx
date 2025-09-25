import React from "react";
// import SponsorLogo from "./SponsorLogo";
import SponsorTrackCard from "./SponsorTrackCard";

// Array of track data for dynamic rendering
const sponsorTracks = [
  {
    logo: "/generic_byte.png",
    title: "Sponsorship Track #1",
    description:
      "???",
  },
  {
    logo: "/generic_byte.png",
    title: "Sponsorship Track #2",
    description:
      "???",
  },
  {
    logo: "/generic_byte.png",
    title: "Sponsorship Track #3",
    description:
      "???",
  },
];

const SponsorTracks: React.FC = () => {
  return (
    <section
      id="sponsor-tracks"
      className="relative w-full py-16 px-4 md:px-8 lg:px-16 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url("/sponsorTracks.png")' }}
    >
      <div className="max-w-6xl mx-auto ">
        {/* Title */}
        <h1 className="font-amarante text-5xl sm:text-6xl md:text-7xl font-bold text-center mb-16 text-[#3e4c8a] font-encode max-w-full mx-auto">
          Sponsor Tracks
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
          {sponsorTracks.map((track, idx) => (
            <SponsorTrackCard
              key={idx}
              logo={track.logo}
              title={track.title}
              description={track.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SponsorTracks;
