import LogoWall, { Logo } from "./LogoWall";
import TrackAnchor from "./track/TrackAnchor";

/**
 * Partner orgs. Logos render as named placeholder slots until each org's
 * media kit lands -- drop the file in public/partners/ and set `src`, plus
 * `href` to make the slot a link.
 */
const PARTNERS: Logo[] = [
  { name: "Biomedical Engineering Society", abbr: "BMES" },
  { name: "UGA Motorsports" },
  { name: "American Society of Mechanical Engineers", abbr: "ASME" },
  { name: "National Society of Black Engineers", abbr: "NSBE" },
  { name: "Society of Hispanic Professional Engineers", abbr: "SHPE" },
  { name: "Society of Women Engineers", abbr: "SWE" },
];

export default function Partners() {
  // Same detour pattern as FAQ: the road crosses into the right gutter in
  // this section's own top padding, runs down the right for its whole body,
  // then crosses back to the left in the bottom padding -- so Sponsors
  // (before) and Footer (after) both stay in the plain left lane and need no
  // anchor of their own. This replaces the old seam crossing that used to
  // split Sponsors and Partners down the middle.
  return (
    <LogoWall
      heading="Partners"
      logos={PARTNERS}
      // The extra vertical padding is exactly one track width (46px, 72px at
      // lg), which is what the crossings eat out of the top and bottom.
      // LogoWall's own py-* is then what's left between road and content --
      // the same clear space Sponsors has, which has no crossing to pay for.
      className="bg-pink-500 py-11.5 pr-17.5 text-pink-950/25 lg:py-18 lg:pr-38"
      anchor={
        <>
          <TrackAnchor className="absolute top-5.75 right-11.75 lg:top-9 lg:right-29" />
          <TrackAnchor className="absolute bottom-5.75 left-11.75 lg:bottom-9 lg:left-29" />
        </>
      }
    />
  );
}
