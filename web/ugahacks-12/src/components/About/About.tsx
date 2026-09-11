import {
  ABOUT_BADGE,
  ABOUT_BODY,
  ABOUT_HEADING,
  ABOUT_VIDEO_URL,
} from "~/config/about";
import Image from "next/image";
import AboutMedia from "./AboutMedia";

/**
 * "What is UGAHacks?" -- placed exactly where ugahacks-11's <About /> sits:
 * the first section inside <main>, directly after Hero (app/page.tsx there
 * renders Hero, a transition strip, then About, then Tracks). Hero doesn't
 * exist on this bootstrap yet, so About renders first for now; slot Hero
 * above it, not after, once it's built.
 *
 * See src/config/about.ts for the note on why this follows globals.css's
 * "Page 2" tokens for colour/type/ground over the raw layer CSS's
 * Page-1-looking numbers, while following that layer CSS for structure.
 */
export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-nav relative flex min-h-svh items-center overflow-hidden bg-paper px-6 py-10 sm:px-10 md:py-16 lg:px-6"
    >
      <Image
        src="/TopVector.png"
        alt=""
        width={1439}
        height={52}
        priority
        className="pointer-events-none absolute inset-x-0 top-0 z-10 h-auto w-full"
        aria-hidden="true"
      />
      <Image
        src="/BottomVector.png"
        alt=""
        width={1440}
        height={52}
        priority
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-auto w-full"
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto grid w-full max-w-[1388px] grid-cols-1 items-center gap-10 md:grid-cols-[minmax(0,600px)_minmax(0,782px)] md:justify-between md:gap-8">
        <div className="text-center md:text-left">
          <span className="rounded-card inline-block bg-white px-2 py-0.5 text-sm font-bold tracking-case text-ink/80 md:w-[416px] md:px-2 md:text-[32px] md:leading-[1.5]">
            {ABOUT_BADGE}
          </span>

          <h2 className="mt-6 font-heading text-4xl font-bold tracking-case text-sepia sm:text-5xl md:text-[49.4545px] md:leading-[1.5]">
            {ABOUT_HEADING}
          </h2>

          <div className="mt-6 space-y-4 md:max-w-[600px]">
            {ABOUT_BODY.map((paragraph) => (
              <p
                key={paragraph}
                className="text-xl font-bold tracking-case text-tape-teal sm:text-2xl md:text-[25px] md:leading-[1.5]"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Video + photo */}
        <AboutMedia videoUrl={ABOUT_VIDEO_URL} />
      </div>
    </section>
  );
}
