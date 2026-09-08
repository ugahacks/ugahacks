import Image from "next/image";
import React, { useState, useEffect } from "react";

interface SocialLink {
  type: string;
  url: string;
}

interface TeamMember {
  name: string;
  role: string;
  quote: string;
  image_path: string;
  social_links: SocialLink[];
}

const Team = () => {
  const [selectedTeam, setSelectedTeam] = useState<TeamMember[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedTeamName, setSelectedTeamName] =
    useState<string>("UGAHacks 12");
  const [teamCache, setTeamCache] = useState<Record<string, TeamMember[]>>({});
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [animateIn, setAnimateIn] = useState(false);
  const [viewKey, setViewKey] = useState(0);
  const kickAnimateIn = () => {
    setAnimateIn(false);
    // Double RAF: guarantees the DOM has mounted before turning the animation on
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setAnimateIn(true));
    });
  };

  // Load UGAHacks 12 data on component mount
  useEffect(() => {
    const loadUGAHacks12 = async () => {
      try {
        const response = await fetch("/team_data/UGAHacks_12.json");
        const data = await response.json();
        setSelectedTeam(data);
        setTeamCache((prev) => ({ ...prev, "UGAHacks 12": data }));
        kickAnimateIn();
      } catch (error) {
        console.error("Error loading UGAHacks 12 data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadUGAHacks12();
  }, []);

  const getImageSrc = (imagePath: string) => {
    // Since image_path in JSON now includes the full path with extension, just prepend '/'
    if (imagePath) {
      return `/${imagePath}`;
    }
    return null;
  };

  const handleTeamClick = async (teamName: string) => {
    setActiveCard(null);
    setAnimateIn(false);
    setSelectedTeamName(teamName);
    setViewKey((k) => k + 1);

    // Check if team data is already cached
    if (teamCache[teamName]) {
      setSelectedTeam([...teamCache[teamName]]);
      kickAnimateIn();
      // below is animation reset
      setAnimateIn(false);
      requestAnimationFrame(() => setAnimateIn(true));
      return;
    }

    // Map team names to their corresponding JSON file names
    const teamFileMap: Record<string, string> = {
      "UGAHacks 12": "UGAHacks_12.json",
      "UGAHacks 11": "UGAHacks_11.json",
      "UGAHacks X": "UGAHacks_X.json",
      "UGAHacks 9": "UGAHacks_9.json",
      "UGAHacks 8": "UGAHacks_8.json",
      "UGAHacks 7": "UGAHacks_7.json",
      "UGAHacks 6": "UGAHacks_6.json",
      "UGAHacks 5": "UGAHacks_5.json",
      "UGAHacks 4": "UGAHacks_4.json",
      "UGAHacks 3": "UGAHacks_3.json",
      "UGAHacks 2": "UGAHacks_2.json",
      "UGAHacks 1": "UGAHacks_1.json",
    };

    const fileName = teamFileMap[teamName];
    if (fileName) {
      setIsLoading(true);
      try {
        const response = await fetch(`/team_data/${fileName}`);
        const data = await response.json();
        setSelectedTeam(data);
        setTeamCache((prev) => ({ ...prev, [teamName]: data }));
        kickAnimateIn();
      } catch (error) {
        console.error(`Error loading team data for ${teamName}:`, error);
        // If file doesn't exist, show empty state or placeholder
        setSelectedTeam([]);
      } finally {
        setIsLoading(false);
      }
    }
  };
  return (
    <div
      id="team"
      className="min-h-screen p-2 bg-[#27282f] flex flex-col items-center pt-30"
    >
      <h1 className="text-4xl text-white font-raleway">
        Meet The Team!
        <span className="cursor-blink text-white -ml-1 -mt-2 inline-block">
          |
        </span>
      </h1>
      <div className="w-full max-w-7xl px-6">
        <div className="flex flex-wrap gap-4 mt-6 md:mt-20 justify-center overflow-x-auto md:overflow-visible whitespace-nowrap px-4">
          <h2
            className={`text-base font-raleway cursor-pointer hover:text-white transition-colors ${
              selectedTeamName === "UGAHacks 12"
                ? "text-white"
                : "text-gray-400"
            }`}
            onClick={() => handleTeamClick("UGAHacks 12")}
          >
            UGAHacks 12
          </h2>
          <h2
            className={`text-base font-raleway cursor-pointer hover:text-white transition-colors ${
              selectedTeamName === "UGAHacks 11"
                ? "text-white"
                : "text-gray-400"
            }`}
            onClick={() => handleTeamClick("UGAHacks 11")}
          >
            UGAHacks 11
          </h2>
          <h2
            className={`text-base font-raleway cursor-pointer hover:text-white transition-colors ${
              selectedTeamName === "UGAHacks X" ? "text-white" : "text-gray-400"
            }`}
            onClick={() => handleTeamClick("UGAHacks X")}
          >
            UGAHacks X
          </h2>
          <h2
            className={`text-base font-raleway cursor-pointer hover:text-white transition-colors ${
              selectedTeamName === "UGAHacks 9" ? "text-white" : "text-gray-400"
            }`}
            onClick={() => handleTeamClick("UGAHacks 9")}
          >
            UGAHacks 9
          </h2>
          <h2
            className={`text-base font-raleway cursor-pointer hover:text-white transition-colors ${
              selectedTeamName === "UGAHacks 8" ? "text-white" : "text-gray-400"
            }`}
            onClick={() => handleTeamClick("UGAHacks 8")}
          >
            UGAHacks 8
          </h2>
          <h2
            className={`text-base font-raleway cursor-pointer hover:text-white transition-colors ${
              selectedTeamName === "UGAHacks 7" ? "text-white" : "text-gray-400"
            }`}
            onClick={() => handleTeamClick("UGAHacks 7")}
          >
            UGAHacks 7
          </h2>
          <h2
            className={`text-base font-raleway cursor-pointer hover:text-white transition-colors ${
              selectedTeamName === "UGAHacks 6" ? "text-white" : "text-gray-400"
            }`}
            onClick={() => handleTeamClick("UGAHacks 6")}
          >
            UGAHacks 6
          </h2>
          <h2
            className={`text-base font-raleway cursor-pointer hover:text-white transition-colors ${
              selectedTeamName === "UGAHacks 5" ? "text-white" : "text-gray-400"
            }`}
            onClick={() => handleTeamClick("UGAHacks 5")}
          >
            UGAHacks 5
          </h2>
          <h2
            className={`text-base font-raleway cursor-pointer hover:text-white transition-colors ${
              selectedTeamName === "UGAHacks 4" ? "text-white" : "text-gray-400"
            }`}
            onClick={() => handleTeamClick("UGAHacks 4")}
          >
            UGAHacks 4
          </h2>
          <h2
            className={`text-base font-raleway cursor-pointer hover:text-white transition-colors ml-2 ${
              selectedTeamName === "UGAHacks 3" ? "text-white" : "text-gray-400"
            }`}
            onClick={() => handleTeamClick("UGAHacks 3")}
          >
            UGAHacks 3
          </h2>
          <h2
            className={`text-base font-raleway cursor-pointer hover:text-white transition-colors -ml-1 ${
              selectedTeamName === "UGAHacks 2" ? "text-white" : "text-gray-400"
            }`}
            onClick={() => handleTeamClick("UGAHacks 2")}
          >
            UGAHacks 2
          </h2>
          <h2
            className={`text-base font-raleway cursor-pointer hover:text-white transition-colors ${
              selectedTeamName === "UGAHacks 1" ? "text-white" : "text-gray-400"
            }`}
            onClick={() => handleTeamClick("UGAHacks 1")}
          >
            UGAHacks 1
          </h2>
        </div>

        {/* Team Information Display */}
        {isLoading && (
          <div className="mt-10 text-white font-raleway text-center">
            Loading team information...
          </div>
        )}

        {selectedTeam.length > 0 && !isLoading && (
          <div key={viewKey} className="mt-10 w-full mb-24">
            {/* Show mascot at top for all teams */}
            {selectedTeamName && (
              <div className="flex flex-col items-center mb-8">
                <h3 className="text-xl text-gray-300 font-raleway mb-4">
                  Mascot
                </h3>
                <div className="p-1 rounded-full border-4 border-red-500">
                  <Image
                    src={
                      selectedTeamName === "UGAHacks 12"
                        ? "/team_images/UGAHacks_12/byte-12.png"
                        : selectedTeamName === "UGAHacks X"
                          ? "/team_images/UGAHacks_X/byte-x.png"
                          : selectedTeamName === "UGAHacks 9"
                            ? "/team_images/UGAHacks_9/byte-9.png"
                            : selectedTeamName === "UGAHacks 8"
                              ? "/team_images/UGAHacks_8/byte-8.png"
                              : selectedTeamName === "UGAHacks 7"
                                ? "/team_images/UGAHacks_7/byte-7.png"
                                : selectedTeamName === "UGAHacks 6"
                                  ? "/team_images/UGAHacks_6/byte-6.jpg"
                                  : selectedTeamName === "UGAHacks 5"
                                    ? "/team_images/UGAHacks_5/byte-5.jpg"
                                    : selectedTeamName === "UGAHacks 4"
                                      ? "/team_images/UGAHacks_4/hacks4.jpg"
                                      : selectedTeamName === "UGAHacks 3"
                                        ? "/team_images/UGAHacks_3/mascot-uh3.jpg"
                                        : selectedTeamName === "UGAHacks 2"
                                          ? "/team_images/UGAHacks_1/UGAHack1mascot.png"
                                          : selectedTeamName === "UGAHacks 1"
                                            ? "/team_images/UGAHacks_1/UGAHack1mascot.png"
                                            : "/bytehacks11.png"
                    }
                    alt="Byte Mascot"
                    width={120}
                    height={120}
                    className="rounded-full object-cover w-[120px] h-[120px]"
                  />
                </div>
                <p className="text-white font-raleway mt-2">Byte</p>
              </div>
            )}
            {(() => {
              // Group members by team/role, excluding mascot for teams that show it at top
              const filteredTeam =
                selectedTeamName === "UGAHacks X" ||
                selectedTeamName === "UGAHacks 9" ||
                selectedTeamName === "UGAHacks 8" ||
                selectedTeamName === "UGAHacks 7" ||
                selectedTeamName === "UGAHacks 6" ||
                selectedTeamName === "UGAHacks 5" ||
                selectedTeamName === "UGAHacks 4" ||
                selectedTeamName === "UGAHacks 3" ||
                selectedTeamName === "UGAHacks 2" ||
                selectedTeamName === "UGAHacks 1"
                  ? selectedTeam.filter((member) => member.role !== "Mascot")
                  : selectedTeam;

              const teamGroups = filteredTeam.reduce(
                (groups: Record<string, TeamMember[]>, member: TeamMember) => {
                  let team = member.role?.includes("Director")
                    ? "Directors"
                    : member.role?.split(",")[0] || "Other";

                  // Special case for UGAHacks 5: put Amanda Yang and Shivani Nanda in Directors section
                  if (
                    selectedTeamName === "UGAHacks 5" &&
                    (member.name === "Amanda Yang" ||
                      member.name === "Shivani Nanda")
                  ) {
                    team = "Directors";
                  }

                  // Special case for UGAHacks 6: group specific members with appropriate teams
                  if (selectedTeamName === "UGAHacks 6") {
                    if (
                      member.name === "Annie Lian" ||
                      member.name === "Felise Wen"
                    ) {
                      team = "Marketing Team";
                    } else if (
                      member.name === "Amanda Yang" ||
                      member.name === "Shivani Nanda"
                    ) {
                      team = "Sponsorship Team";
                    } else if (
                      member.name === "Andrei Spatariu" ||
                      member.name === "Danny Lopez"
                    ) {
                      team = "Web Team";
                    }
                  }

                  if (!groups[team]) {
                    groups[team] = [];
                  }
                  groups[team].push(member);
                  return groups;
                },
                {},
              );

              // Sort teams to put Directors first, then Advisor, then Marketing Team, then others
              const sortedTeams = Object.entries(teamGroups).sort(
                ([teamNameA], [teamNameB]) => {
                  if (teamNameA === "Directors") return -1;
                  if (teamNameB === "Directors") return 1;
                  if (teamNameA === "Advisor") return -1;
                  if (teamNameB === "Advisor") return 1;
                  if (teamNameA === "Marketing Team") return -1;
                  if (teamNameB === "Marketing Team") return 1;
                  return teamNameA.localeCompare(teamNameB);
                },
              );

              return sortedTeams.map(
                ([teamName, members]: [string, TeamMember[]]) => {
                  const orderedMembers =
                    selectedTeamName === "UGAHacks 12" &&
                    teamName === "Directors"
                      ? [...members].sort((memberA, memberB) => {
                          if (memberA.name === "Jacob Harris") return -1;
                          if (memberB.name === "Jacob Harris") return 1;
                          return 0;
                        })
                      : members;

                  return (
                    <div key={teamName} className="mb-24">
                      <h2 className="text-2xl text-white font-raleway font-bold mb-10 text-center relative z-10">
                        {teamName === "Advisor" ? "Advisors" : teamName}
                      </h2>
                      <div
                        className={`flex flex-wrap justify-center ${selectedTeamName === "UGAHacks X" && teamName === "Directors" ? "gap-x-6 gap-y-16" : "gap-x-8 gap-y-20"}`}
                      >
                        {orderedMembers.map(
                          (member: TeamMember, index: number) => (
                            <div
                              key={index}
                              className={[
                                "rounded-lg p-4 pb-8",
                                "transform transition-all duration-500",
                                "relative",
                                "w-40 md:w-44 lg:w-48",
                                animateIn
                                  ? "opacity-100 translate-y-0"
                                  : "opacity-0 translate-y-3",
                              ].join(" ")}
                              style={{ transitionDelay: `${index * 50}ms` }}
                            >
                              <div className="text-center">
                                {member.image_path &&
                                  getImageSrc(member.image_path) && (
                                    <div
                                      className="mb-4 flex justify-center relative group"
                                      role="button"
                                      tabIndex={0}
                                      onClick={() =>
                                        setActiveCard((prev) =>
                                          prev === index ? null : index,
                                        )
                                      }
                                      onKeyDown={(e) => {
                                        if (
                                          e.key === "Enter" ||
                                          e.key === " "
                                        ) {
                                          e.preventDefault();
                                          setActiveCard((prev) =>
                                            prev === index ? null : index,
                                          );
                                        }
                                      }}
                                    >
                                      <div className="p-1 rounded-full border-4 border-red-500">
                                        <Image
                                          src={getImageSrc(member.image_path)!}
                                          alt={member.name}
                                          width={120}
                                          height={120}
                                          className="rounded-full object-cover w-[120px] h-[120px]"
                                          onError={(e) => {
                                            const target =
                                              e.target as HTMLImageElement;
                                            target.style.display = "none";
                                          }}
                                        />
                                      </div>
                                      <div
                                        className={[
                                          "absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4",
                                          "bg-white rounded-2xl p-4 shadow-xl transition-opacity duration-300 z-50 w-60 h-88",
                                          activeCard === index
                                            ? "opacity-100 pointer-events-auto"
                                            : "opacity-0 pointer-events-none",
                                          "md:pointer-events-auto md:opacity-0 md:group-hover:opacity-100",
                                        ].join(" ")}
                                      >
                                        <div className="flex flex-col items-center h-full justify-center">
                                          <div className="p-1 rounded-full border-4 border-red-500 mb-4 flex-shrink-0">
                                            <Image
                                              src={
                                                getImageSrc(member.image_path)!
                                              }
                                              alt={member.name}
                                              width={120}
                                              height={120}
                                              className="rounded-full object-cover w-[120px] h-[120px] flex-shrink-0"
                                            />
                                          </div>
                                          <h4 className="text-gray-800 font-raleway font-bold text-lg mb-2 text-center">
                                            {member.name}
                                          </h4>
                                          <p className="text-gray-600 font-raleway text-sm mb-2 text-center">
                                            {member.role}
                                          </p>
                                          {member.quote && (
                                            <p className="text-gray-500 font-raleway text-xs italic mb-2 text-center px-2">
                                              &ldquo;{member.quote}&rdquo;
                                            </p>
                                          )}
                                          <div className="flex gap-3 mt-auto">
                                            {member.social_links &&
                                              member.social_links.length > 0 &&
                                              member.social_links.map(
                                                (
                                                  link: SocialLink,
                                                  linkIndex: number,
                                                ) => (
                                              <a
                                                key={linkIndex}
                                                href={link.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-10 h-10 bg-gray-600 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
                                              >
                                                {link.type === "website" && (
                                                  <svg
                                                    className="w-5 h-5 text-white"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    aria-hidden="true"
                                                  >
                                                    <circle
                                                      cx="12"
                                                      cy="12"
                                                      r="9"
                                                    />
                                                    <ellipse
                                                      cx="12"
                                                      cy="12"
                                                      rx="5.5"
                                                      ry="9"
                                                    />
                                                    <ellipse
                                                      cx="12"
                                                      cy="12"
                                                      rx="9"
                                                      ry="5.5"
                                                    />
                                                  </svg>
                                                )}
                                                {link.type === "instagram" && (
                                                  <svg
                                                    className="w-5 h-5 text-white"
                                                    fill="currentColor"
                                                    viewBox="0 0 24 24"
                                                  >
                                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                                  </svg>
                                                )}
                                                {link.type === "linkedin" && (
                                                  <svg
                                                    className="w-5 h-5 text-white"
                                                    fill="currentColor"
                                                    viewBox="0 0 24 24"
                                                  >
                                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                                  </svg>
                                                )}
                                                {link.type === "github" && (
                                                  <svg
                                                    className="w-5 h-5 text-white"
                                                    fill="currentColor"
                                                    viewBox="0 0 24 24"
                                                  >
                                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                                  </svg>
                                                )}
                                                {link.type === "twitter" && (
                                                  <svg
                                                    className="w-5 h-5 text-white"
                                                    fill="currentColor"
                                                    viewBox="0 0 24 24"
                                                  >
                                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                                  </svg>
                                                )}
                                                {link.type === "facebook" && (
                                                  <svg
                                                    className="w-5 h-5 text-white"
                                                    fill="currentColor"
                                                    viewBox="0 0 24 24"
                                                  >
                                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                                  </svg>
                                                )}
                                              </a>
                                            ),
                                          )}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              )}
                            <h3 className="text-white font-raleway font-bold text-lg mb-2">
                              {member.name}
                            </h3>
                            <p className="text-gray-300 font-raleway text-sm mb-2">
                              {member.role}
                            </p>
                          </div>
                        </div>
                        ))}
                      </div>
                    </div>
                  );
                },
              );
            })()}
          </div>
        )}
      </div>
    </div>
  );
};

export default Team;
