"use client";

import Image from "next/image";

export default function About() {
  return (
    <div id="about-us" className="min-h-screen p-2 bg-[#27282f]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="mb-12 text-5xl text-white font-raleway md:text-left md:ml-0">
          About Us
          <span className="cursor-blink text-[#aaa] -ml-1 -mt-2 inline-block">
            |
          </span>
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="prose prose-lg max-w-none space-y-6 font-raleway text-lg text-[#aaa] text-justify max-w-[600px]">
            <p>
              UGAHacks is a 501 (c)(3) non-profit organization that hosts an
              annual 48 hour programming sleepover which takes place in Athens,
              Georgia at the University of Georgia.
            </p>

            <p>
              UGAHacks is an event that prides itself as being like none other
              where hackers, sponsors, and mentors can come together and not
              only have an environment to work and create anything their mind
              can think of but also enjoy their time while they are there.
            </p>

            <p>
              UGAHacks has seen tremendous growth since its inception in 2015.
              We have grown from 200 hackers, 6 sponsors, and less than 10
              mentors to 600+ hackers, 15+ sponsors, and 15+ mentors.
            </p>

            <p>
              Every year there is a new adventure to explore and new prizes to
              be won. Each event encompasses different people to meet, workshops
              to learn from, food to enjoy, and side events to take some time to
              relax.
            </p>

            <p>
              We also have become a recognizable brand with the cutest mascot,
              Byte, who is seen making an appearance at every event we have
              since 2019.
            </p>

            <p>
              We are always looking for new partners and new people to be apart
              of our event each year in order to make it even better than the
              last and give them an opportunity to tap into recruiting
              up-and-coming computer science talent, so if you are interested,
              please feel free to reach out to us.
            </p>

            <p>
              As an organization, we take great pride in our growth and are
              excited to see our event reach even greater heights.
            </p>
          </div>

          <div className="flex justify-center items-center">
            <Image
              src="laptopbyte.svg"
              alt="Byte with Laptop"
              width={500}
              height={400}
              className="w-full max-w-lg h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
