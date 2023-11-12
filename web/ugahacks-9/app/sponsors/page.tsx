import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import styles from "../../styles/Sponsors.module.css";
import Image from "next/image";
import echo3d from "../../sponsors/echo3d.png";
import oreilly from "../../public/sponsors/oreilly.png";

function Sponsors() {
  return (
    <div className="main">
      <Navbar />
      <div className={styles.mainContainer}>
        <div className={styles.sponsorsContainer}>
         <div className={styles.sponsor_container}>
                <a
                  href="https://www.echo3d.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    className={styles.sponsor_logo}
                    src={echo3d}
                    alt="echo3d"
                  />
                </a>
              </div>
              <div className={styles.sponsor_container}>
                <a
                  href="https://www.oreillyauto.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    className={styles.sponsor_logo}
                    src={oreilly}
                    alt="oreilly"
                  />
                </a>
        </div>
         </div>
        <div className={styles.buttonContainer}>
          <p className={styles.buttonHeading}>This event is supported in part by the President's Venture Fund through the generous gifts of University of Georgia donors.</p>
         <button className={styles.sponsorshipPacketButton}>Sponsorship Packet</button>
        </div>
      </div>
    </div>
  );
}

export default Sponsors;
