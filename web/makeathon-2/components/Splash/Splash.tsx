import React from "react";
import Image from "next/image";
import styles from "../../styles/Splash.module.css";
import Cloud from "./Cloud";
import MakeathonLogo from "../../public/graphics/splashAssets/Makeathon Transparent Logo.png";

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
        <section className={styles.body}>
            <section>{clouds}</section>
            <div className={styles.container}>
                <div className={styles.row}>
                    <img
                        src="/graphics/splashAssets/Makeathon Transparent Logo.png"
                        alt="makeathon logo"
                    />
                </div>
                <div className={styles.row + " " + styles.tagline}>
                    Dive into a sea of possibilities
                </div>
                <div className={styles.row + " " + styles.loc}>
                    Driftmier Engineering Center <br />
                    October 21st-22nd
                </div>
                <div className={styles.row}>
                    <a
                        href="https://ugeorgia.ca1.qualtrics.com/jfe/form/SV_2t26cNywzPGm9bE"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <div className={styles.register}>REGISTER</div>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Splash;
