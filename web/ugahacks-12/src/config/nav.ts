/**
 * Navbar section links. Anchor ids must match the `id`s the sections
 * render; Hero is `#top`, linked from the logo rather than listed here.
 *
 * Order re-checked against the Figma on 2026-08-27. Both hero frames draw
 * the navbar as "ABOUT  FAQ  SCHEDULE  OUR TEAM  SPONSORS", so FAQ comes
 * before Schedule. That is not the order the sections appear on the page,
 * where Schedule renders before FAQ, so the navbar departs from page order.
 * Transcribed as drawn and flagged for design review. If the departure is
 * accidental, the fix is to swap these two back.
 */
export const NAV_LINKS: { label: string; href: string }[] = [
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
  { label: "Schedule", href: "#schedule" },
  { label: "Our Team", href: "#team" },
  { label: "Sponsors", href: "#sponsors" },
];
