"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { FAQS } from "~/config/faq";

export function FAQ() {
  return (
    <section
      id="faq"
      className="scroll-mt-nav bg-ink px-8 pt-40 pb-16 text-paper sm:pt-48 sm:pb-20 lg:pt-52 lg:pb-24"
      style={{
        backgroundImage: 'url("/faq-background-tile.png")',
        backgroundPosition:
          "clamp(8rem, 16.56vw, 16.75rem) clamp(4rem, 8.03vw, 8.125rem)",
        backgroundRepeat: "repeat",
        backgroundSize: "clamp(20rem, 31.65vw, 32rem) auto",
      }}
    >
      <div>
        <h2 className="font-heading text-5xl leading-[1.5] font-bold text-gold text-shadow-stamp sm:text-7xl lg:text-heading">
          <span className="block">Frequently</span>
          <span className="block">Asked</span>
          <span className="block">Questions</span>
        </h2>

        <Accordion.Root
          type="single"
          collapsible
          className="mx-auto mt-20 space-y-3 sm:mt-24 lg:mt-28 lg:w-[75vw] lg:max-w-[67rem]"
        >
          {FAQS.map((faq, index) => (
            <Accordion.Item
              key={faq.q}
              value={`item-${index}`}
              className="overflow-hidden rounded-card bg-paper text-ink"
            >
              <Accordion.Header>
                <Accordion.Trigger className="group flex min-h-14 w-full items-center justify-between gap-4 px-4 py-3 text-left text-sm font-bold text-tape-teal transition-colors hover:bg-gold data-[state=open]:text-ink sm:min-h-16 sm:px-6 sm:text-base lg:min-h-[4.25rem] lg:text-question">
                  <span>{faq.q}</span>
                  <span
                    aria-hidden
                    className="size-0 shrink-0 border-x-[5px] border-t-[8px] border-x-transparent border-t-brick transition-transform group-data-[state=open]:rotate-180"
                  />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                <div className="px-4 pt-0 pb-5 text-sm leading-6 font-bold sm:px-6 sm:text-base sm:leading-7 lg:text-lg">
                  {faq.a}
                </div>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}
