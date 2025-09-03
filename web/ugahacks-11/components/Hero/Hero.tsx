import React from "react";
import Image from "next/image";
import styles from "./Hero.module.css";

const Hero: React.FC = () => {
  return (
    <section className={styles.heroContainer}>
      <div className={styles.contentWrapper}>
        <Image
          src="/Logo-with-byte 1.svg"
          alt="UGA Hacks 11 Logo"
          width={680}
          height={150}
          className={styles.logo}
        />
        <p className={styles.slogan}>Ignite the magic within</p>
        <button className={styles.ctaButton}>Register Now</button>
      </div>
    </section>
  );
};

export default Hero;
