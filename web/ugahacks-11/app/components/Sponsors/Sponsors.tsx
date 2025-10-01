// import Image from "next/image";
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
          <SponsorCard imageUrl="https://www.shutterstock.com/shutterstock/videos/1072439945/thumb/6.jpg?ip=x480" href="https://ugahacks.com" />
          <SponsorCard imageUrl="https://www.shutterstock.com/shutterstock/videos/1072439945/thumb/6.jpg?ip=x480" href="https://ugahacks.com" />
          <SponsorCard imageUrl="https://www.shutterstock.com/shutterstock/videos/1072439945/thumb/6.jpg?ip=x480" href="https://ugahacks.com" />

        </div>
        <button
          className="mt-6 md:mt-12 px-6 md:px-12 py-1.5 md:py-3 bg-[#E8DCC8] text-[#4A5C8C] font-encode-sans text-sm md:text-lg rounded-full hover:scale-105 transition-transform duration-200"
        >
          Sponsorship Packet
        </button>
      </div>
    </section>
  );
}