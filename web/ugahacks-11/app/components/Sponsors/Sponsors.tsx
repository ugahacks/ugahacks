// import Image from "next/image";
import Link from "next/link";
import SponsorCard from "./SponsorCard";

export default function Sponsors() {
  return (
    <section
      id="sponsors"
      className="relative w-full min-h-screen md:aspect-[10/9] overflow-visible"
    >
      <div className="relative z-10 w-full flex flex-col items-center pt-[1vh] md:pt-[35vh] px-4 md:px-20 pb-8 md:pb-32">
        <h2 className="font-amarante text-4xl md:text-7xl mb-4 md:mb-12 text-center text-white">
          Sponsors
        </h2>
        <div className="w-full max-w-4xl grid grid-cols-3 gap-2 md:gap-6">
          <SponsorCard imageUrl="/cox.png" href="https://cox.com" />
          <SponsorCard imageUrl="/statefarm.png" href="https://www.statefarm.com/" />
          <SponsorCard imageUrl="/ncrvoyixlogo.png" href="https://www.ncrvoyix.com/" />
          <SponsorCard imageUrl="/tractian.png" href="https://tractian.com/en" />
          <SponsorCard imageUrl="/githubsponsor.png" href="https://github.com/" />
          <SponsorCard imageUrl="/ugaresearch.png" href="https://research.uga.edu" />
          <SponsorCard imageUrl="/whiteKTPpfp.jpg" href="https://KTPGeorgia.com" />
          <SponsorCard imageUrl="/cocacola.png" href="https://www.coca-cola.com/us/en" />
          <SponsorCard imageUrl="/pure.png" href="https://purebuttons.com" />
        </div>
        <p className="text-white px-1 my-4 mx-auto bg-[#4A4A85]">This event is supported in part by the President&apos;s Venture Fund through the generous gifts of University of Georgia donors.</p>
        <Link
          href="https://drive.google.com/file/d/1Z2wJ8JBNY99TbEUve9kWX_e6I-flhKX4/view?usp=sharing">

          <button
            className="mt-4 md:mt-3 px-6 md:px-12 py-1.5 md:py-3 bg-[#E8DCC8] text-[#4A5C8C] font-encode-sans text-sm md:text-lg rounded-full hover:scale-105 transition-transform duration-200"
          >
            Sponsorship Packet
          </button>
        </Link>
      </div>
    </section>
  );
}