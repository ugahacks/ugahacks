interface Props {
  /**
   * Scrolls the checkerboard sideways like a marquee, looping forever.
   * Pure CSS: container query units let the loop-distance keyframe reference
   * the tile's own size, so no JS measures or drives the animation.
   */
  marquee?: boolean;
}

/**
 * Fills the containing element with a two-row tall checkerboard pattern. Checkers are always squares and tile to fill the width of the component.
 */
export default function Checkers({ marquee }: Props) {
  return (
    <div
      className="@container-size size-full bg-[url(/checkers.svg)] bg-size-[auto_100%] data-marquee:animate-checkers-marquee"
      data-marquee={marquee || undefined}
      aria-hidden
    />
  );
}
