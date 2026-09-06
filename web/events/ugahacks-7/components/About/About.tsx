import { filterProps } from "framer-motion";
import React, { ReactElement } from "react";
import Window from "../Window";
import {motion, AnimatePresence} from 'framer-motion';
import { prependOnceListener } from "process";

const About = (props: any): ReactElement => {
  const AboutContent =
    "UGAHacks is an annual hackathon organized by fellow students at the University of Georgia in \
  Athens, Georgia. Hackathons are all about groups of dedicated people coming together to create something amazing in \
  an epic 48-hour programming sleepover. Even though submitting a project is the main objective, that's not all there is. \
  We will have mentors, free food, video game competitions, workshops and more. There's even a workshop at the event for \
  anyone that still needs to find some teammates!";
  return (
    // <AnimatePresence exitBeforeEnter={true}>
    //   <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}
    //     transition={{ duration: 0.5 }} exit={{ scale: 0 }}>
        <Window
          windowTitle="About"
          windowType="browser"
          windowBodyText={AboutContent}
          windowHeading="What is UGAHacks?"
          showTopBarButtons
          width="40vw"
          height="auto"
          stateChanger = {props.stateChanger}
        />
    //   </motion.div>
    // </AnimatePresence>
  );
};

export default About;
