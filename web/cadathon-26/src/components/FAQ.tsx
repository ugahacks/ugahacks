"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ReactNode, useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import RoadTexture from "./RoadTexture";

const CODE_OF_CONDUCT = "https://mlh.io/code-of-conduct";
const INFO_SITE = "https://makepacket.ugahacks.com";
const CONTACT_EMAIL = "hello@ugahacks.com";

function InlineLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      className="font-semibold text-pink-300 underline underline-offset-2 hover:text-pink-200"
    >
      {children}
    </a>
  );
}

/**
 * Question/answer pairs, rendered in order. Answers are JSX so they can carry
 * links; plain strings work too.
 */
const FAQS: { q: string; a: ReactNode }[] = [
  {
    q: "Where will the CADathon be held?",
    a: "Our first annual CADathon will be held in-person at the Driftmier Engineering Center, 597 DW Brooks Drive Athens, GA, 30602!",
  },
  {
    q: "How much will the event cost?",
    a: "Nothing! The entire event and its amazing perks are free for all participants, including meals and snacks to keep you powered throughout the weekend, as well as workshops to help you get started and sharpen your hacking skills.",
  },
  {
    q: "Can I start working on my project before the event?",
    a: "No. All UGAHacks projects must begin at the event. You are not permitted to begin a project before this event. Feel free to bring ideas, but no code or design files!",
  },
  {
    q: "What if I don't have a team or idea?",
    a: "Don't sweat it! You're free to join an existing team or form a new one when you get there. We'll also provide ample opportunities for CADers to meet each other and brainstorm some amazing ideas.",
  },
  {
    q: "How many people can I have on my team?",
    a: "There is a maximum size of 4 people - we encourage teaming up to learn from your peers and build something amazing!",
  },
  {
    q: "What are the rules all attendees must abide by?",
    a: (
      <>
        UGAHacks will be following the MLH Code of Conduct. By participating in
        any UGAHacks event, you are agreeing to follow the Code of Conduct
        throughout the duration of the event.{" "}
        <InlineLink href={CODE_OF_CONDUCT}>
          Check out the MLH Code of Conduct.
        </InlineLink>
      </>
    ),
  },
  {
    q: "Who do I reach out to if I have more questions?",
    a: (
      <>
        Reach out to{" "}
        <InlineLink href={`mailto:${CONTACT_EMAIL}`}>
          {CONTACT_EMAIL}
        </InlineLink>{" "}
        and we&rsquo;ll be happy to answer it! Look for the [Organizer] tag in
        Slack, as well as our live event information at{" "}
        <InlineLink href={INFO_SITE}>makepacket.ugahacks.com</InlineLink>
      </>
    ),
  },
];

export default function FAQ() {
  const [open, setOpen] = useState("");

  return (
    <div className="relative bg-[url(/bg.png)] bg-cover bg-center text-zinc-950/40">
      {/* Same hero photo, knocked back further than the hero and footer so the
          accordion reads clearly on top of it. */}
      <div aria-hidden className="absolute inset-0 z-0 bg-zinc-950/65" />
      <RoadTexture />

      <section className="relative z-0 mx-auto flex w-full max-w-5xl flex-col gap-8 px-4 py-12 sm:gap-10 sm:px-8 sm:py-16 lg:py-24">
        <h1 className="font-heading text-3xl font-extrabold tracking-wide text-white text-border-5 text-border-black sm:text-4xl lg:text-5xl">
          FAQ
        </h1>

        <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-12">
          {/* Panels snap open with no height animation: any dropped frame
              during a tween shows up as a reflow of everything below. The
              stack instead reserves exactly one panel's height as bottom
              margin while nothing is open, and gives that space back the
              moment a panel takes it -- so the section's total height is
              identical open or closed, with nothing to animate. */}
          <Accordion.Root
            type="single"
            collapsible
            value={open}
            onValueChange={setOpen}
            className={`flex w-full max-w-prose flex-col gap-4 sm:gap-5 ${
              open ? "" : "lg:mb-48"
            }`}
          >
            {FAQS.map(({ q, a }) => (
              <Accordion.Item
                key={q}
                value={q}
                className="overflow-hidden rounded-md border-2 border-black bg-indigo-950 shadow-brutal"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="group flex w-full items-center justify-between gap-3 bg-pink-500 px-4 py-3 text-left leading-snug font-semibold text-black data-[state=open]:border-b-2 data-[state=open]:border-black sm:py-4 sm:text-lg">
                    {q}
                    <RiArrowDownSLine className="shrink-0 text-xl transition-transform duration-200 group-data-[state=open]:rotate-180" />
                  </Accordion.Trigger>
                </Accordion.Header>

                {/* forceMount keeps every answer in the DOM so it is present in
                    the prerendered HTML for crawlers, rather than being mounted
                    only once opened. Anything unusually long scrolls inside its
                    own panel rather than breaking the shared height. */}
                <Accordion.Content
                  forceMount
                  className="h-0 overflow-hidden data-[state=open]:h-56 sm:data-[state=open]:h-48"
                >
                  <div className="h-full overflow-y-auto px-4 py-3">
                    <p className="text-white sm:text-lg">{a}</p>
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>

          {/* Below lg this sits in the space the open panel would occupy, and
              collapses out of the way when a panel takes that space -- so the
              section's height is the same either way. */}
          <div
            className={`flex w-full items-center justify-center max-lg:overflow-hidden lg:w-auto lg:flex-1 ${
              open ? "max-lg:h-0" : "max-lg:h-56 sm:max-lg:h-48"
            }`}
          >
            <img
              src="/pit-stop.svg"
              alt=""
              className="w-28 rotate-90 sm:w-32 lg:w-40 lg:rotate-0 xl:w-48"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
