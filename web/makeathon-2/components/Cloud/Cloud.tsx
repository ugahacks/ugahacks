import React from "react";
import styles from "../../styles/Cloud.module.css";
/*function Cloud() {
    const cloudSize = Math.random() * 100 + 50; // Random size between 50 and 150
    const cloudPosition = Math.random() * 25; // Random position in the top quarter
    // Function to generate a random polygon shape
    const generateClipPath = () => {
        let clipPath = "polygon(";
        let prevY = Math.random() * 50;
        for (let x = -50; x <= 50; x++) {
            let y = prevY + Math.random() * 10;
            if (y > 50) y = 50;
            y += 50; // Offset y by 50
            clipPath += `${x + 50}% ${y}%, `;
            prevY = y;
        }
        prevY = Math.random() * 10;
        for (let x = 50; x >= -50; x--) {
            let y = prevY + Math.random() * 3;
            if (y > 10) y = 10;
            y += 50; // Offset y by 50
            clipPath += `${x + 50}% ${-y}%, `;
            prevY = y;
        }
        clipPath = clipPath.slice(0, -2);
        clipPath += ")";
        return clipPath;
    };
    const cloudStyle = {
        width: `${cloudSize}px`,
        height: `${cloudSize / 2}px`,
        top: `${cloudPosition}%`,
        left: `${Math.random() * 100}%`, // Random position across the page
        clipPath: generateClipPath(), // Apply the random polygon shape
    };
    return <div className={styles.cloud} style={cloudStyle} />;
}
*/

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

export default Cloud;
