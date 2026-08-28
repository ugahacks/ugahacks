/**
 * Content constants, distinct from `src/lib/site.ts` (metadata and SEO
 * plumbing: SITE_URL, SITE_NAME, SITE_DESCRIPTION). This file holds
 * content-level knobs the section components read (PLAN.md §3.5).
 */

/**
 * Drives `SectionEdge` (§3.4). Flip this one constant to compare the two
 * hero-transition treatments across every section boundary that uses it.
 */
export const HERO_EDGE_VARIANT: "tiles" | "crack" = "tiles";

/** MyByte registration form, behind the chalk-tray register button (§5.2). */
export const REGISTER_URL = "https://mybyte.ugahacks.com/";

// Real UGAHacks 12 recap video URL is pending (PLAN.md §7) -- it can't exist
// before the event happens. Placeholder points at the UGAHacks 8 official
// trailer (verified live on YouTube) so the embed/auto-fullscreen logic
// (§5.4) has something real to load against; swap for the actual recap once
// it's cut.
//
// Unresolved (TAILWIND.md §7.4, re-confirmed 2026-08-27). A designer note in
// the Figma points at Canva rather than YouTube: "Please make the video
// dimensions bigger when you implement it. Here is the link to the video on
// Canva: https://canva.link/b7fcg8j0o09nnet". The plan keeps the YouTube
// embed because the original draft specifies one, and because the
// auto-fullscreen behavior (§5.4) needs the YouTube IFrame API, which a
// Canva embed does not provide. Design has to rule before the recap ships.
export const RECAP_VIDEO_URL = "https://www.youtube.com/watch?v=r43QYPjMpIA";

/** "Visit Team Page" link under the Team photo (§5.9). */
export const TEAM_PAGE_URL = "https://ugahacks.com";
