import React, { ReactElement } from "react";
import { motion } from "framer-motion";

const laptop: string = "/icons/AboutImages/images/laptop.svg";
const charger: string = "/icons/AboutImages/images/charger.svg";
const phone: string = "/icons/AboutImages/images/phone.svg";
const slack: string = "/icons/AboutImages/images/slack.svg";

interface AboutProps {
  image: string;
  alt: string;
  tool: string;
}

const toolVariants = {
  hover: {
    scale: 1.1,
  },
};

function Tool(props: AboutProps): ReactElement {
  return (
    <div className="tool">
      <motion.img
        src={props.image}
        alt={props.alt}
        variants={toolVariants}
        whileHover="hover"
      />
      <h3>{props.tool}</h3>
    </div>
  );
}

function About(): ReactElement {
  return (
    <>
      <section className="section about" id="about">
        <div className="section-text about-text">
          <span className="text-background">
            <h2>What is a Makeathon?</h2>
            <p>
              The UGAHacks Makeathon is a brand new event from our team. This
              year we are focusing on encouraging sustainability initiatives
              from our hackers with a product-focused event. With various
              workshops, challenges, and talks we hope to inspire hackers to
              create projects that are designed to solve the world’s most
              pressing sustainability needs in just 24 hours!
            </p>
            <p>Come make, create, all while being sustainable!</p>
            <h2>The tools you&apos;ll need:</h2>
            <div className="tool-rack">
              <Tool image={laptop} tool="Laptop" alt="Laptop" />
              <Tool image={phone} tool="Phone" alt="A Phone" />
              <Tool image={charger} tool="Chargers" alt="Chargers" />
              <Tool image={slack} tool="Slack" alt="Slack" />
            </div>
          </span>
        </div>
      </section>
    </>
  );
}

export default About;
