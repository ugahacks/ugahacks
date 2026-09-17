import Image from "next/image";
import { REGISTER_URL } from "~/config/site";

/**
 * Opening chalkboard scene. The supplied foreground contains the brick wall
 * and chalkboard; the transparent background export provides the event copy
 * and registration tray above it.
 */
export default function Hero() {
  return (
    <section
      id="top"
      aria-label="UGAHacks 12"
      className="relative isolate aspect-4/3 w-full overflow-hidden bg-tile-yellow sm:aspect-3/2 md:aspect-[1440/906]"
    >
      <Image
        src="/hero-foreground.png"
        alt="UGAHacks 12 chalkboard"
        width={1440}
        height={1024}
        priority
        sizes="100vw"
        className="pointer-events-none absolute left-1/2 top-[-13.03%] z-0 h-[113.03%] w-auto max-w-none -translate-x-1/2 select-none"
      />
      <Image
        src="/Hero-background.png"
        alt=""
        width={1440}
        height={1024}
        priority
        sizes="100vw"
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[-13.03%] z-10 h-[113.03%] w-auto max-w-none -translate-x-1/2 select-none"
      />

      {/* The label is part of the illustration. Its hit area follows the
          artwork as the canvas crops progressively at each breakpoint. */}
      <a
        href={REGISTER_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Register for UGAHacks 12"
        className="absolute top-[80.2%] left-[5.2%] z-20 h-[13.1%] w-[38.5%] rounded-card outline-offset-4 focus-visible:outline-4 focus-visible:outline-gold sm:left-[10.2%] sm:w-[34.2%] md:left-[12.3%] md:w-[32.4%]"
      >
        <span className="sr-only">Register here</span>
      </a>
    </section>
  );
}
