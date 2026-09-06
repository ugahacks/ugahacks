"use client";

import { useCallback, useEffect, useId, useRef } from "react";

/** The small subset of the YouTube IFrame API used by this component. */
interface YTPlayer {
  destroy(): void;
}

interface YTPlayerStateChangeEvent {
  data: number;
}

interface YTNamespace {
  Player: new (
    elementId: string,
    options: {
      events?: {
        onStateChange?: (event: YTPlayerStateChangeEvent) => void;
      };
    },
  ) => YTPlayer;
  PlayerState: {
    PLAYING: number;
    PAUSED: number;
    ENDED: number;
  };
}

declare global {
  interface Window {
    YT?: YTNamespace;
    onYouTubeIframeAPIReady?: () => void;
  }
}

const IFRAME_API_SRC = "https://www.youtube.com/iframe_api";

interface YouTubeEmbedProps {
  videoId: string;
  title?: string;
}

/** A YouTube embed that attempts to enter fullscreen while playback starts. */
export default function YouTubeEmbed({
  videoId,
  title = "YouTube video",
}: YouTubeEmbedProps) {
  const iframeId = useId();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<YTPlayer | null>(null);
  const cancelledRef = useRef(false);

  const handlePlayerStateChange = useCallback(
    (event: YTPlayerStateChangeEvent) => {
      if (!window.YT || !wrapperRef.current) {
        return;
      }

      try {
        switch (event.data) {
          case window.YT.PlayerState.PLAYING:
            wrapperRef.current.requestFullscreen().catch(console.warn);
            return;
          case window.YT.PlayerState.PAUSED:
          case window.YT.PlayerState.ENDED:
            document.exitFullscreen().catch(console.warn);
            return;
        }
      } catch (error) {
        // Fullscreen is best effort and must not interrupt playback.
        console.warn(error);
      }
    },
    [],
  );

  const attachPlayer = useCallback(() => {
    if (cancelledRef.current || !window.YT?.Player) {
      return;
    }

    playerRef.current = new window.YT.Player(iframeId, {
      events: {
        onStateChange: handlePlayerStateChange,
      },
    });
  }, [handlePlayerStateChange, iframeId]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    cancelledRef.current = false;

    if (window.YT?.Player) {
      attachPlayer();
    } else {
      const previousReady = window.onYouTubeIframeAPIReady;

      window.onYouTubeIframeAPIReady = () => {
        previousReady?.();
        attachPlayer();
      };

      if (!document.querySelector(`script[src="${IFRAME_API_SRC}"]`)) {
        const script = document.createElement("script");
        script.src = IFRAME_API_SRC;
        script.async = true;
        document.head.appendChild(script);
      }
    }

    return () => {
      cancelledRef.current = true;
      playerRef.current?.destroy();
      playerRef.current = null;
    };
  }, [attachPlayer, iframeId, videoId]);

  return (
    <div
      ref={wrapperRef}
      className="aspect-video w-full overflow-hidden rounded-card bg-black"
    >
      <iframe
        id={iframeId}
        className="size-full"
        src={`https://www.youtube-nocookie.com/embed/${videoId}?enablejsapi=1&rel=0`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
        allowFullScreen
      />
    </div>
  );
}
