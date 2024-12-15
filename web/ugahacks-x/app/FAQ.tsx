"use client";
import React, { useState } from 'react';
import './globals.css';


const FAQ = ({ questions }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      {questions.map((question, index) => (
        <div key={index} className="faq-item">
          <div
            className={`faq-question ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggleQuestion(index)}
          >
            <p className="question-text">{question.question}</p>
            <img src="/Vector.png" className="vector"></img>
          </div>
          {activeIndex === index && (
            <div className="faq-answer">
              <img src="/papercutout.png" alt="cutout" className="cutout-image" onError={(e) => console.error('Image load error:', e)}/>
              <p>{question.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
