import LinkButton from "./LinkButton";
import LogoWall, { Logo } from "./LogoWall";
import TrackAnchor from "./track/TrackAnchor";

/**
 * No sponsors are confirmed yet, so these render as empty placeholder slots.
 * Fill in `name`, `src`, and `href` per sponsor as they're signed -- adding
 * `href` is what turns a slot into a link with the hover scale.
 */
const SPONSORS: Logo[] = [{}, {}, {}, {}, {}];

/** TODO: point at the sponsorship packet once it exists. */
const SPONSORSHIP_PACKET = "#";

export default function Sponsors() {
  /* The road runs down the left of this section below lg and down the right
     above it, then crosses along the seam with Partners -- the anchor sits on
     the boundary itself, so the horizontal run divides the two sections. The
     extra bottom padding below lg is that crossing's clearance. */
  return (
    <LogoWall
      heading="Sponsors"
      logos={SPONSORS}
      className="bg-lime-600 text-lime-950/25 max-lg:pb-6 max-lg:pl-8"
      anchor={
        <TrackAnchor className="absolute right-9 bottom-0 lg:right-auto lg:left-12" />
      }
    >
      <p className="self-center text-xl sm:text-2xl">
        <LinkButton invert href={SPONSORSHIP_PACKET}>
          Sponsorship Packet
        </LinkButton>
      </p>
    </LogoWall>
  );
}
