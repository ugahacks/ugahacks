"use client";
import React from "react";
import TrackCard from "./TrackCard";
import { CARD_POSITIONS } from "./trackConstants";
import { tracksData } from "./tracksData";

const Tracks: React.FC = () => {
  return (
    <section
      className="relative w-full overflow-y-auto"
      style={{ height: "75vw" }}
    >
      {/* Background Image Container */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat pt-10"
        style={{ backgroundImage: "url('/Tracks.png')" }}
      />

      {/* Content Container */}
      <div className="relative z-10 w-full h-full">
        {/* Title */}
        <div className="absolute w-full text-center" style={{ top: "2%" }}>
          <h1
            className="font-amarante text-[5.5vw] text-white leading-none"
            style={{ textShadow: "rgba(0,0,0,0.25) 0px 4px 4px" }}
          >
            Tracks
          </h1>
        </div>

        {/* Cards Grid */}
        {tracksData.map((track, index) => (
          <div 
            key={`${track.cornerCharacter}-${track.mainText}`}
            className="absolute" 
            style={CARD_POSITIONS[index]}
          >
            <TrackCard {...track} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tracks;
