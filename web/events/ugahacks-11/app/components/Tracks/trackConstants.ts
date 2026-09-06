// Suit symbols mapping
export const SUIT_SYMBOLS = {
  spade: "♠",
  heart: "♥", 
  diamond: "♦",
  club: "♣"
} as const;

// Font families
export const FONTS = {
  amarante: "Amarante, serif",
  encodeSans: "Encode Sans, sans-serif"
} as const;

// Card styling classes
export const CARD_STYLES = {
  // Container
  cardContainer: "relative w-[18vw] h-[25vw] cursor-pointer outline-none transition-transform duration-300 ease-out",
  
  // Card faces
  cardFace: "absolute inset-0 w-full h-full bg-[#faf3e0] border-2 border-[#714d22] rounded-[2vw] shadow-lg",
  frontFace: "backface-hidden",
  backFaceOuter: "flex items-center justify-center p-[0.6vw]",
  backFaceInner: "w-full h-full border border-[#ffcf59] rounded-[2vw] flex items-center justify-center px-[1.5vw] py-[1vw]",
  
  // Typography
  cornerCharacter: "text-[3.2vw] font-normal leading-none",
  suitSymbol: "text-[1.4vw] leading-none mt-[-0.2vw]",
  centerText: "text-[1.6vw] font-normal text-[#714d22] text-center leading-tight capitalize",
  backText: "text-[1.2vw] sm:text-[1vw] text-center leading-normal text-white font-bold ",
  
  // Layout
  flipContainer: "relative w-full h-full transition-transform duration-600 ease-in-out",
  centerTextContainer: "absolute inset-0 flex items-center justify-center px-[1.5vw]"
} as const;

// Animation values
export const ANIMATIONS = {
  hoverScale: "scale(1.05)",
  normalScale: "scale(1)",
  flipDuration: "duration-600",
  hoverDuration: "duration-300",
  perspective: "1000px"
} as const;

// Card positioning for the tracks layout
export const CARD_POSITIONS = [
  { left: "7%", top: "22%" },   // Card 1 (A)
  { left: "29%", top: "16%" },  // Card 2 (2)  
  { left: "53%", top: "22%" },  // Card 3 (3)
  { left: "75%", top: "16%" },  // Card 4 (4)
  { left: "8%", top: "59%" },   // Card 5 (5)
  { left: "30%", top: "52%" },  // Card 6 (6)
  { left: "54%", top: "59%" },  // Card 7 (7)
  { left: "76%", top: "52%" }   // Card 8 (8)
] as const;