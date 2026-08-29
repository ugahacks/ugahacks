import {
  ABOUT_BADGE,
  ABOUT_BODY,
  ABOUT_HEADING,
  ABOUT_VIDEO_URL,
} from "~/config/about";
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
      className="scroll-mt-nav bg-argyle px-6 py-16 sm:px-10 md:py-24 lg:px-20"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-14">
        {/* Text card */}
        <div className="bg-paper px-6 py-10 text-center sm:px-10">
          <span className="rounded-card inline-block bg-white px-4 py-1.5 text-sm font-bold tracking-case text-ink/80 md:text-label">
            {ABOUT_BADGE}
          </span>

          <h2 className="mt-6 font-heading text-4xl font-bold tracking-case text-sepia sm:text-6xl lg:text-heading-lg">
            {ABOUT_HEADING}
          </h2>

          <div className="mt-6 space-y-4">
            {ABOUT_BODY.map((paragraph) => (
              <p
                key={paragraph}
                className="text-xl font-bold tracking-case text-tape-teal sm:text-2xl lg:text-body-lg"
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
