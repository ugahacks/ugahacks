import React from "react";
import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <section
      className="
        bg-contain bg-center bg-no-repeat flex justify-center items-center w-full min-h-screen
        md:bg-contain
        max-md:bg-cover max-md:bg-center max-md:h-screen
        max-sm:bg-cover max-sm:bg-center
      "
      id="hero"
      style={{
        backgroundImage: 'url("/Hero-bg.png")',
        aspectRatio: "1463 / 1218",
      }}
    >
      <div className="flex flex-col items-center text-center px-4 md:px-8 lg:px-16 gap-6">
        <Image
          src="/Logo-with-byte 1.svg"
          alt="UGA Hacks 11 Logo"
          width={100}
          height={100}
          className="mt-auto pt-[10%] w-[98%] h-auto max-w-[800px]"
        />
        <p 
          className="text-2xl font-medium tracking-[0.1em] text-[#faf3e0] font-encode"
          style={{
            textShadow: '0px 2px 2px rgba(0, 0, 0, 0.4)'
          }}
        >
          February 6-8, 2026
          <br />
          UGA Miller Learning Center
        </p>
        <button className="px-12 py-4 text-base font-medium border-none rounded-2xl cursor-pointer transition-transform duration-200 ease-in-out hover:scale-105 shadow-lg text-[#3e4c8a] bg-[#faf3e0] font-encode">
          Register Now
        </button>
      </div>
    </section>
  );
};

export default Hero;
