import Image from "next/image";
import Link from "next/link";

export default function OurTeam() {
  return (
    <section
      id="team"
      className="relative w-full py-20 md:py-28 overflow-hidden bg-[#6E8B79]"
    >
      {/* ===== MAGICAL SWIRL OVERLAY  ===== */}
      <div
        className="
          pointer-events-none absolute inset-0 z-0
          bg-[url('/magicSwirll.png')] bg-no-repeat bg-top bg-cover
        "
        aria-hidden
      />
      {/* ===================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* LEFT COLUMN: Book + bottom-left cluster */}
          <div className="relative flex justify-center md:justify-start">
            {/* Bottom-left cluster */}
            <div className="pointer-events-none absolute bottom-0 left-0 translate-y-6 -translate-x-2 md:translate-y-8 md:-translate-x-3 z-10">
              <Image
                src="/Star 55.png"
                alt=""
                width={55}
                height={55}

                className="drop-shadow-sm scale-90 md:scale-100"
                priority
                draggable={false}
              />
              <div className="-translate-y-3 translate-x-3 md:-translate-y-4 md:translate-x-4">
                <Image
                  src="/Star 56.png"
                  alt=""
                  width={22}
                  height={22}

                  className="opacity-95"
                  priority
                  draggable={false}
                />
              </div>
            </div>

            {/* Book */}
            <div className="relative">
              <Image
                src="/BookofSpells.png"
                alt="Our Team book"
                width={540}
                height={680}
                className="
      relative z-[1] 
      w-full h-auto
      max-w-[280px] sm:max-w-[360px] md:max-w-[440px] lg:max-w-[520px]
      rotate-[-6deg] drop-shadow-2xl
    "
                priority
              />
            </div>
          </div>

          {/* RIGHT COLUMN: Team image + CTA + top-right cluster */}
          <div className="relative flex flex-col items-center gap-8">
            {/* Top-right cluster */}
            <div className="pointer-events-none absolute top-0 right-0 -translate-y-6 translate-x-2 md:-translate-y-8 md:translate-x-3 z-10">
              <Image
                src="/Star 47.png"
                alt=""
                width={55}
                height={55}

                className="drop-shadow-sm scale-90 md:scale-100"
                priority
                draggable={false}
              />
              <div className="-translate-y-3 -translate-x-3 md:-translate-y-4 md:-translate-x-4">
                <Image
                  src="/Star 52.png"
                  alt=""
                  width={24}
                  height={24}

                  className="opacity-95"
                  priority
                  draggable={false}
                />
              </div>
            </div>

            {/* Framed team image (border clearly outside image) */}
            <div className="relative w-[88vw] max-w-[520px] rotate-2">
              {/* Border frame */}
              <div className="absolute inset-1 rounded-xl border-[6px] md:border-8 border-[#3E4C8A] pointer-events-none" />
              {/* Team image inset slightly so border is visible */}
              <div className="relative  rounded-md overflow-hidden m-2 md:m-3">
                <Image
                  src="/TeamIMG_PNG.png"
                  alt="Our Team Book"
                  width={520}
                  height={360}
                  quality={100}
                  className="w-full h-auto object-cover z-[100]"
                  priority
                />
              </div>
            </div>

            <Link
              href="https://ugahacks.com/#team"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Team Page"
              className="self-center z-[100]"
            >
              <button
                type="button"
                className="px-6 md:px-8 py-3 md:py-4 rounded-2xl bg-[#FAF3E0] text-[#3E4C8A] shadow-[0_6px_0_0_rgba(0,0,0,0.2)] hover:shadow-[0_8px_0_0_rgba(0,0,0,0.25)] active:translate-y-[1px] font-encode font-medium transition"
              >
                Visit Team Page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
