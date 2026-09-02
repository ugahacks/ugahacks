"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { useState } from "react";
import type { CSSProperties } from "react";
import { TRACKS } from "~/config/tracks";

type Track = (typeof TRACKS)[number];

/**
 * Pill color cycle for the track name on each folder face. The design paints
 * three hues repeating down the stack; these are the three flat tokens that
 * read as label stock against manila. Gold is the only light chip, so it
 * pairs with `text-ink`; the other two take `text-paper`.
 */
const PILL_COLORS = ["#a9798f", "#7a8b9c", "#73937a"] as const;

/**
 * Per-pill tilt, cycled by index so the stack doesn't read as a uniform
 * `rotate-0.5` repeated eight times. Values stay in the same slight range as
 * the original constant, alternating direction.
 */
const PILL_ROTATIONS = [
  "-0.75deg",
  "0.6deg",
  "-0.4deg",
  "0.85deg",
  "-0.6deg",
  "0.4deg",
  "-0.85deg",
  "0.65deg",
] as const;

/**
 * Copy shown on the description page while `blurb` is unset in the config.
 * The design draws the panel empty; this keeps the page from rendering as a
 * bare sheet until real copy arrives.
 */
const PENDING_BLURB =
  "Case details are still being compiled. Check back closer to the event.";

function Folder({
  track,
  index,
  open,
}: {
  track: Track;
  index: number;
  open: boolean;
}) {
  const backgroundColor = PILL_COLORS[index % PILL_COLORS.length];
  const rotate = PILL_ROTATIONS[index % PILL_ROTATIONS.length];

  return (
    <Accordion.Item
      value={track.file}
      className="group relative z-(--stack) -mt-2.5 perspective-distant"
      style={{ "--stack": index + 1 } as CSSProperties}
    >
      <div className="flex origin-center -rotate-x-20 transform-gpu flex-col shadow-[0_-12px_16px_-8px_rgb(0_0_0/0.5)] transition-transform duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:-translate-y-1.5 group-hover:-rotate-x-16 group-data-[state=open]:rotate-x-0 group-data-[state=open]:group-hover:translate-y-0">
        <Accordion.Trigger
          className={`relative cursor-pointer rounded-t-xl border border-b-0 border-folder-ink bg-manila px-5 pt-5 duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] outline-none focus-visible:*:ring-4 focus-visible:*:ring-gold`}
        >
          <span className="grid w-full grid-cols-[repeat(var(--cols),1fr)] rounded-t-md bg-folder-ink px-3 md:px-4 gap-3 md:gap-4 pt-4 pb-5 shadow-sm [--cols:1] sm:[--cols:2] lg:[--cols:3] xl:[--cols:4]">
            <span className="relative col-start-[calc(mod(var(--stack)-1,var(--cols))+1)]">
              <span className="absolute -top-8.75 left-0 z-10 block w-fit -translate-y-full rounded-t-xl border border-b-0 border-folder-ink bg-manila px-3 py-0.5 text-sm font-bold tracking-case text-folder-ink uppercase sm:px-5 sm:py-1 sm:text-base">
                File {track.file}
              </span>
              <span
                className={`block rounded-md border border-ink px-2 py-1 w-max mx-auto sm:w-auto text-center font-bold tracking-case text-ink uppercase shadow-sm md:text-lg`}
                style={{ rotate, backgroundColor }}
              >
                {track.name}
              </span>
            </span>
          </span>
        </Accordion.Trigger>
        <Accordion.Content className="group" forceMount inert={!open}>
          <div className="grid grid-rows-[0fr] transition-[grid-template-rows] group-data-[state=open]:grid-rows-[1fr]">
            <div className="overflow-hidden border-x border-folder-ink bg-manila px-5">
              <div className="bg-folder-ink px-3 md:px-4 pb-8">
                <div className="rounded-xs border border-hairline bg-paper px-3 py-4 text-ink shadow-xs sm:px-8 sm:py-7">
                  <div className="mx-auto max-w-prose leading-relaxed tracking-case text-sm sm:text-base md:text-lg">
                    <p className="font-bold pb-[1lh]">Case {track.file}.</p>

                    <p>{track.description ?? PENDING_BLURB}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Accordion.Content>
      </div>
    </Accordion.Item>
  );
}

export default function FilingCabinet() {
  const [openFile, setOpenFile] = useState("");
  const files = [...TRACKS].reverse();

  return (
    <div className="relative mx-auto px-3 sm:px-1 md:px-4 lg:px-6 max-w-5xl">
      <div className="rounded-t-md border border-b-0 border-white/10 bg-ink bg-linear-to-b from-white/10 via-white/0 to-black/40 px-2 pt-2 shadow-[inset_0_2px_0_rgb(255_255_255/0.12)] sm:px-4 sm:pt-3">
        {/* The drawer cavity, seen from above: dark interior with the
            hanging-folder rails down each side. */}
        <div className="relative rounded-t-xs bg-black/55 px-1 pt-4 shadow-[inset_0_16px_28px_rgb(0_0_0/0.65),inset_0_-3px_8px_rgb(0_0_0/0.4)] sm:pt-6">
          <Accordion.Root
            type="single"
            collapsible
            value={openFile}
            onValueChange={setOpenFile}
            className="mx-auto -mb-2 flex max-w-5xl flex-col pt-2"
          >
            {files.map((track, index) => (
              <Folder
                key={track.file}
                track={track}
                index={index}
                open={openFile === track.file}
              />
            ))}
          </Accordion.Root>
        </div>
      </div>
      <div className="relative z-10 perspective-dramatic">
        <div className="h-42 -rotate-x-6 rounded-xl border border-white/10 bg-linear-to-b from-ink to-ink-700 shadow-[0_-12px_16px_-8px_rgb(0_0_0/0.5)]" />
        <div className="rounded-b-0 absolute inset-1/2 h-8 w-24 -translate-1/2 -rotate-x-20 rounded-sm border-2 border-b-0 border-ink-400 bg-linear-to-t from-ink-600 to-ink-500" />
      </div>
    </div>
  );
}
