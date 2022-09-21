import Image from "next/image";

export default function Hero() {
  return (
    <>
      <section className="min-h-fit w-full bg-gradient-to-b from-goblin-500 to-celery-500  ">
        <div className="mx-auto flex flex-col items-center text-center">
          <Image
            src="/icons/HeroImages/images/byte_banner.png"
            width={2000}
            height={600}
          />
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
          <div className="w-full pt-24">
            <img
              src="/icons/HeroImages/images/grid_texture.svg"
              className=" w-full z-30"
            />
          </div>
        </div>
      </section>
    </>
  );
}
