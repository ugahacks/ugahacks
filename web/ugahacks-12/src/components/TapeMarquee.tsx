interface Props {
  /**
   * Repeated segment printed along both strips. Kept to a single phrase (not
   * an array) so the common case -- one call site wanting different copy --
   * is a one-line swap; the component handles the repeating.
   */
  text?: string;
  /** Render the counter-scrolling tape above the forward-scrolling tape. */
  reverseStacking?: boolean;
}

/**
 * Copies of `text` per half of the strip (see TapeStrip below for what
 * "half" means). Fixed rather than measured: at the longest plausible text
 * and the widest supported viewport, 10 repeats
 * overfills a full-bleed strip with room to spare. Measuring instead would
 * need a client component and real DOM widths, which risks a
 * server/client mismatch; a static repeat count sidesteps
 * the problem entirely for a value that just needs to be "enough".
 */
const REPEAT_COUNT = 10;

function TapeStrip({
  text,
  rotateClassName,
  reverse,
}: {
  text: string;
  rotateClassName: string;
  reverse?: boolean;
}) {
  // The animation (globals.css `tape-marquee`) translates by exactly -50%,
  // so the track must be the text repeated twice back-to-back with the
  // -50% point landing precisely on the seam between the two halves --
  // that's what makes the loop seamless (same technique as Checkers.tsx,
  // adapted from a bg-size loop to a translate loop). `half` is rendered
  // twice below rather than deduped into one nested loop so the DOM
  // literally contains "half, half" and -50% is unambiguously correct.
  const half = Array.from({ length: REPEAT_COUNT }, (_, i) => (
    <span
      key={i}
      className="shrink-0 bg-[repeating-linear-gradient(135deg,transparent_0,transparent_7px,rgb(0_0_0/0.18)_7px,rgb(0_0_0/0.18)_11px)] py-1 sm:py-1.5 md:py-1.75 lg:py-2"
    >
      <span className="bg-amber-300 px-4">{text}</span>
    </span>
  ));

  return (
    // w-[110vw]: a strip rotated by only ~2deg loses almost no horizontal
    // footprint (cos 2deg ~= 0.9994), but "almost none" is still a hairline
    // gap at the viewport edges where the strip's rotated corners lift
    // clear of 100vw -- the section background would show through at the
    // very corners. 110vw is comfortable headroom past that, sized as a
    // round number rather than the ~0.06vw actually needed, since the
    // excess is invisible either way (clipped by the wrapper below).
    <div
      className={`absolute top-1/2 left-1/2 isolate w-[110vw] -translate-x-1/2 -translate-y-1/2 overflow-hidden border-y-2 border-black bg-amber-300 shadow-sm ${rotateClassName}`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      />
      <div
        className={`relative z-10 flex w-max font-mono text-sm sm:text-base/none md:text-lg/none font-black tracking-widest whitespace-nowrap text-black uppercase ${reverse ? "animate-tape-reverse" : "animate-tape"}`}
      >
        <div className="flex w-max shrink-0">{half}</div>
        <div className="flex w-max shrink-0">{half}</div>
      </div>
    </div>
  );
}

/**
 * Decorative police-tape divider for section boundaries.
 *
 * Placement API: TapeMarquee is fully self-contained -- no wrapping
 * "SectionSeam" component needed. Drop `<TapeMarquee />` as the very first
 * or very last child of a section. Because
 * the root wrapper is `h-0`, the component occupies zero space in normal
 * flow -- it sits exactly at the point it's inserted, i.e. the seam -- and
 * the two strips inside center themselves on that zero-height line via
 * `top-1/2 -translate-y-1/2` (a percentage translate is relative to the
 * element's *own* box, so this centers each strip's own height on the
 * line, not on the zero-height parent). This was chosen over an
 * absolute-positioning-by-the-caller API or a `<SectionSeam>` wrapper
 * because it means zero layout math for every call site: the seam is
 * wherever the tag is, full stop.
 *
 * One placement requirement this implies: render it as a direct child of
 * the full-width section element, not inside an inner `max-w-*` content
 * wrapper -- `w-[110vw]` on each strip centers against *its* positioned
 * ancestor, so that ancestor needs to already span the viewport.
 *
 * `overflow-x: clip` (not `hidden`) on the root: strips are wider than
 * 100vw once accounting for the rotation headroom above, which would
 * otherwise create a horizontal scroll container on whatever ancestor
 * clips it -- `clip` suppresses the overflow without establishing a new
 * scrollport, so the page never gains a horizontal scrollbar from this.
 */
export default function TapeMarquee({ reverseStacking = false }: Props) {
  const forwardTape = (
    <TapeStrip
      key="forward"
      text="Classified Mission"
      rotateClassName="rotate-5 sm:rotate-3 md:rotate-2.5 lg:rotate-2"
    />
  );
  const reverseTape = (
    <TapeStrip
      key="reverse"
      text="Under Construction"
      rotateClassName="-rotate-5 sm:-rotate-3 md:-rotate-2.5 lg:-rotate-2"
      reverse
    />
  );

  return (
    <div
      className="relative z-10 h-0 w-full overflow-x-clip"
      aria-hidden="true"
    >
      {reverseStacking ? reverseTape : forwardTape}
      {reverseStacking ? forwardTape : reverseTape}
    </div>
  );
}
