import Image from "next/image";
import {
  SPONSOR_CHALLENGES,
  SPONSOR_PLACEHOLDER_SLOTS,
} from "~/config/sponsorTracks";

type PlaceholderSlot = (typeof SPONSOR_PLACEHOLDER_SLOTS)[number];

const PLACEHOLDER_CLASSES: Record<PlaceholderSlot, string> = {
  green: "bg-slot-green",
  mauve: "bg-slot-mauve",
  blue: "bg-slot-blue",
};

function SponsorFolder({ title }: { title: string }) {
  return (
    <article className="relative aspect-[526/572] w-full max-w-[526px] shrink-0">
      <Image
        src="/folder.png"
        alt=""
        width={526}
        height={572}
        className="pointer-events-none absolute inset-0 h-full w-full object-contain"
        aria-hidden="true"
      />

      <p className="absolute top-[17.1%] left-[21.3%] font-stamp text-[clamp(20px,2.15vw,26px)] leading-none font-bold whitespace-nowrap text-folder-ink">
        {title}
      </p>

      <div className="absolute bottom-[22.7%] left-[28.1%]">
        <p className="font-stamp text-[clamp(24px,2.6vw,32px)] leading-none font-bold text-folder-ink uppercase">
          TOP SECRET
        </p>
        <div className="mt-[3px] h-[3px] w-[168px] max-w-[47%] bg-folder-ink" />
      </div>
    </article>
  );
}

function PlaceholderSlot({ slot }: { slot: PlaceholderSlot }) {
  return (
    <div
      className={`relative h-[204px] w-full overflow-hidden ${PLACEHOLDER_CLASSES[slot]}`}
      aria-hidden="true"
    >
      {/* Paper corner folded over the lower-right edge. */}
      <span className="absolute right-0 bottom-0 h-[52px] w-[52px] bg-black/[0.08] [clip-path:polygon(100%_0,100%_100%,0_100%)]" />
      <span className="absolute right-0 bottom-0 h-[47px] w-[47px] bg-black/[0.05] [clip-path:polygon(100%_0,100%_100%,0_100%)]" />
    </div>
  );
}

export default function SponsorTracks() {
  return (
    <section
      id="sponsor-tracks"
      className="relative scroll-mt-nav overflow-hidden bg-wood"
      aria-labelledby="sponsor-tracks-heading"
    >
      <div className="relative mx-auto min-h-[760px] w-full max-w-[1440px] overflow-hidden px-4 sm:min-h-[900px] sm:px-6 lg:min-h-[1024px] lg:px-0">
        {/* Subtle wood-grain layer: the base token remains the source of truth
            for the section ground color, while the texture gives the Figma
            artwork its photographed wood feel. */}
        <div
          className="pointer-events-none absolute inset-0 bg-repeat opacity-40"
          style={{ backgroundImage: "url('/sponsor-wood-texture.png')" }}
          aria-hidden="true"
        />

        <header className="relative z-10 pt-6 text-center lg:absolute lg:inset-x-0 lg:top-0 lg:pt-0">
          <h2
            id="sponsor-tracks-heading"
            className="font-heading text-[56px] leading-none font-bold tracking-case text-gold sm:text-[72px] lg:pt-[18px] lg:text-[96px] lg:leading-[1.5]"
          >
            Sponsor Tracks
          </h2>
          <p className="mt-2 font-heading text-[24px] leading-none font-bold tracking-case text-paper sm:text-[30px] lg:absolute lg:top-[137px] lg:mt-0 lg:w-full lg:text-[40px] lg:leading-[1.5]">
            COMING SOON...
          </p>
        </header>

        {/* Desktop arrangement follows the 1440px Figma composition. */}
        <div className="relative z-10 mx-auto mt-10 flex flex-col items-center gap-8 lg:absolute lg:top-[130px] lg:left-0 lg:mt-0 lg:grid lg:h-[572px] lg:w-[1398px] lg:grid-cols-[repeat(3,466px)] lg:gap-0">
          {SPONSOR_CHALLENGES.map((challenge) => (
            <SponsorFolder key={challenge} title={challenge} />
          ))}
        </div>

        <div className="relative z-10 mx-auto mt-2 grid w-full max-w-[980px] grid-cols-1 gap-6 px-2 pb-12 sm:grid-cols-3 sm:gap-8 lg:absolute lg:bottom-0 lg:left-[77px] lg:mt-0 lg:w-[1318px] lg:max-w-none lg:grid-cols-[repeat(3,386px)] lg:gap-[80px] lg:px-0 lg:pb-[109px]">
          {SPONSOR_PLACEHOLDER_SLOTS.map((slot) => (
            <PlaceholderSlot key={slot} slot={slot} />
          ))}
        </div>
      </div>
    </section>
  );
}
