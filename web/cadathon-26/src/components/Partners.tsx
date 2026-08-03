import LogoWall, { Logo } from "./LogoWall";

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
  return (
    // Mirrors Sponsors: extra top padding below lg clears the track crossing
    // that runs along the seam between the two sections, and the road comes
    // down this section's right below lg, its left above.
    <LogoWall
      heading="Partners"
      logos={PARTNERS}
      className="bg-pink-500 text-pink-950/25 max-lg:pt-6 max-lg:pr-8"
    />
  );
}
