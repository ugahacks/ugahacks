import FaqAccordion from "./FaqAccordion";

export default function Faq() {
  return (
    <main>
      <section id="faq">
        <div className="w-full h-[1410px] flex items-center justify-end bg-[url('/FAQ.jpg')] bg-cover bg-center bg-no-repeat relative font-amarante">
          <div className="absolute top-8 left-8 text-left">
                <h1 className="text-white text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight font-amarante mt-6 space-y-2">
                  <span className="block" style={{ textShadow: '0 4px 12px #000', WebkitTextStroke: '1px black' }}>Frequently</span>
                  <span className="block" style={{ textShadow: '0 4px 12px #000', WebkitTextStroke: '1px black' }}>Asked</span>
                  <span className="block" style={{ textShadow: '0 4px 12px #000', WebkitTextStroke: '1px black' }}>Questions</span>
                </h1>
                <h2 className="text-white text-2xl sm:text-2xl md:text-3xl font-bold font-amarante mt-2" style={{ WebkitTextStroke: '0.5px black', textShadow: '0 2px 6px rgba(0,0,0,0.5)' }}>The secrets behind the spellbook</h2>
          </div>
          <FaqAccordion />
        </div>
      </section>
    </main>
  );
}