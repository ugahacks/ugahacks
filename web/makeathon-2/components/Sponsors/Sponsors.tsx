import React from "react";
import styles from "../../styles/Sponsors.module.css";
import Image from "next/image";
// import packet from "../../public/packets/UGAMakeathonSponsorshipPacket.pdf";

function Sponsors() {
  return (
    <section className={styles.body}>
      <img
        className={styles.jellyfish}
        src="./graphics/sponsorAssets/jellyfish.png"
        alt="jellyfish"
      />
      <img
        className={styles.cliff}
        src="./graphics/sponsorAssets/sponsors cliff.png"
        alt="cliff"
      />
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
      </div>

      <div className={styles.container}>
        <h1 className={styles.heading}>Sponsors</h1>
        <div className={styles.sponsor_logo_container}>
          <img
            className={styles.sponsor}
            src="/graphics/sponsorAssets/devfest-2023.png"
            alt="gdg-athens"
          />
        </div>
        <div className={styles.flex_box}>
          <div className={styles.button}>
            {" "}
            <a
              href="/packets/UGAMakeathonSponsorshipPacket.pdf"
              target="_blank"
            >
              Sponsorship Packet
            </a>
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
