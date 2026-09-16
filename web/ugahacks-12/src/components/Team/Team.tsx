import Image from "next/image";
import { TEAM_PAGE_URL } from "~/config/site";

export default function Team() {
  return (
    <section
      id="team"
      className="scroll-mt-nav relative flex min-h-[760px] items-center justify-center overflow-hidden bg-paper px-6 py-20 sm:min-h-[900px] sm:px-10 lg:min-h-[1024px] lg:px-16 lg:py-24"
      aria-labelledby="team-heading"
    >
      <Image
        src="/Vector.png"
        alt=""
        width={82}
        height={82}
        className="pointer-events-none absolute left-[10%] top-[11%] hidden h-auto w-16 sm:block lg:left-[12%] lg:top-[5%] lg:w-[82px]"
        style={{ height: "auto" }}
        aria-hidden="true"
      />
      <Image
        src="/Clip path group.png"
        alt=""
        width={560}
        height={577}
        className="pointer-events-none absolute -right-[12%] top-[3%] hidden h-auto w-[38%] max-w-[560px] lg:right-[1%] lg:top-[-10%] lg:block"
        aria-hidden="true"
      />

      <div className="relative z-10 flex w-full max-w-[610px] flex-col items-center pt-8 sm:pt-0 lg:absolute lg:left-1/2 lg:top-[95px] lg:w-[42vw] lg:max-w-[610px] lg:-translate-x-1/2 lg:pt-0">
        <div className="relative flex w-full flex-col items-center">
          <div className="relative z-10 flex w-full max-w-[270px] flex-col items-center sm:max-w-[360px] lg:max-w-[270px]">
            <p className="w-full whitespace-nowrap rounded-[3px] bg-ink px-3 py-1.5 text-center text-[10px] font-bold leading-tight text-paper sm:text-[12px] lg:text-[11px]">
              CASE FILE — LEAD INVESTIGATORS
            </p>
            <h2
              id="team-heading"
              className="mt-4 font-heading text-[38px] font-bold leading-none tracking-case text-sepia sm:text-[50px]"
            >
              Our Team
            </h2>
          </div>

          <Image
            src="/Figma Hackathon (1) 1.png"
            alt=""
            width={193}
            height={153}
            className="pointer-events-none absolute -top-2 left-1/2 z-20 w-20 -translate-x-1/2 sm:-top-1 sm:w-[115px] lg:top-[90px] lg:w-[125px]"
            aria-hidden="true"
          />

          <div className="relative mt-10 aspect-[610/560] w-full max-w-[410px] sm:mt-12 sm:max-w-[610px] lg:mt-0 lg:max-w-[610px]">
            <Image
              src="/Shape with text-1.png"
              alt=""
              fill
              priority
              className="object-contain"
              aria-hidden="true"
            />
            <p className="absolute inset-x-0 bottom-[7%] text-center font-heading text-[11px] font-bold tracking-case text-paper sm:text-[15px] lg:text-[17px]">
              THE UGA HACKS 12 TEAM
            </p>
          </div>
        </div>

        <a
          href={TEAM_PAGE_URL}
          className="mt-7 inline-flex min-h-11 w-[252px] items-center justify-center rounded-full bg-board-green px-5 text-center text-[15px] font-bold tracking-case text-paper transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-board-green sm:mt-8 sm:w-[300px] sm:text-[19px]"
        >
          Visit Team Page
        </a>
      </div>
    </section>
  );
}