"use client";

import Image from "next/image";
import styles from '../../../styles/Footer.module.css'; 

export default function Footer() {
  return (
    <div
      className={styles.footer}
    >
      <Image
        src="/HackathonPage.svg"
        alt="Footer image"
        className={styles["footer-image"]}
        width={1920}
        height={1080}
      />
      <a href="https://ugahacks.com/" target="_blank" rel="noreferrer">
        <button
          className={styles["footer-button"]}
        >
          <div className={styles["image-container"]}>
            <Image 
              src="/Registerlabel.svg" 
              alt="Register button"
              layout="fill" // Allows the image to resize based on the container's dimensions
              objectFit="contain" // Ensures the image fits properly in the container
            />
          </div>
        </button>
      </a>
    </div>
  );
}
