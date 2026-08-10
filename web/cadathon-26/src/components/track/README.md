# Race track overlay

A decorative race track — black asphalt, grain, dashed white centerline, only
straight lines with (rounded) 90° turns — drawn over the homepage, plus a car
that drives along it as the user scrolls. The route is not hardcoded: it is
generated at runtime from **anchor** markers placed in the JSX, so it follows
the responsive layout wherever the content moves.

## Components

- **`<RaceTrack>`** (client) — wraps the page content and renders the SVG
  overlay + car above it (`pointer-events-none`, so nothing underneath loses
  interactivity). Already wired up in `src/app/page.tsx`. It re-measures
  automatically on window resize, on any layout change of the wrapped content
  (ResizeObserver), and once fonts finish loading.
- **`<TrackAnchor>`** (client) — an invisible, zero-size waypoint. The track
  centerline passes through each visible anchor, visiting them in **DOM
  order**. With fewer than two visible anchors, no track or car renders.

## The current route

Nine anchors, all sitting in the page's outer gutters:

| Section  | Anchor                                                       | Notes                           |
| -------- | ------------------------------------------------------------ | ------------------------------- |
| Landing  | `absolute top-0 right-11 lg:right-26.5`                      | start of the track              |
| Landing  | `absolute right-11 lg:right-26.5` (`start`, at the wordmark) | where the car parks at scroll 0 |
| Info     | `absolute left-11 lg:left-26.5` (between the two articles)   | crosses to the left             |
| FAQ      | `absolute top-5 right-11 lg:top-6.5 lg:right-26.5`           | crosses right (detour in)       |
| FAQ      | `absolute bottom-5 left-11 lg:bottom-6.5 lg:left-26.5`       | crosses back left (detour out)  |
| Partners | `absolute top-5 right-11 lg:top-6.5 lg:right-26.5`           | crosses right (detour in)       |
| Partners | `absolute bottom-5 left-11 lg:bottom-6.5 lg:left-26.5`       | crosses back left (detour out)  |
| Footer   | `absolute top-10 left-11 lg:top-14 lg:left-26.5` (`finish`)  | where the car stops             |
| Footer   | `absolute bottom-0 left-11 lg:left-26.5`                     | true end of the drawn path      |

Landing's `start` anchor is a waypoint like any other, but it sits in the same
lane as the run it's on, so `buildPolyline` collapses it as collinear and the
route is unchanged — it contributes only its y.

The track starts at the top **right** of the page and runs down the right
gutter past the hero and "What is a CADathon?", crosses to the left in the gap
before "Tools You Need", and runs down the left past Schedule. It detours into
the right gutter for the FAQ (crossing in at its own top, back out at its own
bottom) and does the same for Partners — both are self-contained round trips,
so Sponsors and Footer never need an anchor of their own; they just inherit
the plain left lane from whichever detour last returned to it. Footer carries
two more anchors past that: a `finish`-flagged one (where the car parks) and a
plain one at its literal `bottom-0` (where the drawn road actually ends) — see
"The car" below for why those are different points.

No crossing passes over content:

- **Info** — a zero-height spacer between two flex gaps, so the road gets a
  full gap's clearance above and below.
- **FAQ** and **Partners** — both crossings sit half a track width in from
  the section's edge, so the road's outer edge is flush with the boundary,
  and the section's `py-*` is then sized so its inner edge clears the content
  by a full flex gap: `py-18 sm:py-20 lg:py-23`, from `trackWidth / 2 + gap`.
  For the FAQ's heading that gap is also what sits below it, so it reads with
  equal breathing room on both sides (see the `leading-none` note on its
  `<h1>`, without which the line box would pad the lower side further).
- **Footer** — both anchors sit in the footer's own top/bottom, past
  Partners' return-to-left crossing, so nothing here changes lanes.

### Gutter formula

Every section reserves two different amounts of side padding below `lg`: `G`
(24px) on the side without the road, and `2G + trackWidth` (88px, since the
narrow track is 40px) on the side with it. This makes the gap from the page
edge to the road equal to the gap from the road to the content — both `G` —
rather than the two being arbitrarily different. The anchor offset from the
edge is `G + trackWidth / 2` (44px). At `lg` the same formulas apply with `G`
= 80px and the wide track (52px): wide padding = 212px, anchor offset =
106px (written as the equivalent `right-26.5`/`left-26.5`, since Tailwind's
spacing scale is quarter-rem steps).

`Info.tsx` splits its `2G + track` between the section's own base padding and
each block's extra (since the section pads both sides at once); everywhere
else it's simple side padding on one element. Widening `NARROW`/`WIDE` in
`RaceTrack.tsx` means recomputing both numbers everywhere they're used — they
aren't derived from a shared constant because Tailwind needs literal class
strings, not interpolated ones, to pick them up.

## Adding anchors

Drop a `TrackAnchor` inside any section whose wrapper is `relative`, and
position it with normal (responsive) Tailwind classes:

```tsx
import TrackAnchor from "./track/TrackAnchor";

<div className="relative ...">
  {/* start of a run down the left margin */}
  <TrackAnchor className="absolute top-0 left-10 md:left-[7%]" />
  {/* cross to the right side, below this section's content */}
  <TrackAnchor className="absolute right-10 bottom-8 md:right-[10%]" />
  ...
</div>;
```

The anchor's **top-left corner** is the waypoint, and positioning is entirely
the caller's job — that's the whole mechanism for dodging content: put anchors
in margins/padding the content never occupies, using the same responsive
classes the content uses.

To pin a waypoint to a spot _in the flow_ — a gap between two blocks, say,
whose y nothing static knows — leave `top`/`bottom` off and give only a
horizontal offset. An absolutely positioned element with no vertical offset
keeps its static position, so it takes its y from where it sits in the
document and its x from the nearest positioned ancestor (see `Info.tsx`). The
wrapper it goes in must be a plain block, not a flex item, or the flex
container will place it at its own start instead.

### Routing rules

- Consecutive anchors that share an x (or y) are joined by a single straight
  segment. Percentage offsets resolve against each section's own width, so
  `left-[7%]` in two full-width sections yields the same x and a straight
  vertical line through both.
- When both axes differ, an elbow is inserted. Default is **`v-then-h`**:
  descend at the previous anchor's x, then cross at the new anchor's y. Pass
  `route="h-then-v"` to cross first and then descend:

  ```tsx
  <TrackAnchor route="h-then-v" className="absolute top-4 right-10" />
  ```

- Every 90° turn gets a rounded fillet (the `corner` in `NARROW`/`WIDE` in
  `RaceTrack.tsx`), automatically shrunk when segments are short.
- The track should **descend overall** (each anchor at or below the previous
  one). Horizontal runs are fine; upward jogs won't break anything, but the
  car rushes through them.

### Responsive reshaping

A hidden anchor is dropped from the route and its neighbors connect directly.
So breakpoint-visibility classes are the intended way to give the track a
different shape per screen size:

```tsx
{
  /* extra detour only on large screens */
}
<TrackAnchor className="absolute top-24 right-1/3 max-lg:hidden" />;
```

Anchors that are conditionally unmounted (rather than CSS-hidden) work the
same way. Note that hiding an _anchor_ only removes a waypoint — never place
content where the remaining segments will pass.

### The `finish` anchor

Passing `finish` on a `TrackAnchor` marks where the **car** stops, separately
from where the **drawn road** ends. Without one, both are the same point (the
last anchor). Footer uses this so the asphalt itself can run all the way to
the literal bottom of the page (a plain anchor at `bottom-0`) while the car
parks just past the finish-line checkered divider (the `finish` anchor,
higher up) rather than travelling the whole extra stretch. At most one anchor
should carry `finish`; `RaceTrack` finds it by scanning all registered
anchors during `measure()` and computes the car's max travel distance
(`carMaxLengthRef`) via `arcLengthAtPathY` in `geometry.ts`, which interpolates
arc length at a given y along the _drawn_ path (as opposed to `arcLengthAtY`,
which does the same over the rescaled _scroll_ map) — so the finish anchor
doesn't need a dedicated knot in the path, just to fall on a straight stretch
of it (which `finish` anchors, being plain lane continuations, always do).

## The car

The car (`src/assets/racer-byte.png` placeholder — swap the `<img>` in `RaceTrack.tsx`
when a real sprite exists) rides at a fixed screen height (`CAR_SCREEN_Y`, 40%
of the viewport) and drives down the page with scroll. It eases into and out
of that height at the two ends:

- Over the first `CAR_PIN_FROM` of scroll it rises from wherever the `start`
  anchor sits (the top of the hero wordmark) up to the pinned height, so the
  car has a deliberate parked position at scroll 0 instead of landing
  wherever 40% of the viewport happens to fall.
- Past `CAR_PIN_TO` it eases from the pinned height down to the bottom of the
  viewport, which is what lets it cross the finish line: a car held at a fixed
  screen y can never get closer to the end of the page than the rest of a
  viewport height, so it would otherwise park short of the last divider.

Both easings keep the mapping monotone, so the car never reverses. The start
one caps its fraction at `CAR_SCREEN_Y`, which matters on a viewport short
enough that the start anchor would otherwise sit _below_ the pinned line.

Because scroll only maps to vertical motion, horizontal runs are crossed via a
monotone scroll → arc-length map (`toScrollMap` in `geometry.ts`): the car
smoothly drives across them while drifting briefly from its line, instead of
teleporting. It parks at the start/finish when the scroll position runs past
either end of the track (or the `finish` anchor, if one is set — see above).

The first time the car reaches (or would overshoot) its max travel distance,
`RaceTrack` fires a one-shot `canvas-confetti` burst from the car's current
screen position (`finishedRef` in `RaceTrack.tsx` guards against repeat
bursts on further scrolling).

## Stacking

The overlay sits at `z-10`, above the sections (each `z-0`) but below the
checkered dividers (`z-20` in `page.tsx`), so the road runs underneath the
start and finish lines. The car is `z-30` and passes over everything. Landing
is the one exception: it sits at `z-20` (not the default `z-0`) so its own
content — the wordmark, the CD flag — renders above the road when the two are
close together near the top of the page, the same as the checkered dividers
do; the car (`z-30`) still passes over it.

## Tuning

Constants at the top of `RaceTrack.tsx`: `NARROW`/`WIDE` (asphalt width and
turn radius below/above `WIDE_AT`), `CENTERLINE_WIDTH`/`CENTERLINE_DASH`,
`CAR_SCREEN_Y`, `CAR_PIN_TO`, `SPRITE_HEADING_OFFSET` (degrees
to add to the path tangent — 90 assumes the sprite art faces "up"), and
`FLAT_SCROLL_RATE` in `geometry.ts` (how much scroll a horizontal run
consumes). Grain color/intensity is the `stroke-zinc-500/60` class on the
masked path. The confetti burst's look (particle count, spread, velocity) is
inline in `placeCar`'s `confetti(...)` call.
