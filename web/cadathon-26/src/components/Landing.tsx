import Image from "next/image";
import { RiCalendarEventFill, RiMapPinFill } from "react-icons/ri";
import bg from "~/assets/bg.png";
import cdFlag from "~/assets/cd-flag.png";
import racerByte from "~/assets/racer-byte.png";
import LinkButton from "./LinkButton";
import RoadTexture from "./RoadTexture";
import TrackAnchor from "./track/TrackAnchor";

export default function Landing() {
  return (
    <div
      className="relative max-h-256 bg-cover bg-center text-zinc-950/40"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      {/* No z-index on this wrapper: it would take the photo, the scrim, and
          the grain up with it and hide the road behind the whole section.
          Only the header below is lifted above the road (z-20). */}

      {/* Knocks the photo back so the wordmark and details stay legible. The
          FAQ uses this same treatment, only darker still. */}
      <div aria-hidden className="absolute inset-0 z-0 bg-zinc-950/45" />
      <RoadTexture />

      {/* Start of the race track, at the very top right of the page. Offset
          from the edge by G + half the (wide) track width, same formula as
          the header's own pr-* below, so the gap from edge to track equals
          the gap from track to content on this side. */}
      <TrackAnchor className="absolute top-0 right-11.75 lg:right-29" />

      {/* The road runs down the right here, so that side gets the wide gutter
          (2G + track width) and the content sits a little left of the
          viewport's center; the left side just gets G. z-40 lifts just the
          content above both the road (z-10) and the car (z-30), so the car
          passes *behind* the CD flag where the wordmark reaches into the
          lane, while the section's photo stays below the road. It has to be
          the header that's lifted, not the flag: the header would otherwise
          be a stacking context of its own and paint as one unit at its own
          level no matter what its children ask for. */}
      <header className="relative z-40 flex flex-col items-center gap-8 py-24 pr-23.5 pl-6 text-white sm:gap-10 lg:gap-12 lg:py-32 lg:pr-58 lg:pl-20">
        <div className="flex flex-col items-center gap-1 lg:flex-row lg:gap-6">
          <Image className="h-25 sm:h-32 lg:h-40" alt="" src={racerByte} />

          <div className="flex flex-col">
            {/* Where the car parks at the top of the page. The spacer takes
                its y from the flow -- the top of the wordmark row, just above
                the CD flag -- while the anchor's own offset keeps it in the
                road's lane, so it stays collinear with the run down the right
                and doesn't bend the route. */}
            <div className="h-0">
              <TrackAnchor start className="absolute right-11.75 lg:right-29" />
            </div>

            <div className="flex items-center gap-2 text-6xl sm:text-7xl lg:text-8xl">
              <h1 className="flex items-center gap-px font-wordmark font-black uppercase text-border-black">
                <span className="font-heading text-[0.3em] tracking-wider text-border-4 [writing-mode:sideways-lr]">
                  UGA
                </span>
                <span className="tracking-tighter text-border-6">Hacks</span>
              </h1>
              <Image className="h-[0.8em]" alt="" src={cdFlag} />
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

        <ul className="flex flex-col items-center font-heading text-sm font-bold text-border-3 text-border-black sm:text-lg lg:text-xl">
          <li className="flex items-center gap-[1ch] whitespace-nowrap">
            <RiCalendarEventFill className="stroke-black stroke-3" />
            October 24&ndash;25, 2026
          </li>
          <li className="flex items-center gap-[1ch] whitespace-nowrap">
            <RiMapPinFill className="stroke-black stroke-3" />
            Driftmier Engineering Center
          </li>
        </ul>

        <p className="text-xl sm:text-2xl">
          <LinkButton href="https://docs.google.com/forms/d/e/1FAIpQLSe7VHsEgkfyVJ9Z_MZB0ztxCNhfWL_72zP9Igy-Stq0byW41w/viewform">
            Pre-Register Now!
          </LinkButton>
        </p>
      </header>
    </div>
  );
}
