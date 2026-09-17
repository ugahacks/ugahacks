import Image from "next/image";

/**
 * "What is UGAHacks?" section with argyle background pattern.
 *
 * Mobile uses a real stacked card so the heading and copy stay readable.
 * From the medium breakpoint onward, the section returns to the supplied
 * 1440 × 1024 desktop artwork and its original proportions.
 */
export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-nav w-full"
    >
      <div className="bg-argyle px-4 py-12 sm:px-8 sm:py-16 md:hidden">
        <div className="mx-auto max-w-xl bg-board-green px-5 py-8 text-center shadow-lg sm:px-8 sm:py-10">
          <h2 className="font-heading text-4xl leading-tight font-bold tracking-case text-gold sm:text-5xl">
            What is UGAHacks?
          </h2>

          <div className="mt-7 space-y-5 text-base leading-relaxed font-bold tracking-case text-tape-teal sm:mt-9 sm:space-y-6 sm:text-lg">
            <AboutCopy />
          </div>
        </div>
      </div>

      <div className="relative hidden aspect-[1440/1024] w-full place-items-center overflow-hidden px-[7.5vw] py-[8vw] md:grid">
        <Image
          src="/About-Section-Background.png"
          alt=""
          fill
          sizes="100vw"
          className="pointer-events-none absolute inset-0 object-cover object-center"
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto w-full max-w-[1150px] translate-y-[6vw] text-center">
          <div className="space-y-6 text-xl leading-[1.5] font-bold tracking-case text-tape-teal lg:space-y-8 lg:text-2xl xl:space-y-10 xl:text-4xl">
            <AboutCopy />
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutCopy() {
  return (
    <>
      <p>
        UGA Hacks is an annual hackathon organized by students at the
        University of Georgia in Athens, Georgia. Hackathons are all about
        dedicated people coming together to create something amazing in an epic
        36 - hour investigation.
      </p>
      <p>
        Cracking the case is the main objective, but that&apos;s not all there
        is. We&apos;ll have mentors, free food, game competitions, workshops,
        and more – even a session for anyone who still needs to recruit their
        partner in crime.
      </p>
    </>
  );
}
