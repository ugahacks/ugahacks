"use client";
import React from "react";
import CardFront from "./CardFront";
import CardBack from "./CardBack";
import { useCardInteraction } from "./hooks/useCardInteraction";
import { CARD_STYLES, ANIMATIONS } from "./trackConstants";

interface TrackCardProps {
  // Front side props
  cornerCharacter: string;
  shape: "spade" | "heart" | "diamond" | "club";
  mainText: string;
  characterColor: string;
  shapeColor: string;

  // Back side props
  backSide: {
    backgroundColor: string;
    description: string;
  };
}

const TrackCard: React.FC<TrackCardProps> = ({
  cornerCharacter,
  shape,
  mainText,
  characterColor,
  shapeColor,
  backSide,
}) => {
  const {
    isFlipped,
    isHovered,
    handleFlip,
    handleKeyDown,
    handleMouseEnter,
    handleMouseLeave,
  } = useCardInteraction();

  return (
    <div
      className={CARD_STYLES.cardContainer}
      style={{
        perspective: ANIMATIONS.perspective,
        transform: isHovered ? ANIMATIONS.hoverScale : ANIMATIONS.normalScale,
      }}
      onClick={handleFlip}
      onKeyDown={handleKeyDown}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      tabIndex={0}
      role="button"
      aria-label={`${mainText} card - ${
        isFlipped ? "showing details" : "showing title"
      }`}
    >
      <div
        className={CARD_STYLES.flipContainer}
        style={{
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Front Side */}
        <CardFront
          cornerCharacter={cornerCharacter}
          shape={shape}
          mainText={mainText}
          characterColor={characterColor}
          shapeColor={shapeColor}
        />

        {/* Back Side */}
        <CardBack
          backgroundColor={backSide.backgroundColor}
          description={backSide.description}
        />
      </div>
    </div>
  );
};

export default TrackCard;
