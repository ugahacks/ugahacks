"use client";

import * as Accordion from "@radix-ui/react-accordion";
import Image from "next/image";
import { ReactNode, useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import bg from "~/assets/bg.png";
import pitStop from "~/assets/pit-stop.svg";
import RoadTexture from "./RoadTexture";
import TrackAnchor from "./track/TrackAnchor";

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
    <div
      className="relative bg-cover bg-center text-zinc-950/40"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      {/* Same hero photo, knocked back further than the hero and footer so the
          accordion reads clearly on top of it. */}
      <div aria-hidden className="absolute inset-0 z-0 bg-zinc-950/65" />
      <RoadTexture />

      {/* The track crosses into the right gutter here, in the section's top
          padding, and back out to the left in the bottom padding, so Sponsors
          onward don't need to change lanes. Both sit half a track width in
          from the section's edge, so the road's outer edge is flush with the
          boundary; the section's own py-* is then set so its inner edge
          clears the content by a full flex gap -- the same breathing room the
          heading has below it. leading-none on the heading is what makes that
          arithmetic hold, since the default line-height would otherwise pad
          the below side further than the above. */}
      <TrackAnchor className="absolute top-5.75 right-11.75 lg:top-9 lg:right-29" />
      <TrackAnchor className="absolute bottom-5.75 left-11.75 lg:bottom-9 lg:left-29" />

      <section className="relative z-0 mx-auto flex w-full max-w-5xl flex-col gap-8 py-18.75 pr-23.5 pl-6 sm:gap-10 sm:py-20.75 lg:py-24.5 lg:pr-58 lg:pl-20">
        <h1 className="font-heading text-3xl leading-none font-extrabold tracking-wide text-white text-border-5 text-border-black sm:text-4xl lg:text-5xl">
          FAQ
        </h1>

        <div className="flex flex-col">
          {/* Panels snap open with no height animation: any dropped frame
              during a tween shows up as a reflow of everything below. The
              pit stop below instead holds exactly one panel's height while
              nothing is open, and gives that space back the moment a panel
              takes it -- so the section's total height is identical open or
              closed, with nothing to animate. */}
          <Accordion.Root
            type="single"
            collapsible
            value={open}
            onValueChange={setOpen}
            className="flex w-full max-w-prose flex-col gap-4 sm:gap-5"
          >
            {FAQS.map(({ q, a }) => (
              <Accordion.Item
                key={q}
                value={q}
                className="overflow-hidden rounded-md border-2 border-black bg-indigo-950 shadow-brutal"
              >
                <Accordion.Header>
                  {/* The rule under an open trigger is always there, just
                      transparent until it's needed -- added only on open it
                      would make the trigger 2px taller, which is the whole
                      section growing by 2px as a panel opens. Backgrounds
                      paint under the border box, so the pink runs behind it
                      and a closed trigger looks untouched. */}
                  <Accordion.Trigger className="group flex w-full items-center justify-between gap-3 border-b-2 border-transparent bg-pink-500 px-4 py-3 text-left leading-snug font-semibold text-black data-[state=open]:border-black sm:py-4 sm:text-lg">
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

          {/* Holds exactly the space one open panel takes, and collapses out
              of the way when a panel takes it -- so the section's height is
              the same either way. No gap above it: butted straight against
              the accordion, the image sits centered in exactly the reserved
              swap space rather than being pushed off-center by a gap. */}
          {/* max-w-prose matches the accordion, so justify-end lines the
              graphic up with the right edge of the panels rather than with
              the section's much wider content column. The padding matches the
              accordion's own gap; it has to drop away with the height, since
              a border-box element can't shrink below its own padding and the
              swap space would never reach zero. */}
          <div
            className={`flex w-full max-w-prose items-center justify-end overflow-hidden ${
              open ? "h-0" : "h-56 py-4 sm:h-48 sm:py-5"
            }`}
          >
            {/* Rotated a quarter turn, the image's *width* is what you see as
                its height -- so these are sized to the swap space less that
                padding (224-32, then 192-40). Rotating also leaves the visual
                box centered on the layout box, so it would hang off the right
                edge by half the difference between the two: the artwork is
                442x566, making that overhang (566/442 - 1) / 2 = 14% of the
                width, translated back to sit flush right at either size. */}
            <Image
              src={pitStop}
              alt=""
              className="h-auto w-48 translate-x-[-14%] -rotate-90 sm:w-38"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
