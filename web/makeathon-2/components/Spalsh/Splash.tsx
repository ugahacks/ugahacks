import React from "react";
import Image from "next/image";
import styles from "../../styles/Splash.module.css";

function Splash() {
  return (
    <section className={styles.body}>
      Splash
      {/* <div className={styles.container}>
        <div className={styles.row}>
          <img
            className={styles.logo}
            src="/graphics/Makeathon Transparent Logo resize.png"
            alt="logo"
          />
        </div>
        <div className={styles.row}>
          <div className={styles.tagline}>tagline</div>
        </div>
        <div className={styles.row}>
          <div className={styles.subtitle}>Driftmier Engineering Center</div>
        </div>
        <div className={styles.row}>
          <div className={styles.register}>
            <button className="button">Click Me</button>
          </div>
        </div>
      </div> */}
    </section>
  );
}

export default Splash;
