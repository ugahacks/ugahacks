import { RiCalendarEventFill, RiMapPinFill } from "react-icons/ri";
import LinkButton from "./LinkButton";
import RoadTexture from "./RoadTexture";

export default function Landing() {
  return (
    <div className="relative max-h-256 bg-[url(/bg.png)] bg-cover bg-center text-zinc-950/40">
      {/* Knocks the photo back so the wordmark and details stay legible. The
          FAQ uses this same treatment, only darker still. */}
      <div aria-hidden className="absolute inset-0 z-0 bg-zinc-950/45" />
      <RoadTexture />

      <header className="relative flex flex-col items-center gap-8 py-24 text-white sm:gap-10 lg:gap-12 lg:py-32">
        <div className="flex flex-col items-center gap-1 lg:flex-row lg:gap-6">
          <img className="h-25 sm:h-32 lg:h-40" alt="" src="/racer-byte.png" />

          <div className="flex flex-col">
            <div className="flex items-center gap-2 text-6xl sm:text-7xl lg:text-8xl">
              <h1 className="flex items-center gap-px font-wordmark font-black uppercase text-border-black">
                <span className="font-heading text-[0.3em] tracking-wider text-border-4 [writing-mode:sideways-lr]">
                  UGA
                </span>
                <span className="tracking-tighter text-border-6">Hacks</span>
              </h1>
              <img className="h-[0.8em]" alt="" src="/cd-flag.png" />
            </div>
            <p className="flex items-center font-tagline text-2xl font-bold tracking-widest text-pink-300 uppercase italic text-border-4 text-border-black sm:text-3xl lg:text-4xl">
              <span>Drive</span>
              {/* Rules bridging the words. Sized in em so they track the
                  tagline, and inset so they never touch the lettering. */}
              <span
                aria-hidden
                className="mx-[0.45em] h-[0.14em] min-h-0.75 flex-1 border border-black bg-pink-300"
              />
              <span>Design</span>
              <span
                aria-hidden
                className="mx-[0.45em] h-[0.14em] min-h-0.75 flex-1 border border-black bg-pink-300"
              />
              <span>Forward</span>
            </p>
          </div>
        </div>

        <ul className="flex flex-col items-center font-heading text-lg font-bold text-border-3 text-border-black sm:text-xl lg:text-2xl">
          <li className="flex items-center gap-[1ch]">
            <RiCalendarEventFill className="stroke-black stroke-3" />
            October 24&ndash;25, 2026
          </li>
          <li className="flex items-center gap-[1ch]">
            <RiMapPinFill className="stroke-black stroke-3" />
            Driftmier Engineering Center
          </li>
        </ul>

        <p className="text-xl sm:text-2xl">
          <LinkButton href="/">Register Now!</LinkButton>
        </p>
      </header>
    </div>
  );
}
