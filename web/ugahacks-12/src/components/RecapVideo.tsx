"use client";

import Image from "next/image";
import byteLogo from "~/assets/recap-video/byte-logo.png";
import cardboardTexture from "~/assets/recap-video/cardboard-texture.svg";
import { RECAP_YT_VIDEO_ID } from "~/config/site";
import ReinforcedTape from "./ReinforcedTape";
import YouTubeEmbed from "./YouTubeEmbed";

export default function RecapVideo() {
  return (
    <section className="relative overflow-x-clip bg-wall-brown pb-6">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 opacity-40"
        style={{
          backgroundImage: `url(${cardboardTexture.src})`,
          backgroundRepeat: "repeat",
          backgroundSize: "256px 256px",
        }}
      />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-8 sm:py-10 md:py-12 sm:gap-8 sm:px-6 md:gap-10 lg:gap-12 lg:px-8 lg:py-14">
        <ReinforcedTape className="@container mb-[calc(sin(1deg)*100cqw)] flex w-full -rotate-1 items-center justify-center gap-[1ch] bg-card-taupe py-6 text-4xl inset-shadow-sm sm:py-8 sm:text-6xl md:py-10 md:text-7xl lg:py-12 lg:text-8xl">
          <Image
            src={byteLogo}
            alt=""
            width={120}
            height={120}
            className="size-lh shrink-0 rounded-full object-cover"
          />
          <h2 className="font-heading font-bold text-ink">Recap Video</h2>
        </ReinforcedTape>

        <div className="z-20 w-full max-w-180 rounded-card border-4 border-black bg-black p-1.5 sm:p-2">
          <div className="rounded-card border-4 border-white p-1 sm:p-1.5">
            <YouTubeEmbed
              videoId={RECAP_YT_VIDEO_ID}
              title="UGAHacks 11 Recap Video"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
