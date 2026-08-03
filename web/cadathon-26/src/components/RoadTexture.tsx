/**
 * Fills the containing element with a rough, asphalt-like grain texture that is
 * faint in the center and strongest at the left and right edges. The grain tile
 * is perfectly seamless, and the edge falloff uses a percentage-based linear
 * mask so it scales with the container at any device width. Renders as a transparent
 * overlay, so layer it above whatever base color the parent provides.
 *
 * The grain SVG is applied as a mask (intersected with the edge-falloff
 * gradient) over a `bg-current` fill, so the texture's color is the parent's
 * CSS text color — set `text-*` on the containing element to recolor it.
 */
export default function RoadTexture() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-0 size-full bg-current mask-[url(/road.svg)] mask-intersect"
    />
  );
}
