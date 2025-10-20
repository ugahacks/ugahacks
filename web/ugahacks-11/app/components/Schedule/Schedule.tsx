"use client";

import Image from "next/image";
import React from "react";
import SectionEdge from "../SectionEdge/SectionEdge";

const Schedule: React.FC = () => {
  return (
    <section
      id="schedule"
      className="relative min-h-screen w-full flex flex-col items-center pt-15 pb-24"
      style={{
        background: "#A7B7D9",
      }}
    >
      <Image
        src="/textschedule.png"
        alt="Schedule"
        width={800}
        height={200}
        className="object-contain mb-8 w-96 h-24"
      />
      <Image
        src="/soon.png"
        alt="Coming Soon"
        width={400}
        height={400}
        className="object-contain"
      />
      <SectionEdge
        src="/edges/schedule-bottom.svg"
        height={180}
        overlap={36}
        alt="Schedule section torn transition"
      />
    </section>
  );
};

export default Schedule;
