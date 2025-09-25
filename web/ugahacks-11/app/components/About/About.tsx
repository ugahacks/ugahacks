import Image from "next/image";
export default function About() {
  return (
    <section
      id="about"
      className="relative w-full py-16 md:py-24"
      style={{
        backgroundImage: 'url("/paperbackground.png")',
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
        backgroundSize: "100% auto", // full width, no cropping
        backgroundColor: "#F6EFE2",
      }}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20 pb-12 md:pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Left: text */}
          <div className="flex flex-col justify-center text-center h-full">
            <h2 className="font-amarante text-[34px] md:text-5xl mb-6 text-[#3E4C8A]">
              What is UGAHacks?
            </h2>

            <p className="font-encode text-[15px] md:text-lg leading-relaxed mb-4 text-[#9B6798]">
              UGAHacks is an annual hackathon organized by students at the
              University of Georgia in Athens, Georgia. Hackathons are all about
              dedicated people coming together to create something amazing in an
              epic 48-hour programming sleepover.
            </p>

            <p className="text-[15px] md:text-lg leading-relaxed text-[#9B6798] font-encode">
              Even though submitting a project is the main objective, that&#39;s not
              all there is. We&#39;ll have mentors, free food, video game
              competitions, workshops, and more. There&#39;s even a workshop for
              anyone who still needs to find teammates!
            </p>
          </div>

          {/* Right: mascot image */}
          <div className="flex justify-center">
            <Image
              src="/byteabout.png"
              alt="Byte the wizard mascot"
              width={520}
              height={520}
              className="w-[78%] md:w-[86%] h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
