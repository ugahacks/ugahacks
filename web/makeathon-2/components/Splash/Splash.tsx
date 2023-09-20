import React from "react";
import Image from "next/image";
import styles from "../../styles/Splash.module.css";
import Cloud from "./Cloud";
import MakeathonLogo from "./MakeathonLogo";

// You may not know this, but I didn't pass geometry in highschool.
// Anyway, here's how to make an overly complex circle in CSS

function Splash() {
    const numClouds = Math.floor(Math.random() * 5) + 3; // Random number between 1 and 4
    const cloudPositions = [];
    for (let i = 0; i < numClouds; i++) {
        let left, top;
        do {
            left = Math.random() * 70; // Random position from left with 5% padding
            top = Math.random() * 20; // Random position in the top quarter
        } while (
            cloudPositions.some(
                (pos) =>
                    Math.abs(pos.left - left) < 10 &&
                    Math.abs(pos.top - top) < 10
            )
        );
        cloudPositions.push({ left, top });
    }
    const clouds = cloudPositions.map((pos, i) => (
        <Cloud key={i} left={pos.left + 5} top={pos.top + 5} />
    ));
    return (
        <>
            <section className={styles.body}>{clouds}</section>
            <MakeathonLogo />
        </>
    );
}

export default Splash;
