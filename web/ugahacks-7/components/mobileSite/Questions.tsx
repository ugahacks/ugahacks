import React, { useState } from "react";
import { motion } from "framer-motion";
import {collapseVariants, hoverVariants} from "./CommonVariants";
import styles from '../../styles/MobileFAQ.module.css'
import { faqWindow } from "../FAQ/FAQ";

const screwVariants = {
  open: { rotate: 45 },
  closed: { rotate: 0 },
};

function Question(props: any) {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.QandA}>

      <motion.button
        className={styles.faq_question}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="pad">
        {props.question}
        </div>



      </motion.button>
      <motion.div
        className={styles.faq_answer}
        variants={collapseVariants}
        animate={isOpen ? "open" : "closed"}

      >
        <p>{props.answer} <a className={styles.faq_link} href={props.link}>{props.linktxt}</a></p>
      </motion.div>
      </div>

  );
}

export default Question;