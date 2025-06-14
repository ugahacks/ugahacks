import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import styles from "../../styles/About.module.css";

function About() {
  return (
    <section className="main">
      <Navbar />
      <div className={styles.content}>
        {/* <div className={styles.center}>
          <div className={styles.background}></div>
        </div> */}
        <div className={styles.infoColumn}>
          <div className={styles.graphics}>
            <div className={styles.redContainer}>
              <img
                className={styles.redShape}
                src="aboutGraphics/RedContainer.png"
                alt="image"
              />
              <img
                className={styles.what}
                src="aboutGraphics/what.png"
                alt="WHAT IS UGA HACKS?"
              />
            </div>
            <div className={styles.yellowContainer}>
              <img
                className={styles.yellowShape}
                src="aboutGraphics/YellowContainer.png"
                alt="image"
              />
              <div className={styles.byteContainer}>
                <img
                  className={styles.byte}
                  src="aboutGraphics/byte_flying.png"
                  alt="image"
                />
              </div>
            </div>
          </div>
          <div className={styles.info}>
            <p>
              UGAHacks is an annual hackathon organized by fellow students at
              the University of Georgia in Athens, Georgia. Hackathons are all
              about groups of dedicated people coming together to create
              something amazing in an epic 48-hour programming sleepover.
            </p>
            <p>
              Even though submitting a project is the main objective,
              that&apos;s not all there is. We&apos;ll have mentors, free food,
              video game competitions, workshops and more. There&apos;s even a
              workshop at the event for anyone that still needs to find some
              teammates!
            </p>
          </div>
        </div>
        <div className={styles.hackathonImage}>
          <img src="aboutGraphics/Hackathon2.JPG" alt="hackathon" />
        </div>
      </div>
    </section>
  );
}

export default About;
