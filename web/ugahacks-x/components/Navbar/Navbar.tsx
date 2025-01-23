import React from "react";
import logo from "../../public/byte_uhx.png";
import fb from "../../public/social_logos/fb_logo.png";
import gh from "../../public/social_logos/gh_logo.png";
import ig from "../../public/social_logos/ig_logo.png";
import x from "../../public/social_logos/x_logo.png";
import Countdown from "../Countdown/Countdown";
const Navbar = () => {
  return (
    <header
      className="sticky top-0 px-4 md:px-6 lg:px-8 h-16 flex items-center text-white z-50"
      style={{ fontFamily: "'Distortion Dos Analogue', sans-serif" }}
    >
      <a className="flex items-center justify-center" href="#">
        <img src={logo.src} alt="Logo" className="h-12 md:h-14 lg:h-16" />
      </a>
      <nav className="ml-4 md:ml-6 lg:ml-10 flex gap-4 sm:gap-6 md:gap-8 tracking-wider font-bold uppercase">
        <a
          className="text-xs md:text-sm lg:text-base hover:text-pink-500 transition-colors duration-300"
          href="#about"
        >
          About
        </a>
        <a
          className="text-xs md:text-sm lg:text-base hover:text-pink-500 transition-colors duration-300"
          href="#faq"
        >
          FAQ
        </a>
        <a
          className="text-xs md:text-sm lg:text-base hover:text-pink-500 transition-colors duration-300"
          href="#team"
        >
          Our Team
        </a>
        <a
          className="text-xs md:text-sm lg:text-base hover:text-pink-500 transition-colors duration-300"
          href="#sponsors"
        >
          Sponsors
        </a>
      </nav>

      <nav className="ml-auto flex gap-2 hidden sm:flex md:gap-3 lg:gap-4">
        <a
          href="https://www.facebook.com/ugahacks"
          aria-label="Facebook"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:animate-spin"
        >
          <img
            src={fb.src}
            alt="Facebook"
            className="h-8 md:h-9 lg:h-10 px-1"
          />
        </a>
        <a
          href="https://github.com/ugahacks"
          aria-label="GitHub"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:animate-spin"
        >
          <img src={gh.src} alt="GitHub" className="h-8 md:h-9 lg:h-10 px-1" />
        </a>
        <a
          href="https://twitter.com/ugahacks"
          aria-label="Twitter"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:animate-spin"
        >
          <img src={x.src} alt="Twitter" className="h-8 md:h-9 lg:h-10 px-1" />
        </a>
        <a
          href="https://instagram.com/ugahacks"
          aria-label="Instagram"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:animate-spin"
        >
          <img
            src={ig.src}
            alt="Instagram"
            className="h-8 md:h-9 lg:h-10 px-1"
          />
        </a>
      </nav>
      {/* Place Countdown below the navbar */}
      <div className="absolute top-10 left-0 w-full p-4">
        <Countdown />
      </div>
    </header>
  );
};

export default Navbar;
