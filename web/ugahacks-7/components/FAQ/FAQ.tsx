import React, { ReactElement } from "react";
import Window from "../Window";
import styles from "../../styles/FAQ.module.css";

export { faqQuestions };

const questions: string[] = [
  "Where will it be held this year?",
  "How much will it cost to sign up?",
  "Who can sign up?",
];

const answers: string[] = [
  "The event will be a hybrid model where it will be located in MLC for in-person and virtual over slack!",
  "Nothing! The entire event and its amazing perks are free for all participants, including meals and snacks to keep you powered throughout the weekend, as well as workshops to help you get started and sharpen your hacking skills!",
  "All university students! We welcome all undergraduates and graduate students of all skill levels to attend. Professionals and other guests are welcome to attend as mentors or volunteers.",
];

const FAQ = (): ReactElement => {
  const faq = "<h1>Hello</h1>";
  return (
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
  return (
    <>
      <span className={styles.faq}>FAQ: </span>
    </>
  );
}

function byte(): ReactElement {
  return (
    <>
      <span className={styles.byte}>Byte: </span>
    </>
  );
}

function question(index: number): ReactElement {
  return (
    <>
      <li className={styles.questions}>
        {faq()}
        {questions[index]}
      </li>
    </>
  );
}

function answer(index: number): ReactElement {
  return (
    <>
      <li className={styles.answers}>
        {byte()}
        {answers[index]}
      </li>
    </>
  );
}

function generateFAQ(): ReactElement {
  let faq: ReactElement[] = []

  for (var i = 0; i < questions.length; i++) {
    faq.push(<li className={styles.questions}><span className={styles.faq}>FAQ: </span>{questions[i]}</li>);
    faq.push(<li className={styles.answers}><span className={styles.byte}>Byte: </span>{answers[i]}</li>)
  } // for

  for (var i = 0; i < faq.length; i++) {
    console.log(faq[i]);
  }

  return(
    <>
      <ul className="tree-view">
        {faq}
      </ul>
    </>
  )
}

function generate(): ReactElement {
  return (
    <>
      <ul className="tree-view">
        {questions.map(function (question, index) {
          return (
            <>
            <li className={styles.questions} key={index}>{faq()}{question}</li>

            </>         
          );
        })}
      </ul>
    </>
  );
};

function faqQuestions(): ReactElement {
  return (
    <>
      <div className={styles.faqContainer}>
        {/* <ul className="tree-view">
          {question(0)}
          {answer(0)}
        </ul> */}
        {generateFAQ()}
      </div>
    </>
  );
}

export default FAQ;
