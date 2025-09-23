import React from "react";
import SponsorLogo from "./SponsorLogo";
import SponsorTrackCard from "./SponsorTrackCard";

// Array of track data for dynamic rendering
const sponsorTracks = [
  {
    logo: "/generic_byte.png",
    title: "Sponsorship Track #1",
    description:
      "This track focuses on building applications that leverage GitHub's platform and services. Participants will have the opportunity to create innovative solutions that enhance collaboration, code management, and developer productivity using GitHub's APIs and tools.",
  },
  {
    logo: "/generic_byte.png",
    title: "Sponsorship Track #2",
    description:
      "Build solutions using Google Cloud, AI, or Firebase. This track encourages projects that utilize Google's ecosystem to solve real-world problems and push the boundaries of what's possible with cloud technology.",
  },
  {
    logo: "/generic_byte.png",
    title: "Sponsorship Track #3",
    description:
      "Innovate with Microsoft Azure, Teams, or GitHub Copilot. Participants can create tools or integrations that enhance productivity, collaboration, or leverage AI capabilities within the Microsoft ecosystem.",
  },
];

const SponsorTracks: React.FC = () => {
  return (
    <section
      id="sponsor-tracks"
      className="relative w-full py-16 px-4 md:px-8 lg:px-16 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url("/sponsorTracks.png")' }}
    >
      <div className="max-w-6xl mx-auto">
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
