import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import About from "./components/About/About";
import Hero from "./components/Hero";
import OurTeam from "./components/OurTeam/OurTeam";
import Schedule from "./components/Schedule";
import SponsorTracks from "./components/SponsorTracks/SponsorTracks";
import Sponsors from "./components/Sponsors";
import Tracks from "./components/Tracks/Tracks";
import FAQ from "./components/FAQ/Faq";


export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <About />
      <Tracks />
      <SponsorTracks />
      <Schedule />
      <FAQ />
      <OurTeam />
      <Sponsors />
      {/* <section className="h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">More Content Below</h2>
          <p className="text-lg">
            This section demonstrates scrolling functionality
          </p>
        </div>
      </section> */}
      <footer>
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
    </main>
  );
}
