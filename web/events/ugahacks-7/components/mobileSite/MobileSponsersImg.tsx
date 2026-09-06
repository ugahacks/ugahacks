import React, { ReactElement } from "react";
import styles from "../../styles/MobileSponsors.module.css";
import Image from 'next/image';

interface SponsorProps {
    link: string;
    tier: string;
    id?: string;
    image: string;
    alt: string;
    width?: string;
    height?: string;
  }

function MobileSponsersImg(props: SponsorProps): ReactElement {
    return (
        <a href={props.link} className={styles.logoContainer}>
      <Image
        className={styles.logos}
        id={props.id}
        src={props.image}
        alt={props.alt}
        height={props.height || "100px"}
        width={props.width || "100px"}
      />
    </a>
  );
}

export default MobileSponsersImg;