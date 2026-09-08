"use client";
import React from "react";
import CardCorner from "./CardCorner";
import { CARD_STYLES } from "./trackConstants";

interface CardFrontProps {
  cornerCharacter: string;
  shape: "spade" | "heart" | "diamond" | "club";
  mainText: string;
  characterColor: string;
  shapeColor: string;
}

const CardFront: React.FC<CardFrontProps> = ({
  cornerCharacter,
  shape,
  mainText,
  characterColor,
  shapeColor,
}) => {
  return (
    <div
      className={`${CARD_STYLES.cardFace} ${CARD_STYLES.frontFace} font-amarante`}
      style={{ backfaceVisibility: "hidden" }}
    >
      {/* Top Left Corner */}
      <CardCorner
        character={cornerCharacter}
        shape={shape}
        characterColor={characterColor}
        shapeColor={shapeColor}
        position="top-left"
      />

      {/* Center Text */}
      <div className={CARD_STYLES.centerTextContainer}>
        <p className="text-[2vw] text-center font-amarante text-[#714d22]">{mainText}</p>
      </div>

      {/* Bottom Right Corner */}
      <CardCorner
        character={cornerCharacter}
        shape={shape}
        characterColor={characterColor}
        shapeColor={shapeColor}
        position="bottom-right"
      />
    </div>
  );
};

export default CardFront;
