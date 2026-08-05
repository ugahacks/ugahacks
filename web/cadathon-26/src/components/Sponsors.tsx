import LinkButton from "./LinkButton";
import LogoWall, { Logo } from "./LogoWall";

/**
 * No sponsors are confirmed yet, so these render as empty placeholder slots.
 * Fill in `name`, `src`, and `href` per sponsor as they're signed -- adding
 * `href` is what turns a slot into a link with the hover scale.
 */
const SPONSORS: Logo[] = [{}, {}, {}, {}, {}];

/** TODO: point at the sponsorship packet once it exists. */
const SPONSORSHIP_PACKET = "#";

export default function Sponsors() {
  /* The road runs straight down the left of this section at every
     breakpoint -- the crossing that used to split this section from Partners
     now lives entirely inside Partners (see Partners.tsx), so Sponsors needs
     no anchor of its own, just the left-side gutter. LogoWall's own section
     already contributes G (32px, 80px at lg) on both sides, so the extra here
     brings the left side up to 2G + track width. */
  return (
    <LogoWall
      heading="Sponsors"
      logos={SPONSORS}
      className="bg-lime-600 pl-16 text-lime-950/25 lg:pl-33"
    >
      <p className="self-center text-xl sm:text-2xl">
        <LinkButton invert href={SPONSORSHIP_PACKET}>
          Sponsorship Packet
        </LinkButton>
      </p>
    </LogoWall>
  );
}
