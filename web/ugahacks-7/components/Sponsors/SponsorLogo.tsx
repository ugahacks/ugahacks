import React, { ReactElement } from "react";
import { motion } from "framer-motion";
import styles from "../../styles/Sponsors.module.css";

interface SponsorProps {
  link: string;
  tier: string;
  id?: string;
  image: string;
  alt: string;
}

const logoVariants = {
  hover: {
    scale: 1.1,
  },
};

function SponsorLogo(props: SponsorProps): ReactElement {
  return (
    <a href={props.link} className={styles.logoContainer}>
      <motion.img
        className={styles.logos}
        id={props.id}
        src={props.image}
        alt={props.alt}
        variants={logoVariants}
        whileHover="hover"
      />
    </a>
  );
}

export default SponsorLogo;
