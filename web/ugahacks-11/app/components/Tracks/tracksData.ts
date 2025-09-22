
interface TrackData {
  cornerCharacter: string;
  shape: "spade" | "heart" | "diamond" | "club";
  mainText: string;
  characterColor: string;
  shapeColor: string;
  backSide: {
    backgroundColor: string;
    description: string;
  };
}

export const tracksData: TrackData[] = [
  {
    cornerCharacter: "A",
    shape: "spade",
    mainText: "Best First Time Hacker",
    characterColor: "#3e4c8a",
    shapeColor: "#3e4c8a",
    backSide: {
      backgroundColor: "#7a562b",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mi",
    },
  },
  {
    cornerCharacter: "2",
    shape: "club",
    mainText: "Best Game Project",
    characterColor: "#66a865",
    shapeColor: "#66a865",
    backSide: {
      backgroundColor: "#9b6798",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mi",
    },
  },
  {
    cornerCharacter: "3",
    shape: "heart",
    mainText: "Ground Up Model",
    characterColor: "#93642d",
    shapeColor: "#93642d",
    backSide: {
      backgroundColor: "#7b9a7b",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mi",
    },
  },
  {
    cornerCharacter: "4",
    shape: "club",
    mainText: "General AI",
    characterColor: "#9b6798",
    shapeColor: "#9b6798",
    backSide: {
      backgroundColor: "#3e4c8a",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mi",
    },
  },
  {
    cornerCharacter: "5",
    shape: "club",
    mainText: "Best Hardware Project",
    characterColor: "#9b6798",
    shapeColor: "#9b6798",
    backSide: {
      backgroundColor: "#7a562b",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mi",
    },
  },
  {
    cornerCharacter: "6",
    shape: "heart",
    mainText: "Best Solo Project",
    characterColor: "#93642d",
    shapeColor: "#93642d",
    backSide: {
      backgroundColor: "#9b6798",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mi",
    },
  },
  {
    cornerCharacter: "7",
    shape: "club",
    mainText: "Best Overall Project",
    characterColor: "#66a865",
    shapeColor: "#66a865",
    backSide: {
      backgroundColor: "#7b9a7b",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mi",
    },
  },
  {
    cornerCharacter: "8",
    shape: "spade",
    mainText: "Most Magical Award",
    characterColor: "#3e4c8a",
    shapeColor: "#3e4c8a",
    backSide: {
      backgroundColor: "#3e4c8a",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mi",
    },
  },
];