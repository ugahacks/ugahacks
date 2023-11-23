import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import styles from "../../styles/Sponsors.module.css";
import Image from "next/image";
import echo3d from "../../public/sponsors/echo3d.png";
import oreilly from "../../public/sponsors/oreilly.png";
import statefarm from "../../public/sponsors/statefarm.png";
import hpcc from "../../public/sponsors/hpcc.png";

function Sponsors() {
  return (
    <div className="main">
      <Navbar />
      <div className={styles.mainContainer}>
        <div className={styles.sponsorsParentContainer}>
            <div className={styles.top_sponsor}>
              <div className={styles.sponsor_container}>
                <a
                  href="https://hpccsystems.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    className={styles.big_sponsor_logo}
                    src={hpcc}
                    alt="hpcc"
                  />
                </a>
              </div>
            </div>
          <div className={styles.mid_sponsor}>
            <div className={styles.sponsor_container}>
              <a
                href="https://www.statefarm.com/"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  className={styles.mid_sponsor_logo}
                  src={statefarm}
                  alt="statefarm"
                />
              </a>
            </div>
            </div>
            <div className={styles.bot_sponsor}>
            <div className={styles.sponsor_container}>
              <a
                href="https://www.echo3d.com/"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  className={styles.bot_sponsor_logo}
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
                  className={styles.bot_sponsor_logo}
                  src={oreilly}
                  alt="oreilly"
                />
              </a>
            </div>
            </div>
        </div>
        <div className={styles.buttonContainer}>
          <p className={styles.buttonHeading}>
            This event is supported in part by the President's Venture Fund
            through the generous gifts of University of Georgia donors.
          </p>
          <button className={styles.sponsorshipPacketButton}>
            <a
              className={styles.sponsorshipLink}
              href="/UGAHacks9SponsorshipPacket.pdf"
            >
              Sponsorship Packet
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sponsors;
