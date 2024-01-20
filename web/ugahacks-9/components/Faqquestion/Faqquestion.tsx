// Faqquestion.tsx
import React from "react";

interface FaqQuestionProps {
  faq: {
    question: string;
    answer: string;
    open: boolean;
  };
  index: number;
  toggleFAQ: (index: number) => void;
}

const FaqQuestion: React.FC<FaqQuestionProps> = ({ faq, index, toggleFAQ }) => {
  return (
    <div className={`faq ${faq.open ? "open" : ""}`} onClick={() => toggleFAQ(index)}>
      <div className="faq-question">{faq.question}</div>
      {faq.open && <div className="faq-answer">{faq.answer}</div>}
    </div>
  );
};

export default FaqQuestion;
