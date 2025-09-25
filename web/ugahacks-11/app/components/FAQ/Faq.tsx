
// Faq.tsx
import Image from "next/image";
import FaqAccordion from "./FaqAccordion";
export default function Faq() {
  return (
    <main>
      {/* Top black bar */}
      <div className="w-full bg-black" />

      <section id="faq" className="">
        <div className="w-full bg-[url('/FAQ.jpg')] bg-cover bg-center bg-no-repeat font-amarante p-12">
          {/* 2-column layout on md+, stacked on small screens */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* LEFT: Title + GIF placeholder (stacked) */}
            <div className="flex flex-col">
              <div className="text-left">
                <h1 className="text-white text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight font-amarante mt-6 space-y-2">
                  <span
                    className="block"
                    style={{ textShadow: "0 4px 12px #000", WebkitTextStroke: "1px black" }}
                  >
                    Frequently
                  </span>
                  <span
                    className="block"
                    style={{ textShadow: "0 4px 12px #000", WebkitTextStroke: "1px black" }}
                  >
                    Asked
                  </span>
                  <span
                    className="block"
                    style={{ textShadow: "0 4px 12px #000", WebkitTextStroke: "1px black" }}
                  >
                    Questions
                  </span>
                </h1>
                <h2
                  className="text-white text-2xl sm:text-2xl md:text-3xl font-bold font-amarante mt-2"
                  style={{ WebkitTextStroke: "0.5px black", textShadow: "0 2px 6px rgba(0,0,0,0.5)" }}
                >
                  The secrets behind the spellbook
                </h2>
              </div>

              {/* GIF placeholder under the title on the left side */}
              <div className="mt-6 flex justify-center">
                {/* Replace src with your actual .gif when ready */}
                <div className="w-full max-w-xl">
                  <Image
                    src="/fairybytegif.gif"
                    height={100}
                    width={100}
                    alt="FAQ animation"
                    className="w-[40vh] h-auto rounded-xl"
                    unoptimized
                  />
                </div>
              </div>
            </div>

            {/* RIGHT: Accordion only */}
            <div className="w-full my-auto md:pl-4">
              <FaqAccordion />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
