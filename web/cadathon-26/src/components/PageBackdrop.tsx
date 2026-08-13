import road from "~/assets/road.svg";

/**
 * Faint, seamlessly tiled asphalt grain (the same road.svg RoadTexture and
 * the track overlay use) behind the whole viewport, so ultra-wide screens --
 * where the page's capped-width column (`max-w-360` in layout.tsx) leaves
 * bare margin on both sides -- read as the track's paved shoulder rather
 * than flat black letterboxing. Fixed rather than scrolling with the page:
 * it only ever shows in those margins, which sit at the same spot in the
 * viewport regardless of scroll position, and every section already paints
 * its own opaque background over the column itself.
 */
export default function PageBackdrop() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 bg-current text-zinc-800/60"
      style={{ maskImage: `url(${road.src})` }}
    />
  );
}
