import React, { useState, ReactElement } from "react";
import { motion } from "framer-motion";
import { collapseVariants, hoverVariants } from "../../../util/CommonVariants";

const acorn: string = "/icons/FAQImages/images/Icons_acorn.svg";

interface QuestionsProps {
  question: string;
  answer: string;
  link?: string;
  linktxt?: string;
}

const acornVariants = {
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
        <div className="acorn-wrapper">
          <motion.img
            className="acorn"
            src={acorn}
            alt="acorn"
            width="25"
            height="25"
            variants={acornVariants}
            animate={isOpen ? "open" : "closed"}
          />
        </div>
      </motion.button>
      <motion.div
        className="faq-answer"
        variants={collapseVariants}
        animate={isOpen ? "open" : "closed"}
      >
        <p>
          {props.answer} <a href={props.link}>{props.linktxt}</a>
        </p>
      </motion.div>
    </>
  );
}

export default Question;
