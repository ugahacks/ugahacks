import React from "react";
import Image from "next/image";
import styles from "../../styles/Splash.module.css";

const Splash = () => {
  return (
    <div className={styles.splashContainer}>
      <div className={styles.logoContainer}>
        <img
          className={styles.mainLogo}
          src="/UHX_Transparent_White 1.png"
          alt="UGA Hacks Logo"
        />
      </div>
      <div className={styles.rockstarText}>
        <h2>UNLEASH YOUR INNER ROCKSTAR</h2>
      </div>
      <div className={styles.locationAndDateText}>
        <p>02/07/25 - 02/09/25</p>
        <p>Zell B. Miller Learning Center Athens, GA</p>
      </div>
      <button style={{backgroundColor: "#f472b6", borderRadius: "5px", marginTop: "5px"}}>
      <a href="https://mybyte.ugahacks.com/" target="_blank" rel="noopener noreferrer" className={styles.registerButton}>
          REGISTER NOW
        </a>
      </button>
    </div>
  );
};

export default Splash;
