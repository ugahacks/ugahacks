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

function Sponsors() {
  return (
    <section className={styles.body}>
      <div className={styles.custom_shape_divider_top_1694381642}>
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
        {/* where i put my work */}
        <div className={styles.contentBody}>
          <h2 className={styles.headingSponsor}>Sponsors</h2>
          <Image className={styles.jellyfish} src={Jellyfish} alt="Jellyfish" />
          <Image
            className={styles.anglerfish}
            src={anglerfish}
            alt="anglerfish"
          />
          <div className={styles.sponsorsContainer}>
            {/* add sponsors here */}
            <Image className={styles.gdgSponsor} src={gdg} alt="gdg sponsor" />
          </div>
          <div className={styles.parentButtonContainer}>
            <button className={styles.sponsorPacketButton}>
              <a className={styles.sponsorshipLink}
                href="../../public/packets/UGAMakeathonSponsorshipPacket.pdf"
              >
                Sponsorship Packet
              </a>
            </button>
          </div>
          <div className={styles.coralContainer}>
            <Image className={styles.coral1} src={coral1} alt="coral1" />
            <Image className={styles.coral2} src={coral2} alt="coral2" />
            <Image className={styles.coral3} src={coral3} alt="coral3" />
            <Image className={styles.coral4} src={coral4} alt="coral4" />
            <Image className={styles.coral5} src={coral5} alt="coral5" />
            <Image className={styles.coral6} src={coral6} alt="coral6" />
          </div>
          <Image className={styles.cliff} src={CliffIcon} alt="Cliff Icon" />
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
