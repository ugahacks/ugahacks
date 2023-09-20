"use client";

import React, { useState } from "react";
import styles from "../../styles/FAQ.module.css";
import faqs from "./faq.json";

type QuestionType = {
  question: string;
  answer: string;
};

type QuestionProps = {
  question: QuestionType;
  questionId: number;
  expandQuestion: (id: number) => void;
  expanded: boolean;
};

const expandSVG = (
  <svg
    width="26"
    height="16"
    viewBox="0 0 26 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.0992 14.765C14.6109 15.2527 13.949 15.5266 13.2589 15.5266C12.5688 15.5266 11.9069 15.2527 11.4187 14.765L1.59575 4.94553C1.10745 4.457 0.833211 3.7945 0.833374 3.10377C0.833537 2.41305 1.10808 1.75068 1.59661 1.26237C2.08515 0.774072 2.74765 0.499837 3.43837 0.5C4.1291 0.500163 4.79147 0.774709 5.27977 1.26324L13.2589 9.24241L21.2381 1.26324C21.729 0.788635 22.3867 0.525836 23.0695 0.531445C23.7524 0.537054 24.4056 0.810623 24.8887 1.29323C25.3718 1.77584 25.646 2.42887 25.6522 3.11167C25.6585 3.79448 25.3963 4.45242 24.9221 4.9438L15.101 14.7667L15.0992 14.765Z"
      fill="white"
    />
  </svg>
);

const collapseSVG = (
  <svg
    width="19"
    height="19"
    viewBox="0 0 19 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.2715 1.27126C1.46282 1.07974 1.69 0.927797 1.94006 0.824113C2.19023 0.720384 2.4584 0.666992 2.72922 0.666992C3.00005 0.666992 3.26822 0.720384 3.51839 0.824113C3.76848 0.927807 3.99568 1.07977 4.187 1.27132L4.18688 1.2712L3.8334 1.62481L4.1872 1.27151L1.2715 1.27126ZM1.2715 1.27126C1.07998 1.46257 0.928041 1.68975 0.824357 1.93982C0.720628 2.18999 0.667236 2.45816 0.667236 2.72898C0.667236 2.99981 0.720628 3.26797 0.824357 3.51815C0.928051 3.76823 1.08001 3.99543 1.27156 4.18676C1.27163 4.18682 1.27169 4.18689 1.27176 4.18695L6.58267 9.49981L1.2715 14.8129C0.884894 15.1995 0.667697 15.7239 0.667697 16.2706C0.667697 16.8174 0.884894 17.3418 1.2715 17.7284C1.65812 18.115 2.18247 18.3322 2.72922 18.3322C3.27595 18.3322 3.80028 18.115 4.18688 17.7284C4.1869 17.7284 4.18692 17.7284 4.18694 17.7284L9.50006 12.4172L14.8132 17.7284C14.8132 17.7284 14.8132 17.7284 14.8132 17.7284C15.1998 18.115 15.7242 18.3322 16.2709 18.3322C16.8176 18.3322 17.342 18.115 17.7286 17.7284C18.1152 17.3418 18.3324 16.8174 18.3324 16.2706C18.3324 15.7239 18.1152 15.1996 17.7287 14.813C17.7287 14.813 17.7286 14.813 17.7286 14.8129L12.4175 9.49981M1.2715 1.27126L12.4175 9.49981M9.50006 6.58242L9.14657 6.93578L9.49973 7.28907L9.50006 6.58242ZM9.50006 6.58242L14.8132 1.27126C14.8132 1.27124 14.8132 1.27122 14.8132 1.2712C15.0047 1.0798 15.2319 0.927967 15.482 0.824377C15.7321 0.720776 16.0002 0.667453 16.2709 0.667453C16.5416 0.667453 16.8097 0.720776 17.0598 0.824378C17.3099 0.927979 17.5372 1.07983 17.7286 1.27126C17.92 1.46269 18.0719 1.68995 18.1755 1.94007C18.2791 2.19018 18.3324 2.45826 18.3324 2.72898C18.3324 2.9997 18.2791 3.26778 18.1755 3.51789C18.0719 3.76798 17.9201 3.99522 17.7287 4.18664C17.7287 4.18666 17.7286 4.18668 17.7286 4.1867L12.4175 9.49981M9.50006 6.58242L12.4175 9.49981"
      fill="white"
      stroke="white"
    />
  </svg>
);

function Question({
  question,
  questionId,
  expandQuestion,
  expanded,
}: QuestionProps) {
  // When a question is expanded, we will update the parent state that a new id has been expanded,
  // when a question is collapsed, we will send -1 to the parent state to notify it to expand no children.
  return (
    <div
      id={"questionBox-" + questionId}
      className={
        expanded ? styles.question + " " + styles.expanded : styles.question
      }
    >
      <div className={styles.question_top}>
        <h1 id={"question-" + questionId}>{question.question}</h1>
        <div
          className={styles.expand_button}
          id={"button-" + questionId}
          onClick={() => {
            expanded ? expandQuestion(-1) : expandQuestion(questionId);
          }}
        >
          {expanded ? collapseSVG : expandSVG}
        </div>
      </div>
      <p id={"answer-" + questionId}>{question.answer}</p>
    </div>
  );
}
function FAQ() {
  // expandIndex tells us which one of the questions is currently expanded, -1 if everything is collapsed.
  const [expandedIndex, setExpandedIndex] = useState(-1);
  // ID is used as index as well
  const expandQuestion = (id: number) => setExpandedIndex(id);
  return (
    <section className={styles.body}>
      <div className={styles.custom_shape_divider_top_1694481505}>
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
      <h2 className={styles.section_header}>FAQ</h2>
      <div className={styles.faq_content}>
        <ul className={styles.questions}>
          {faqs.map((q, i) => (
            <Question
              key={i}
              expanded={i == expandedIndex}
              expandQuestion={expandQuestion}
              question={q}
              questionId={i}
            />
          ))}
        </ul>
        <img src="./graphics/diving_byte.png" />
      </div>
    </section>
  );
}

export default FAQ;
