import Image from "next/image";
import texture from "~/assets/texture.png";

export default function SponsorSection() {
  const sponsors = Array.from({ length: 9 }, (_, index) => ({
    id: index + 1,
    websiteUrl: "https://ugahacks.com",
  }));

  return (
    <section className="bg-[#f7f5e8] min-h-screen w-full flex flex-col items-center justify-center py-20 px-6">
      <div className="w-full flex flex-col items-center">
        
        {/* Sponsors Banner */}
        <div className="w-full bg-[#0b1e2f] border-4 border-[#12233b] py-5 mb-12 flex items-center justify-center">
          <h2 className="text-5xl md:text-[96px] leading-[1.5] font-bold tracking-[-0.011em] text-[#f8c62c] font-heading text-center">
            SPONSORS
          </h2>
        </div>

        {/* 3x3 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full">
          {sponsors.map((sponsor) => (
            <a
              key={sponsor.id}
              href={sponsor.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative h-40 bg-[#12233b] border-2 border-[#12233b] rounded-none transition-all flex items-center justify-center p-6 overflow-hidden hover:opacity-90"
            >
              <Image
                src={texture}
                alt=""
                fill
                sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="pointer-events-none object-cover opacity-40"
              />

            </a>
          ))}
        </div>

      </div>
    </section>
  );
}