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
          <Image src={byteBanner} width={1600} height={500} />
          <h1 className="text-5xl text-white pb-16">
            University of Georgia <span>&#183;</span> Feburary 3-5, 2022
          </h1>
          <div className="register_button ring-0">
            <a
              href="https://ugeorgia.ca1.qualtrics.com/jfe/form/SV_8x05NF3a2OkoMeh"
              className=""
            >
              <span className="no-underline">Register Now!</span>
            </a>
          </div>
          <div className="w-full pt-24 z-0 opacity-90">
            <img
              src="/icons/HeroImages/images/grid_texture.svg"
              className=" w-full "
            />
          </div>
        </div>
      </section>
    </>
  );
}