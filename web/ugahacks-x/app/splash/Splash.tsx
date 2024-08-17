'use client'
import Spotlight from "@/components/SpotlightEffect";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "../../styles/Splash.module.css";

const Splash = () => {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    // Update the mobile state based on window width
    const updateMobile = () => setMobile(window.innerWidth < 599);

    // Call once to set initial state based on current window width
    updateMobile();

    // Setup event listener for resizing the window
    window.addEventListener('resize', updateMobile);

    // Cleanup the event listener when the component unmounts
    return () => window.removeEventListener('resize', updateMobile);
  }, []);
  return (

    <>
      <Spotlight />
      {/* Conditionally render Spotlight component if it's not mobile */}

      <div className={styles.splashContainer}>

        <a style={{ alignSelf: "end", marginRight: "50px" }} target="blank" href="http://hackp.ac/coc"><img style={{ height: "200px", }} src="/2025Badges/mlh-trust-badge-2025-white.png"></img></a>
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
        <button style={{ backgroundColor: "#f472b6", borderRadius: "5px", marginTop: "5px" }}>
          <a href="https://mybyte.ugahacks.com/" target="_blank" rel="noopener noreferrer" className={styles.registerButton}>
            REGISTER NOW
          </a>
        </button>
        <button style={{ fontWeight: "bold", backgroundColor: "#f472b6", padding: "5px", borderRadius: "5px", marginTop: "10px" }}>
          <a target="blank" href="http://hackp.ac/coc">MLH Code of Conduct</a>
        </button>
      </div>
    </>
  );
};

export default Splash;
