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

type questionType = {
  question: string;
  link: string;
};

type answerType = {
  answer: string;
  linkName: string;
};

// Sign up link
const signUpLink: string =
  "https://ugeorgia.ca1.qualtrics.com/jfe/form/SV_82Gn6acN70D0wg6";

// Find a team link
const findTeamLink: string =
  "https://docs.google.com/forms/d/e/1FAIpQLSdKhUZIYNIcgT5BKmExX1B6pId7kFmewxn9_cj5tb1kGm1ReQ/viewform";

// MLH Code of Conduct link
const MLHLink: string = "https://static.mlh.io/docs/mlh-code-of-conduct.pdf";

// Create an array of Categories that will be accessed by the option HTML tag
const categories: string[] = [
  "About the Event",
  "Team",
  "Registration",
  "Virtual",
];

// Idea is to maintain a log of message for each topic, and the responses array will hold all the possible response to user questions
// Message array
const user_message_about: string[] = [];

// Message array
const user_message_team: string[] = [];

// Message array
const user_message_register: string[] = [];

const user_message_virtual: string[] = [];

// Response to choose from
const responses: string[] = [
  "Stay hydrated. This is a threat.",
  "We've been trying to reach you about your car's extended warranty",
  "Something funny",
];

// Response to user message array
const user_message_answers_about: string[] = [];

// Response to user message array
const user_message_answers_team: string[] = [];

// Response to user message array
const user_message_answers_register: string[] = [];

const user_message_answers_virtual: string[] = [];

// Question and answer arrays for each topic, add your questions and answers into the corresponding topic arrays
const questions_about: questionType[] = [
  { question: "What time should I get to the hackathon?", link: "" },
  { question: "Do I have to go to all of the events?", link: "" },
  {
    question: "Do I have to stay the entire duration of the hackathon?",
    link: "",
  },
  { question: "What are the rules attendees must follow?", link: MLHLink },
];

const answers_about: answerType[] = [
  {
    answer: "On Friday, check-in opens at 5pm. Tate Free Parking opens at 6.",
    linkName: "",
  },
  {
    answer:
      "You can pick and choose which workshops, events, and ceremonies you attend, but we highly encourage you to make the most out of your hackathon experience by attending most.",
    linkName: "",
  },
  {
    answer:
      "You are not obligated to sleep at the hackathon, and can leave and go as you would like.",
    linkName: "",
  },
  {
    answer:
      "UGAHacks will be following the MLH Code of Conduct. By participating in UGAHacks, you are agreeing to follow the Code of Conduct throughout the duration of the event.",
    linkName: "MLH Code of Conduct",
  },
];

const questions_team: questionType[] = [
  { question: "What if I don't have a team or an idea!?", link: findTeamLink },
  { question: "How many people can I have on my team?", link: "" },
];

const answers_team: answerType[] = [
  {
    answer:
      "Don't sweat it! You're free to join any existing team or form a new one when you get there. We'll also provide ample opportunities for hackers to meet each other and brainstorm some amazing ideas.\n" +
      "If you're looking for a team, here's a link to find one: Find Team",
    linkName: "Find Team",
  },
  {
    answer:
      "There is no hard limit, but we recommend teams be at most 4 people, as we only have prizes for 4 people per team.",
    linkName: "",
  },
];

const questions_registration: questionType[] = [
  { question: "Where can I sign up?", link: signUpLink },
  { question: "Who can sign up?", link: "" },
  { question: "Does it cost to sign up?", link: "" },
  { question: "Can I apply for travel reimbursements?", link: "" },
];

const answers_registration: answerType[] = [
  {
    answer: "You can sign up through this link",
    linkName: "Click Here to Register!",
  },
  {
    answer:
      "All university students and those who are within one year post graduation! We welcome all undergraduates and graduate students of all skill levels to attend. Professionals and other guests are welcome to attend as mentors or volunteers.",
    linkName: "",
  },
  {
    answer:
      "Nope! The entire event and its amazing perks are free for all participants, including meals and snacks to keep you powered throughout the weekend, as well as workshops to help you get started and sharpen your hacking skills.",
    linkName: "",
  },
  {
    answer: "No, we will not be providing reimbursements for travel this year.",
    linkName: "",
  },
];

const questions_virtual: questionType[] = [
  { question: "Is the hackathon virtual or hybrid?", link: "" },
  { question: "How do I access a virtual workshop?", link: "" },
];

const answers_virtual: answerType[] = [
  {
    answer:
      "The hackathon will be hybrid this year. Your acceptance later will clearly state whether you will be in-person or virtual.\n" +
      "If you are attending in person, it will be a decentralized event. So, we will have two locations MLC and Studio 225.",
    linkName: "",
  },
  {
    answer: "We'll announce the link for workshops on Slack ahead of time.",
    linkName: "",
  },
];

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
      <label className={styles.topic}>Categories: </label>
      <select value={topic} onChange={inputHandler} className={styles.dropdown}>
        <option value={"About"}>{categories[0]}</option>
        <option value={"Team"}>{categories[1]}</option>
        <option value={"Registration"}>{categories[2]}</option>
        <option value={"Virtual"}>{categories[3]}</option>
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
 * topic for the FAQ. More Categories can be added to the Categories array and CurrentTopic()
 * functional component.
 * Additionally, chat box will update with the user sending messages.
 *
 * @return {ReactElement} Returns a <ul> containing <li> of questions and answers.
 */
function generateFAQ(type: string): ReactElement {
  let faq: ReactElement[] = [];
  let message: ReactElement[] = generateMessage(type);

  switch (type) {
    case "About":
      faq = generateQAArray(questions_about, answers_about);
      break;
    case "Team":
      faq = generateQAArray(questions_team, answers_team);
      break;
    case "Registration":
      faq = generateQAArray(questions_registration, answers_registration);
      break;
    case "Virtual":
      faq = generateQAArray(questions_virtual, answers_virtual);
      break;
    default:
      faq = generateQAArray(questions_about, answers_about);
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
 * topic for the FAQ. More Categories can be added to the Categories array and CurrentTopic()
 * functional component.
 * Additionally, chat box will update with the user sending messages and will stay
 * within that particular topic. So messages will not persist across all Categories.
 *
 * @return {ReactElement} Returns a <ul> containing <li> of questions and answers.
 */
function generateMessage(type: string): ReactElement[] {
  let message: ReactElement[] = [];

  switch (type) {
    case "About":
      message = generateMessageArray(
        user_message_about,
        user_message_answers_about
      );
      break;

    case "Team":
      message = generateMessageArray(
        user_message_team,
        user_message_answers_team
      );
      break;

    case "Registration":
      message = generateMessageArray(
        user_message_register,
        user_message_answers_register
      );
      break;

    case "Virtual":
      message = generateMessageArray(
        user_message_virtual,
        user_message_answers_virtual
      );
      break;

    default:
      message = generateMessageArray(
        user_message_about,
        user_message_answers_about
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
    case "About":
      user_message_about.push(body);
      user_message_answers_about.push(
        responses[randomInt(0, responses.length - 1)]
      );
      break;

    case "Team":
      user_message_team.push(body);
      user_message_answers_team.push(
        responses[randomInt(0, responses.length - 1)]
      );
      break;

    case "Registration":
      user_message_register.push(body);
      user_message_answers_register.push(
        responses[randomInt(0, responses.length - 1)]
      );
      break;

    case "Virtual":
      user_message_virtual.push(body);
      user_message_answers_virtual.push(
        responses[randomInt(0, responses.length - 1)]
      );
      break;

    default:
      user_message_about.push(body);
      user_message_answers_about.push(
        responses[randomInt(0, responses.length - 1)]
      );
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
  question_array: questionType[],
  answer_array: answerType[]
): ReactElement[] {
  let faq: ReactElement[] = [];

  for (let i = 0; i < question_array.length; i++) {
    if (answer_array[i]) {
      // Check if there is a link to display
      if (question_array[i].link) {
        faq.push(
          <li className={styles.questions}>
            <span className={styles.faq}>FAQ: </span>
            {question_array[i].question}
          </li>
        );
        faq.push(
          <li className={styles.answers}>
            <span className={styles.byte}>Byte: </span>
            {answer_array[i].answer}
          </li>
        );
        faq.push(
          <li className={styles.answers}>
            <span className={styles.byte}>Byte: </span>
            <a
              className={styles.link}
              href={question_array[i].link}
              target="_blank"
              rel="noreferrer"
            >
              {answer_array[i].linkName}
            </a>
          </li>
        );
      } else {
        faq.push(
          <li className={styles.questions}>
            <span className={styles.faq}>FAQ: </span>
            {question_array[i].question}
          </li>
        );
        faq.push(
          <li className={styles.answers}>
            <span className={styles.byte}>Byte: </span>
            {answer_array[i].answer}
          </li>
        );
      } // if
    } // for
  } // if

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
      <li className={styles.answers}>
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
  return (
    <>
      <div className={styles.faqContainer}>{CurrentTopic()}</div>
    </>
  );
}

export default FAQ;
