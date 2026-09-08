"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
export default function Contact() {
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!typedRef.current) return;

    const typed = new Typed(typedRef.current, {
      strings: ["Contact"],
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    });

    return () => typed.destroy();
  }, []);

  return (
    <>
      <Navbar />
      {/* Anchor so the navbar link can scroll here */}
      <section id="contact" className="scroll-mt-24 bg-[#101828] min-h-screen">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Copy */}
            <div>
              <span className="font-raleway text-[clamp(2.5rem,6vw,6rem)] leading-none tracking-tight text-white">
                <span ref={typedRef}></span>
              </span>

              <p className="mt-8 text-[clamp(1.25rem,2vw,2rem)] font-raleway text-red-500">
                Looking to reach out? Get in contact with us!
              </p>

              <div className="mt-10 space-y-6 text-gray-300">
                <p>
                  <span className="font-semibold text-gray-200">General:</span>{" "}
                  <Link
                    href="mailto:hello@ugahacks.com"
                    className="text-red-500 hover:underline"
                  >
                    hello@ugahacks.com
                  </Link>
                </p>
                <p>
                  <span className="font-semibold text-gray-200">Sponsor:</span>{" "}
                  <Link
                    href="mailto:sponsor@ugahacks.com"
                    className="text-red-500 hover:underline"
                  >
                    sponsor@ugahacks.com
                  </Link>
                </p>

                <div className="pt-4">
                  <p className="font-semibold text-gray-200">
                    Mailing Address:
                  </p>
                  <address className="not-italic whitespace-pre-line">
                    University Hackathons{"\n"}
                    PO Box 1827{"\n"}
                    Athens, GA 30603
                  </address>
                </div>

                <div>
                  <p className="font-semibold text-gray-200">
                    Physical Address:
                  </p>
                  <address className="not-italic whitespace-pre-line">
                    University Hackathons{"\n"}
                    102 Tate Student Center{"\n"}
                    Athens, GA 30602
                  </address>
                </div>
              </div>
            </div>

            {/* Right: Envelope image */}
            <div className="relative w-full aspect-[16/9] lg:aspect-[4/3]">
              {/* Replace the src with your public asset path, e.g. /images/contact-envelope.png */}
              <Image
                src="/contact.png"
                alt="UGAHacks contact postcard"
                fill
                priority
                className="object-contain rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
