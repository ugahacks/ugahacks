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
  /**
   * Marks where the car sits at scroll 0 (see Landing). Keep it in the lane
   * of the run it sits on, so it stays collinear and doesn't bend the route.
   * At most one anchor in the whole track should set this.
   */
  start?: boolean;
  /**
   * Marks this as where the car stops, even if the path is drawn further
   * (see the Footer anchors for the motivating example). At most one anchor
   * in the whole track should set this.
   */
  finish?: boolean;
}

/**
 * Invisible zero-size waypoint marker for the RaceTrack overlay. Anchors are
 * connected in DOM order. Hiding one responsively (e.g. `max-md:hidden`) drops
 * it from the route at that breakpoint — its neighbors connect directly — so
 * breakpoint-specific classes are the intended way to reshape the track.
 */
export default function TrackAnchor({
  className,
  route,
  start,
  finish,
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const registry = useContext(TrackContext);

  useEffect(() => {
    if (!registry || !ref.current) return;
    return registry.register(ref.current, { route, start, finish });
  }, [registry, route, start, finish]);

  return (
    <span ref={ref} aria-hidden className={`block size-0 ${className ?? ""}`} />
  );
}
