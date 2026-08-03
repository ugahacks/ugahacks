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
  return (
    <LogoWall
      heading="Sponsors"
      logos={SPONSORS}
      className="bg-lime-600 text-lime-950/25"
    >
      <p className="self-center text-xl sm:text-2xl">
        <LinkButton invert href={SPONSORSHIP_PACKET}>
          Sponsorship Packet
        </LinkButton>
      </p>
    </LogoWall>
  );
}
