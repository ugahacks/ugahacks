import React from "react";
import Image from "next/image";
import styles from "../../styles/Splash.module.css";
function Cloud() {
    const cloudSize = Math.random() * 100 + 50; // Random size between 50 and 150
    const cloudPosition = Math.random() * 25; // Random position in the top quarter
    // Function to generate a random SVG path
    const generatePath = () => {
        let path = "M0,50 Q25,0 50,50 T100,50";
        return path;
    };
    const cloudStyle = {
        width: `${cloudSize}px`,
        height: `${cloudSize / 2}px`,
        top: `${cloudPosition}%`,
        left: `${Math.random() * 100}%`, // Random position across the page
    };
    return (
        <div className={styles.cloud} style={cloudStyle}>
            <svg width="100%" height="100%" viewBox="0 0 100 50">
                <path d={generatePath()} fill="lightgray" />
            </svg>
        </div>
    );
}
function Splash() {
    const numClouds = Math.floor(Math.random() * 4) + 1; // Random number between 1 and 4
    const clouds = Array.from({ length: numClouds }, (_, i) => (
        <Cloud key={i} />
    ));
    return <section className={styles.body}>{clouds}</section>;
}
export default Splash;
