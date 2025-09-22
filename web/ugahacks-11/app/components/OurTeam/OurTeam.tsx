import Image from "next/image";
import Link from "next/link";

export default function OurTeam() {
  return (
    <section
      id="our-team"
      className="relative w-full py-20 md:py-28 overflow-hidden"
      style={{ backgroundColor: "#6E8B79" }} // replace with exact figma green if you have it
    >
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* LEFT COLUMN: Book + bottom-left cluster (anchored to this column) */}
          <div className="relative flex justify-center md:justify-start">
            {/* Bottom-left cluster */}
            <div className="pointer-events-none absolute bottom-0 left-0 translate-y-6 -translate-x-2 md:translate-y-8 md:-translate-x-3 z-10">
              {/* Large yellow (Star 55) */}
              <Image
                src="/Star 55.png"
                alt=""
                width={55}
                height={55}
                quality={100}
                className="drop-shadow-sm scale-90 md:scale-100"
                priority
                draggable={false}
              />
              {/* Small purple (Star 56) slightly up/right of the yellow */}
              <div className="-translate-y-3 translate-x-3 md:-translate-y-4 md:translate-x-4">
                <Image
                  src="/Star 56.png"
                  alt=""
                  width={22}
                  height={22}
                  quality={100}
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
                quality={100}
                className="relative z-[1] max-w-[440px] md:max-w-[520px] h-auto rotate-[-6deg] drop-shadow-2xl"
                priority
              />
            </div>
          </div>

          {/* RIGHT COLUMN: Team image + centered CTA + top-right cluster (anchored to this column) */}
          <div className="relative flex flex-col items-center gap-8">
            {/* Top-right cluster */}
            <div className="pointer-events-none absolute top-0 right-0 -translate-y-6 translate-x-2 md:-translate-y-8 md:translate-x-3 z-10">
              {/* Large yellow (Star 47) */}
              <Image
                src="/Star 47.png"
                alt=""
                width={55}
                height={55}
                quality={100}
                className="drop-shadow-sm scale-90 md:scale-100"
                priority
                draggable={false}
              />
              {/* Small purple (Star 52) slightly up/left of the yellow */}
              <div className="-translate-y-3 -translate-x-3 md:-translate-y-4 md:-translate-x-4">
                <Image
                  src="/Star 52.png"
                  alt=""
                  width={24}
                  height={24}
                  quality={100}
                  className="opacity-95"
                  priority
                  draggable={false}
                />
              </div>
            </div>

            {/* Framed team image */}
            <div className="relative">
              {/* Hand-drawn border frame */}
              <div className="absolute -inset-3 md:-inset-4 rotate-2 rounded-xl border-[6px] md:border-8 border-[#3E4C8A]/80" />
              {/* Your team photo inside the frame */}
              <Image
                src="/TeamIMG_PNG.png"
                alt="Our Team"
                width={520}
                height={360}
                quality={100}
                className="relative z-[1] w-[88vw] max-w-[520px] h-auto rounded-md object-cover"
                priority
              />
            </div>

            {/* CTA centered below the rectangle on all breakpoints */}
            <Link
              href="https://ugahacks.com/#team"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Team Page"
              className="self-center"
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
