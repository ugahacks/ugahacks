import About from "~/components/About/About";
import WhatIsUGAHacks from "~/components/WhatIsUGAHacks/WhatIsUGAHacks";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col py-16 md:py-24">
      <WhatIsUGAHacks />
      <About />
    </main>
  );
}
