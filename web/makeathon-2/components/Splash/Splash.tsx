import React from "react";
import Image from "next/image";
import styles from "../../styles/Splash.module.css";
import MakeathonLogo from "./MakeathonLogo";

// You may not know this, but I didn't pass geometry in highschool.
// Anyway, here's how to make an overly complex circle in CSS

function Cloud({ left, top }) {
    const cloudSize = Math.random() * 100 + 50; // Random size between 50 and 150
    const cloudPosition = Math.random() * 20; // Random position in the top quarter
    const cloudLeftPosition = Math.random() * 90 + 5; // Random position from left with 5% padding
    const generateClipPath = () => {
        let clipPath = "polygon(";
        const center = [50, 50]; // Center of the circle
        const r = 50; // Radius of the circle
        const numOfPoints = 100; // Number of points on the circumference. Increase for a smoother circle.
        for (let i = 0; i < numOfPoints; i++) {
            const angle = (i / numOfPoints) * (2 * Math.PI); // Generate point on circumference for each angle
            let x = center[0] + r * Math.cos(angle);
            let y = center[1] + r * Math.sin(angle);
            // upper half of cloud
            let y_offset = 20;
            let offset =
                Math.sin((28 * x) / 100) * 2 + y_offset + Math.random() * 3 - 1;
            y += offset;
            // lower half of cloud
            if (y > 50) {
                y = 80;
                let offset = Math.cos((10 * x) / 100) - y_offset - 10;
                y += offset;
            }
            clipPath += `${x}% ${y}%, `;
        }
        clipPath = clipPath.slice(0, -2); // Remove the trailing comma and space
        clipPath += ")";
        return clipPath;
    };
    const cloudStyle = {
        width: `${cloudSize * 2}px`,
        height: `${cloudSize * 2}px`, // For a circle, width and height should be same
        top: `${top}%`,
        left: `${left}%`,
        clipPath: generateClipPath(),
    };
    return <div className={styles.cloud} style={cloudStyle} />;
}
function Splash() {
    const numClouds = Math.floor(Math.random() * 7) + 1; // Random number between 1 and 4
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
