import Image from "next/image";
import { REGISTER_URL } from "~/config/site";

/**
 * Opening chalkboard scene. Keeping the approved composite as one canvas
 * preserves its intentionally distressed textures, hand-cut wordmark, and
 * register tray at every screen size.
 */
export default function Hero() {
  return (
    <section
      id="top"
      aria-label="UGAHacks 12"
      className="relative isolate aspect-4/3 w-full overflow-hidden bg-tile-yellow sm:aspect-3/2 md:aspect-[982/620]"
    >
      <Image
        src="/Screenshot 2026-09-16 194912.png"
        alt="UGAHacks 12: February 5–7, 2027 at the UGA Miller Learning Center"
        width={982}
        height={697}
        priority
        sizes="100vw"
        className="pointer-events-none absolute left-1/2 top-[-12.42%] h-[112.42%] w-auto max-w-none -translate-x-1/2 select-none"
      />

      {/* The label is part of the illustration. Its hit area follows the
          artwork as the canvas crops progressively at each breakpoint. */}
      <a
        href={REGISTER_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Register for UGAHacks 12"
        className="absolute top-[80.2%] left-[5.2%] h-[13.1%] w-[38.5%] rounded-card outline-offset-4 focus-visible:outline-4 focus-visible:outline-gold sm:left-[10.2%] sm:w-[34.2%] md:left-[12.3%] md:w-[32.4%]"
      >
        <span className="sr-only">Register here</span>
      </a>
    </section>
  );
}
