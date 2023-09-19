import React from "react";
import Image from "next/image";
import styles from "../../styles/Splash.module.css";
import Cloud from "../Cloud";
function Splash() {
    const numClouds = Math.floor(Math.random() * 4) + 1; // Random number between 1 and 4
    const clouds = Array.from({ length: numClouds }, (_, i) => (
        <Cloud key={i} />
    ));
    return <section className={styles.body}>{clouds}</section>;
}
export default Splash;
