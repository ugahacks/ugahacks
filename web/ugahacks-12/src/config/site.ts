/**
 * Content constants, distinct from `src/lib/site.ts` (metadata and SEO
 * plumbing: SITE_URL, SITE_NAME, SITE_DESCRIPTION). This file holds
 * content-level knobs the section components read.
 */

/**
 * Drives `SectionEdge`. Flip this one constant to compare the two
 * hero-transition treatments across every section boundary that uses it.
 */
export const HERO_EDGE_VARIANT: "tiles" | "crack" = "tiles";

/** MyByte registration form, behind the chalk-tray register button. */
export const REGISTER_URL = "https://mybyte.ugahacks.com/";

export const RECAP_YT_VIDEO_ID = "iRT-PiGHJqI";

/** "Visit Team Page" link under the Team photo. */
export const TEAM_PAGE_URL = "https://ugahacks.com";
