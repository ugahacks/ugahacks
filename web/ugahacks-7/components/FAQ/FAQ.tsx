import React, { ReactElement, useState, useEffect } from "react";
import Window from "../Window";
import styles from "../../styles/FAQ.module.css";

export { faqQuestions };

const topics: string[] = ["COVID", "Logistics", "About the Hackathon"];

const questions_COVID: string[] = [
  "Where will it be held this year?",
  "How much will it cost to sign up?",
  "Who can sign up?",
];

const answers_COVID: string[] = [
  "The event will be a hybrid model where it will be located in MLC for in-person and virtual over slack!",
  "Nothing! The entire event and its amazing perks are free for all participants, including meals and snacks to keep you powered throughout the weekend, as well as workshops to help you get started and sharpen your hacking skills!",
  "All university students! We welcome all undergraduates and graduate students of all skill levels to attend. Professionals and other guests are welcome to attend as mentors or volunteers.",
];

const questions_logistics: string[] = [
  "Logistics Questions"
];

const answers_logistics: string[] = [
  "Logistics Answers"
];

function CurrentTopic(): ReactElement {
  const [topic, setTopic] = useState("COVID");

  const inputHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTopic(e.target.value)
  }

  return (
    <>
      <label>Topics: </label>
      <select value={topic} onChange={inputHandler} className={styles.dropdown}>
        <option value={"COVID"}>{topics[0]}</option>
        <option value={"Logistics"}>{topics[1]}</option>
        <option value={"2"}>{topics[2]}</option>
      </select>
      {generateFAQ(topic)}
    </>
  );
}

const FAQ = (): ReactElement => {
  const faq = "<h1>Hello</h1>";
  return (
    <>
      <div className={styles.window}>
        <div className="inactive">
          <Window
            windowTitle="FAQ"
            windowType="chat-faq"
            showTopBarButtons
            width="75vh"
            height="auto"
          />
        </div>
      </div>
    </>
  );
};

/**
 * Combine the questions and answers array and display it in the chatbox.
 * We are combining the questions and answers array in an alternating format so
 * that FAQ and Byte will be alternating.
 *
 * @return {ReactElement} Returns a <ul> containing <li> of questions and answers.
 */
function generateFAQ(type: string): ReactElement {
  let faq: ReactElement[] = [];

  switch(type) {
    case "COVID":
      for (var i = 0; i < questions_COVID.length; i++) {
        faq.push(
          <li className={styles.questions}>
            <span className={styles.faq}>FAQ: </span>
            {questions_COVID[i]}
          </li>
        );
        faq.push(
          <li className={styles.answers}>
            <span className={styles.byte}>Byte: </span>
            {answers_COVID[i]}
          </li>
        );
      } // for
      break;
    case "Logistics": 
      for (var i = 0; i < questions_logistics.length; i++) {
        faq.push(
          <li className={styles.questions}>
            <span className={styles.faq}>FAQ: </span>
            {questions_logistics[i]}
          </li>
        );
        faq.push(
          <li className={styles.answers}>
            <span className={styles.byte}>Byte: </span>
            {answers_logistics[i]}
          </li>
        );
      } // for
  }

  return (
    <>
      <ul className="tree-view">{faq}</ul>
    </>
  );
}

function topicDropdown(): ReactElement {
  return (
    <>
    <label>Topics: </label>
      <select className={styles.dropdown}>
        <option value={0}>{topics[0]}</option>
        <option value={1}>{topics[1]}</option>
        <option value={2}>{topics[2]}</option>
      </select>
    </>
  )
}

/**
 * This function calls the generateFAQ() function to display all the faqs 
 * in the chatbox. This function is being exported to Window.tsx.
 * 
 * @returns {ReactElement} Returns the faq container chatbox.
 */
function faqQuestions(): ReactElement {
  var type = "COVID";

  return (
    <>
      <div className={styles.faqContainer}>
        {/* <ul className="tree-view">
          {question(0)}
          {answer(0)}
        </ul> */}
        {CurrentTopic()}
      </div>
    </>
  );
}

export default FAQ;
