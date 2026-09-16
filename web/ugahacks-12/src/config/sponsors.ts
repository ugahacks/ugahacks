/**
 * Sponsors and Individual Donors, still placeholder content, because the
 * Figma's Sponsors and Donors grids also still draw blank slot cards.
 * Shaped so a real name, logo, or link can replace a slot without touching
 * `LogoGrid.tsx` or its layout. `logo` and `url` stay optional until an asset
 * and link exist.
 *
 * Nine sponsor names became legible elsewhere in the Figma on 2026-08-27
 * even though the grids stayed blank. Cox, NCR Voyix, Tractian, State Farm,
 * Palantir, AWS, Google Cloud, MLH, and IEEE all appear as named sessions in
 * `src/config/schedule.ts`, and the photo-carousel frame shows an attendee
 * whose shirt lists Cox, State Farm, NCR Voyix, Tractian, and MLH. None of
 * them are promoted into the arrays below, because the design gives no tier,
 * ordering, or logo treatment, and putting them here would mean guessing at
 * sponsorship levels. Fill these in when marketing supplies logos and tiers.
 *
 * Slot counts match the grid dimensions in the spec. Sponsors is 3x3, so
 * nine. Individual Donors is five columns with room to grow.
 */
export const SPONSORS: { name: string; logo?: string; url?: string }[] = [
  { name: "Sponsor Slot 1" },
  { name: "Sponsor Slot 2" },
  { name: "Sponsor Slot 3" },
  { name: "Sponsor Slot 4" },
  { name: "Sponsor Slot 5" },
  { name: "Sponsor Slot 6" },
  { name: "Sponsor Slot 7" },
  { name: "Sponsor Slot 8" },
  { name: "Sponsor Slot 9" },
];

export const DONORS: { name: string; logo?: string; url?: string }[] = [
  { name: "Donor Slot 1" },
  { name: "Donor Slot 2" },
  { name: "Donor Slot 3" },
  { name: "Donor Slot 4" },
  { name: "Donor Slot 5" },
];
