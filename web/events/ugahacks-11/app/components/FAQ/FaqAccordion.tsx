import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import * as React from "react";

const faqData = [
  { question: "Where will it be held this year?", answer: "UGAHacks 11 will be an in-person event held at Miller Learning Center on the University of Georgia campus." },
  { question: "Can I apply for travel reimbursements?", answer: "Currently we do not provide travel reimbursements. :(" },
  { question: "Can I start on my project before the event?", answer: "No. All UGAHacks projects must begin at the hackathon. You are not permitted to begin a hackathon project before this event. Feel free to bring ideas, but no code!" },
  { question: "Who can sign up?", answer: "All university students! We welcome all undergraduates and graduate students of all skill levels to attend. Professionals and other guests are welcome to attend as mentors or volunteers." },
  { question: "How do I receive EL credit?", answer: "Students who attend UGAHacks 11 are eligible to receive EL Credit. To receive credit, please follow the instructions outlined on el.ugahacks.com." },
  { question: "What if I don't have a team or idea?", answer: "Don't sweat it! You're free to join any existing team or form a new one when you get there. We'll also provide ample opportunities for hackers to meet each other and brainstorm some amazing ideas." },
  { question: "What are the rules all attendees must abide by?", answer: "UGAHacks will be following the MLH Code of Conduct. By participating in UGAHacks, you are agreeing to follow the Code of Conduct throughout the duration of the event." },
  { question: "How many people can I have on my team?", answer: "There is no hard limit, but we recommend teams be at most 4 people, as we only have prizes for 4 people per team." },
  { question: "If I have more questions?", answer: "Reach out to hello@ugahacks.com and we'll be happy to answer it!" },
];
// accordion should be on right side, margin botton 2px between accordions, no border radius
export default function FaqAccordion() {
  return (
    <div className="w-full flex justify-end">
      <div className="w-full max-w-2xl pr-0 sm:pr-4 md:pr-8 flex flex-col items-end">
        {faqData.map((faq, index) => (
          <Accordion key={index} style={{ borderRadius: 0 }} className="w-full mb-2">
            <AccordionSummary expandIcon={<ExpandMoreIcon />} className="min-h-[72px]">
              <Typography className="w-full text-start text-lg sm:text-xl md:text-2xl font-amarante font-bold">
                {faq.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails className="min-h-[48px]">
              <Typography className="w-full text-start text-base sm:text-lg md:text-xl font-amarante">
                {faq.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
  );
}