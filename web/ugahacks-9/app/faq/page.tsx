"use client";
import React, { useState } from "react";
import Navbar from "@/components/Navbar/Navbar";
import styles from "../../styles/FAQ.module.css";
import normal_image1_1 from "@/public/faq_normal_image1-1.png";
import normal_image1_2 from "@/public/faq_normal_image1-2.png";
import normal_image1_3 from "@/public/faq_normal_image1-3.png";
import normal_image2_1 from "@/public/faq_normal_image2-1.png";
import byte_image from "@/public/byte faq 1.png";
import FaqQuestion from "@/components/Faqquestion/Faqquestion";

function FAQ() {
  const [faqs, setFaqs] = useState([
    {
      question: "QUESTION 1",
      answer:
        "Answer to question 1...",
      open: false,
    },
    {
      question: "QUESTION 2",
      answer: "Answer to question 2...",
      open: false,
    },
    {
      question: "QUESTION 3",
      answer: "Answer to question 3...",
      open: false,
    },
  ]);

  // Function to toggle the open/close state of a specific FAQ item
  const toggleFAQ = (index: number) => {
    // Update the state
    setFaqs((prevFaqs) =>
      // Create a new array of FAQ items based on the previous state
      prevFaqs.map((faq, i) => ({
        ...faq,
        // Toggle the open state of the clicked FAQ item and close others
        // If the current FAQ item's index (i) matches the provided index, it toggles the open state (!faq.open).
        // Items whose indices do not match, open is set to false. This ensures that only one FAQ can be opened at a time
        open: i === index ? !faq.open : false,
      }))
    );
  };

  return (
    <div className="main">
      <Navbar />
      <div className={styles.content}>
        <div className={styles.left_images}>
          <div className={styles.faq_title}>
            <h1>FAQ</h1>
          </div>
          <img className={styles.normal_image1} src={normal_image1_1.src} alt="" />
          <img className={styles.normal_image1} src={normal_image1_2.src} alt="" />
          <img className={styles.normal_image1} src={normal_image1_3.src} alt="" />
        </div>
        <div className={styles.questions}>
          <div className={styles.faqs}>
            {faqs.map((faq, index) => (
              <FaqQuestion faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
            ))}
          </div>
        </div>
        <div className={styles.right_images}>
          <img className={styles.normal_image2} src={normal_image2_1.src} alt="" />
          <img className={styles.byte_image} src={byte_image.src} alt="" />
        </div>
      </div>
    </div>
  );
}

export default FAQ;
