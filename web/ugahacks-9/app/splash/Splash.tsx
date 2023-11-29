import React from "react";
import Image from "next/image";
import styles from "../../styles/Splash.module.css";

function Splash() {
  return (
    <div>
      <div className={styles.banner}>
        <Image
          src="/splash_artwork.png"
          alt="uh9 banner"
          layout="responsive"
          width={1920}
          height={1080}
        />
      </div>
      <div className={styles.comic_nav}></div>

      {/** speech bubbles: */}
      <div className={styles.speech_bubble1}>
        <Image
          src="/speech_bubble1.png"
          alt="speech bubble"
          width={355}
          height={227}
        />
      </div>
      <div className={styles.speech_bubble2}>
        <div className={styles.caption}>Be the hero of your own story.</div>
        <Image
          src="/speech_bubble2.png"
          alt="speech bubble"
          width={197}
          height={165}
        />
      </div>
    </div>
  );
}

export default Splash;
