"use client";

import React from "react";

const Sponsors: React.FC = () => {
  return (
    <section
      id="sponsors"
      className="relative w-full overflow-hidden"
      style={{ height: "100vh" }}
    >
      {/* Background Image Container */}
      <div
        className="absolute inset-0 w-full h-full bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/Sponsor.png')",
          backgroundSize: "100% 100%"
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-start pt-8">
        {/* Main content */}
        <div className="w-full max-w-6xl mx-auto px-4 md:px-8">
        {/* Title */}
        <h1
          className="font-amarante text-[5.5vw] text-white leading-none text-center mb-4"
          style={{ textShadow: "rgba(0,0,0,0.25) 0px 4px 4px" }}
        >
          Sponsors
        </h1>

        {/* Sponsor grid */}
        <div className="grid grid-cols-3 gap-2 md:gap-4 lg:gap-6 mb-3 md:mb-6">
          {/* Top row */}
          <div className="bg-white rounded-lg h-20 md:h-20 lg:h-24 shadow-lg"></div>
          <div className="bg-white rounded-lg h-20 md:h-20 lg:h-24 shadow-lg"></div>
          <div className="bg-white rounded-lg h-20 md:h-20 lg:h-24 shadow-lg"></div>

          {/* Middle row */}
          <div className="bg-white rounded-lg h-20 md:h-20 lg:h-24 shadow-lg"></div>
          <div className="bg-white rounded-lg h-20 md:h-20 lg:h-24 shadow-lg"></div>
          <div className="bg-white rounded-lg h-20 md:h-20 lg:h-24 shadow-lg"></div>

          {/* Bottom row */}
          <div className="bg-white rounded-lg h-20 md:h-20 lg:h-24 shadow-lg"></div>
          <div className="bg-white rounded-lg h-20 md:h-20 lg:h-24 shadow-lg"></div>
          <div className="bg-white rounded-lg h-20 md:h-20 lg:h-24 shadow-lg"></div>
        </div>

        {/* Sponsorship packet button */}
        <div className="flex justify-center mb-4">
          <button className="text-gray-800 font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl" style={{ backgroundColor: "#f5f2e8" }}>
            Sponsorship Packet
          </button>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;