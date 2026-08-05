import {
  RiBatteryChargeFill,
  RiCellphoneFill,
  RiKeyboardBoxFill,
  RiSlackFill,
} from "react-icons/ri";
import { SiDevpost } from "react-icons/si";
import RoadTexture from "./RoadTexture";
import TrackAnchor from "./track/TrackAnchor";

export default function Info() {
  return (
    <div className="relative bg-zinc-900 bg-cover bg-center text-zinc-800/60">
      <RoadTexture />

      {/* Full width, so the anchor below can offset against the page gutter
          rather than the capped content column. */}
      <section className="relative z-0 px-6 py-12 sm:py-16 lg:px-20 lg:py-24">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-14 sm:gap-16 lg:gap-20">
          {/* The two blocks step away from each other on wide screens: the
              intro hangs left, the checklist hangs right. Below lg the road
              passes to the right of this one and to the left of the next, so
              each adds extra padding on that side -- the section's own px-6
              contributes G (24px) on both sides already, so the extra here
              (pr-16=64px) brings this side's total to 2G + track width
              (88px), matching the gap on the other side of the road. Above
              lg the self-start/mr-40 step already clears the road by a wide
              margin, so no equivalent lg extra is needed. */}
          <div className="flex flex-col gap-6 max-lg:pr-16 sm:gap-8 lg:mr-40 lg:self-start">
            <h1 className="font-heading text-3xl font-extrabold tracking-wide text-lime-400 text-border-5 text-border-black sm:text-4xl lg:text-5xl">
              What is a CADathon?
            </h1>

            <article className="max-w-prose rounded-lg border-2 border-black bg-lime-900 px-4 py-3 shadow-brutal sm:px-6 sm:py-5">
              <p className="text-white sm:text-lg">
                The UGAHacks CAD-a-thon is a 36 hour design competition designed
                to bridge the gap between academic theory and industry-standard
                application. By pivoting from the traditional
                &ldquo;task-based&rdquo; Makeathon to a &ldquo;
                <strong>project-based</strong>&rdquo; CAD-a-thon, we aim to
                provide a high-intensity environment where students can master
                professional-grade, cloud-native design tools while solving
                complex, real-world design challenges.
              </p>
            </article>
          </div>

          {/* The track crosses to the left gutter here. This spacer carries no
              height of its own but sits between two flex gaps, so the road gets
              a full gap's clearance above and below it. The anchor takes its y
              from the spacer's flow position and its x from the section, which
              spans the full page width. */}
          <div className="h-0">
            <TrackAnchor className="absolute left-11 lg:left-26.5" />
          </div>

          <div className="flex flex-col gap-6 max-lg:pl-16 sm:gap-8 lg:ml-40 lg:self-end">
            <h2 className="text-right font-heading text-3xl font-extrabold tracking-wide text-lime-400 text-border-5 text-border-black sm:text-4xl lg:text-5xl">
              Tools You Need
            </h2>

            <article className="max-w-prose self-end rounded-lg border-2 border-black bg-lime-900 px-4 py-3 shadow-brutal-flipped sm:px-6 sm:py-5">
              <ul className="mx-auto flex max-w-md flex-wrap justify-center gap-x-12 gap-y-6 text-lg text-white sm:gap-x-16 sm:text-xl">
                <li className="flex flex-col items-center font-medium">
                  <RiKeyboardBoxFill className="text-6xl sm:text-7xl" />
                  Laptop
                </li>
                <li className="flex flex-col items-center font-medium">
                  <RiCellphoneFill className="text-6xl sm:text-7xl" />
                  Phone
                </li>
                <li className="flex flex-col items-center font-medium">
                  <RiBatteryChargeFill className="text-6xl sm:text-7xl" />
                  Charger
                </li>
                <li className="flex flex-col items-center font-medium">
                  <RiSlackFill className="text-6xl sm:text-7xl" />
                  Slack
                </li>
                <li className="flex flex-col items-center font-medium">
                  <SiDevpost className="text-6xl sm:text-7xl" />
                  DevPost
                </li>
              </ul>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
