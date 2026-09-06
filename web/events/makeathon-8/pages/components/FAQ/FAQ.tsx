import React, { ReactElement } from "react";
import Question from "./Questions";

function FAQ(): ReactElement {
  // const [isOpen, setIsOpen] = useState(false);

  return (
    <>
<section className="section faq-section" id="faq">
        <div className="faq-container">
          <h1 className="title-text">FAQ</h1>

          <div className="faq-question-wrapper">
            <Question
              question="Where will the Makeathon be held?"
              answer="Our first annual Makeathon will be held in-person at the Driftmier Engineering Center, 597 DW Brooks Drive Athens, GA, 30602!"
            />

            <Question
              question="How much will the event cost?"
              answer="Nothing! The entire event and its amazing perks are free for all participants, including meals and snacks to keep you powered throughout the weekend, as well as workshops to help you get started and sharpen your hacking skills."
            />

            <Question
              question="Can I start working on my project before the event?"
              answer="No. All UGAHacks projects must begin at the event. You are not permitted to begin a project before this event. Feel free to bring ideas, but no code or design files!"
            />

            <Question
              question="What if I don't have a team or idea?"
              answer="Don't sweat it! You're free to join an existing team or form a new one when you get there. We'll also provide ample opportunities for makers to meet each other and brainstorm some amazing ideas."
            />

            <Question
              question="What are the rules all attendees must abide by?"
              answer="UGAHacks will be following the MLH Code of Conduct. By participating in any UGAHacks event, you are agreeing to follow the Code of Conduct throughout the duration of the event."
              link="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
              linktxt="Check out the MLH Code of Conduct."
            />
            <Question
              question="How many people can I have on my team?"
              answer="There is a maximum size of 4 people - we encourage teaming up to learn from your peers and build something amazing!"
            />

            <Question
              question="Who do I reach out to if I have more questions?"
              answer="Reach out to hello@ugahacks.com and we'll be happy to answer it! Look for the [Organizer] tag in Slack, as well as our live event information at"
              link="https://makepacket.ugahacks.com"
              linktxt="makepacket.ugahacks.com"
            />

          </div>
        </div>
      </section>
    </>
  );
}

export default FAQ;

/*
            <button className="show-more" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? 'Show Less' : 'Show More'}
            </button>*/
