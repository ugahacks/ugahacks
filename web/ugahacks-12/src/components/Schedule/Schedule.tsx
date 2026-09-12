export function Schedule() {
  return (
    <section
      id="schedule"
      className="relative flex min-h-[42rem] scroll-mt-nav flex-col items-center overflow-hidden bg-plum px-4 py-16 sm:min-h-[48rem] sm:px-6 sm:py-20 lg:min-h-[54rem] lg:px-8"
    >
      <h2 className="relative z-30 font-heading text-5xl leading-normal font-bold text-gold uppercase sm:text-7xl lg:text-8xl">
        Schedule
      </h2>

      <div className="relative mt-6 flex w-full flex-1 items-start justify-center sm:mt-8">
        <div className="relative z-10 w-[min(78vw,42rem)] border-4 border-ink bg-board-green p-4 sm:p-6">
          <div className="flex aspect-[2/1] items-center justify-center border-4 border-ink bg-tape-teal px-6 text-center">
            <p className="font-stamp text-3xl font-bold text-gold sm:text-5xl lg:text-6xl">
              To be Announced
            </p>
          </div>
        </div>

        <div
          aria-hidden
          className="absolute top-12 left-[43%] z-20 sm:top-20 lg:top-24"
        >
          <span className="absolute top-0 right-0 h-1.5 w-[70vw] origin-right rotate-[-4deg] bg-brick" />
          <span className="absolute top-0 right-0 h-1.5 w-[70vw] origin-right rotate-[-18deg] bg-brick" />
          <span className="absolute top-0 left-0 h-1.5 w-[78vw] origin-left rotate-[8deg] bg-brick" />
          <span className="absolute top-0 right-0 h-1.5 w-80 origin-right rotate-[80deg] bg-brick sm:w-96" />
          <span className="absolute top-0 left-0 size-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ink sm:size-7" />
        </div>
      </div>
    </section>
  );
}
