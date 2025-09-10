"use client";
import React from "react";
import { SUIT_SYMBOLS } from "./trackConstants";

/**
 * CardCorner displays a card's corner with character and suit symbol.
 * @param {CardCornerProps} props
 */
interface CardCornerProps {
  character: string;
  shape: "spade" | "heart" | "diamond" | "club";
  characterColor: string;
  shapeColor: string;
  position: "top-left" | "bottom-right";
}

function getCornerPosition(position: "top-left" | "bottom-right") {
  if (position === "bottom-right") {
    return {
      positionClasses: "absolute bottom-[1vw] right-[1.2vw]",
      containerStyle: { transform: "rotate(180deg)" },
    };
  }
  return {
    positionClasses: "absolute top-[1vw] left-[1.2vw]",
    containerStyle: {},
  };
}

const CardCorner: React.FC<CardCornerProps> = React.memo(
  ({ character, shape, characterColor, shapeColor, position }) => {
    const { positionClasses, containerStyle } = getCornerPosition(position);

    return (
      <div
        className={`${positionClasses} flex flex-col items-center leading-none`}
        style={containerStyle}
      >
        <span
          className="text-2xl font-bold font-amarante"
          style={{ color: characterColor }}
        >
          {character}
        </span>
        <span className="text-xl font-amarante" style={{ color: shapeColor }}>
          {SUIT_SYMBOLS[shape]}
        </span>
      </div>
    );
  }
);

export default CardCorner;
