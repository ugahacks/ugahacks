import Image from "next/image";
import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import About from "./components/About/About";
import FAQ from "./components/FAQ/Faq";
import Hero from "./components/Hero";
import OurTeam from "./components/OurTeam/OurTeam";
import Schedule from "./components/Schedule";
import SponsorTracks from "./components/SponsorTracks/SponsorTracks";
import Sponsors from "./components/Sponsors";
import Tracks from "./components/Tracks/Tracks";


export default function Home() {
  return (
    <main className="relative">
      <Hero />
      {/* Transition section between Hero and About */}
      <section
        className="w-full h-20 md:h-35 bg-no-repeat -mt-21 -mb-2"
        style={{
          backgroundImage: 'url("/heroabout.png")',
          backgroundSize: '102% 100%',
          backgroundPosition: 'center top',
          backgroundColor: '#F6EFE2'
        }}
        aria-hidden="true"
      />
      <About />
      <Tracks />
      {/* Transition section between Tracks and Sponsor Tracks */}
      <section
        className="w-full h-32 md:h-38 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/trackssponsors.png")' }}
        aria-hidden="true"
      />
      <SponsorTracks />
      {/* Transition section between Sponsor Tracks and Schedule */}
      <section
        className="w-full h-32 md:h-18 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/sponsorschedule.png")' }}
        aria-hidden="true"
      />
      <Schedule />
      <FAQ />
      {/* Shared background wrapper for OurTeam + Sponsors */}
      <div className="relative w-full bg-[#6E8B79]">
        {/* full-size decorative swirl overlay */}
        <div
          className="pointer-events-none absolute inset-0 z-0 bg-no-repeat bg-top bg-cover"
          style={{ backgroundImage: "url('/magicSwirll.png')" }}
          aria-hidden
        />
        <div className="relative z-10">
          <OurTeam />
          <Sponsors />
          <div className="w-full mt-0 md:mt-0 mb-0 md: mb-0 relative z-30 flex justify-center">
            <Image
              src="/Book.png"
              alt="Decorative book"
              width={1400} // give a large max width (acts like intrinsic size)
              height={0}   // can be 0 if you’re relying on CSS aspect ratio
              unoptimized  // disables Next.js transformations (acts like <img>)
              className="w-[100%] max-w-[1400px] md:w-[115%] h-auto block translate-y-3"
              priority // optional: preload like <img>
            />
          </div>
        </div>
      </div>
      <footer className="relative z-10">
        <div className="w-full bg-[#3E4C8A] text-white text-center py-6">
          <div className="border-t border-b border-white/75 y-2 p-1" >
            <p className="text-sm">
              &copy; {new Date().getFullYear()} UGAHacks. All rights reserved.
            </p>
            <p className="text-white  text-sm">
              Follow Us
            </p>

            <div className="flex justify-center space-x-6 py-2">
              {/* Facebook */}
              <a href="https://facebook.com/UGAHacks" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="h-8 w-8 hover:opacity-80 transition" />
              </a>

              {/* Instagram */}
              <a href="https://instagram.com/UGAHacks" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="h-8 w-8 hover:opacity-80 transition" />
              </a>

              {/* GitHub */}
              <a href="https://github.com/UGAHacks" target="_blank" rel="noopener noreferrer">
                <FaGithub className="h-8 w-8 hover:opacity-80 transition" />
              </a>

              {/* LinkedIn */}
              <a href="https://linkedin.com/company/ugahacks" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="h-8 w-8 hover:opacity-80 transition" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main >
  );
}
