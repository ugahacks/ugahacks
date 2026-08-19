import { IconType } from "react-icons";
import {
  RiFacebookFill,
  RiGithubFill,
  RiGlobalLine,
  RiInstagramFill,
  RiLinkedinFill,
} from "react-icons/ri";
import { PHOTO_BACKDROP_STYLE } from "~/lib/photo-backdrop";
import RoadTexture from "./RoadTexture";
import TrackAnchor from "./track/TrackAnchor";

const CONTACT_EMAIL = "hello@ugahacks.com";

const LINKS: { name: string; href: string; Icon: IconType }[] = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/ugahacks",
    Icon: RiFacebookFill,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/ugahacks",
    Icon: RiInstagramFill,
  },
  { name: "GitHub", href: "https://github.com/ugahacks", Icon: RiGithubFill },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/ugahacks",
    Icon: RiLinkedinFill,
  },
  {
    name: "UGAHacks website",
    href: "https://ugahacks.com",
    Icon: RiGlobalLine,
  },
];

const HOVER =
  "transition duration-200 hover:scale-115 hover:text-pink-300 hover:drop-shadow-lg hover:drop-shadow-black/40";

export default function Footer() {
  return (
    <footer
      className="relative bg-cover bg-center text-zinc-950/40"
      style={PHOTO_BACKDROP_STYLE}
    >
      {/* Matches the hero's treatment so the page opens and closes the same. */}
      <div aria-hidden className="absolute inset-0 z-0 bg-zinc-950/45" />
      <RoadTexture />

      {/* The car's actual stopping point -- Partners' exit crossing has
          already put the road back in the plain left lane by this point, so
          this just continues straight down, no crossing needed. Positioned
          just past the finish-line divider above the footer. */}
      <TrackAnchor
        finish
        className="absolute top-10 left-11.75 lg:top-14 lg:left-29"
      />

      {/* The road itself keeps going past that, all the way to the literal
          bottom of the page -- only the car stops short, at the anchor
          above. Same lane, so this is a straight continuation, not a
          crossing. */}
      <TrackAnchor className="absolute bottom-0 left-11.75 lg:left-29" />

      <div className="relative z-0 mx-auto flex w-full max-w-5xl flex-col items-center gap-8 py-10 pr-6 pl-23.5 text-white sm:py-12 lg:pr-20 lg:pl-58">
        <div className="flex flex-col items-center gap-2">
          <p className="font-heading text-xs leading-none font-bold tracking-widest uppercase text-border-3 text-border-black">
            Follow Us
          </p>

          <ul className="flex items-center gap-5">
            {LINKS.map(({ name, href, Icon }) => (
              <li key={name}>
                <a
                  href={href}
                  aria-label={name}
                  className={`block text-2xl sm:text-3xl ${HOVER}`}
                >
                  {/* Stroked to match the outlined treatment on the headings. */}
                  <Icon className="block stroke-black stroke-[3] [paint-order:stroke]" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col items-center gap-2 text-center">
          <p className="text-sm leading-none font-medium text-border-2 text-border-black sm:text-base">
            &copy; 2026 UGAHacks. All rights reserved.
          </p>

          <p className="text-xs leading-none sm:text-sm">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className={`inline-block font-medium text-border-2 text-border-black ${HOVER}`}
            >
              Found a Bug? Let Us Know &rarr;
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
