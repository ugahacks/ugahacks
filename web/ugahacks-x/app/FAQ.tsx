"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import './globals.css';

interface Question {
  question: string;
  answer: string;
}

interface FAQProps {
  questions: Question[];
}

const FAQ: React.FC<FAQProps> = ({ questions = [] }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      {questions.length > 0 ? (
        questions.map((question, index) => (
          <div key={index} className="faq-item">
            <div
              className={`faq-question ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggleQuestion(index)}
            >
              <p className="question-text">{question.question}</p>
              <img src="/Vector.png" className="vector" alt="Vector Icon" />
            </div>
            {activeIndex === index && (
              <div className="faq-answer">
                <img src="/papercutout.png" alt="cutout" className="cutout-image sm:translate-y-10 md:translate-y-5" />
                <p>{question.answer}</p>
              </div>
            )}
          </div>
        ))
      ) : (
        <p>No questions available</p>
      )}
    </div>
  );
};

export default FAQ;
