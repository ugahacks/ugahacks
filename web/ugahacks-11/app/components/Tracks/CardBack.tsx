"use client";
import React from "react";
import { CARD_STYLES } from "./trackConstants";

interface CardBackProps {
  backgroundColor: string;
  description: string;
}

const CardBack: React.FC<CardBackProps> = ({
  backgroundColor,
  description,
}) => {
  return (
    <div
      className={`${CARD_STYLES.cardFace} ${CARD_STYLES.backFaceOuter}`}
      style={{
        backfaceVisibility: "hidden",
        transform: "rotateY(180deg)",
      }}
    >
      {/* Inner colored area */}
      <div className={CARD_STYLES.backFaceInner} style={{ backgroundColor }}>
        {/* Text content */}
        <p
          className={`${CARD_STYLES.backText} font-encode`}
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default CardBack;
