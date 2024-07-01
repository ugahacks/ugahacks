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
      <button className={styles.registerButton}>REGISTER NOW</button>
      <div className={styles.placeholdersContainer}>
        <div className={styles.placeholder}>
          <div className={styles.placeholderBox}>
            <p>Place holder</p>
          </div>
          <h3 className={styles.placeholderText}>About</h3>
        </div>
        <div className={styles.placeholder}>
          <div className={styles.placeholderBox}>
            <p>Place holder</p>
          </div>
          <h3 className={styles.placeholderText}>FAQ</h3>
        </div>
        <div className={styles.placeholder}>
          <div className={styles.placeholderBox}>
            <p>Place holder</p>
          </div>
          <h3 className={styles.placeholderText}>Our Team</h3>
        </div>
        <div className={styles.placeholder}>
          <div className={styles.placeholderBox}>
            <p>Place holder</p>
          </div>
          <h3 className={styles.placeholderText}>Sponsors</h3>
        </div>
      </div>
    </div>
  );
};

export default Splash;
