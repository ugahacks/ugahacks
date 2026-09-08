"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/#about-us", label: "ABOUT US" },
  { href: "/#events", label: "EVENTS" },
  { href: "/#team", label: "TEAM" },
  {
    href: "https://ugahacksel.notion.site/UGAHacks-Experiential-Learning-Credit-Guidelines-131de0003a758090bf6dc75f8773353c",
    label: "EL-CREDIT",
    external: true,
  },
  { href: "/contact", label: "CONTACT" },
];

const socialLinks = [
  {
    href: "https://www.facebook.com/ugahacks",
    label: "Facebook",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06c0 4.98 3.66 9.12 8.44 9.88v-7H7.88v-2.88h2.56V9.54c0-2.54 1.5-3.94 3.82-3.94 1.1 0 2.24.2 2.24.2v2.46h-1.28c-1.24 0-1.62.78-1.62 1.56v1.9h2.78l-.44 2.88h-2.34v7c4.78-.76 8.44-4.9 8.44-9.88C22 6.53 17.5 2.04 12 2.04z" />
      </svg>
    ),
  },
  {
    href: "https://www.instagram.com/ugahacks/",
    label: "Instagram",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.2,5.2 0,0 1,16.2 22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.2,5.2 0,0 1,7.8 2M7.6,4A3.6,3.6 0,0 0,4 7.6V16.4A3.6,3.6 0,0 0,7.6 20H16.4A3.6,3.6 0,0 0,20 16.4V7.6A3.6,3.6 0,0 0,16.4 4H7.6M17.2,6A1.2,1.2 0,1 1,16 7.2,1.2 1.2,0 0,1 17.2,6M12,7a5,5 0,1 1,-5 5,5 5,0 0,1 5,-5M12,9a3,3 0,1 0,3 3,3 3,0 0,0 -3,-3Z" />
      </svg>
    ),
  },
  {
    href: "https://github.com/ugahacks",
    label: "GitHub",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.83,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
      </svg>
    ),
  },
  {
    href: "https://twitter.com/ugahacks",
    label: "Twitter",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.26C11.73,8.6 11.77,8.92 11.84,9.22C8.28,9.03 5.15,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.48 2.96,10.28 2.38,9.95C2.38,9.97 2.38,9.98 2.38,10C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.45,16.02 6.13,17.26 8.12,17.29C6.65,18.45 4.75,19.12 2.7,19.12C2.36,19.12 2.03,19.1 1.7,19.05C3.7,20.29 6.03,21 8.6,21C16,21 20.24,14.68 20.24,9.24C20.24,9.03 20.24,8.83 20.23,8.62C21.05,8.06 21.82,7.37 22.46,6Z" />
      </svg>
    ),
  },
];

type NavLinkProps = {
  href: string;
  label: string;
  external?: boolean;
  closeMenu: () => void;
};

function NavLink({ href, label, external, closeMenu }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;
  const classes = `block py-2 px-3 rounded-md text-base font-medium transition-colors duration-300 ${
    isActive
      ? "text-red-400 bg-gray-900"
      : "text-gray-300 hover:text-white hover:bg-gray-700"
  }`;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        onClick={closeMenu}
      >
        {label}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} onClick={closeMenu}>
      {label}
    </Link>
  );
}

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 bg-gray-800 text-white font-sans shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link
                href="/"
                className="text-2xl font-bold tracking-wider hover:text-gray-300 transition-colors duration-300"
              >
                U G A H A C K S
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  const linkClasses = `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                    isActive
                      ? "text-red-400"
                      : "text-gray-300 hover:text-red-400"
                  }`;

                  if (link.external) {
                    return (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={linkClasses}
                      >
                        {link.label}
                      </a>
                    );
                  }
                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      className={linkClasses}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="text-gray-300 hover:text-white transition-colors duration-300"
              >
                {link.icon}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                {...link}
                closeMenu={() => setIsMenuOpen(false)}
              />
            ))}
          </div>

          <div className="pt-4 pb-3 border-t border-gray-700">
            <div className="flex items-center justify-center space-x-6">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
