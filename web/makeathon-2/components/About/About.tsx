import React from "react";
import styles from "../../styles/About.module.css";

function About() {
  return (
    <section className={styles.body}>
      <div className={styles.custom_shape_divider_top_1694365385}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            stroke="#BFFDFF"
            strokeWidth="5"
            fill="url(#paint0_linear_3_7)"
            className={styles.shape_fill}
          ></path>
          <linearGradient
            id="paint0_linear_3_7"
            x1="720"
            y1="10"
            x2="720"
            y2="159.127"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#1196D9" />
            <stop offset="0.331593" stop-color="#54C6FF" />
            <stop offset="1" stop-color="#42EDDE" />
          </linearGradient>
        </svg>
      </div>

      <div className={styles.custom_shape_divider_bottom_1694366369}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className={styles.shape_fill}
          ></path>
        </svg>
      </div>
    </section>
  );
}

export default About;
