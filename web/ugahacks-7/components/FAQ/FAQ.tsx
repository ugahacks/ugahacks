import React, { ReactElement } from "react";
import Window from "../Window";
import styles from "../../styles/FAQ.module.css";

export { faqQuestions };

const questions: string[] = [
  "Where will it be held this year?",
];

const answers: string[] = [
  "The event will be a hybrid model where it will be located in MLC for in-person and virtual over slack!",
];

const FAQ = (): ReactElement => {
    const faq = "<h1>Hello</h1>"
    return(
        <Window
            windowTitle="FAQ"
            windowType="chat-faq"
            windowBodyText={faq}
            windowHeading="Frequently Asked Questions"
            showTopBarButtons
            width="75vh"
            height="auto"
        />
    );
};

function faq(): ReactElement {
  return(
    <>
      <span className={styles.faq}>FAQ: </span>
    </>
  )
};

function byte(): ReactElement {
  return(
    <>
      <span className={styles.byte}>Byte: </span>
    </>
  )
};

function question(index: number): ReactElement {
  return(
    <>
      <li className={styles.questions}>
        {faq()}
        {questions[index]}
      </li>
    </>
  )
};

function answer(index: number): ReactElement {
  return(
    <>
      <li className={styles.answers}>
        {byte()}
        {answers[index]}
      </li>
    </>
  )
};

function faqQuestions(): ReactElement {
    return (
      <>
        <div className={styles.faqContainer}>
          <ul className="tree-view">
            {question(0)}
            {answer(0)}
          </ul>
        </div>
      </>
    );
};

export default FAQ;