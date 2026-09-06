/**
 * Canonical origin for the deployed site. Absolute URLs in metadata, the
 * sitemap, and robots.txt are all derived from this, so it must match the
 * production domain -- set NEXT_PUBLIC_SITE_URL in the deploy environment if
 * the fallback below isn't right.
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://cadathon.ugahacks.com";

export const SITE_NAME = "UGAHacks CADathon";

export const SITE_DESCRIPTION =
  "A 36-hour CAD design competition at the University of Georgia. October 24-25, 2026 at the Driftmier Engineering Center.";
