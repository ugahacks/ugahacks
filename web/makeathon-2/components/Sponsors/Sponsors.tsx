import React from "react";
import styles from "../../styles/Sponsors.module.css";
import Image from "next/image";
// import packet from "../../public/packets/UGAMakeathonSponsorshipPacket.pdf";

import CliffIcon from "../../public/graphics/sponsorAssets/sponsors cliff.png";
import Jellyfish from "../../public/graphics/sponsorAssets/jellyfish.png";
import anglerfish from "../../public/graphics/sponsorAssets/angler.png";
import gdg from "../../public/graphics/sponsorAssets/gdg.svg";
import coral1 from "../../public/graphics/sponsorAssets/sponsors coral 1.png";
import coral2 from "../../public/graphics/sponsorAssets/sponsors coral 2.png";
import coral3 from "../../public/graphics/sponsorAssets/sponsors coral 3.png";
import coral4 from "../../public/graphics/sponsorAssets/sponsors coral 4.png";
import coral5 from "../../public/graphics/sponsorAssets/sponsors coral 5.png";
import coral6 from "../../public/graphics/sponsorAssets/sponsors coral 6.png";
import devfest from "../../public/graphics/sponsorAssets/sponsors/devfest.png";
import ugaEngineering from "../../public/graphics/sponsorAssets/sponsors/ugaengineering.png";
import echo3d from "../../public/graphics/sponsorAssets/sponsors/echo3d.png";
import oreilly from "../../public/graphics/sponsorAssets/sponsors/oreilly.png";

function Sponsors() {
  return (
    <section className={styles.body}>
      <div className={styles.pic}>
          <Image className={styles.cliff} src={CliffIcon} alt="Cliff Icon" />
             <Image className={styles.coral6} src={coral6} alt="coral6" />
        <div className={styles.coralContainer}>
              <Image className={styles.coral3} src={coral3} alt="coral3" />
        
          <Image className={styles.coral5} src={coral5} alt="coral5" />
        <Image className={styles.coral2} src={coral2} alt="coral2" />
           <Image className={styles.coral4} src={coral4} alt="coral4" />
          <Image className={styles.coral1} src={coral1} alt="coral1" />
        </div>
          </div>
      <div className={styles.custom_shape_divider_top_1694381642}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          ``
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className={styles.shape_fill}
          ></path>
        </svg>
        <div className={styles.Wholecontainer}>
          
          <h2 className={styles.headingSponsor}>Sponsors</h2>
          <Image className={styles.jellyfish} src={Jellyfish} alt="Jellyfish" />
          <Image
            className={styles.anglerfish}
            src={anglerfish}
            alt="anglerfish"
          />
          <div className={styles.contentBody}>
            <div className={styles.sponsors_container}>
              <div className={styles.sponsor_container}>
                <a
                  href="https://gdg.community.dev/events/details/google-gdg-athens-presents-gdg-athens-devfest-2023-x-ugahacks-makeathon-2-1/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    className={styles.sponsor_logo}
                    src={devfest}
                    alt="devfest"
                  />
                </a>
              </div>
              <div className={styles.sponsor_container}>
                <a
                  href="https://engineering.uga.edu/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    className={styles.sponsor_logo}
                    src={ugaEngineering}
                    alt="ugaengineering"
                  />
                </a>
              </div>
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
            <div className={styles.parentButtonContainer}>
              <button className={styles.sponsorPacketButton}>
                <a
                  className={styles.sponsorshipLink}
                  href="../../public/packets/UGAMakeathonSponsorshipPacket.pdf"
                >
                  Sponsorship Packet
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.custom_shape_divider_bottom_1694379347}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className={styles.shape_fill}
          ></path>
        </svg>
      </div>
    </section>
  );
}

export default Sponsors;
