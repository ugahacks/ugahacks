import Image from "next/image";

/**
 * "What is UGAHacks?" section with argyle background pattern.
 *
 * Displays the event overview in a centered container with:
 * - Full-bleed background image (What-Section-Background.png)
 * - Yellow heading (110px, Courier Prime Bold)
 * - Teal body copy (36px, Bold, centered)
 * - Semi-transparent green container for content
 *
 * Dimensions: 1440px × 1024px (desktop)
 * Colors from Page 2 tokens: gold, tape-teal, board-green
 */
export default function WhatIsUGAHacks() {
  return (
    <section
      id="what-is-ugahacks"
      className="scroll-mt-nav relative flex min-h-[1024px] w-full items-center justify-center overflow-hidden px-6 py-10 sm:px-10 md:py-16 lg:px-6"
    >
      {/* Full-bleed background image */}
      <Image
        src="/What-Section-Background.png"
        alt=""
        fill
        priority
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        aria-hidden="true"
      />

      {/* Text overlay on background */}
      <div className="relative z-10 mx-auto w-[1150px] text-center">
        <div className="space-y-6">
          <p
            className="text-[36px] font-bold tracking-case text-tape-teal leading-[1.5] pt-20"
            style={{
              letterSpacing: "-0.011em",
            }}
          >
            UGA Hacks is an annual hackathon organized by students at the
            University of Georgia in Athens, Georgia. Hackathons are all about
            dedicated people coming together to create something amazing in an
            epic 36 - hour investigation.
          </p>
          <p
            className="text-[36px] font-bold tracking-case text-tape-teal leading-[1.5] pt-10"
            style={{
              letterSpacing: "-0.011em",
            }}
          >
            Cracking the case is the main objective, but that&apos;s not all
            there is. We&apos;ll have mentors, free food, game competitions,
            workshops, and more – even a session for anyone who still needs to
            recruit their partner in crime.
          </p>
        </div>
      </div>
    </section>
  );
}
