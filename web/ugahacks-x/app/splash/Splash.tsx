'use client'
import { useEffect, useState } from "react";
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
    answer: 'Currently we do not provide travel reimbursements.',
  },
  {
    question: 'Can I start on my project before the event?',
    answer: 'No. All UGAHacks projects must begin at the hackathon. You are not permitted to begin a hackathon project before this event. Feel free to bring ideas, but no code!',
  },
  {
    question: 'Who can sign up?',
    answer: 'All university students! We welcome all undergraduates and graduate students of all skill levels to attend. Professionals and other guests are welcome to attend as mentors or volunteers.',
  },
  {
    question: 'How do I receive EL credit?',
    answer: 'Students who attend UGAHacks X are eligible to receive EL Credit. To receive credit, please follow the instructions outlined on el.ugahacks.com.',
  },
  {
    question: 'What if I don\'t have a team or idea?',
    answer: 'Don\'t sweat it! You\'re free to join any existing team or form a new one when you get there. We\'ll also provide ample opportunities for hackers to meet each other and brainstorm some amazing ideas.',
  },
  {
    question: 'What are the rules all attendees much abide by?',
    answer: 'UGAHacks will be following the MLH Code of Conduct. By participating in UGAHacks, you are agreeing to follow the Code of Conduct throughout the duration of the event.',
    coc: true,
  },
  {
    question: 'How many people can I have on my team?',
    answer: 'You can have up to 4 members.',
  },
  {
    question: 'If I have more questions?',
    answer: 'Reach out to hello@ugahacks.com and we\'ll be happy to answer it!',
  }
];



const Splash = () => {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setMobile(window.innerWidth <= 798);
    };

    // Run once on mount
    handleResize();

    // Listen for resize events
    window.addEventListener("resize", handleResize);

    // Cleanup listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  return (
    <div className="">
      <div className={styles.splashContainer}>
        <a style={{ alignSelf: "end", marginRight: "50px" }} target="blank" href="http://hackp.ac/coc"><img style={{ height: "100px", }} src="/2025Badges/mlh-trust-badge-2025-white.png"></img></a>
        <div className={styles.logoContainer}>
          <img
            className={styles.mainLogo}
            src="/UHX_Transparent_White 1.png"
            alt="UGA Hacks Logo"
          />
        </div>
        <div className={styles.locationAndDateText}>
          <div className="grid md:grid-cols-2 gap-4 items-center" style={{ fontFamily: "'Distortion Dos Analogue', sans-serif" }}>
            <p
              className="text-lg md:text-2xl font-bold">
              UGA MILLER <br /> LEARNING CENTER
            </p>
            <p className="text-lg md:text-2xl font-bold">FEBRUARY<br />7-9,<br />2025</p>
          </div>
        </div>
        <div className="inline-block my-4 py-2 px-2 py-1 border-4 border-white text-white font-bold text-lg tracking-wider rounded-ee-3xl rounded-ss-3xl hover:animate-pulse hover:text-black transition duration-300">
          <button >
            <a href="https://mybyte.ugahacks.com/" target="_blank" rel="noopener noreferrer" className={styles.registerButton}>
              REGISTER NOW
            </a>
          </button>

        </div>
        <div className="mt-100" id="about">
        </div>
      </div>
      {/* EVERYTHING OUTSIDE HERE IS OUTSIDE OF THE BACKGROUND IMAGE */}
      <p className={mobile ? "top-full text-black transform translate-x-1/4 translate-y-1 absolute text-4xl font-distortion" : "hidden"}>What Is <br></br>UGA Hacks?</p>
      <p className={mobile ? "top-full text-black transform bg-pink-300 translate-x-2 translate-y-20 p-2 absolute text-xl " : "hidden"}>
        UGAHacks is an annual hackathon organized by fellow students at the University of Georgia in Athens, Georgia. Hackathons are all about groups of
        dedicated people coming together to create something amazing in an epic 48-hour programming sleepover. <br></br><br></br>
        Even though submitting a project is the main objective, that&apos;s not all there is. We&apos;ll have mentors, free food, video game competitions, workshops and more. There&apos;s even a workshop at the event for anyone that still needs to find some teammates!</p>

      <section id="faq" className={styles.headerTitle}>
        <h1 className="text-6xl p-8" style={{ fontFamily: "'Distortion Dos Analogue', sans-serif" }}>FAQ</h1>
        <FAQ questions={questions} />
      </section>
    </div >

  );
};

export default Splash;
