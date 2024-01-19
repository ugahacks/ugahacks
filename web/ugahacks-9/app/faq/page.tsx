import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import styles from "../../styles/FAQ.module.css";
import normal_image1_1 from "@/public/faq_normal_image1-1.png";
import normal_image1_2 from "@/public/faq_normal_image1-2.png";
import normal_image1_3 from "@/public/faq_normal_image1-3.png";
import normal_image2_1 from "@/public/faq_normal_image2-1.png";
import byte_image from "@/public/byte faq 1.png";
function FAQ() {
  return (
    <div className="main">
      <Navbar />
      <div className={styles.content}>
        <div className={styles.left_images}>
          <div className={styles.faq_title}><h1>FAQ</h1></div>
          <img className={styles.normal_image1} src={normal_image1_1.src}></img>
          <img className={styles.normal_image1} src={normal_image1_2.src}></img>
          <img className={styles.normal_image1} src={normal_image1_3.src} ></img>
        </div>
        <div className={styles.questions}>
        questions
        </div>
        <div className={styles.right_images}>
          <img className={styles.normal_image2} src={normal_image2_1.src}></img>
          <img className={styles.byte_image} src={byte_image.src} ></img>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
