import React, { ReactElement } from "react";
//import "./Sponsors.module.css";
import { motion } from "framer-motion";

// interface SponsorProps {
//   link: string,
//   tier: string,
//   id: string,
//   image: StaticImageData,
//   alt: string,
// }

const logoVariants = {
  hover: {
    scale: 1.1,
  }
}

function SponsorLogo(props) {

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
