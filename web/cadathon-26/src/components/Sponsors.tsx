import LinkButton from "./LinkButton";
import LogoWall, { Logo } from "./LogoWall";

const SPONSORS: Logo[] = [
  {
    name: "University of Georgia School of Computing",
    src: "/sponsors/uga-school-of-computing-mono.png",
    href: "https://computing.uga.edu/",
    width: 280,
    height: 92,
  },
  {
    name: "O'Reilly Media",
    src: "/sponsors/oreilly.svg",
    href: "https://www.oreilly.com/",
    width: 230,
    height: 44,
  },
];

/** TODO: point at the sponsorship packet once it exists. */
const SPONSORSHIP_PACKET = "#";

export default function Sponsors() {
  /* The road runs straight down the left of this section at every
     breakpoint -- the crossing that used to split this section from Partners
     now lives entirely inside Partners (see Partners.tsx), so Sponsors needs
     no anchor of its own, just the left-side gutter. LogoWall's own section
     already contributes G (24px, 80px at lg) on both sides, so the extra here
     brings the left side up to 2G + track width. */
  return (
    <LogoWall
      heading="Sponsors"
      logos={SPONSORS}
      className="bg-lime-600 pl-17.5 text-lime-950/25 lg:pl-38"
    >
      <p className="self-center text-xl sm:text-2xl">
        <LinkButton invert href={SPONSORSHIP_PACKET}>
          Sponsorship Packet
        </LinkButton>
      </p>
    </LogoWall>
  );
}
