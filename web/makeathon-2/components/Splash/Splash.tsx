import React from "react";
import Image from "next/image";
import styles from "../../styles/Splash.module.css";
import Cloud from "./Cloud";
import MakeathonLogo from "../../public/graphics/splashAssets/Makeathon Transparent Logo.png";

function Splash() {
    const numClouds = Math.floor(Math.random() * 3) + 3; // Random number between 1 and 4
    const cloudPositions = [];
    for (let i = 0; i < numClouds; i++) {
        let left, top;
        left = (i / numClouds) * 70; // Position from left based on the number of clouds
        let flip: number = 1;
        do {
            //left = Math.random() * 70; // Random position from left with 5% padding
            //top = Math.random() * 20; // Random position in the top quarter
            top = flip * (Math.sin(1) * 25 - 10); // Random position in the top quarter with sine wave applied
            flip = flip * -1;
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
        <Cloud key={i} left={pos.left + 10} top={pos.top + 5} />
    ));
    return (
        <section className={styles.body}>
            {clouds}
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
