import React from "react";
import Image from "next/image";
import styles from "../../styles/Splash.module.css";
import FAQ from "../FAQ";

// Questions for FAQ
const questions = [
  {
    question: 'Where will it be held this year?',
    answer: 'UGAHacks X will be an IN-PERSON event where participants can attend only in-person at MLC Building on UGA Campus!',
  },
  {
    question: 'How much will it cost to sign up?',
    answer: 'Nothing! The entire event and its amazing perks are free for all participants, including meals and snacks to keep you powered throughout the weekend, as well as workshops to help you get started and sharpen your hacking skills.',
  },
  {
    question: 'Can I apply for travel reimbursements?',
    answer: 'Currently we do not provide travel reimbursements but this can change in the future!',
  },
  {
    question: 'Can I start working on my project before the event?',
    answer: 'No. All UGAHacks projects must begin at the hackathon. You are not permitted to begin a hackathon project before this event. Feel free to bring ideas, but no code!',
  },
  {
    question: 'Who can sign up?',
    answer: 'All university students! We welcome all undergraduates and graduate students of all skill levels to attend. Professionals and other guests are welcome to attend as mentors or volunteers.',
  },
  {
    question: 'How do I receive EL credit?',
    answer: 'Students who attend UGAHacks 9 are eligible to receive EL Credit. To receive credit, please follow the instructions outlined on el.ugahacks.com.',
  },
  {
    question: 'What if I don\'t have a team or idea?',
    answer: 'Don\'t sweat it! You\'re free to join any existing team or form a new one when you get there. We\'ll also provide ample opportunities for hackers to meet each other and brainstorm some amazing ideas.',
  },
  {
    question: 'What are the rules all attendees much abide by?',
    answer: 'UGAHacks will be following the MLH Code of Conduct. By participating in UGAHacks, you are agreeing to follow the Code of Conduct throughout the duration of the event. Check out the MLH Code of Conduct.',
  },
  {
    question: 'How many people can I have on my team?',
    answer: 'You can have up to 4 members.',
  },
  {
    question: 'Who do I reach out to if I have more questions?',
    answer: 'Reach out to hello@ugahacks.com and we\'ll be happy to answer it!',
  }
];

const Splash = () => {
  return (
    <div className={styles.splashContainer}>
      <a style={{alignSelf: "end", marginRight: "50px"}} target="blank" href="http://hackp.ac/coc"><img style={{height: "200px", }}src="/2025Badges/mlh-trust-badge-2025-white.png"></img></a>
      <div className={styles.logoContainer}>
        <img
          className={styles.mainLogo}
          src="/UHX_Transparent_White 1.png"
          alt="UGA Hacks Logo"
        />
      </div>
      <div className={styles.rockstarText}>
        <h2>Unleash your inner rockstar</h2>
      </div>
      <div className={styles.locationAndDateText}>
        <p>02/07/25 - 02/09/25</p>
        <p>Zell B. Miller Learning Center Athens, GA</p>
      </div>
      <button className={styles.registerButton}>
      <a href="https://mybyte.ugahacks.com/" target="_blank" rel="noopener noreferrer" className={styles.registerLink}>
          Register Now
        </a>
      </button>
      <button style={{fontWeight: "bold",  backgroundColor: "#f472b6", padding: "5px", borderRadius: "5px", marginTop: "10px"}}>
      <a target="blank" href="http://hackp.ac/coc">MLH Code of Conduct</a>
      </button>
    </div>

  //FAQ component tag
  // <FAQ questions={questions} />
  );
};

export default Splash;
