"use client";

import { useContext, useEffect, useRef } from "react";
import { TrackContext } from "./context";
import type { ElbowRoute } from "./geometry";

interface Props {
  /**
   * Positions the anchor — typically `absolute` + responsive inset classes
   * (e.g. "absolute top-0 left-6 md:left-[7%]") inside a `relative` section.
   * The track centerline passes through the anchor's top-left corner.
   */
  className?: string;
  /**
   * How the track travels here from the previous anchor when they differ on
   * both axes: "v-then-h" (default) descends first, "h-then-v" crosses first.
   */
  route?: ElbowRoute;
}

/**
 * Invisible zero-size waypoint marker for the RaceTrack overlay. Anchors are
 * connected in DOM order. Hiding one responsively (e.g. `max-md:hidden`) drops
 * it from the route at that breakpoint — its neighbors connect directly — so
 * breakpoint-specific classes are the intended way to reshape the track.
 */
export default function TrackAnchor({ className, route }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const registry = useContext(TrackContext);

  useEffect(() => {
    if (!registry || !ref.current) return;
    return registry.register(ref.current, route);
  }, [registry, route]);

  return (
    <span ref={ref} aria-hidden className={`block size-0 ${className ?? ""}`} />
  );
}
