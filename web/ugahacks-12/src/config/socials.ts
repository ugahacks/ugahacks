import { IconType } from "react-icons";
import {
  RiFacebookFill,
  RiGithubFill,
  RiInstagramFill,
  RiLinkedinFill,
} from "react-icons/ri";

/**
 * Shared by Navbar and Footer. Final copy, with URLs taken from
 * cadathon-26's Footer.tsx LINKS array, keeping exactly these four:
 * Facebook, Instagram, GitHub, LinkedIn. The cadathon source array also
 * carried a "UGAHacks website" Globe link, dropped here because neither the
 * navbar nor the footer asks for a website link and both read this one
 * array.
 *
 * Still unresolved as of 2026-08-27. The Figma navbar draws Facebook,
 * GitHub, Twitter/X, and Instagram, swapping LinkedIn for Twitter, while the
 * footer keeps LinkedIn. One shared array cannot express that split, so this
 * intentionally stays a single list of the same four in both places.
 * Following the design would mean splitting this into NAVBAR_SOCIALS and
 * FOOTER_SOCIALS, a component change rather than a config fix.
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
