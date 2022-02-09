import React, { ReactElement } from "react";
import Window from "../Window";

const About = (): ReactElement => {
  const AboutContent =
    "UGAHacks is an annual hackathon organized by fellow students at the University of Georgia in \
  Athens, Georgia. Hackathons are all about groups of dedicated people coming together to create something amazing in \
  an epic 48-hour programming sleepover. Even though submitting a project is the main objective, that's not all there is. \
  We will have mentors, free food, video game competitions, workshops and more. There's even a workshop at the event for \
  anyone that still needs to find some teammates!";
  return (
    <Window
      windowTitle="About"
      windowType="browser"
      windowBodyText={AboutContent}
      windowHeading="What is UGAHacks?"
      showTopBarButtons
      width="50vh"
      height="auto"
    />
  );
};

export default About;
