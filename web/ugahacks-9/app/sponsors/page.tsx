import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import styles from "../../styles/Sponsors.module.css";

function Sponsors() {
  return (
    <div className="main">
      <Navbar />
      <div className={styles.mainContainer}>
        <div className={styles.sponsorsContainer}>

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
