"use client";

import { useRef, useState, useSyncExternalStore } from "react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import Checkers from "./Checkers";
import RoadTexture from "./RoadTexture";

/**
 * Programming carried over from Makeathon II (web/makeathon-2), remapped onto
 * the CADathon dates. Times, locations, and event names are unchanged, so the
 * CAD-specific sessions still need swapping in -- one object per day, one row
 * per event. Nothing else in this file needs to change: the passes, carousel,
 * and dots all derive from this array.
 */
const SCHEDULE = [
  {
    label: "Day 1",
    date: "Saturday, October 24",
    iso: "2026-10-24",
    events: [
      {
        what: "Event Check-in",
        when: "9:00am - 10:30am",
        where: "East Commons",
      },
      { what: "Breakfast", when: "9:00am - 10:30am", where: "East Commons" },
      { what: "Opening Ceremony", when: "10:30am - 11:00am", where: "1453" },
      { what: "First Time Makers", when: "11:00am - 12:00pm", where: "1456" },
      { what: "Lunch", when: "12:00pm - 1:00pm", where: "East Commons" },
      { what: "Chill Space", when: "1:00pm - 8:00pm", where: "1401" },
      { what: "Painting Workshop", when: "1:00pm - 8:00pm", where: "1460" },
      { what: "Arduino", when: "1:00pm - 2:00pm", where: "1456" },
      { what: "3D Printing", when: "2:00pm - 3:00pm", where: "1405" },
      {
        what: "Sustainable Making Workshop + GDG",
        when: "3:00pm - 4:00pm",
        where: "1456",
      },
      {
        what: "GDG Workshop #1 - Internet of Things",
        when: "4:00pm - 5:00pm",
        where: "1405",
      },
      { what: "Dinner", when: "6:00pm - 7:00pm", where: "East Commons" },
      { what: "End of Day", when: "9:00pm", where: "East Commons" },
    ],
  },
  {
    label: "Day 2",
    date: "Sunday, October 25",
    iso: "2026-10-25",
    events: [
      { what: "Breakfast", when: "9:00am - 10:00am", where: "East Commons" },
      {
        what: "GDG Workshop #2 - Intro to GCP",
        when: "10:00am - 11:00am",
        where: "1456",
      },
      {
        what: "Recycled Roller Coaster",
        when: "11:00am - 12:00pm",
        where: "1290",
      },
      { what: "Lunch", when: "12:00pm - 1:00pm", where: "East Commons" },
      { what: "Chill Space", when: "1:00pm - 6:00pm", where: "1401" },
      { what: "Egg Drop", when: "1:00pm - 2:00pm", where: "1290" },
      {
        what: "SSRL: Antenna Workshop",
        when: "2:00pm - 3:00pm",
        where: "1456",
      },
      { what: "Recycled Sailboat", when: "3:00pm - 4:00pm", where: "1290" },
      { what: "Beyond the Makeathon", when: "5:00pm - 6:00pm", where: "1456" },
      {
        what: "Judging + Submission Deadline",
        when: "6:00pm",
        where: "Devpost",
      },
      { what: "Project Expo", when: "6:30pm - 8:00pm", where: "East Commons" },
      { what: "Closing Ceremony", when: "8:00pm - 9:00pm", where: "1453" },
    ],
  },
];
type Day = (typeof SCHEDULE)[number];

/** Solid offset shadow plus a soft one to lift the pass off the page. Day 2
 *  sits to the right of day 1, so it throws its shadow the opposite way. */
const PASS_SHADOW = [
  "shadow-[-0.5rem_0.5rem_0_0_var(--color-black),0_0.75rem_1.5rem_-0.5rem_rgb(0_0_0/0.45)]",
  "shadow-[0.5rem_0.5rem_0_0_var(--color-black),0_0.75rem_1.5rem_-0.5rem_rgb(0_0_0/0.45)]",
];

/**
 * One credential. `tilt` rotates the whole pass -- lanyard included, so the
 * strap stays askew with the card it's hanging from. Fills its slide's height
 * so both passes match regardless of how many rows each day carries.
 */
function PitPass({
  day,
  tilt,
  shadow,
}: {
  day: Day;
  tilt: string;
  shadow: string;
}) {
  return (
    <div className={`flex h-full flex-col ${tilt}`}>
      {/* Lanyard: strap converging into a clip that tucks behind the pass.
          Swap for real art by replacing this <svg>. */}
      <svg
        viewBox="0 0 80 56"
        className="relative z-10 mx-auto -mb-2 h-12 w-20 text-pink-900 sm:h-14 sm:w-24"
        aria-hidden
      >
        <path
          d="M10 0 L34 38 L46 38 L70 0"
          fill="none"
          stroke="currentColor"
          strokeWidth="7"
          strokeLinejoin="round"
        />
        <rect x="31" y="34" width="18" height="16" rx="3" fill="#52525b" />
        <rect x="36" y="41" width="8" height="4" rx="1.5" fill="#fafafa" />
      </svg>

      <div
        className={`flex flex-1 flex-col overflow-hidden rounded-xl border-2 border-black ${shadow}`}
      >
        {/* Knocked back off pure white so the checkers read as light gray. */}
        <div className="h-8 brightness-90">
          <Checkers />
        </div>

        <div className="flex flex-1 bg-white">
          <div className="w-3 shrink-0 bg-red-600 sm:w-5" />

          <div className="min-w-0 flex-1 px-3 py-4 sm:px-5 sm:py-6">
            <p className="font-heading text-xs font-bold tracking-widest text-red-600 uppercase sm:text-sm">
              {day.label}
            </p>
            <p className="font-tagline text-lg font-bold text-zinc-900 italic sm:text-xl">
              {day.date}
            </p>

            <table className="mt-3 w-full border-collapse text-left">
              <thead>
                <tr className="border-b-2 border-red-600">
                  <th className="py-1 pr-2 font-heading text-[0.6rem] font-bold tracking-widest text-red-600 uppercase sm:text-xs">
                    What
                  </th>
                  <th className="py-1 pr-2 font-heading text-[0.6rem] font-bold tracking-widest text-red-600 uppercase sm:text-xs">
                    When
                  </th>
                  <th className="py-1 font-heading text-[0.6rem] font-bold tracking-widest text-red-600 uppercase sm:text-xs">
                    Where
                  </th>
                </tr>
              </thead>
              <tbody>
                {day.events.map((e) => (
                  <tr
                    key={e.what}
                    className="border-b border-zinc-200 last:border-0"
                  >
                    <td className="py-1.5 pr-2 text-xs font-semibold text-zinc-900 sm:text-sm">
                      {e.what}
                    </td>
                    <td className="py-1.5 pr-2 text-xs whitespace-nowrap text-zinc-600 sm:text-sm">
                      {e.when}
                    </td>
                    <td className="py-1.5 text-xs text-zinc-600 sm:text-sm">
                      {e.where}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="w-3 shrink-0 bg-red-600 sm:w-5" />
        </div>
      </div>
    </div>
  );
}

/** Day 1 leads by default; during the event the current day wins. */
const DEFAULT_FRONT = 0;

/** Matches the lg breakpoint, where the passes stop being a carousel and sit
 *  side by side. Server-rendered as false, so the markup starts in the
 *  carousel arrangement and the client corrects it on hydration. */
function useSideBySide() {
  return useSyncExternalStore(
    (onChange) => {
      const mq = window.matchMedia("(min-width: 64rem)");
      mq.addEventListener("change", onChange);
      return () => mq.removeEventListener("change", onChange);
    },
    () => window.matchMedia("(min-width: 64rem)").matches,
    () => false,
  );
}

export default function Schedule() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [day, setDay] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [hovered, setHovered] = useState<number | null>(null);

  // The server can't know the visitor's local date, so it renders the default
  // and the client swaps in the live answer. useSyncExternalStore expresses
  // that split directly, without a hydration mismatch or a setState-in-effect.
  const today = useSyncExternalStore(
    () => () => {},
    () => {
      const iso = new Date().toLocaleDateString("en-CA");
      const i = SCHEDULE.findIndex((d) => d.iso === iso);
      return i === -1 ? DEFAULT_FRONT : i;
    },
    () => DEFAULT_FRONT,
  );

  // Side by side, pointing at a pass brings it forward and the last one
  // pointed at stays put. In the carousel there is nothing to choose between,
  // so whichever pass is scrolled into view is the one shown at full size.
  const sideBySide = useSideBySide();
  const front = sideBySide ? (hovered ?? picked ?? today) : day;

  /**
   * Below lg the passes live in a scroll-snap track, so the arrows and dots
   * drive it by scrolling rather than by transform -- which lets the same
   * markup lay the two passes out side by side at lg with no transform to
   * undo.
   */
  function go(index: number) {
    const el = trackRef.current;
    if (el) el.scrollTo({ left: index * el.clientWidth, behavior: "smooth" });
  }

  function syncActive() {
    const el = trackRef.current;
    if (el) setDay(Math.round(el.scrollLeft / el.clientWidth));
  }

  return (
    <div className="relative bg-pink-500 bg-cover bg-center text-pink-950/25">
      <RoadTexture />

      <section className="relative z-0 mx-auto flex w-full max-w-5xl flex-col gap-8 px-4 py-12 sm:gap-10 sm:px-8 sm:py-16 lg:py-24">
        <h1 className="text-center font-heading text-3xl font-extrabold tracking-wide text-white text-border-5 text-border-black sm:text-4xl lg:text-5xl">
          Schedule
        </h1>

        <div className="flex flex-col items-center gap-6">
          <div className="relative w-full">
            <div
              ref={trackRef}
              onScroll={syncActive}
              className="flex w-full snap-x snap-mandatory [scrollbar-width:none] overflow-x-auto overflow-y-hidden scroll-smooth py-12 lg:snap-none lg:items-stretch lg:justify-center lg:overflow-visible"
            >
              {SCHEDULE.map((d, i) => (
                <div
                  key={d.label}
                  onMouseEnter={() => {
                    setHovered(i);
                    setPicked(i);
                  }}
                  onMouseLeave={() => setHovered(null)}
                  className={`w-full shrink-0 snap-center px-6 transition duration-200 sm:px-8 lg:w-1/2 ${
                    i > 0 ? "lg:-ml-16 lg:translate-y-10" : ""
                  } ${front === i ? "z-20" : "z-10 scale-95 opacity-70"}`}
                >
                  <PitPass
                    day={d}
                    tilt={i === 0 ? "-rotate-4" : "rotate-4"}
                    shadow={PASS_SHADOW[i === 0 ? 0 : 1]}
                  />
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={() => go(day - 1)}
              disabled={day === 0}
              aria-label="Previous day"
              className="absolute top-1/2 -left-1 z-30 flex size-9 -translate-y-1/2 items-center justify-center rounded-full border-2 border-black bg-white text-xl text-pink-950 shadow-brutal-flipped transition disabled:hidden sm:-left-3 sm:size-11 sm:text-2xl lg:hidden"
            >
              <RiArrowLeftSLine />
            </button>

            <button
              type="button"
              onClick={() => go(day + 1)}
              disabled={day === SCHEDULE.length - 1}
              aria-label="Next day"
              className="absolute top-1/2 -right-1 z-30 flex size-9 -translate-y-1/2 items-center justify-center rounded-full border-2 border-black bg-white text-xl text-pink-950 shadow-brutal transition disabled:hidden sm:-right-3 sm:size-11 sm:text-2xl lg:hidden"
            >
              <RiArrowRightSLine />
            </button>
          </div>

          <ul className="flex items-center gap-3 lg:hidden">
            {SCHEDULE.map((d, i) => (
              <li key={d.label}>
                <button
                  type="button"
                  onClick={() => go(i)}
                  aria-label={`Show ${d.label}, ${d.date}`}
                  aria-current={i === day || undefined}
                  className="block size-3 rounded-full border-2 border-black bg-white transition aria-current:bg-pink-950"
                />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
