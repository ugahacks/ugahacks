import React, { ReactElement } from "react";
//import "./Sponsors.module.css";
import { motion } from "framer-motion";

interface SponsorProps {
  link: string,
  tier: string,
  id?: string,
  image: string,
  alt: string,
}

const logoVariants = {
  hover: {
    scale: 1.1,
  }
}

function SponsorLogo(props: SponsorProps): ReactElement {

  return (
    <a href={props.link}>
      <motion.img
        className={props.tier}
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
