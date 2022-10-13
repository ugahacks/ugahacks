import React, { ReactElement } from "react";
import Button from "@material-ui/core/Button";
import Question from "./Questions";
// import Image from 'next/image'

const covidByte: string = "/icons/FAQImages/images/covidbyte-01.svg";

function CovidFAQ(): ReactElement {
  // const [isOpen, setIsOpen] = useState(false);
  const COVID_LEARN_MORE: string = "Read more about our COVID-19 guidelines";

  return (
    <>
      <section className="section covid-faq-section" id="covidfaq">
        <div className="covid-container">
          <div className="covid-faq-container">
            <h1>Covid FAQ</h1>
            <div className="faq-question-wrapper">
              <Question
                question="Will masks be required at UGAHacks 6?"
                answer="Yes, masks will be required throughout the event."
              />

              <Question
                question="Will I still be able to hangout with my team and friends safely?"
                answer="Yes, there will be safe socially distanced areas where you can meet up with your team to work and to eat."
              />

              <Question
                question="Will I still be able to sleep at the venue for UGAHacks?"
                answer="This year UGAHacks will not be providing sleeping areas at the venue."
              />

              <Question
                question="How do I access a virtual workshop?"
                answer="There will be a page that lists links for workshops. This page will be easily accessible on MyUGAHacks!"
              />

              <Question
                question="How will we help ensure the safety of participants?"
                answer="Groups will be how participants are split up in order to prevent overcrowding during different events during our event."
              />

              <Question
                question="How will we maintain social distance guidelines?"
                answer="Groups will be called alphabetically via Discord to check-in once check-in starts. If the group after your assigned group is called, you will need to check-in after all other groups are called."
              />
            </div>
            <Button
              className="show-more-black"
              variant="contained"
              size="large"
              id="show-more"
              href="https://blog.ugahacks.com/full/8/"
            >
              {COVID_LEARN_MORE}
            </Button>
          </div>
          <img className="covid-byte" alt="" src={covidByte} />
        </div>
      </section>
    </>
  );
}

export default CovidFAQ;

/*
<button className="show-more" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? 'Show Less' : 'Show More'}
              </button>

              */
