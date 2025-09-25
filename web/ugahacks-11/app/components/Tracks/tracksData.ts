
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
      description: "This track is for teams consisting of primarily first-time hackers, offering a chance for them to learn, collaborate, and build their very first hackathon project.",
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
      description: "This track is centered on creating video games or game-related software, which could include anything from a 2D platformer to a complex game engine.",
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
      description: "This track challenges participants to build a new AI model from scratch, focusing on the fundamental architecture and training process rather than using pre-existing frameworks.",
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
      description: "This track is for projects that use AI in any capacity, whether it's for a game, a website, or a standalone application. It's the perfect track to explore any kind of AI idea.",
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
      description: "This track is for projects that involve physical components, such as building a new device, a robot, or other form of hardware."
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
      description: "Award recognizing the exceptional skill and execution of a project developed by a single. There is 'i' in Team!",
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
      description: "Award given to the project that excels in all areas, including innovation, technical difficulty, design, and presentation.",
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
      description: "Award given to the project that most aligns with UGAHacks 11's theme, Magic!",
    },
  },
];