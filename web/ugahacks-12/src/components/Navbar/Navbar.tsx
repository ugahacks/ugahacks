"use client";

import Image from "next/image";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import {
  RiFacebookFill,
  RiGithubFill,
  RiInstagramFill,
  RiTwitterXFill,
} from "react-icons/ri";
import { NAV_LINKS } from "~/config/nav";

const NAVBAR_SOCIAL_LINKS = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/ugahacks",
    Icon: RiFacebookFill,
  },
  {
    name: "GitHub",
    href: "https://github.com/ugahacks",
    Icon: RiGithubFill,
  },
  {
    name: "X",
    href: "https://twitter.com/ugahacks",
    Icon: RiTwitterXFill,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/ugahacks",
    Icon: RiInstagramFill,
  },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-brick text-gold">
      <div className="flex h-[var(--nav-h)] w-full items-center px-5">
        <a
          href="#top"
          aria-label="UGAHacks 12 home"
          className="shrink-0"
          onClick={closeMenu}
        >
          <Image
            src="/detective-byte-navbar.png"
            alt="UGAHacks Byte mascot"
            width={2048}
            height={2048}
            priority
            className="size-[88px] object-contain sm:size-[108px]"
          />
        </a>

        <nav className="ml-6 hidden items-center gap-5 md:flex lg:ml-8 lg:gap-7 xl:gap-9">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xl font-normal uppercase transition-colors hover:text-paper lg:text-2xl xl:text-3xl"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto hidden items-center gap-5 md:flex lg:gap-6">
          {NAVBAR_SOCIAL_LINKS.map(({ name, href, Icon }) => (
            <a
              key={name}
              href={href}
              aria-label={name}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-paper transition-colors hover:text-gold lg:text-3xl"
            >
              <Icon aria-hidden />
            </a>
          ))}
        </div>

        <button
          type="button"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          className="ml-auto grid size-12 place-items-center text-3xl text-paper md:hidden"
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <FiX aria-hidden /> : <FiMenu aria-hidden />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-gold/40 bg-brick px-6 pb-6 md:hidden">
          <nav className="flex flex-col py-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="border-b border-gold/25 py-3 text-xl text-gold uppercase"
                onClick={closeMenu}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-6 pt-4">
            {NAVBAR_SOCIAL_LINKS.map(({ name, href, Icon }) => (
              <a
                key={name}
                href={href}
                aria-label={name}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-paper"
              >
                <Icon aria-hidden />
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
