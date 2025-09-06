import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <header
      className="sticky top-0 px-4 md:px-6 lg:px-8 h-20 flex items-center text-white z-50"
      style={{
        background: "#4a4a85",
        borderBottom: "3px solid rgba(255, 255, 255, 0.1)"
      }}
    >
      {/* Logo */}
      <a className="flex items-center justify-center -ml-2" href="#">
        <Image 
          src="/icons/byte11.png" 
          alt="UGAHacks Logo" 
          width={60} 
          height={60} 
          className="h-10 w-10 md:h-12 md:w-12 lg:h-14 lg:w-14" 
        />
      </a>

      {/* Navigation Links */}
      <nav className="ml-4 md:ml-6 lg:ml-10 flex gap-4 sm:gap-6 md:gap-8 lg:gap-14 tracking-wider font-bold uppercase">
        <a
          className="text-xs md:text-sm lg:text-base hover:text-pink-300 transition-colors duration-300"
          href="#about"
        >
          About
        </a>
        <a
          className="text-xs md:text-sm lg:text-base hover:text-pink-300 transition-colors duration-300"
          href="#faq"
        >
          FAQ
        </a>
        <a
          className="text-xs md:text-sm lg:text-base hover:text-pink-300 transition-colors duration-300"
          href="#team"
        >
          Our Team
        </a>
        <a
          className="text-xs md:text-sm lg:text-base hover:text-pink-300 transition-colors duration-300"
          href="#sponsors"
        >
          Sponsors
        </a>
      </nav>

      {/* Social Media Icons */}
      <nav className="ml-auto flex gap-4 md:gap-5 lg:gap-6 items-center">
        {/* Facebook */}
        <a
          href="https://www.facebook.com/ugahacks"
          aria-label="Facebook"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform duration-300"
        >
          <div className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 bg-white rounded-full flex items-center justify-center">
            <span className="font-bold text-lg md:text-xl lg:text-2xl" style={{color: "#4a4a85"}}>f</span>
          </div>
        </a>
        
        {/* GitHub */}
        <a
          href="https://github.com/ugahacks"
          aria-label="GitHub"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform duration-300"
        >
          <svg className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </a>
        
        {/* Twitter/X */}
        <a
          href="https://twitter.com/ugahacks"
          aria-label="Twitter"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform duration-300"
        >
          <Image
            src="/icons/X.png"
            alt="X (Twitter)"
            width={32}
            height={32}
            className="w-6 h-6 md:w-7 md:h-7 lg:w-6 lg:h-6 brightness-0 invert"
          />
        </a>
        
        {/* Instagram */}
        <a
          href="https://instagram.com/ugahacks"
          aria-label="Instagram"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform duration-300"
        >
          <svg className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 0C7.284 0 6.944.012 5.877.06 2.246.227.227 2.242.06 5.877.012 6.944 0 7.284 0 10s.012 3.056.06 4.123c.167 3.632 2.182 5.65 5.817 5.817C6.944 19.988 7.284 20 10 20s3.056-.012 4.123-.06c3.629-.167 5.651-2.182 5.817-5.817.048-1.067.06-1.407.06-4.123s-.012-3.056-.06-4.123C19.773 2.242 17.755.227 14.123.06 13.056.012 12.716 0 10 0zm0 1.802c2.67 0 2.987.01 4.042.059 2.71.123 3.975 1.409 4.099 4.099.048 1.054.057 1.37.057 4.04 0 2.672-.009 2.988-.057 4.042-.124 2.687-1.387 3.975-4.1 4.099-1.054.048-1.37.058-4.041.058-2.67 0-2.987-.01-4.04-.058-2.718-.124-3.977-1.416-4.1-4.1-.048-1.054-.058-1.37-.058-4.041 0-2.67.01-2.986.058-4.04.124-2.69 1.387-3.977 4.1-4.1 1.054-.048 1.37-.058 4.04-.058zM10 4.865a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm0 8.468a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666zm5.338-9.87a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z" clipRule="evenodd" />
          </svg>
        </a>
      </nav>
    </header>
  );
};

export default Navbar;