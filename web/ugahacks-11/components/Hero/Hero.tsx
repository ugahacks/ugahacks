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
          width={100}
          height={100}
          className={styles.logo}
        />
        <p className={styles.slogan}>
          February 6-8, 2026<br />UGA Miller Learning Center
        </p>
        <p className={styles.slogan}></p>
        <button className={styles.ctaButton}>Register Now</button>
      </div>
    </section>
  );
};

export default Hero;
