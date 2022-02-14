import React, { ReactElement, useEffect, useRef, useState } from "react";
import Window from "../Window";
import styles from "../../styles/FAQ.module.css";

export { faqWindow };

const FAQ = (props: any): ReactElement => {
  const faq = "<h1>Hello</h1>";
  return (
    <>
      <div>
        <Window
          windowTitle="FAQ"
          windowType="chat-faq"
          showTopBarButtons
          width="40vw"
          height="auto"
          stateChanger={props.stateChanger}
        />
      </div>
    </>
  );
};

// Create an array of topics that will be accessed by the option HTML tag
const topics: string[] = ["COVID", "Logistics", "About the Hackathon"];

// Idea is to maintain a log of message for each topic, and the responses array will hold all the possible response to user questions
// Message array
const user_message_COVID: string[] = [];

// Message array
const user_message_logistics: string[] = [];

// Message array
const user_message_about: string[] = [];

// Response to choose from
const responses: string[] = [
  "Just eat more food bro",
  "My name is Jeffrey",
  "Just beat up Logistics team",
];

// Response to user message array
const user_message_answers_COVID: string[] = [];

// Response to user message array
const user_message_answers_logistics: string[] = [];

// Response to user message array
const user_message_answers_about: string[] = [];

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

const questions_logistics: string[] = ["Logistics Questions"];

const answers_logistics: string[] = ["Logistics Answers"];

const questions_hackathon: string[] = ["Questions about the Hackathon"];

const answers_hackathon: string[] = ["Answers about the Hackathon"];

/**
 * Uses the useState hook to check which FAQs to display based on the topic. We
 * are setting the topic based on the option values.
 * Use React Form to maintain state of the user messages and submit it to chatbox
 * using the send message button.
 *
 * @returns {ReactElement} The dropdown menu and FAQ text area will be rendered everytime
 * a new topic is selected. The FAQ text area will also update once the user clicks on
 * send message button.
 */
function CurrentTopic(): ReactElement {
  const [topic, setTopic] = useState("COVID");

  const [message, setMessage] = useState({
    body: "",
  });

  const scrollRef = useRef<null | HTMLDivElement>(null);

  // The chatbox will scroll to the bottom when user sends message
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();

    // Add to message array
    addToMessageArray(topic, message.body);

    setMessage({
      body: "",
    });
  };

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
        <div ref={scrollRef} />
      </div>
      <form onSubmit={handleSend}>
        <div className="field-row-stacked">
          <textarea
            className={styles.inputChat}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>): void =>
              setMessage({ body: e.target.value })
            }
            value={message.body}
          ></textarea>
        </div>
        <button className={styles.sendBtn} type="submit">
          Send Message
        </button>
      </form>
    </>
  );
}

/**
 * Based on the topic selected from the dropdown menu, the FAQ textarea will change its
 * window by selecting the correct case in the switch case clause. Each case will be a
 * topic for the FAQ. More topics can be added to the topics array and CurrentTopic()
 * functional component.
 * Additionally, chat box will update with the user sending messages.
 *
 * @return {ReactElement} Returns a <ul> containing <li> of questions and answers.
 */
function generateFAQ(type: string): ReactElement {
  let faq: ReactElement[] = [];
  let message: ReactElement[] = generateMessage(type);

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
  } // switch

  return (
    <>
      <ul className="tree-view">
        {faq}
        {message}
      </ul>
    </>
  );
} // generateFAQ

/**
 * Based on the topic selected from the dropdown menu, the FAQ textarea will change its
 * window by selecting the correct case in the switch case clause. Each case will be a
 * topic for the FAQ. More topics can be added to the topics array and CurrentTopic()
 * functional component.
 * Additionally, chat box will update with the user sending messages and will stay
 * within that particular topic. So messages will not persist across all topics.
 *
 * @return {ReactElement} Returns a <ul> containing <li> of questions and answers.
 */
function generateMessage(type: string): ReactElement[] {
  let message: ReactElement[] = [];

  switch (type) {
    case "COVID":
      message = generateMessageArray(
        user_message_COVID,
        user_message_answers_COVID
      );
      break;

    case "Logistics":
      message = generateMessageArray(
        user_message_logistics,
        user_message_answers_logistics
      );
      break;

    case "About the Hackathon":
      message = generateMessageArray(
        user_message_about,
        user_message_answers_about
      );
      break;

    default:
      message = generateMessageArray(
        user_message_COVID,
        user_message_answers_COVID
      );
      break;
  } // switch

  return message;
}

/**
 * This helper function adds the user message to a corresponding array
 * so that it maintains a log of messages for each topic in faq.
 *
 * @param type The topic of faq
 * @param body The content of the user message
 */
function addToMessageArray(type: string, body: string): void {
  switch (type) {
    case "COVID":
      user_message_COVID.push(body);
      user_message_answers_COVID.push(
        responses[randomInt(0, responses.length - 1)]
      );
      break;

    case "Logistics":
      user_message_logistics.push(body);
      user_message_answers_logistics.push(
        responses[randomInt(0, responses.length - 1)]
      );
      break;

    case "About the Hackathon":
      user_message_about.push(body);
      user_message_answers_about.push(
        responses[randomInt(0, responses.length - 1)]
      );
      break;
  } // switch
} // addToMessageArray

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
 * Generates alternating user messages and answers array so that the messages and answers will
 * display in an alternating fashion in the FAQ textarea. This is a helper function to the
 * generateMessage() function. Returns an array of alternating messages and answers so that the
 * generateMessage() function can iterate through the returned array and display it in the textarea.
 *
 * @param user_array the array containing the user messages
 * @param user_answer the array containing the responses or answers
 *
 * @returns {ReactElement} Returns the list of user messages and Byte (answers) in JSX.
 */
function generateMessageArray(
  user_array: string[],
  user_answer: string[]
): ReactElement[] {
  let message: ReactElement[] = [];

  for (let i = 0; i < user_array.length; i++) {
    message.push(
      <li className={styles.questions}>
        <span className={styles.faq}>User: </span>
        {user_array[i]}
      </li>
    );
    message.push(
      <li className={styles.questions}>
        <span className={styles.byte}>Byte: </span>
        {user_answer[i % user_answer.length]}
      </li>
    );
  } // for

  return message;
}

/**
 * Generate a random number in between the ranges of min and max. Inclusive.
 *
 * @param min The lower range
 * @param max The upper range
 * @returns A random number between min and max inclusive.
 */
function randomInt(min: number, max: number): number {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
} // randomInt

/**
 * This function calls the generateFAQ() function to display all the faqs
 * in the chatbox. This function is being exported to Window.tsx.
 *
 * @returns {ReactElement} Returns the faq container chatbox.
 */
function faqWindow(): ReactElement {
  var type = "COVID";

  return (
    <>
      <div className={styles.faqContainer}>{CurrentTopic()}</div>
    </>
  );
}

export default FAQ;
