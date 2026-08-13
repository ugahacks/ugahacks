# Race track overlay

A decorative race track — black asphalt, grain, solid white edge lines down
both sides, a red/white curb stripe on the outside of every turn, only straight
lines with (rounded) 90° turns — drawn over the homepage, plus a car that
drives along it as the user scrolls. The route is not hardcoded: it is
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

| Section  | Anchor                                                        | Notes                           |
| -------- | ------------------------------------------------------------- | ------------------------------- |
| Landing  | `absolute top-0 right-11.75 lg:right-29`                      | start of the track              |
| Landing  | `absolute right-11.75 lg:right-29` (`start`, at the wordmark) | where the car parks at scroll 0 |
| Info     | `absolute left-11.75 lg:left-29` (between the two articles)   | crosses to the left             |
| FAQ      | `absolute top-5.75 right-11.75 lg:top-9 lg:right-29`          | crosses right (detour in)       |
| FAQ      | `absolute bottom-5.75 left-11.75 lg:bottom-9 lg:left-29`      | crosses back left (detour out)  |
| Partners | `absolute top-5.75 right-11.75 lg:top-9 lg:right-29`          | crosses right (detour in)       |
| Partners | `absolute bottom-5.75 left-11.75 lg:bottom-9 lg:left-29`      | crosses back left (detour out)  |
| Footer   | `absolute top-10 left-11.75 lg:top-14 lg:left-29` (`finish`)  | where the car stops             |
| Footer   | `absolute bottom-0 left-11.75 lg:left-29`                     | true end of the drawn path      |

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
(24px) on the side without the road, and `2G + trackWidth` (94px, since the
narrow track is 46px) on the side with it. This makes the gap from the page
edge to the road equal to the gap from the road to the content — both `G` —
rather than the two being arbitrarily different. The anchor offset from the
edge is `G + trackWidth / 2` (47px). At `lg` the same formulas apply with `G`
= 80px and the wide track (72px): wide padding = 232px, anchor offset =
116px (written as the equivalent `right-29`/`left-29`, and the narrow figures
as `right-11.75`/`left-11.75`, since Tailwind's spacing scale is quarter-rem
steps).

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

### The road's markings

The road is four stacked strokes of the same `d`, widest to narrowest:

1. Solid white, at the full `trackWidth`.
2. Black asphalt, `2 × edgeWidth` narrower — since it's centered on the same
   path, this leaves exactly `edgeWidth` of the white layer exposed on both
   sides, which is what reads as the pair of solid edge lines. `edgeWidth` is
   one of the per-breakpoint metrics (`edge` next to `NARROW`/`WIDE`), thinner
   below `lg` to match the narrower road. There's no separate centerline
   stroke and no `strokeDasharray` on the road itself.
3. The same width again, masked to the asphalt grain tile (`road.svg`,
   alpha-only, same as `RoadTexture`), painted over the black.
4. The curb arcs (below).

Because these are plain re-strokes of one path, the edge lines and grain
follow every corner's rounded fillet automatically — no separate corner
geometry to keep in sync with the straight runs.

Curbs are a different, standalone set of arcs from `buildCurbArcs` in
`geometry.ts`: one per turn in the (un-filleted) polyline, concentric with
`buildTrack`'s own fillet at that corner (same center, same angular span,
just a bigger radius), which is what makes them trace the track's actual
outer edge rather than an unrelated circle that happens to touch the same two
tangent lines. The radius is pushed out past the track's own outer edge by
half the track width (to clear the asphalt) plus half the curb's own width
(so the stripe sits entirely beyond that edge instead of straddling it), and
clamped so the shifted endpoints never reach past the corner's adjacent
waypoints — not a real concern with the current route, where every corner
sits on segments far longer than the track is wide. There are two turns per
lane change (one where the crossing starts, one where it ends), so a single
detour like the FAQ's gets four curb arcs, not one.

Each arc is drawn twice, solid red then dashed white on top (`curbDash`, one
of the per-breakpoint metrics next to `NARROW`/`WIDE`) — deliberately short
relative to the curb's own width, so several alternating red/white blocks run
the length of a turn instead of one long red stretch with a couple of white
ticks on it. This "candy cane" stroke + dasharray is what gives the striped
look without an actual diagonal-stripe pattern fill.

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

The car (`src/assets/racecar.png`, a top-down sprite facing right at its
native rotation — swap the `<img>` in `RaceTrack.tsx` and adjust
`SPRITE_HEADING_OFFSET` if the art changes facing) rides at a fixed screen
height (`CAR_SCREEN_Y`, 40% of the viewport) and drives down the page with
scroll. Its rendered height is `CAR_SIZE_RATIO` (0.55) of the current
`trackWidth`, set inline since that's a runtime value, not a class — slightly
smaller than the asphalt so it doesn't overhang the road's edges even on the
narrow breakpoint. It eases into and out of that height at the two ends:

- Over the first `CAR_PIN_FROM` of scroll it rises from wherever the `start`
  anchor sits (the top of the hero wordmark) up to the pinned height, so the
  car has a deliberate parked position at scroll 0 instead of landing
  wherever 40% of the viewport happens to fall.
- Past `CAR_PIN_TO` it eases from the pinned height down to the bottom of the
  viewport, which is what lets it cross the finish line: a car held at a fixed
  screen y can never get closer to the end of the page than the rest of a
  viewport height, so it would otherwise park short of the last divider.

Both easings keep the mapping monotone, so the target screen fraction never
reverses. The start one caps its fraction at `CAR_SCREEN_Y`, which matters on
a viewport short enough that the start anchor would otherwise sit _below_ the
pinned line.

Because scroll only maps to vertical motion, horizontal runs are crossed via a
monotone scroll → arc-length map (`toScrollMap` in `geometry.ts`): the target
arc length smoothly advances across them while its screen y drifts briefly
from the pinned line, instead of teleporting. It parks at the start/finish
when the scroll position runs past either end of the track (or the `finish`
anchor, if one is set — see above).

### Rendering: a continuous, path-locked ease

Scroll only decides a _target_ arc length (`computeTargetS`, called on scroll
and after every re-measure — it doesn't touch the DOM). A separate `tick`
function, scheduled via a `requestAnimationFrame` loop that runs continuously
for as long as `RaceTrack` is mounted (not just while the user is scrolling),
is solely responsible for rendering: each frame it eases `carSRef` (the car's
current arc length) toward `targetSRef` with a frame-rate-independent
exponential decay (`CAR_EASE_TAU_MS`), then re-samples x/y from the **path
itself** via `getPointAtLength` at that eased length, and writes it straight
to the car's `translate`/`rotate` CSS properties (no CSS `transition`
involved at all).

That "re-sample from the path every frame" step is the load-bearing part.
An earlier version eased by animating a CSS `transition: translate` between
the old and new Cartesian point — which looks identical on a straight run,
but a CSS transition interpolates x/y in a straight line, so on a fast scroll
that jumps across a corner the car would cut directly across it instead of
following the curve, visibly leaving the road. Easing the _arc length_ and
re-deriving x/y from the path instead means every single rendered frame is,
by construction, an actual point on the path — there's no Cartesian
interpolation step left to go astray.

Position and rotation are still set via the standalone CSS `translate`/
`rotate` properties rather than a combined `transform` string, but now that
neither carries a `transition`, that's just for the same reason it always
was: `rotate` needs to be free to snap on a heading change (see below)
without a combined string forcing translate along for the ride. There's also
a pleasant side effect: since the car's motion is no longer a CSS transition
at all, it's naturally unaffected by `globals.css`'s sitewide
`prefers-reduced-motion` rule (which forces `transition-duration` near zero
everywhere, collapsing the checkers marquee, hover scales, the accordion, and
the carousel to instant) — a deliberate exception, since the race car is the
page's central piece of motion, not incidental decoration riding along on it.
The exhaust puffs (below) are exempted the same way, by simply not passing
canvas-confetti's `disableForReducedMotion` option.

The very first tick snaps `carSRef` straight to the target instead of easing
from its initial `0` — easing in from wherever arc length `0` happens to sit
would show the car sliding in from the start of the track on mount
(`positionedRef` in `RaceTrack.tsx` tracks whether that first tick has
happened yet).

Scrolling back up moves the target arc length _backward_. `tick` tracks the
sign of each frame's change in `carSRef` (`facingReversedRef`, with a small
epsilon so it doesn't flicker once the ease has all but converged) and adds
180° to the heading when moving backward, so the car visibly reverses to face
the direction it's actually travelling rather than always pointing "forward"
along the path. Since `rotate` is never transitioned, that flip always snaps
immediately rather than spinning the car around to face the other way.

The first time the car reaches (or would overshoot) its max travel distance,
`RaceTrack` fires a one-shot `canvas-confetti` burst from the car's current
position on the path (`finishedRef` in `RaceTrack.tsx` guards against repeat
bursts on further scrolling). That check is `s >= carMaxLengthRef.current`,
where `s` is the _eased_ position -- which is exactly why
`CAR_EASE_SNAP_EPSILON` exists (see above): pure exponential decay only ever
approaches its target asymptotically, so without a hard snap once close
enough, `s` could sit just barely short of the threshold indefinitely,
reading as the burst being extremely delayed, or not firing at all, even
though the car looks to have long since arrived.

### Exhaust

`tick` also fires `canvas-confetti` puffs trailing behind the car, opposite
its current (possibly reversed) facing. Puffs fire on a cadence (timed off
the same `requestAnimationFrame` timestamp `tick` already receives) rather
than only while the arc length is advancing, so the car visibly "idles" too,
not just while actively driving -- but both the cadence and the particle
count per firing step up (`EXHAUST_INTERVAL_MOVING_MS`/
`EXHAUST_PARTICLES_MOVING` vs the `_IDLE_` pair) once `|delta|` (the eased
position's change since last frame, already computed above for the facing
flip) crosses `EXHAUST_MOVING_THRESHOLD`, so the plume actually gets denser
while driving instead of an even cadence that merely _looks_ sparser once
it's spread out along a moving car versus piled up at a stationary one.
Their origin trails `p` (the car's current point on the path, already
computed this frame) backward by `EXHAUST_REAR_RATIO × the car's rendered
height` along its heading angle (`rearAngleDeg`/`rearAngle`, `travelAngle`
rotated 180°).

Each puff's own `angle` option (its initial drift direction, not just its
spawn point) is set from that same `rearAngleDeg`, negated --
canvas-confetti measures `angle` the opposite way from the `atan2(dy, dx)`
convention used everywhere else in this file (its internal `angle2D` is
`-angle` before spread jitter, so its "90" means screen-up while this file's
90 means screen-down), so negating undoes that and keeps the puff drifting
on through the same rear direction its origin was already offset toward.
This replaced an earlier fixed `gravity: -0.02` (a constant screen-up pull,
independent of the car's orientation) that looked fine driving down the page
-- where "behind" and "up" happen to coincide -- but sent puffs drifting
back toward (instead of away from) the car as soon as it reversed, since
"behind" no longer meant "up" but the drift direction hadn't moved with it.
`gravity` is plain `0` now; the puffs' whole motion comes from `angle` +
`startVelocity`, so it only ever needs to track one thing pointed the right
way instead of two.

The puffs are actual cloud emoji (☁️), not a plain circle shape tinted gray --
`canvas-confetti` can rasterize any unicode text into a particle shape via
`confetti.shapeFromText`, so this needed no separate image asset. There's
only one shape (`cloudShapeRef`), created at the library's canonical scalar
of `1`; size variation between particles comes from somewhere else, and
deliberately doesn't touch `shapeFromText`'s own `scalar` parameter --
worth spelling out, since it's not the obvious way to do it and the obvious
way silently doesn't work:

`canvas-confetti` reads a call's `scalar` option once and applies it
uniformly to every particle that call produces, so a single `confetti(...)`
call can never produce particles of different sizes, no matter how many
shape variants are listed in `shapes` (shape _choice_ is randomized per
particle -- confirmed in the library's source -- but size isn't). The tick
loop instead fires one `confetti(...)` call **per particle**, each picking
its own `scalar` at random from `EXHAUST_CLOUD_SCALARS` (eight steps from
0.3 to 4.5), which is what actually varies particle-to-particle within one
puff.

The other tempting approach -- baking size variants into `shapeFromText`'s
own `scalar` and passing several pre-scaled shapes in `shapes` -- looks
right but has no visible effect at all, which is exactly what happened
before this was fixed. `shapeFromText` rasterizes the glyph at
`10 * scalar` px and then bakes a _compensating_ `1 / scalar` into the
resulting shape's transform matrix, specifically so that requesting a
crisper (larger) rasterization of the same text doesn't also render it
bigger on screen -- the two cancel out, leaving the final size invariant to
that parameter entirely. The per-call `scalar` used above is a genuinely
different number: it's applied _after_ that compensation, multiplying the
already-normalized size, which is why it's the one that actually works.

`flat: true` turns off the library's default 3D tilt/wobble, so the clouds
stay close to flat rather than tumbling. They're otherwise tuned soft and
slow-drifting to read as weather rather than sparks: low `startVelocity`,
near-zero `gravity`, and a long `ticks` lifetime.

Each puff's clouds are also rotated to roughly match the car's current
travel angle (`travelAngle`, already computed above for the sprite's own
heading), jittered by up to `EXHAUST_CLOUD_ANGLE_JITTER_DEG` either way so a
whole puff doesn't land at one identical angle. `flat: true` is what forces
that: it pins the library's own per-particle wobble at a constant `0` every
frame, and that wobble is also what the renderer uses to rotate a bitmap
shape -- so with `flat` on, there is no confetti _option_ that rotates a
bitmap particle at all, only that fixed `0`. `rotateCloudShape` (above the
component) works around this by rotating a copy of the shape's own `matrix`
before passing it in `shapes`, which -- since `shapeFromText`'s matrix is
just a plain scale + center-translate with no rotation term -- lands exactly
where a genuine rotation option would have. (This required reading
`confetti.module.mjs` directly again: the library's `.d.ts` types
`BitmapShape.matrix` as `DOMMatrix`, but the value `shapeFromText` actually
returns is a plain 6-number affine array.)

The clouds are also translucent, at a fixed `EXHAUST_CLOUD_OPACITY` baked
into the bitmap itself by `fadeBitmap` (same OffscreenCanvas +
`transferToImageBitmap` trick `shapeFromText` uses internally, just
redrawing the existing bitmap at a lower `globalAlpha`). This has to happen
once, up front, rather than as a per-call option: canvas-confetti already
fades every particle out over its lifetime (`globalAlpha = 1 - progress` in
its render loop), but that only ever starts from fully opaque, and bitmap
particles never read `fetti.color`/`colors` at all (only the built-in
square/circle/star shapes do) -- so there's no per-particle lever for a
translucency _ceiling_ the way there is for size or rotation, and this had
to be baked into the shape once at creation instead.

Both the exhaust puffs and the finish burst share a single `canvas-confetti`
instance (`confetti.create(canvas, ...)`, stored in `confettiRef`) bound to a
`<canvas>` that `RaceTrack` renders and manages itself. That canvas is
`position: absolute`, sized to the full page-length wrapper (like the SVG
track above it), not `fixed` to the viewport -- so a particle's canvas pixel
position corresponds to a spot _on the page_, and it scrolls away with the
rest of the content exactly like the road does, rather than hanging in a
fixed screen position while the user scrolls past it. That's also why both
confetti calls' `origin` is computed from `p`/`wrapperRect` (page-local
coordinates, the same space the SVG path itself lives in) instead of
`getBoundingClientRect()`/`window.innerWidth`/`window.innerHeight` (viewport
coordinates) -- origin fractions are always relative to the target canvas's
own size, and this canvas's size is the page's, not the window's.

## Stacking

The overlay sits at `z-10`, above the sections (each `z-0`) but below the
checkered dividers (`z-20` in `page.tsx`), so the road runs underneath the
start and finish lines. The car is `z-30` above that. Landing's `<header>` is
the one exception, at `z-40` — above the car too, not just the road — so
where the wordmark and CD flag reach into the road's lane near the top of the
page, the car passes _behind_ them rather than over. It has to be the header
itself that's lifted, not just the flag: a plain child can't out-rank its
own stacking context's siblings from inside it. The section's own background
layers (photo, scrim, grain) stay off this div, at the ordinary `z-0`, so
they're still under the road.

## Tuning

Constants at the top of `RaceTrack.tsx`: `NARROW`/`WIDE` (asphalt width, turn
radius, edge-line width, curb-stripe width, and curb dash length, below/above
`WIDE_AT`), `CAR_SCREEN_Y`, `CAR_PIN_TO`, `CAR_PIN_FROM`,
`SPRITE_HEADING_OFFSET` (degrees to add to the path tangent — `0` assumes the
sprite art faces right), `CAR_EASE_TAU_MS` (the position ease's time
constant — larger is slower/laggier), `CAR_EASE_SNAP_EPSILON` (how close is
"arrived", for both settling and the finish-line check), `CAR_FACING_EPSILON`
(arc-length noise floor before flipping facing direction), `CAR_SIZE_RATIO`,
`EXHAUST_INTERVAL_IDLE_MS`/`EXHAUST_INTERVAL_MOVING_MS`/
`EXHAUST_PARTICLES_IDLE`/`EXHAUST_PARTICLES_MOVING`/`EXHAUST_MOVING_THRESHOLD`/
`EXHAUST_REAR_RATIO`/`EXHAUST_CLOUD_SCALARS`/`EXHAUST_CLOUD_ANGLE_JITTER_DEG`/
`EXHAUST_CLOUD_OPACITY`, and `FLAT_SCROLL_RATE` in
`geometry.ts` (how much scroll a horizontal run consumes). Grain
color/intensity is the `stroke-zinc-500/60` class on the masked path; curb
colors are the `stroke-red-600`/`stroke-white` classes on the curb arcs; the
track's drop shadow is the inline `filter: drop-shadow(...)` on the wrapping
`<g>`. The confetti bursts' and exhaust puffs' look (particle count, spread,
velocity, colors) is inline in `tick`'s two `confetti(...)` calls.
