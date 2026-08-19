"use client";

import confetti from "canvas-confetti";
import Image from "next/image";
import {
  PropsWithChildren,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import racecar from "~/assets/racecar.png";
import road from "~/assets/road.svg";
import { AnchorOptions, TrackContext, TrackRegistry } from "./context";
import {
  ScrollKnot,
  Waypoint,
  arcLengthAtPathY,
  arcLengthAtY,
  buildCurbArcs,
  buildPolyline,
  buildTrack,
  scrollYAtArcLength,
  toScrollMap,
} from "./geometry";

/**
 * Asphalt width, turn radius, edge-line width, curb-stripe width, and curb
 * dash length, in px, for narrow and wide viewports. Phones have only a thin
 * gutter to spare beside the content, so the road (and its edge line) is
 * drawn proportionally narrower there rather than overlapping the page; the
 * wide (`lg`+) figures are also a notch bigger across the board than the
 * narrow ones scaled up, not just a straight multiple, since there's real
 * room to spend on it there. The dash length is short relative to the curb
 * width on purpose -- it's what gives several red/white stripes along a turn
 * instead of one long block of each.
 */
const NARROW = { track: 46, corner: 44, edge: 3, curb: 10, curbDash: "10 10" };
const WIDE = { track: 72, corner: 67, edge: 4, curb: 14, curbDash: "12 12" };
/** Viewport width at which the wide metrics take over (Tailwind's `lg`). */
const WIDE_AT = 1024;
/** Screen y the car is (approximately) pinned to, as a viewport fraction. */
const CAR_SCREEN_Y = 0.4;
/**
 * Scroll fraction past which the car eases from CAR_SCREEN_Y down to the
 * bottom of the viewport. Without this it could never get closer to the end of
 * the page than (1 - CAR_SCREEN_Y) of a viewport, so it would stop short of
 * the finish line no matter how far the user scrolled.
 */
const CAR_PIN_TO = 0.8;
/**
 * Scroll fraction over which the car eases from a `start` anchor's position up
 * to CAR_SCREEN_Y. Without a start anchor the car simply begins at the pinned
 * height and this does nothing.
 */
const CAR_PIN_FROM = 0.1;
/**
 * The car artwork faces right (nose at 0deg CSS rotation points in +x, i.e.
 * 0° in this atan2(dy, dx) convention), so its heading is just the path
 * tangent, no rotation offset needed to bring the nose in line with it.
 */
const SPRITE_HEADING_OFFSET = 0;
/**
 * Position eases toward its scroll-derived target with an exponential decay
 * (time-constant in ms, frame-rate independent) rather than snapping straight
 * to it or letting CSS transition the raw x/y -- deliberately long and
 * trailing, for a `scroll-behavior: smooth`-like feel deliberately looser
 * than 1:1 with the scroll position. Critically, this eases the *arc length*
 * along the path (see the tick loop below), re-sampling x/y from the path
 * every frame, rather than a CSS `transition: translate` easing the raw
 * Cartesian x/y -- the latter cuts straight lines across corners instead of
 * following the curve, visibly leaving the road on fast scrolls.
 */
const CAR_EASE_TAU_MS = 180;
/** Below this many px of arc length moved in a frame, treat the car as
 *  stationary rather than flipping its facing direction on ease-loop noise. */
const CAR_FACING_EPSILON = 0.05;
/**
 * How close (px of arc length) the eased position must get to the target
 * before snapping the rest of the way there. Exponential decay only ever
 * approaches its target asymptotically, never mathematically reaching it --
 * without this, the finish-line check below (`s >= carMaxLengthRef.current`)
 * could stay just barely false indefinitely, reading as the confetti burst
 * being extremely delayed (or never firing at all) even once the car looks,
 * to the eye, to have long since arrived.
 */
const CAR_EASE_SNAP_EPSILON = 0.1;
/** The car's rendered height as a fraction of the track width -- noticeably
 *  smaller than the asphalt so it doesn't overhang the road's edges. */
const CAR_SIZE_RATIO = 0.55;
/**
 * Exhaust puffs fire on a cadence rather than only when the arc length
 * changes, so the car "idles" visibly too -- but the cadence and the number
 * of puffs per firing both step up once the car is actually moving faster
 * than EXHAUST_MOVING_THRESHOLD (px of arc length in that frame), for a
 * visibly denser plume while driving than at rest. Puffs trail the car
 * opposite its current facing direction, by roughly half its own rendered
 * length.
 */
const EXHAUST_INTERVAL_IDLE_MS = 1400;
const EXHAUST_INTERVAL_MOVING_MS = 90;
// At least 2, even at idle -- with a single particle there's nothing for a
// size difference to show up *between*, so variation could only ever read as
// one puff differing from the next, never within one.
const EXHAUST_PARTICLES_IDLE = 2;
const EXHAUST_PARTICLES_MOVING = 6;
const EXHAUST_MOVING_THRESHOLD = 0.25;
const EXHAUST_REAR_RATIO = 1.1;
/**
 * Size tiers a puff's particles are drawn from, one confetti() call per
 * particle so each can get its own `scalar` -- canvas-confetti only reads
 * `scalar` once per call and applies it to every particle that call creates,
 * so a single call can never produce particles of different sizes no matter
 * how many shape variants are passed in `shapes`. (An earlier version tried
 * baking size variation into shapeFromText's own `scalar` instead, on the
 * theory that a bigger rasterized bitmap would render bigger -- it doesn't:
 * shapeFromText encodes a compensating 1/scalar into the shape's matrix
 * specifically so differently-sized text renders at the same *visual* size,
 * which is why that had no visible effect at all.) 1 is the library's
 * canonical "100% scale" unit for every built-in shape.
 */
const EXHAUST_CLOUD_SCALARS = [0.3, 0.6, 1, 1.5, 2, 2.75, 3.5, 4.5];
/**
 * Random spread, in degrees either side of the car's current travel angle,
 * applied to each puff's cloud rotation -- keeps the puffs visibly streaming
 * out behind the car's actual heading rather than all landing at one exact
 * angle, without losing the alignment to it entirely.
 */
const EXHAUST_CLOUD_ANGLE_JITTER_DEG = 50;
/**
 * Baked-in opacity ceiling for the cloud bitmap itself, applied once at
 * shape-creation time rather than per particle. canvas-confetti already
 * fades every particle out over its lifetime (`globalAlpha = 1 - progress`
 * in its render loop), but that fade *starts* from fully opaque -- there's
 * no option to lower that starting point, since (like rotation above, see
 * `rotateCloudShape`) the library only exposes `colors` for its built-in
 * shapes, and bitmap particles never read `fetti.color` at all. Baking a
 * lower alpha into the bitmap once, via `fadeBitmap`, applies uniformly
 * without needing to touch the per-frame render loop.
 */
const EXHAUST_CLOUD_OPACITY = 0.7;

/**
 * Redraws a bitmap shape's ImageBitmap onto an offscreen canvas at a fixed
 * `globalAlpha`, baking that opacity into the bitmap's own pixels -- same
 * OffscreenCanvas + transferToImageBitmap technique shapeFromText itself
 * uses internally.
 */
function fadeBitmap(bitmap: ImageBitmap, opacity: number): ImageBitmap {
  const canvas = new OffscreenCanvas(bitmap.width, bitmap.height);
  const ctx = canvas.getContext("2d");
  if (!ctx) return bitmap;
  ctx.globalAlpha = opacity;
  ctx.drawImage(bitmap, 0, 0);
  return canvas.transferToImageBitmap();
}

/**
 * Returns a copy of a shapeFromText bitmap shape rotated by angleRad about
 * its own center. canvas-confetti's `flat: true` option (used for the
 * exhaust so puffs don't tumble in 3D -- see the tick loop below) forces its
 * per-particle wobble to a constant 0 every frame, which is also what the
 * renderer uses as the bitmap's rotation -- so with `flat: true` there is no
 * per-call or per-particle rotation option in the public API at all, only
 * this fixed 0. The only remaining lever is the shape's own `matrix`, which
 * shapeFromText sets to a pure scale + center-translate (no rotation term):
 * baking a rotation into a copy of that matrix before render is otherwise
 * exactly equivalent to what the library would do if it exposed one.
 * (canvas-confetti's own .d.ts types `matrix` as `DOMMatrix`, but the actual
 * value shapeFromText returns is a plain 6-number affine array -- confirmed
 * by reading confetti.module.mjs directly, not by trusting the types.)
 */
function rotateCloudShape(
  shape: confetti.BitmapShape,
  angleRad: number,
): confetti.BitmapShape {
  const [a, b, c, d, e, f] = shape.matrix as unknown as [
    number,
    number,
    number,
    number,
    number,
    number,
  ];
  const cos = Math.cos(angleRad);
  const sin = Math.sin(angleRad);
  return {
    ...shape,
    matrix: [
      cos * a - sin * b,
      sin * a + cos * b,
      cos * c - sin * d,
      sin * c + cos * d,
      cos * e - sin * f,
      sin * e + cos * f,
    ] as unknown as DOMMatrix,
  };
}

/**
 * Viewport fraction the car sits at, for a 0..1 scroll progress. Monotone
 * (given startFraction <= CAR_SCREEN_Y), so the car never travels backwards as
 * the page scrolls: it rises from startFraction to the pinned height, holds
 * there, then eases to the bottom of the viewport for the finish.
 */
function carScreenFraction(progress: number, startFraction: number) {
  if (progress >= CAR_PIN_TO) {
    const t = (progress - CAR_PIN_TO) / (1 - CAR_PIN_TO);
    return CAR_SCREEN_Y + t * (1 - CAR_SCREEN_Y);
  }
  if (progress >= CAR_PIN_FROM) return CAR_SCREEN_Y;
  const t = progress / CAR_PIN_FROM;
  return startFraction + t * (CAR_SCREEN_Y - startFraction);
}

/**
 * Wraps the page content and draws the race track overlay above it: a black
 * road with rounded 90° turns, asphalt grain (the same road.svg alpha tile
 * RoadTexture uses), solid white edge lines along both sides, and a
 * red/white curb stripe along the outside of every turn, routed through every
 * visible <TrackAnchor> in DOM order. Anchor positions are re-measured on
 * resize and on any layout change of the wrapper, so the track follows the
 * responsive layout. A car sprite glides along the path as the user scrolls,
 * pinned near CAR_SCREEN_Y on descents and easing across horizontal runs.
 *
 * Children may be server components; only the overlay itself is client-side.
 * The overlay is pointer-events-none and rendered after first measurement, so
 * SSR output is unaffected.
 */
export default function RaceTrack({ children }: PropsWithChildren) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const carRef = useRef<HTMLDivElement>(null);
  const confettiCanvasRef = useRef<HTMLCanvasElement>(null);
  // The same canvas-confetti instance drives both the finish-line burst and
  // the exhaust puffs, so there's one particle canvas/animation loop for the
  // whole overlay rather than a second one appended to the document body.
  const confettiRef = useRef<ReturnType<typeof confetti.create> | null>(null);
  // A cloud emoji rendered as a confetti shape -- canvas-confetti can turn
  // any unicode text into a particle shape, so this needs no separate image
  // asset. One shape at the canonical scalar (1): size variation between
  // particles comes from varying the *call's* `scalar` option per particle
  // instead (see EXHAUST_CLOUD_SCALARS above and the tick loop below), not
  // from this shape itself. Created once (it does its own off-screen
  // rasterizing) and reused.
  const cloudShapeRef = useRef<confetti.BitmapShape | null>(null);
  const anchorsRef = useRef(new Map<HTMLElement, AnchorOptions>());
  const scrollMapRef = useRef<ScrollKnot[]>([]);
  // How far along the drawn path the car is allowed to travel -- equal to the
  // path's full length unless a `finish` anchor cuts it short (see Footer).
  const carMaxLengthRef = useRef(0);
  // Scroll-map y to ask for when the page is scrolled to the top, so the car
  // lands on the `start` anchor; null leaves it at its pinned screen height.
  const carStartYRef = useRef<number | null>(null);
  const finishedRef = useRef(false);
  // The very first placement should snap into place, not glide in from the
  // zero-size div's default (0, 0) -- only scroll-driven moves get eased.
  const positionedRef = useRef(false);
  const wrapperTopRef = useRef(0);
  // Mirrors the trackWidth state for the tick loop (a stable callback) to
  // read without needing to be recreated every time the metrics change.
  const trackWidthRef = useRef(NARROW.track);
  // The car's current and target arc length along the path. The tick loop
  // eases carSRef toward targetSRef every frame, re-sampling x/y from the
  // path at the eased length -- see CAR_EASE_TAU_MS above for why.
  const carSRef = useRef(0);
  const targetSRef = useRef(0);
  // Whether the car is currently facing "backwards" (scrolling up, arc length
  // decreasing) -- persists across frames where movement is negligible so it
  // doesn't flicker at rest; only flips on a real change of direction.
  const facingReversedRef = useRef(false);
  // Previous tick's rAF timestamp, for a frame-rate-independent ease step.
  const lastTickTimeRef = useRef<number | null>(null);
  // rAF timestamp after which the next exhaust puff is allowed to fire.
  const nextExhaustAtRef = useRef(0);
  const measureFrameRef = useRef(0);
  const scrollFrameRef = useRef(0);
  const tickFrameRef = useRef(0);

  const [d, setD] = useState("");
  const [trackWidth, setTrackWidth] = useState(NARROW.track);
  const [edgeWidth, setEdgeWidth] = useState(NARROW.edge);
  const [curbWidth, setCurbWidth] = useState(NARROW.curb);
  const [curbDash, setCurbDash] = useState(NARROW.curbDash);
  const [curbArcs, setCurbArcs] = useState<string[]>([]);

  useEffect(() => {
    const canvas = confettiCanvasRef.current;
    if (!canvas) return;
    confettiRef.current = confetti.create(canvas, { resize: true });
    const cloudShape = confetti.shapeFromText({
      text: "☁️",
    }) as confetti.BitmapShape;
    cloudShapeRef.current = {
      ...cloudShape,
      bitmap: fadeBitmap(cloudShape.bitmap, EXHAUST_CLOUD_OPACITY),
    };
  }, []);

  // Recomputes targetSRef from the current scroll position -- called on
  // scroll and after every re-measure. Doesn't touch the DOM: the tick loop
  // below is solely responsible for rendering, so the car keeps easing
  // smoothly toward whatever this last computed even if it's called more
  // often than a frame renders.
  const computeTargetS = useCallback(() => {
    const knots = scrollMapRef.current;
    if (knots.length === 0) return;
    const maxScroll =
      document.documentElement.scrollHeight - window.innerHeight;
    const progress =
      maxScroll > 0 ? Math.min(Math.max(window.scrollY / maxScroll, 0), 1) : 1;
    // The screen fraction that puts the car on the start anchor at scroll 0.
    // Capped at CAR_SCREEN_Y so a short viewport (where the anchor sits below
    // the pinned line) can't make the car drive backwards as it eases up.
    const startY = carStartYRef.current;
    const startFraction =
      startY === null
        ? CAR_SCREEN_Y
        : Math.min(
            (startY + wrapperTopRef.current) / window.innerHeight,
            CAR_SCREEN_Y,
          );
    const targetY =
      window.scrollY +
      window.innerHeight * carScreenFraction(progress, startFraction) -
      wrapperTopRef.current;
    targetSRef.current = Math.min(
      arcLengthAtY(knots, targetY),
      carMaxLengthRef.current,
    );
  }, []);

  // Runs every frame, independent of scroll events: eases carSRef toward
  // targetSRef and re-samples x/y from the path at that eased length, so the
  // car is *always* a point actually on the path -- never a straight-line
  // Cartesian interpolation that could cut across a corner.
  const tick = useCallback((now: number) => {
    const path = pathRef.current;
    const car = carRef.current;
    if (!car) return;
    if (!path || scrollMapRef.current.length === 0) {
      car.style.opacity = "0";
      return;
    }

    const prevS = carSRef.current;
    const target = targetSRef.current;
    const dt =
      lastTickTimeRef.current === null ? 0 : now - lastTickTimeRef.current;
    lastTickTimeRef.current = now;
    // The very first tick snaps straight to the target -- nowhere sensible
    // to ease in from -- every tick after that eases with a frame-rate
    // independent exponential decay, snapped the rest of the way once close
    // enough (see CAR_EASE_SNAP_EPSILON) so it actually reaches the target
    // in finite time instead of approaching it forever.
    let nextS = positionedRef.current
      ? prevS + (target - prevS) * (1 - Math.exp(-dt / CAR_EASE_TAU_MS))
      : target;
    if (Math.abs(target - nextS) < CAR_EASE_SNAP_EPSILON) nextS = target;
    carSRef.current = nextS;
    positionedRef.current = true;

    const total = path.getTotalLength();
    const s = Math.min(Math.max(nextS, 0), total);
    const p = path.getPointAtLength(s);
    const ahead = path.getPointAtLength(Math.min(s + 1, total));
    const behind = path.getPointAtLength(Math.max(s - 1, 0));
    const angle =
      (Math.atan2(ahead.y - behind.y, ahead.x - behind.x) * 180) / Math.PI;

    // Scrolling up moves the car backward along the path (decreasing arc
    // length); flip its facing to match rather than always pointing the
    // "forward" way. Hysteresis around zero keeps it from flickering once
    // the ease has all but converged. Rotation is a plain property with no
    // transition (see the car div below), so this flip always snaps.
    const delta = nextS - prevS;
    if (delta < -CAR_FACING_EPSILON) facingReversedRef.current = true;
    else if (delta > CAR_FACING_EPSILON) facingReversedRef.current = false;
    const travelAngle = angle + (facingReversedRef.current ? 180 : 0);

    car.style.translate = `${p.x}px ${p.y}px`;
    car.style.rotate = `${travelAngle + SPRITE_HEADING_OFFSET}deg`;
    car.style.opacity = "1";

    // A puff on a cadence, trailing the car opposite its current facing --
    // fires whether the car is moving or idling, unlike a distance-based
    // trigger that only fires while it's actually advancing, but denser
    // (shorter cadence, more particles per firing) while it's actually
    // moving rather than sitting at the pinned height. Origin is computed in
    // the *page's* own coordinates (p is already a point on the path in that
    // space, and wrapperRect is the wrapper's full rendered size, not just
    // the viewport) -- see the canvas below for why.
    const wrapperRect = wrapperRef.current?.getBoundingClientRect();
    const moving = Math.abs(delta) > EXHAUST_MOVING_THRESHOLD;
    if (
      wrapperRect &&
      wrapperRect.width > 0 &&
      wrapperRect.height > 0 &&
      now >= nextExhaustAtRef.current
    ) {
      nextExhaustAtRef.current =
        now + (moving ? EXHAUST_INTERVAL_MOVING_MS : EXHAUST_INTERVAL_IDLE_MS);
      const rearDist =
        trackWidthRef.current * CAR_SIZE_RATIO * EXHAUST_REAR_RATIO;
      const rearAngleDeg = travelAngle + 180;
      const rearAngle = (rearAngleDeg * Math.PI) / 180;
      const puffCount = moving
        ? EXHAUST_PARTICLES_MOVING
        : EXHAUST_PARTICLES_IDLE;
      // One confetti() call per particle, each with its own `scalar` --
      // `scalar` is read once per call and applied to every particle that
      // call creates, so this is the only way to get particles of different
      // sizes within the same puff (see EXHAUST_CLOUD_SCALARS above). Each
      // particle also gets its own rotated copy of the cloud shape, jittered
      // around the car's current travel angle -- see rotateCloudShape above
      // for why that has to happen on the shape itself rather than through a
      // confetti option.
      for (let i = 0; i < puffCount; i++) {
        const cloudAngle =
          ((travelAngle +
            (Math.random() - 0.5) * EXHAUST_CLOUD_ANGLE_JITTER_DEG) *
            Math.PI) /
          180;
        confettiRef.current?.({
          particleCount: 1,
          // canvas-confetti's `angle` is measured the opposite way from our
          // own atan2(dy, dx) convention (it negates the option to get its
          // internal angle2D, so its "90" is screen-up while our 90 is
          // screen-down) -- negating rearAngleDeg here undoes that, so the
          // puff's own drift continues in the same rear direction the
          // origin was already offset toward, instead of the previous fixed
          // `gravity: -0.02` (screen-up, always -- wrong as soon as the car
          // reverses and "behind" the car is no longer up the page).
          angle: -rearAngleDeg,
          startVelocity: 2,
          spread: 60,
          ticks: 110,
          gravity: 0,
          flat: true,
          scalar:
            EXHAUST_CLOUD_SCALARS[
              Math.floor(Math.random() * EXHAUST_CLOUD_SCALARS.length)
            ],
          colors: ["#f5f5f5", "#e0e0e0", "#ffffff"],
          shapes: [
            cloudShapeRef.current
              ? rotateCloudShape(cloudShapeRef.current, cloudAngle)
              : "circle",
          ],
          origin: {
            x: (p.x + Math.cos(rearAngle) * rearDist) / wrapperRect.width,
            y: (p.y + Math.sin(rearAngle) * rearDist) / wrapperRect.height,
          },
        });
      }
    }

    // Fires once, the first frame the car reaches (or would overshoot) the
    // finish anchor -- from wherever it's currently on the path, since the
    // car may still be mid-ease rather than pinned to CAR_SCREEN_Y yet.
    if (
      !finishedRef.current &&
      carMaxLengthRef.current > 0 &&
      s >= carMaxLengthRef.current &&
      wrapperRect &&
      wrapperRect.width > 0 &&
      wrapperRect.height > 0
    ) {
      finishedRef.current = true;
      confettiRef.current?.({
        particleCount: 140,
        spread: 90,
        startVelocity: 45,
        origin: {
          x: p.x / wrapperRect.width,
          y: p.y / wrapperRect.height,
        },
      });
    }
  }, []);

  const measure = useCallback(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;
    const wrapperRect = wrapper.getBoundingClientRect();
    wrapperTopRef.current = wrapperRect.y + window.scrollY;

    const els = [...anchorsRef.current.keys()]
      .filter((el) => el.isConnected && el.getClientRects().length > 0)
      .sort((a, b) =>
        a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING
          ? -1
          : 1,
      );
    let startY: number | null = null;
    let finishY: number | null = null;
    const waypoints: Waypoint[] = els.map((el) => {
      const rect = el.getBoundingClientRect();
      const y = rect.y - wrapperRect.y;
      const options = anchorsRef.current.get(el);
      if (options?.start) startY = y;
      if (options?.finish) finishY = y;
      return { x: rect.x - wrapperRect.x, y, route: options?.route };
    });

    const metrics = window.innerWidth >= WIDE_AT ? WIDE : NARROW;
    const polyline = buildPolyline(waypoints);
    const track = buildTrack(polyline, metrics.corner);
    // Curbs hug the outside of the track outline: pushed out past
    // buildTrack's own corner radius by half the track width (to clear the
    // asphalt) plus half the curb's own width (so the curb sits entirely
    // beyond that edge instead of straddling it) -- see buildCurbArcs.
    const curbs = buildCurbArcs(
      polyline,
      metrics.corner,
      metrics.track / 2 + metrics.curb / 2,
    );

    // Draw the road before working out anything about the car, so a fault in
    // the car bookkeeping can only cost us the car. Set after, this state
    // never lands and the whole overlay silently disappears with no way back
    // short of a reload -- the road is the part that must not be fragile.
    trackWidthRef.current = metrics.track;
    setTrackWidth(metrics.track);
    setEdgeWidth(metrics.edge);
    setCurbWidth(metrics.curb);
    setCurbDash(metrics.curbDash);
    setD(track.d);
    setCurbArcs(curbs);

    scrollMapRef.current = toScrollMap(track.knots);
    carMaxLengthRef.current =
      finishY === null ? track.length : arcLengthAtPathY(track.knots, finishY);
    // Asked for in scroll-map coordinates, not the anchor's own y: the two
    // differ because toScrollMap rescales the axis to pay for horizontal runs,
    // and by the anchor's y alone the car would sit some way past it.
    carStartYRef.current =
      startY === null
        ? null
        : scrollYAtArcLength(
            scrollMapRef.current,
            arcLengthAtPathY(track.knots, startY),
          );
    // The tick loop (always running -- see below) picks up the new target on
    // its very next frame regardless, so this just keeps that target correct
    // the moment the geometry changes rather than a frame late.
    computeTargetS();
  }, [computeTargetS]);

  const scheduleMeasure = useCallback(() => {
    if (measureFrameRef.current) return;
    measureFrameRef.current = requestAnimationFrame(() => {
      measureFrameRef.current = 0;
      measure();
    });
  }, [measure]);

  const registry = useMemo<TrackRegistry>(
    () => ({
      register(el, options) {
        anchorsRef.current.set(el, options);
        scheduleMeasure();
        return () => {
          anchorsRef.current.delete(el);
          scheduleMeasure();
        };
      },
    }),
    [scheduleMeasure],
  );

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;
    const observer = new ResizeObserver(scheduleMeasure);
    observer.observe(wrapper);
    window.addEventListener("resize", scheduleMeasure);
    document.fonts.ready.then(scheduleMeasure);
    scheduleMeasure();
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", scheduleMeasure);
      cancelAnimationFrame(measureFrameRef.current);
    };
  }, [scheduleMeasure]);

  useEffect(() => {
    const onScroll = () => {
      if (scrollFrameRef.current) return;
      scrollFrameRef.current = requestAnimationFrame(() => {
        scrollFrameRef.current = 0;
        computeTargetS();
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(scrollFrameRef.current);
    };
  }, [computeTargetS]);

  // The car's own render loop: runs continuously (not just on scroll) so it
  // keeps easing toward the target and keeps puffing exhaust while idle. The
  // self-scheduling has to live in a plain local function here rather than
  // inside `tick` itself, which would mean referencing the useCallback's own
  // not-yet-assigned binding.
  useEffect(() => {
    const loop = (now: number) => {
      tick(now);
      tickFrameRef.current = requestAnimationFrame(loop);
    };
    tickFrameRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(tickFrameRef.current);
  }, [tick]);

  return (
    <TrackContext.Provider value={registry}>
      <div ref={wrapperRef} className="relative flex flex-col">
        {children}

        {/* z-10 puts the road over the sections (which sit at z-0) but under
            the checkered dividers (z-20), so the road runs beneath the start
            and finish lines the way real track markings do. */}
        <svg
          aria-hidden
          className="pointer-events-none absolute inset-0 z-10 size-full overflow-visible"
        >
          {d && (
            <>
              <defs>
                <pattern
                  id="race-track-grain"
                  patternUnits="userSpaceOnUse"
                  width={700}
                  height={700}
                >
                  <image href={road.src} width={700} height={700} />
                </pattern>
                {/* road.svg only carries alpha (see RoadTexture), so tile it
                    into an alpha mask and pick the grain color via stroke. */}
                <mask id="race-track-grain-mask" style={{ maskType: "alpha" }}>
                  <rect
                    width="100%"
                    height="100%"
                    fill="url(#race-track-grain)"
                  />
                </mask>
              </defs>
              {/* Everything visual (road, edge lines, grain, curbs) sits in
                  one group so the drop shadow is cast once by the combined
                  silhouette, not layered separately per stroke. */}
              <g style={{ filter: "drop-shadow(0 3px 5px rgba(0,0,0,0.35))" }}>
                {/* Solid white base, stroked at the full track width. The
                    asphalt drawn on top of it, next, is narrower by 2×
                    edgeWidth, so this only ever shows as a solid line
                    running along both edges -- no dasharray, no centerline. */}
                <path
                  ref={pathRef}
                  d={d}
                  fill="none"
                  className="stroke-white"
                  strokeWidth={trackWidth}
                  strokeLinecap="round"
                />
                <path
                  d={d}
                  fill="none"
                  className="stroke-zinc-950"
                  strokeWidth={trackWidth - edgeWidth * 2}
                  strokeLinecap="round"
                />
                <path
                  d={d}
                  fill="none"
                  className="stroke-zinc-500/60"
                  strokeWidth={trackWidth - edgeWidth * 2}
                  strokeLinecap="round"
                  mask="url(#race-track-grain-mask)"
                />
                {/* Curb stripe along the outside of every turn: solid red,
                    then a dashed white overlay of the same width so the gaps
                    reveal the red beneath in a run of alternating blocks
                    along the whole arc -- a plain stroke + short dasharray
                    "candy cane" rather than a genuine diagonal-stripe fill,
                    which needs no pattern/mask machinery to follow the
                    corner's curve. */}
                {curbArcs.map((arc, i) => (
                  <g key={i}>
                    <path
                      d={arc}
                      fill="none"
                      className="stroke-red-600"
                      strokeWidth={curbWidth}
                    />
                    <path
                      d={arc}
                      fill="none"
                      className="stroke-white"
                      strokeWidth={curbWidth}
                      strokeDasharray={curbDash}
                    />
                  </g>
                ))}
              </g>
            </>
          )}
        </svg>

        {/* One shared canvas for both the finish-line burst and the exhaust
            puffs -- sized to the full page-length wrapper (like the SVG
            track above it), not the viewport, so particles are pinned to
            their spot on the page and scroll away with it normally instead
            of hanging in a fixed screen position while the user scrolls.
            z-50 to sit above everything, including the car. */}
        <canvas
          ref={confettiCanvasRef}
          aria-hidden
          className="pointer-events-none absolute inset-0 z-50 size-full"
        />

        {/* Above the checkered dividers (z-20) so the car crosses the start and
            finish lines rather than disappearing under them. Position/heading
            are driven by the tick loop every frame (not a CSS transition --
            see CAR_EASE_TAU_MS), so there's no `transition` here. */}
        <div
          ref={carRef}
          className="pointer-events-none absolute top-0 left-0 z-30 size-0 opacity-0"
        >
          <Image
            alt=""
            src={racecar}
            className="absolute top-0 left-0 w-auto max-w-none -translate-x-1/2 -translate-y-1/2"
            style={{ height: trackWidth * CAR_SIZE_RATIO }}
          />
        </div>
      </div>
    </TrackContext.Provider>
  );
}
