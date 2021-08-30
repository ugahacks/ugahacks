import React, { useState, ReactElement } from "react";
//import "./FAQ.module.css";
import { motion } from "framer-motion";
import {collapseVariants, hoverVariants} from "../../../util/CommonVariants";
//import screw from "./images/screw-01.svg";

const screw: string = "/icons/FAQImgaes/images/screw-01.svg";

interface QuestionsProps {
  question: string,
  answer: string,
  link?: string,
  linktxt?: string,
}

const screwVariants = {
  open: { rotate: 45 },
  closed: { rotate: 0 },
};

function Question(props: QuestionsProps): ReactElement {

  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <motion.button
        className="faq-question"
        onClick={() => setIsOpen(!isOpen)}
        variants={hoverVariants}
        whileHover="hover"
      >
        {props.question}
        <div className="screw-wrapper">
          <motion.img
            className="screw"
            src={screw} alt="screw" width="15"
            height="15"
            variants={screwVariants}
            animate={isOpen ? "open": "closed"}
            />
        </div>



      </motion.button>
      <motion.div
        className="faq-answer"
        variants={collapseVariants}
        animate={isOpen ? "open" : "closed"}

      >
        <p>{props.answer} <a href={props.link}>{props.linktxt}</a></p>
      </motion.div>
    </>

  );
}

export default Question;
