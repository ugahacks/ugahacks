import React from "react";
import Image from "next/image";
import styles from "../../styles/Splash.module.css";

function Splash() {
  return (
    <section className={styles.body}>
      <img
        className={styles.cloud_left}
        src="/graphics/splashAssets/cloud_left.png"
        alt="cloud"
      />
      <img
        className={styles.cloud_right}
        src="/graphics/splashAssets/cloud_right.png"
        alt="cloud"
      />
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
          >
            <div className={styles.register}>REGISTER</div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Splash;
