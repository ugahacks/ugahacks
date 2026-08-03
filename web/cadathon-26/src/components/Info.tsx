import {
  RiBatteryChargeFill,
  RiCellphoneFill,
  RiKeyboardBoxFill,
  RiSlackFill,
} from "react-icons/ri";
import { SiDevpost } from "react-icons/si";
import RoadTexture from "./RoadTexture";

export default function Info() {
  return (
    <div className="relative bg-zinc-900 bg-cover bg-center text-zinc-800/60">
      <RoadTexture />

      <section className="relative z-0 mx-auto flex w-full max-w-5xl flex-col gap-12 px-4 py-12 sm:gap-16 sm:px-8 sm:py-16 lg:gap-20 lg:py-24">
        {/* The two blocks step away from each other on wide screens: the
            intro hangs left, the checklist hangs right. */}
        <div className="flex flex-col gap-6 sm:gap-8 lg:mr-40 lg:self-start">
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

        <div className="flex flex-col gap-6 sm:gap-8 lg:ml-40 lg:self-end">
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
      </section>
    </div>
  );
}
