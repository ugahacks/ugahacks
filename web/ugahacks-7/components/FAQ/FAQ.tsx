import React, { ReactElement, useState } from "react";
import Window from "../Window";
import styles from "../../styles/FAQ.module.css";

export { faqQuestions };

// Create an array of topics that will be accessed by the option HTML tag
const topics: string[] = ["COVID", "Logistics", "About the Hackathon"];

// Question and answer arrays for each topic, add your questions and answers into the corresponding topic arrays
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

const questions_hackathon: string[] = [
  "Questions about the Hackathon"
];

const answers_hackathon: string[] = [
  "Answers about the Hackathon"
];

/**
 * Uses the useState hook to check which FAQs to display based on the topic. We
 * are setting the topic based on the option values.
 *
 * @returns {ReactElement} The dropdown menu and FAQ text area will be rendered everytime
 * a new topic is selected.
 */
function CurrentTopic(): ReactElement {
  const [topic, setTopic] = useState("COVID");

  const inputHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTopic(e.target.value);
  };

  return (
    <>
      <label className={styles.topic}>Topics: </label>
      <select value={topic} onChange={inputHandler} className={styles.dropdown}>
        <option value={"COVID"}>{topics[0]}</option>
        <option value={"Logistics"}>{topics[1]}</option>
        <option value={"About the Hackathon"}>{topics[2]}</option>
      </select>
      <div className={styles.scroll}>
        {generateFAQ(topic)}
      </div>
    </>
  );
}

const FAQ = (props: any): ReactElement => {
  const faq = "<h1>Hello</h1>";
  return (
    <>
      <div >
          <Window
            windowTitle="FAQ"
            windowType="chat-faq"
            showTopBarButtons
            width="40vw"
            height="auto"
            stateChanger = {props.stateChanger}
          />
      </div>
    </>
  );
};

/**
 * Based on the topic selected from the dropdown menu, the FAQ textarea will change its
 * window by selecting the correct case in the switch case clause. Each case will be a
 * topic for the FAQ. More topics can be added to the topics array and CurrentTopic()
 * functional component.
 *
 * @return {ReactElement} Returns a <ul> containing <li> of questions and answers.
 */
function generateFAQ(type: string): ReactElement {
  let faq: ReactElement[] = [];

  switch (type) {
    case "COVID":
      faq = generateQAArray(questions_COVID, answers_COVID);
      break;
    case "Logistics":
      faq = generateQAArray(questions_logistics, answers_logistics);
      break;
    case "About the Hackathon":
      faq = generateQAArray(questions_hackathon, answers_hackathon);
      break;
    default:
      faq = generateQAArray(questions_COVID, answers_logistics);
      break;
  }

  return (
    <>
      <ul className="tree-view">{faq}</ul>
    </>
  );
}

/**
 * Generates alternating questions and answers array so that the questions and answers will
 * display in an alternating fashion in the FAQ textarea. This is a helper function to the
 * generateFAQ() function. Returns an array of alternating quesitons and answers so that the
 * generateFAQ() function can iterate through the returned array and display it in the textarea.
 *
 * @param question_array the array containing the questions
 * @param answer_array the array containing the answers
 *
 * @returns {ReactElement} Returns the list of FAQ (questions) and Byte (answers) in JSX.
 */
function generateQAArray(
  question_array: string[],
  answer_array: string[]
): ReactElement[] {
  let faq: ReactElement[] = [];

  for (let i = 0; i < question_array.length; i++) {
    faq.push(
      <li className={styles.questions}>
        <span className={styles.faq}>FAQ: </span>
        {question_array[i]}
      </li>
    );
    faq.push(
      <li className={styles.answers}>
        <span className={styles.byte}>Byte: </span>
        {answer_array[i]}
      </li>
    );
  } // for

  return faq;
} // generateQA

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
      <div className={styles.faqContainer}>{CurrentTopic()}</div>
    </>
  );
}

export default FAQ;
