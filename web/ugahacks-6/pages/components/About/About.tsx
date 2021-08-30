import React, { ReactElement } from 'react';
// import './About.module.css';
//import laptop from '/icons/AboutImages/images/laptop.svg';
// import charger from '../../../public/icons/AboutImages/images/charger.svg';
// import phone from '../../../public/icons/AboutImages/images/phone.svg';
// // import sleepingBag from './images/sleepingbag.svg';
// import slack from '../../../public/icons/AboutImages/images/slack.svg';
import { motion } from "framer-motion";

const laptop: string = "/icons/AboutImages/images/laptop.svg";
const charger: string = "/icons/AboutImages/images/charger.svg";
const phone: string = "/icons/AboutImages/images/phone.svg";
const slack: string = "/icons/AboutImages/images/slack.svg";

interface AboutProps {
  image: string,
  alt: string,
  tool: string,
}

const toolVariants = {
  hover: {
    scale: 1.1,
  }
}

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
          <h2>What is UGAHacks?</h2>
          <p>UGAHacks is an annual hackathon organized by fellow students at the University of Georgia in Athens, Georgia. Hackathons are all about groups of dedicated people coming together to create something amazing in an epic 48-hour programming
            sleepover.</p>
          <p>Even though submitting a project is the main objective, that&apos;s not all there is. We&apos;ll have mentors, free food, video game competitions, workshops and more. There&apos;s even a workshop at the event for anyone that still needs to find some
            teammates!</p>
          <p>So come and join us to build the future!</p>
          <h2>The tools you&apos;ll need:</h2>
          <div className="tool-rack">
            <Tool image={laptop} tool="Laptop" alt="Laptop"/>
            <Tool image={phone} tool="Phone" alt="A Phone"/>
            <Tool image={slack} tool="Slack" alt="Slack"/>
            <Tool image={charger} tool="Chargers" alt="Chargers"/>

          </div>
        </div>


      </section>
    </>

  );
}

export default About;
