import React from "react";
import Image from "next/image";
import styles from "../../styles/Splash.module.css";

function Splash() {
  return (
    <section className={styles.body}>
      Splash
      {/* <Image
        className={styles.ocean_surface}
        src="/graphics/ocean-splash-transition.svg"
        width={1500}
        height={500}
        alt="ocean surface"
      /> */}
    </section>
  );
}

export default Splash;
