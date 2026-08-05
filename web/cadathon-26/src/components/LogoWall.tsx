import { ReactNode } from "react";
import RoadTexture from "./RoadTexture";

export interface Logo {
  /** Full organization name. Used as the image's alt text. */
  name?: string;
  /** Short form shown in the placeholder box. Falls back to `name`. */
  abbr?: string;
  /** Path in public/, e.g. "/partners/bmes.svg". Renders a placeholder box
   *  until this is supplied. Color logos are desaturated in CSS, so there's
   *  no need to grayscale the file itself. */
  src?: string;
  /** Makes the slot a link, which is what enables the hover scale. */
  href?: string;
}

interface Props {
  heading: string;
  logos: Logo[];
  /** Background and grain color for the section wrapper. */
  className: string;
  /** Optional call to action rendered beneath the grid. */
  children?: ReactNode;
  /** Optional <TrackAnchor> placed in the section's gutter. */
  anchor?: ReactNode;
}

const SLOT =
  "flex h-24 w-40 items-center justify-center rounded-lg sm:h-28 sm:w-48";
const PLACEHOLDER =
  "border-2 border-dashed border-white/40 bg-black/20 px-3 text-center font-heading text-xs leading-tight font-bold tracking-wide text-white/80 uppercase";
const INTERACTIVE =
  "group transition duration-200 hover:scale-105 hover:drop-shadow-lg hover:drop-shadow-black/40";

function LogoSlot({ name, abbr, src, href }: Logo) {
  const body = src ? (
    <img
      src={src}
      alt={name ?? ""}
      className="max-h-full max-w-full object-contain grayscale transition duration-200 group-hover:grayscale-0"
    />
  ) : (
    (abbr ?? name ?? "Your logo here")
  );

  // Every slot gets the hover treatment, so placeholders preview the effect
  // the real logos will have once their links are filled in.
  const className = [SLOT, src ? "" : PLACEHOLDER, INTERACTIVE]
    .filter(Boolean)
    .join(" ");

  return href ? (
    <a href={href} className={className}>
      {body}
    </a>
  ) : (
    <div className={className}>{body}</div>
  );
}

/**
 * Shared layout for the Sponsors and Partners sections: a heading over a
 * centered, wrapping grid of logo slots, with an optional CTA underneath.
 */
export default function LogoWall({
  heading,
  logos,
  className,
  children,
  anchor,
}: Props) {
  return (
    <div className={`relative bg-cover bg-center ${className}`}>
      <RoadTexture />
      {anchor}

      {/* Each instance adds the wide gutter on whichever side its lane of the
          track runs down; this is the narrow side. The vertical padding is
          sized like the FAQ's -- enough that a horizontal crossing tucked
          against the section's edge still clears the content by a full flex
          gap. Sponsors has no crossing of its own but keeps the same figure,
          so the two sections stay a matched pair. */}
      <section className="relative z-0 mx-auto flex w-full max-w-5xl flex-col gap-8 px-6 py-18 sm:gap-10 sm:py-20 lg:px-20 lg:py-23">
        <h1 className="text-center font-heading text-3xl font-extrabold tracking-wide text-white text-border-5 text-border-black sm:text-4xl lg:text-5xl">
          {heading}
        </h1>

        <ul className="mx-auto flex max-w-2xl flex-wrap justify-center gap-6 sm:gap-8">
          {logos.map((logo, i) => (
            <li key={logo.name ?? i}>
              <LogoSlot {...logo} />
            </li>
          ))}
        </ul>

        {children}
      </section>
    </div>
  );
}
