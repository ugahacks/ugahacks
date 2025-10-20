import Image from "next/image";
import React from "react";

interface SectionEdgeProps {
  src: string;
  height?: number;
  overlap?: number;
  position?: "top" | "bottom";
  zIndex?: number;
  className?: string;
  priority?: boolean;
  alt?: string;
}

const SectionEdge: React.FC<SectionEdgeProps> = ({
  src,
  height = 160,
  overlap = 0,
  position = "bottom",
  zIndex = 30,
  className = "",
  priority = false,
  alt = "",
}) => {
  const verticalPositionStyles =
    position === "bottom" ? { bottom: 0 } : { top: 0 };
  const translateValue =
    overlap !== 0
      ? `translateY(${position === "bottom" ? overlap : -overlap}px)`
      : undefined;

  return (
    <div
      className={`pointer-events-none absolute left-0 w-full ${className}`.trim()}
      style={{
        height,
        zIndex,
        transform: translateValue,
        ...verticalPositionStyles,
      }}
      aria-hidden={alt === ""}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="100vw"
        className="object-cover"
        priority={priority}
      />
    </div>
  );
};

export default SectionEdge;
