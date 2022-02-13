import React from "react";
// import { useState } from "react";
// import { motion } from "framer-motion";
// import Button from '@material-ui/core/Button';
import Question from "./Questions";
// import {collapseVariants} from "./CommonVariants"
import styles from '../../styles/MobileFAQ.module.css'


function FAQ(props: any) {

  // const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section className={styles.faq_section} id="faq">
        <div className={styles.faq_container}>


          <div className={styles.faq_question_wrapper}>
            <Question
              question="Where will it be held this year?"
              answer="UGAHacks 7 will be held at MLC."
            />

            <Question
              question="How much will it cost to sign up?"
              answer="Nothing! The entire event and its amazing perks are free for all participants, including meals and snacks to keep you powered throughout the weekend, as well as workshops to help you get started and sharpen your hacking skills."
            />

            <Question
              question="Can I apply for travel reimbursements?"
              answer="No, we will not be providing reimbursements for travel this year because the event will be held virtually."
            />

            <Question
            question="How do I access a virtual workshop?"
            answer="We'll announce the Google Meet link for workshops on Slack ahead of time."
            />

            <Question
              question="Can I start working on my project before the event?"
              answer="No. All UGAHacks projects must begin at the hackathon. You are not permitted to begin a hackathon project before this event. Feel free to bring ideas, but no code!"
            />

            <Question
              question="Who can sign up?"
              answer="All university students! We welcome all undergraduates and graduate students of all skill levels to attend. Professionals and other guests are welcome to attend as mentors or volunteers."
            />

            <Question
              question="What if I don't have a team or idea?"
              answer="Don't sweat it! You're free to join any existing team or form a new one when you get there. We'll also provide ample opportunities for hackers to meet each other and brainstorm some amazing ideas."
            />

            <Question
              question="What are the rules all attendees must abide by?"
              answer="UGAHacks will be following the MLH Code of Conduct. By participating in UGAHacks, you are agreeing to follow the Code of Conduct throughout the duration of the event."
              link="https://hackp.ac/coc"
              linktxt="Check out the MLH Code of Conduct"
            />
            <Question
              question="How many people can I have on my team?"
              answer="There is no hard limit, but we recommend teams be at most 4 people, as we only have prizes for 4 people per team."
            />

            <Question
              question="Who do I reach out to if I have more questions?"
              answer="Reach out to hello@ugahacks.com and we'll be happy to answer it!"
            />

            <Question
              question="Can I volunteer/mentor at UGAHacks?"
              answer="We love your enthusiasm! Volunteers and mentors can apply via the registration form above! If you have any questions regarding the position, please contact us at hello@ugahacks.com - Be sure to mention the specific position in the subject of the email. See you at the event!"
            />

          </div>
        </div>

      </section>
    </>

  );
}

export default FAQ;
