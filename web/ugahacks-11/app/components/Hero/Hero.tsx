import Image from "next/image";
import React from "react";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative grid place-items-center w-full h-[135dvh] bg-no-repeat bg-[length:155%_100%] md:bg-[length:100%_100%]"
      style={{
        backgroundImage: 'url("/Hero-bg.png")',
        backgroundPosition: 'center -80px',
      }}
    >
      <div className="flex flex-col items-center text-center px-4 md:px-8 lg:px-16 gap-4 -mt-55">
        <Image
          src="/Logo-with-byte 1.svg"
          alt="UGA Hacks 11 Logo"
          width={1000}
          height={400}
          priority
          className="w-[95%] max-w-[800px] h-auto"
        />

        <p
          className="text-2xl font-medium tracking-[0.1em] text-[#faf3e0] font-encode"
          style={{ textShadow: "0px 2px 2px rgba(0,0,0,0.4)" }}
        >
          February 6-8, 2026
          <br />
          UGA Miller Learning Center
        </p>
        <a
          href="https://mybyte.ugahacks.com/register"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            type="button"
            className="px-12 py-4 text-base font-medium border-none rounded-2xl cursor-pointer transition-transform duration-200 ease-in-out hover:scale-105 shadow-lg text-[#3e4c8a] bg-[#faf3e0] font-encode"
            aria-label="Register for UGAHacks 11"
          >
            Register Now
          </button>
        </a>
      </div>
    </section>
  );
};

export default Hero;
