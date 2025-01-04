"use client";

import React from "react";
import Image from "next/image";
import styles from "../../styles/Team.module.css";

export default function Team() {
  return (
    <div
      className={styles.team}
    >
      <Image
        src="/OurTeam.svg"
        alt="Team image"
        className={styles["team-image"]}
        width={1920}
        height={1080}
      />
      <a href="https://ugahacks.com/#team" target="_blank" rel="noreferrer">
        <button
          className={styles["team-button"]}
        >
          <div className={styles["image-container"]}>
            <Image 
              src="/VisitTeamPage.svg" 
              alt="Visit Team Page"
              layout="fill" 
              objectFit="contain" 
            />
          </div>
        </button>
      </a>
      <div className={styles["cool-image-container"]}>
        <Image 
          src="/hacksteam (1).svg" 
          alt="CoolImage"
          layout="fill"
          objectFit="contain"
        />
      </div>
    </div>
  );
};

