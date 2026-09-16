"use client";

import { useState } from "react";
import { RiImageLine } from "react-icons/ri";

/**
 * The right-hand "evidence" side of the About section: a video in a
 * brick/board-green case-file mat (layer CSS: outer "Rectangle 12" #9B3D35 ~=
 * `brick`, inner "Rectangle 12" `board-green` + 7px sepia border), with a
 * photo tilted 27.3deg over its top-right corner, exactly as drawn.
 *
 * No real video or photo asset exists yet for ugahacks-12 (there's no
 * `public/` directory in this bootstrap at all). Both are built as
 * functional placeholders: the play button is fully wired to swap in a
 * real iframe the moment `videoUrl` is set in src/config/about.ts, and the
 * photo is a labeled empty-frame so its position/rotation is easy to check
 * against Figma before a real photo drops in.
 *
 * Only the play/embed toggle needs interactivity, so this is the one
 * client boundary; <About /> itself stays a server component.
 */
export default function AboutMedia({ videoUrl }: { videoUrl: string | null }) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="relative mx-auto w-full max-w-195.5">
      {/* Outer brick mat -- the reveal around the inner frame */}
      <div className="bg-brick p-4.5">
        {/* Inner board-green frame, 7px sepia border, per the layer CSS */}
        <div className="aspect-744/471 overflow-hidden border-[7px] border-sepia bg-board-green">
          {isPlaying && videoUrl ? (
            <iframe
              src={videoUrl}
              title="What is UGAHacks?"
              className="h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <button
              type="button"
              onClick={() => videoUrl && setIsPlaying(true)}
              disabled={!videoUrl}
              aria-label="Play the UGAHacks intro video"
              className="group relative flex h-full w-full items-center justify-center disabled:cursor-not-allowed"
            >
              <PlayGlyph />
              {!videoUrl && (
                <span className="absolute bottom-3 left-1/2 -translate-x-1/2 text-xs tracking-case text-paper/70">
                  Video coming soon
                </span>
              )}
            </button>
          )}
        </div>
      </div>

      {/* Tilted photo sticker, overlapping the top-right corner as drawn */}
      <div
        className="absolute -top-6 -right-4 hidden w-[34%] rotate-[27.3deg] border-4 border-white bg-plaster shadow-[0_4px_4px_rgba(0,0,0,0.25)] md:block"
        aria-hidden="true"
      >
        <div className="flex aspect-3/2 w-full items-center justify-center">
          <RiImageLine className="h-1/3 w-1/3 text-wall-brown/40" />
        </div>
      </div>
    </div>
  );
}

/**
 * The glossy red play button (layer CSS: circle #EB1717 + three white
 * highlight gradients + a `drop-shadow(0 4px 4px rgba(0,0,0,.25))` group
 * filter). #EB1717 isn't one of globals.css's tokenized colours -- it reads
 * as a generic "video play button" red rather than a brand colour, so it's
 * kept literal here instead of forced onto the nearest token
 * (`argyle-red`, #950f16, is a noticeably darker brick-red). The shadow
 * numbers match --text-shadow-stamp exactly, which the design uses as its
 * one soft-blur shadow language -- reused here via `filter`, since that
 * token is text-shadow-only and this is an SVG.
 */
function PlayGlyph() {
  return (
    <svg
      width="76"
      height="76"
      viewBox="0 0 76 76"
      className="drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] transition-transform group-enabled:group-hover:scale-105"
      aria-hidden="true"
    >
      <circle cx="38" cy="38" r="38" fill="#EB1717" />
      <path d="M30 23 L55 38 L30 53 Z" fill="white" />
    </svg>
  );
}
