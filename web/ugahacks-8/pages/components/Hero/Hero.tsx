import Image from "next/image";
import byteBanner from "../../../public/icons/HeroImages/images/byte_banner.png";

export default function Hero() {
  return (
    <>
      <section
        className="min-h-fit w-full bg-gradient-to-b to-goblin-500 from-celery-500"
        id="Hero"
      >
        <div className="mx-auto flex flex-col items-center text-center">
          <img src="/icons/HeroImages/images/byte_banner.png" 
            width={1600} height={500} className="px-24" alt="Byte Banner"
          />
          <h1 className="text-5xl text-white pb-16">
            University of Georgia <span>&#183;</span> February 3-5, 2023
          </h1>
          <div className="register_button ring-0">
            <a href="https://mybyte.ugahacks.com/" className="" target="_blank" rel="noreferrer">
              <span className="no-underline">MyByte Page</span>
            </a>
          </div>
          <div className="w-full pt-24 z-0 opacity-90">
            <img
              src="/icons/HeroImages/images/grid_texture.svg"
              className=" w-full " alt="Grid Texture"
            />
          </div>
        </div>
      </section>
    </>
  );
}
