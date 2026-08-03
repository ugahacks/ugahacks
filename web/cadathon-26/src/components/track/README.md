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

Five anchors, all sitting in the page's outer gutters:

| Section  | Anchor                                                             | Visible |
| -------- | ------------------------------------------------------------------ | ------- |
| Landing  | `absolute top-0 right-9 lg:right-12`                               | always  |
| Info     | `absolute left-9 lg:left-12` (between the two articles)            | always  |
| FAQ      | `absolute right-12 bottom-12 max-lg:hidden`                        | lg+     |
| Sponsors | `absolute right-9 bottom-0 lg:right-auto lg:left-12`               | always  |
| Footer   | `absolute right-9 bottom-12 lg:right-auto lg:bottom-16 lg:left-12` | always  |

The track starts at the top **right** of the page and runs down the right
gutter past the hero and "What is a CADathon?", crosses to the left in the gap
before "Tools You Need", and runs down the left past Schedule and the FAQ. At
`lg` it crosses back to the right at the foot of the FAQ, comes down the right
of Sponsors, and crosses left again along the Sponsors/Partners seam for the
rest of the page. Below `lg` the FAQ anchor drops out, so the track stays left
until that same seam crossing takes it right for Partners and the footer —
which is why the last two anchors switch sides at `lg`. Either way the run
into the footer is straight.

No crossing passes over content:

- **Info** — a zero-height spacer between two flex gaps, so the road gets a
  full gap's clearance above and below.
- **FAQ** — the section's bottom padding. This one needs no extra room: the
  accordion already reserves a panel's height of margin below itself while
  collapsed, and the padding covers it when open.
- **Sponsors/Partners** — the seam between the two sections, deliberately, so
  the horizontal run reads as the divider between them. Each side adds
  `max-lg:p{b,t}-6` for phone clearance; at `lg` the sections' own padding is
  already wide enough.

Sections reserve the lane asymmetrically below `lg` — `pl-16 pr-8` where the
road comes down the left, `pr-16 pl-8` where it comes down the right, which
shifts content slightly off-center rather than spending the width twice.
(`Info.tsx` needs both, so its two blocks carry their own `max-lg:p{r,l}-8`.)
Above `lg` it's a symmetric `lg:px-20`. The road needs 56px of that on phones
and 74px at `lg`, clearing content by 8px and 6px, and the page edge by 16px
and 22px. Widening a road metric or moving an anchor outward means re-checking
that padding, and re-checking the Schedule carousel arrows, which sit at the
inner edge of the content box.

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

## The car

The car (`/racer-byte.png` placeholder — swap the `<img>` in `RaceTrack.tsx`
when a real sprite exists) rides at a fixed screen height (`CAR_SCREEN_Y`, 40%
of the viewport) and drives down the page with scroll. Past `CAR_PIN_TO` of
the way down it eases from there to the bottom of the viewport, which is what
lets it cross the finish line: a car held at a fixed screen y can never get
closer to the end of the page than the rest of a viewport height, so it would
otherwise park short of the last checkered divider.

Because scroll only maps to vertical motion, horizontal runs are crossed via a
monotone scroll → arc-length map (`toScrollMap` in `geometry.ts`): the car
smoothly drives across them while drifting briefly from its line, instead of
teleporting. It parks at the start/finish when the scroll position runs past
either end of the track.

## Stacking

The overlay sits at `z-10`, above the sections (each `z-0`) but below the
checkered dividers (`z-20` in `page.tsx`), so the road runs underneath the
start and finish lines. The car is `z-30` and passes over everything.

## Tuning

Constants at the top of `RaceTrack.tsx`: `NARROW`/`WIDE` (asphalt width and
turn radius below/above `WIDE_AT`), `CENTERLINE_WIDTH`/`CENTERLINE_DASH`,
`CAR_SCREEN_Y`, `CAR_PIN_TO`, `SPRITE_HEADING_OFFSET` (degrees
to add to the path tangent — 90 assumes the sprite art faces "up"), and
`FLAT_SCROLL_RATE` in `geometry.ts` (how much scroll a horizontal run
consumes). Grain color/intensity is the `stroke-zinc-500/60` class on the
masked path.
