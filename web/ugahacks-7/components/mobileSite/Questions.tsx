import React, { useState } from "react";
import { motion } from "framer-motion";
import {collapseVariants, hoverVariants} from "./CommonVariants";
import fileImage from '../../public/graphics/fileicon-01.svg'
import styles from '../../styles/MobileFAQ.module.css'

const screwVariants = {
  open: { rotate: 45 },
  closed: { rotate: 0 },
};

function Question(props: any) {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.button
        className={styles.faq_question}
        onClick={() => setIsOpen(!isOpen)}
        variants={hoverVariants}
        whileHover="hover"
      >
        {props.question}
        <div className="screw-wrapper">
          <motion.img
            className="screw"
            src={fileImage} alt="screw" width="15"
            height="15"
            variants={screwVariants}
            animate={isOpen ? "open": "closed"}
            />
        </div>



      </motion.button>
      <motion.div
        className={styles.faq_answer}
        variants={collapseVariants}
        animate={isOpen ? "open" : "closed"}

      >
        <p>{props.answer} <a href={props.link}>{props.linktxt}</a></p>
      </motion.div>
    </>

  );
}

export default Question;