/**
 * Copy for the About ("What is UGAHacks?") section.
 *
 * SOURCING NOTE -- the layer CSS supplied for this section (heading at
 * 49.4545px, a #9B3D35 card, a 3px badge radius, flat paper-only ground) reads
 * as an EARLIER Figma pass than the one already re-verified into
 * globals.css / nav.ts on 2026-08-13 / 2026-08-27 ("Page 2"): Page 2 pins the
 * heading at --text-heading-lg (110px), the body at --text-body-lg (36px,
 * bold, centred, tape-teal -- not sepia), and grounds the section in the
 * `bg-argyle` diamond pattern rather than a flat fill (globals.css §2.5 /
 * "Argyle ground for About"). <About /> and <AboutMedia /> follow Page 2
 * (globals.css tokens) for type size/colour/ground, since that's the more
 * recently re-checked source, and follow the supplied layer CSS for
 * STRUCTURE -- a badge, a heading, body copy, a framed video, a tilted photo
 * -- since Page 2's tokens are silent on layout. Worth a design-review pass
 * to confirm; see the chat response for the full discrepancy list.
 *
 * BODY below is a placeholder draft, not transcribed copy: a raw CSS layer
 * export has no real text run (its "uga hacks" text layer is a name, not
 * content), and there's no ABOUT_VIDEO_URL anywhere in the existing config.
 * The draft adapts ugahacks-11's About.tsx paragraph into the "case file"
 * voice the badge sets up. Treat it the way faq.tsx flags re-transcribed
 * copy -- swap for the real Figma text before ship.
 */

export const ABOUT_BADGE = "THE CASE — BRIEFING";

export const ABOUT_HEADING = "What is UGAHacks?";

export const ABOUT_BODY: string[] = [
  "UGAHacks is the University of Georgia's annual student-run hackathon: 48 hours, one campus, and a room full of students building something from nothing.",
  "Every case needs a team. Come with a lead or pick one up when you get there — we'll have mentors, workshops, food, and prizes on hand, whether this is your first case file or your fifth.",
];

/**
 * Swap in the real embed once one exists. Kept separate from
 * RECAP_VIDEO_URL (src/config/site.ts) on purpose -- that constant already
 * belongs to the standalone "RECAP VIDEO!" section (globals.css §2.5,
 * card-taupe / #091623 heading), a different part of the page. Reusing it
 * here would make the two sections silently swap videos together the next
 * time either one is updated.
 */
export const ABOUT_VIDEO_URL: string | null = null;
