"use client";

import { createContext } from "react";
import type { ElbowRoute } from "./geometry";

export interface AnchorOptions {
  route?: ElbowRoute;
  /**
   * Marks where the car sits at scroll 0, instead of wherever its pinned
   * screen height happens to land. It eases from here up to that pinned
   * height over the first stretch of scroll. Put the anchor in the track's
   * own lane so it stays collinear with the run it sits on and doesn't bend
   * the route (see Landing). At most one anchor should set this.
   */
  start?: boolean;
  /**
   * Marks this as the point the car stops at, even though the drawn path may
   * continue past it (e.g. Footer's tail anchor extends the road to the
   * literal bottom of the page while the car parks just past the finish
   * line). At most one anchor should set this; if none do, the car travels
   * the full path as before.
   */
  finish?: boolean;
}

export interface TrackRegistry {
  /** Registers an anchor element; returns the matching unregister cleanup. */
  register(el: HTMLElement, options: AnchorOptions): () => void;
}

/** Null outside a <RaceTrack>, where anchors render inert. */
export const TrackContext = createContext<TrackRegistry | null>(null);
