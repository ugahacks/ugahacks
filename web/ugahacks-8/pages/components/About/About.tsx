import Image from "next/image";

export default function About() {
  return (
    <>
      <div
        className="min-h-screen w-full bg-goblin-500 overflow-clip"
        id="About"
      >
        <div className="text-center relative ">
          <div className="z-30 absolute pt-16 xl:pr-5 w-full xl:w-[48rem]">
            <div className="xl:w-[700px] w-fit xl:text-left text-center xl:bg-inherit bg-goblin-800 ease-in-out duration-150 transition-all mx-24 py-3">
              <h1 className="text-[3.25rem] text-white font-semibold xl:pr-[14rem] ">
                Create your own adventure.
              </h1>
              <div className=" text-white text-3xl pt-12 flex-col flex gap-9">
                <p>
                  UGAHacks is an annual hackathon organized by fellow students
                  at the University of Georgia in Athens, Georgia. Hackathons
                  are all about groups of dedicated people coming together to
                  create something amazing in an epic 48-hour programming
                  sleepover.
                </p>
                <p>
                  Even though submitting a project is the main objective,
                  that&apos;s not all there is. We&apos;ll have mentors, free
                  food, video game competitions, workshops and more.
                  There&apos;s even a workshop at the event for anyone that
                  still needs to find some teammates!
                </p>
                <p>So come and join us to build the future!</p>
              </div>
            </div>
          </div>

          <div className="relative w-full z-0 top-0 left-0">
            <div className="w-fit h-fit absolute right-[30rem] -top-60 scale-125 -rotate-3 z-10">
              <img
                src="/icons/AboutImages/images/Rolled_Map[1].png"
                alt="Rolled_Map"
              />
            </div>
            <div className=" w-fit h-fit rotate-12 absolute -right-28 -top-12 scale-100 z-20">
              <img
                src="/icons/AboutImages/images/Compass[1].png"
                alt="Compass"
              />
            </div>

            <div className="w-fit h-fit absolute scale-100 -right-[25rem] top-[25rem] z-10">
              <img
                src="/icons/AboutImages/images/Passport[1].png"
                alt="Passport"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
