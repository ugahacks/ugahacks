import About from "~/components/About/About";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col py-16 md:py-24">
      {/*
        About is a section, not the whole page: this padding is what puts
        plain paper-colored space above and below it (body's background is
        already `--color-paper`, globals.css line ~347) instead of the
        argyle pattern hitting the viewport's top edge with nothing before
        it. It's scaffolding for *this* single-section state of the page,
        not a permanent value -- Hero (when built) will almost certainly
        want to sit flush against the top with no gap above it, like
        ugahacks-11's Hero does, and a real Footer wants the same at the
        bottom. Move this padding down to whatever the new first/last
        section is as those get built, rather than leaving it here.
      */}
      <About />
    </main>
  );
}
