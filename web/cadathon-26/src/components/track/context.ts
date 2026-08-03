"use client";

import { createContext } from "react";
import type { ElbowRoute } from "./geometry";

export interface TrackRegistry {
  /** Registers an anchor element; returns the matching unregister cleanup. */
  register(el: HTMLElement, route: ElbowRoute | undefined): () => void;
}

/** Null outside a <RaceTrack>, where anchors render inert. */
export const TrackContext = createContext<TrackRegistry | null>(null);
