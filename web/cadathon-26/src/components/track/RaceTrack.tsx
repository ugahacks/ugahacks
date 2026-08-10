"use client";

import confetti from "canvas-confetti";
import {
  PropsWithChildren,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import racerByte from "~/assets/racer-byte.png";
import road from "~/assets/road.svg";
import { AnchorOptions, TrackContext, TrackRegistry } from "./context";
import {
  ScrollKnot,
  Waypoint,
  arcLengthAtPathY,
  arcLengthAtY,
  buildPolyline,
  buildTrack,
  scrollYAtArcLength,
  toScrollMap,
} from "./geometry";

/**
 * Asphalt width and turn radius, in px, for narrow and wide viewports. Phones
 * have only a thin gutter to spare beside the content, so the road is drawn
 * proportionally narrower there rather than overlapping the page.
 */
const NARROW = { track: 40, corner: 30 };
const WIDE = { track: 52, corner: 44 };
/** Viewport width at which the wide metrics take over (Tailwind's `lg`). */
const WIDE_AT = 1024;
const CENTERLINE_WIDTH = 3;
const CENTERLINE_DASH = "20 26";
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
/** The sprite faces "up", so its heading is the path tangent rotated 90°. */
const SPRITE_HEADING_OFFSET = 90;

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
 * RoadTexture uses), and a dashed white centerline, routed through every
 * visible <TrackAnchor> in DOM order. Anchor positions are re-measured on
 * resize and on any layout change of the wrapper, so the track follows the
 * responsive layout. A car sprite drives along the path as the user scrolls,
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
  const anchorsRef = useRef(new Map<HTMLElement, AnchorOptions>());
  const scrollMapRef = useRef<ScrollKnot[]>([]);
  // How far along the drawn path the car is allowed to travel -- equal to the
  // path's full length unless a `finish` anchor cuts it short (see Footer).
  const carMaxLengthRef = useRef(0);
  // Scroll-map y to ask for when the page is scrolled to the top, so the car
  // lands on the `start` anchor; null leaves it at its pinned screen height.
  const carStartYRef = useRef<number | null>(null);
  const finishedRef = useRef(false);
  const wrapperTopRef = useRef(0);
  const measureFrameRef = useRef(0);
  const scrollFrameRef = useRef(0);

  const [d, setD] = useState("");
  const [trackWidth, setTrackWidth] = useState(NARROW.track);

  const placeCar = useCallback(() => {
    const path = pathRef.current;
    const car = carRef.current;
    const knots = scrollMapRef.current;
    if (!car) return;
    if (!path || knots.length === 0) {
      car.style.opacity = "0";
      return;
    }
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
    const total = path.getTotalLength();
    const s = Math.min(arcLengthAtY(knots, targetY), carMaxLengthRef.current);
    const p = path.getPointAtLength(s);
    const ahead = path.getPointAtLength(Math.min(s + 1, total));
    const behind = path.getPointAtLength(Math.max(s - 1, 0));
    const angle =
      (Math.atan2(ahead.y - behind.y, ahead.x - behind.x) * 180) / Math.PI;
    car.style.transform = `translate(${p.x}px, ${p.y}px) rotate(${angle + SPRITE_HEADING_OFFSET}deg)`;
    car.style.opacity = "1";

    // Fires once, the first frame the car reaches (or would overshoot) the
    // finish anchor -- from wherever it's currently on screen, since the car
    // may still be mid-viewport rather than pinned to CAR_SCREEN_Y yet.
    if (
      !finishedRef.current &&
      carMaxLengthRef.current > 0 &&
      s >= carMaxLengthRef.current
    ) {
      finishedRef.current = true;
      const rect = car.getBoundingClientRect();
      confetti({
        particleCount: 140,
        spread: 90,
        startVelocity: 45,
        origin: {
          x: rect.x / window.innerWidth,
          y: rect.y / window.innerHeight,
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
    const track = buildTrack(buildPolyline(waypoints), metrics.corner);

    // Draw the road before working out anything about the car, so a fault in
    // the car bookkeeping can only cost us the car. Set after, this state
    // never lands and the whole overlay silently disappears with no way back
    // short of a reload -- the road is the part that must not be fragile.
    setTrackWidth(metrics.track);
    setD(track.d);

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
    // If d is unchanged the effect below won't re-run, but the car may still
    // need to move (e.g. the wrapper shifted); reposition on the next frame so
    // a changed path has been committed first.
    requestAnimationFrame(placeCar);
  }, [placeCar]);

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
        placeCar();
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(scrollFrameRef.current);
    };
  }, [placeCar]);

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
              <path
                ref={pathRef}
                d={d}
                fill="none"
                className="stroke-zinc-950"
                strokeWidth={trackWidth}
                strokeLinecap="round"
              />
              <path
                d={d}
                fill="none"
                className="stroke-zinc-500/60"
                strokeWidth={trackWidth}
                strokeLinecap="round"
                mask="url(#race-track-grain-mask)"
              />
              <path
                d={d}
                fill="none"
                className="stroke-white"
                strokeWidth={CENTERLINE_WIDTH}
                strokeDasharray={CENTERLINE_DASH}
              />
            </>
          )}
        </svg>

        {/* Above the checkered dividers (z-20) so the car crosses the start and
            finish lines rather than disappearing under them. */}
        <div
          ref={carRef}
          className="pointer-events-none absolute top-0 left-0 z-30 size-0 opacity-0"
        >
          <img
            alt=""
            src={racerByte.src}
            className="absolute top-0 left-0 w-12 max-w-none -translate-x-1/2 -translate-y-1/2 lg:w-16"
          />
        </div>
      </div>
    </TrackContext.Provider>
  );
}
