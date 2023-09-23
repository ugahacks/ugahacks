import React from "react";
import styles from "../../styles/About.module.css";

function About() {
  return (
    <section className={styles.body}>
      <img
        className={styles.guppies}
        src="/graphics/guppies.png"
        alt="fish in ocean"
      />
      <img
        className={styles.flatCoral_left}
        src="/graphics/flatCoral_left.png"
        alt="flat coral ocean"
      />
      <img
        className={styles.flatCoral_right1}
        src="/graphics/flatCoral_right.png"
        alt="flat coral ocean"
      />
      <img
        className={styles.flatCoral_right2}
        src="/graphics/flatCoral_right.png"
        alt="flat coral ocean"
      />
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
            <stop stopColor="#1196D9" />
            <stop offset="0.331593" stopColor="#54C6FF" />
            <stop offset="1" stopColor="#42EDDE" />
          </linearGradient>
        </svg>
      </div>
      <div className={styles.sb1}></div>
      <div className={styles.sb2}></div>
      <div className={styles.sb3}></div>
      <div className={styles.sb4}></div>
      <div className={styles.sb5}></div>
      <div className={styles.sb6}></div>
      <div className={styles.sb7}></div>
      <div className={styles.sb8}></div>
      <div className={styles.about_text}>
        <h2 className={styles.about_header}>What is a Makeathon?</h2>
        <p>
          The UGAHacks Makeathon is a brand new event from our team. This year
          we are focusing on encouraging sustainability initiatives from our
          hackers with a product-focused event. With various workshops,
          challenges, and talks we hope to inspire hackers to create projects
          that are designed to solve the world&apos;s most pressing
          sustainability needs in just 24 hours!
        </p>
        <h2 className={styles.tool_header}>The tools you&apos;ll need:</h2>
        <div className={styles.tool_rack}>
          <figure className={styles.tool}>
            <img src="icons/aboutIcons/laptop.svg" alt="Laptop" height="150" />
            <figcaption>Laptop</figcaption>
          </figure>
          <figure className={styles.tool}>
            <img src="icons/aboutIcons/phone.svg" alt="Phone" height="150" />
            <figcaption>Phone</figcaption>
          </figure>
          <figure className={styles.tool}>
            <img
              src="icons/aboutIcons/charger.svg"
              alt="Charger"
              height="150"
            />
            <figcaption>Chargers</figcaption>
          </figure>
          <figure className={styles.tool}>
            <img src="icons/aboutIcons/slack.svg" alt="Slack" height="150" />
            <figcaption>Slack</figcaption>
          </figure>
        </div>
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
