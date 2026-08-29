import { IconType } from "react-icons";
import {
  RiFacebookFill,
  RiGithubFill,
  RiInstagramFill,
  RiLinkedinFill,
} from "react-icons/ri";

/**
 * Shared by Navbar (§5.1) and Footer (§5.11). Final copy, with URLs taken
 * from cadathon-26's Footer.tsx LINKS array. PLAN.md §5.1 asks for exactly
 * these four: Facebook, Instagram, GitHub, LinkedIn. The cadathon source
 * array also carried a "UGAHacks website" Globe link, which the plan says to
 * drop or keep for footer reuse. It is dropped here, because neither the
 * navbar nor the footer spec asks for a website link and both read this one
 * array.
 *
 * Still unresolved as of 2026-08-27. The Figma navbar draws Facebook,
 * GitHub, Twitter/X, and Instagram, swapping LinkedIn for Twitter, while the
 * footer keeps LinkedIn. One shared array cannot express that split, and
 * TAILWIND.md §7.4 already ruled to keep the single list, since PLAN.md
 * specifies the same four in both places. Left alone on purpose. Following
 * the design would mean splitting this into NAVBAR_SOCIALS and
 * FOOTER_SOCIALS, which is a component change on the `frame` branch rather
 * than a config fix.
 */
export const SOCIAL_LINKS: { name: string; href: string; Icon: IconType }[] = [
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
  {
    name: "GitHub",
    href: "https://github.com/ugahacks",
    Icon: RiGithubFill,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/ugahacks",
    Icon: RiLinkedinFill,
  },
];
