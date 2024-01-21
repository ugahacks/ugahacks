// Faqquestion.tsx
import React from "react";
import styles from "@/styles/Faqquestion.module.css";
import faq_bubble from "@/public/faq_question_bubble.png";
import faq_ans_bubble from "@/public/faq_answer_bubble.png";

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
      <div className={styles.faq_question}><p>{faq.question}</p></div>
      {faq.open && <div className={styles.faq_answer}><p>{faq.answer}</p></div>}
    </div>
  );
};

export default FaqQuestion;
