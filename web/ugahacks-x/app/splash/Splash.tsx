import React from "react";
import Image from "next/image";
import styles from "../../styles/Splash.module.css";

const Splash = () => {
  return (
    <div className={styles.splashContainer}>
      <a style={{alignSelf: "end", marginRight: "50px"}} target="blank" href="http://hackp.ac/coc"><img style={{height: "200px", }}src="/2025Badges/mlh-trust-badge-2025-white.png"></img></a>
      <div className={styles.logoContainer}>
        <img
          className={styles.mainLogo}
          src="/UHX_Transparent_White 1.png"
          alt="UGA Hacks Logo"
        />
      </div>
      <div className={styles.rockstarText}>
        <h2>Unleash your inner rockstar</h2>
      </div>
      {/* <div className={styles.locationAndDateText}>
        <p>02/07/25 - 02/09/25</p>
        <p>Zell B. Miller Learning Center Athens, GA</p>
      </div> */}
      <button className={styles.registerButton}>
      <a href="https://mybyte.ugahacks.com/" target="_blank" rel="noopener noreferrer" className={styles.registerLink}>
          Register Now
        </a>
      </button>
      {/* <button style={{fontWeight: "bold",  backgroundColor: "#f472b6", padding: "5px", borderRadius: "5px", marginTop: "10px"}}>
      <a target="blank" href="http://hackp.ac/coc">MLH Code of Conduct</a>
      </button> */}
    </div>
  );
};

export default Splash;
