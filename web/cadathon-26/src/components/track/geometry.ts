/**
 * Pure geometry for the race track overlay: orthogonal routing between anchor
 * waypoints, rounded-corner SVG path generation, and the monotone scroll →
 * arc-length map the car uses. Everything works in px coordinates relative to
 * the RaceTrack wrapper (y grows downward). The track is assumed to descend
 * overall; upward or horizontal stretches are handled, but the car crosses
 * them on a compressed scroll budget rather than a pinned one.
 */

export interface Point {
  x: number;
  y: number;
}

/** How to reach a waypoint from the previous one when both axes differ. */
export type ElbowRoute = "v-then-h" | "h-then-v";

export interface Waypoint extends Point {
  route?: ElbowRoute;
}

/** A point along the generated path: its y and its arc length from the start. */
export interface PathKnot {
  y: number;
  s: number;
}

/** A scroll-map knot: virtual scroll y → arc length. See toScrollMap. */
export interface ScrollKnot {
  vy: number;
  s: number;
}

export interface TrackGeometry {
  /** SVG path `d` for the track centerline ("" if fewer than 2 points). */
  d: string;
  /** Total centerline length in px (matches getTotalLength of `d`). */
  length: number;
  /** Knots at every command endpoint, for building the scroll map. */
  knots: PathKnot[];
}

/**
 * Connects waypoints into an orthogonal polyline (axis-aligned segments only).
 * When consecutive waypoints differ on both axes, an elbow vertex is inserted:
 * "v-then-h" (default) travels vertically at the previous point's x, then
 * horizontally at the new point's y; "h-then-v" does the opposite. Duplicate
 * and collinear intermediate vertices are collapsed.
 */
export function buildPolyline(waypoints: Waypoint[]): Point[] {
  const pts: Point[] = [];
  const push = (p: Point) => {
    const b = pts[pts.length - 1];
    if (b && b.x === p.x && b.y === p.y) return;
    const a = pts[pts.length - 2];
    if (
      a &&
      b &&
      ((a.x === b.x && b.x === p.x) || (a.y === b.y && b.y === p.y))
    ) {
      pts[pts.length - 1] = p;
      return;
    }
    pts.push(p);
  };
  for (const wp of waypoints) {
    const prev = pts[pts.length - 1];
    if (prev && prev.x !== wp.x && prev.y !== wp.y) {
      push(
        wp.route === "h-then-v"
          ? { x: wp.x, y: prev.y }
          : { x: prev.x, y: wp.y },
      );
    }
    push({ x: wp.x, y: wp.y });
  }
  return pts;
}

/**
 * Emits the rounded-corner path for an orthogonal polyline, filleting each 90°
 * turn with a circular arc of `cornerRadius` (clamped to half the shorter
 * adjacent segment). Arc lengths are computed exactly (quarter circle = πr/2),
 * so the returned knots' `s` values line up with the browser's
 * getPointAtLength on the same path.
 */
export function buildTrack(pts: Point[], cornerRadius: number): TrackGeometry {
  if (pts.length < 2) return { d: "", length: 0, knots: [] };

  const segLen = (i: number) =>
    Math.abs(pts[i + 1].x - pts[i].x) + Math.abs(pts[i + 1].y - pts[i].y);
  const unit = (from: Point, to: Point): Point => ({
    x: Math.sign(to.x - from.x),
    y: Math.sign(to.y - from.y),
  });
  const fmt = (n: number) => Number(n.toFixed(2));

  const cmds: string[] = [`M ${fmt(pts[0].x)} ${fmt(pts[0].y)}`];
  const knots: PathKnot[] = [{ y: pts[0].y, s: 0 }];
  let cursor = pts[0];
  let s = 0;

  const lineTo = (p: Point) => {
    const len = Math.abs(p.x - cursor.x) + Math.abs(p.y - cursor.y);
    if (len === 0) return;
    cmds.push(`L ${fmt(p.x)} ${fmt(p.y)}`);
    s += len;
    cursor = p;
    knots.push({ y: p.y, s });
  };

  for (let i = 1; i < pts.length - 1; i++) {
    const corner = pts[i];
    const r = Math.min(cornerRadius, segLen(i - 1) / 2, segLen(i) / 2);
    const u = unit(pts[i - 1], corner);
    const v = unit(corner, pts[i + 1]);
    if (r < 0.01) {
      lineTo(corner);
      continue;
    }
    lineTo({ x: corner.x - u.x * r, y: corner.y - u.y * r });
    const end = { x: corner.x + v.x * r, y: corner.y + v.y * r };
    const sweep = u.x * v.y - u.y * v.x > 0 ? 1 : 0;
    cmds.push(`A ${fmt(r)} ${fmt(r)} 0 0 ${sweep} ${fmt(end.x)} ${fmt(end.y)}`);
    s += (Math.PI / 2) * r;
    cursor = end;
    knots.push({ y: end.y, s });
  }
  lineTo(pts[pts.length - 1]);

  return { d: cmds.join(" "), length: s, knots };
}

/**
 * Fraction of arc length that counts as scroll progress on stretches where the
 * track doesn't descend (horizontal runs, corners, upward jogs). Higher means
 * those stretches consume more scroll (car crosses them slower but drifts
 * further from its pinned screen y).
 */
const FLAT_SCROLL_RATE = 0.35;

/**
 * Builds a strictly monotone map from document y to arc length. Each knot gets
 * a "virtual y" that advances by the real vertical drop where the track
 * descends, and by FLAT_SCROLL_RATE × arc length elsewhere — then the whole
 * virtual axis is rescaled to the track's true y span, so the car starts and
 * finishes exactly at the track's ends while smoothly driving across
 * horizontal runs as the user scrolls past them.
 */
export function toScrollMap(knots: PathKnot[]): ScrollKnot[] {
  if (knots.length === 0) return [];
  const out: ScrollKnot[] = [{ vy: knots[0].y, s: knots[0].s }];
  for (let i = 1; i < knots.length; i++) {
    const dy = knots[i].y - knots[i - 1].y;
    const ds = knots[i].s - knots[i - 1].s;
    const dvy = Math.max(dy, ds * FLAT_SCROLL_RATE, 0.001);
    out.push({ vy: out[i - 1].vy + dvy, s: knots[i].s });
  }
  const ySpan = knots[knots.length - 1].y - knots[0].y;
  const vySpan = out[out.length - 1].vy - out[0].vy;
  if (ySpan > 1 && vySpan > 0) {
    const scale = ySpan / vySpan;
    for (const k of out) k.vy = knots[0].y + (k.vy - out[0].vy) * scale;
  }
  return out;
}

/** Interpolates the scroll map: arc length for a target document y. */
export function arcLengthAtY(knots: ScrollKnot[], y: number): number {
  if (knots.length === 0) return 0;
  if (y <= knots[0].vy) return knots[0].s;
  if (y >= knots[knots.length - 1].vy) return knots[knots.length - 1].s;
  let lo = 0;
  let hi = knots.length - 1;
  while (hi - lo > 1) {
    const mid = (lo + hi) >> 1;
    if (knots[mid].vy <= y) lo = mid;
    else hi = mid;
  }
  const a = knots[lo];
  const b = knots[hi];
  const t = (y - a.vy) / (b.vy - a.vy || 1);
  return a.s + t * (b.s - a.s);
}

/**
 * Inverse of arcLengthAtY: the virtual scroll y at which the car reaches a
 * given arc length. Needed to place the car on a specific point of the path
 * (the `start` anchor), because toScrollMap rescales the y axis to pay for
 * horizontal runs -- so asking for the anchor's own y would land the car
 * somewhere past it, further along the more the route zigzags.
 */
export function scrollYAtArcLength(knots: ScrollKnot[], s: number): number {
  if (knots.length === 0) return 0;
  if (s <= knots[0].s) return knots[0].vy;
  const last = knots[knots.length - 1];
  if (s >= last.s) return last.vy;
  let lo = 0;
  let hi = knots.length - 1;
  while (hi - lo > 1) {
    const mid = (lo + hi) >> 1;
    if (knots[mid].s <= s) lo = mid;
    else hi = mid;
  }
  const a = knots[lo];
  const b = knots[hi];
  const t = (s - a.s) / (b.s - a.s || 1);
  return a.vy + t * (b.vy - a.vy);
}

/**
 * Interpolates the *drawn path's* own y → arc-length mapping (as opposed to
 * arcLengthAtY's rescaled scroll map). Used to find how far along the track a
 * particular anchor sits, e.g. the "finish" anchor the car stops at even
 * though the path itself keeps going further (see RaceTrack's carMaxLength).
 * Since the tail past that anchor is a straight, unturning run, linear
 * interpolation between its bracketing knots is exact.
 */
export function arcLengthAtPathY(knots: PathKnot[], y: number): number {
  if (knots.length === 0) return 0;
  if (y <= knots[0].y) return knots[0].s;
  if (y >= knots[knots.length - 1].y) return knots[knots.length - 1].s;
  let lo = 0;
  let hi = knots.length - 1;
  while (hi - lo > 1) {
    const mid = (lo + hi) >> 1;
    if (knots[mid].y <= y) lo = mid;
    else hi = mid;
  }
  const a = knots[lo];
  const b = knots[hi];
  const t = (y - a.y) / (b.y - a.y || 1);
  return a.s + t * (b.s - a.s);
}
