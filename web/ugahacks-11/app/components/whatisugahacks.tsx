import Image from 'next/image';

const WhatIsUGAHacks = () => {
  return (
    <section className="w-full">
      <Image
        src="/About.png"
        alt="What is UGAHacks"
        width={1440}
        height={900}
        className="w-full h-auto"
      />
    </section>
  );
};

export default WhatIsUGAHacks;