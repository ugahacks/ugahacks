/* eslint-disable react/jsx-key */
import React, { ReactElement } from "react";

import MediaCard from "./MediaCard";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import IconButton from "@mui/material/IconButton";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const lightswitch: string = "/icons/HallOfFameImages/media/lightswitch.jpg";
const esports: string = "/icons/HallOfFameImages/media/esports.png";
const jasmine: string = "/icons/HallOfFameImages/media/jasmine.png";
const shareStead: string = "/icons/HallOfFameImages/media/shareStead.png";
const cryptoClerk: string = "/icons/HallOfFameImages/media/cryptoClerk.png";
const cryptoClerkNCR: string =
  "/icons/HallOfFameImages/media/cryptoClerkNCR.png";
const posRec: string = "/icons/HallOfFameImages/media/POSRec.png";
const courseDawg: string = "/icons/HallOfFameImages/media/courseDawg.png";
const dawgConnect: string = "/icons/HallOfFameImages/media/dawgConnect.png";
const deSign: string = "/icons/HallOfFameImages/media/DeSign.png";
const spaceGo: string = "/icons/HallOfFameImages/media/spaceGo.png";
const freeFoodUGA: string = "/icons/HallOfFameImages/media/freeFoodUGA.png";
const pathFinder: string = "/icons/HallOfFameImages/media/pathFinder.png";
const goGetEmployed: string = "/icons/HallOfFameImages/media/goGetEmployed.png";
const styleSensei: string = "/icons/HallOfFameImages/media/styleSensei.png";
const courseMiner: string = "/icons/HallOfFameImages/media/courseMiner.png";
const dawgTreats: string = "/icons/HallOfFameImages/media/dawgTreats.png";
const byteDriver: string = "/icons/HallOfFameImages/media/byteDriver.png";
const bioLearn: string = "/icons/HallOfFameImages/media/bioLearn.png";

const firstArt: string = "/icons/HallOfFameImages/media/UGAHacksArt.png";
const secondArt: string = "/icons/HallOfFameImages/media/Hacks7SecondArt.png";
const thirdArt: string = "/icons/HallOfFameImages/media/UGAHACKSV.03.gif";

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 4 },
  2400: { items: 6 },
  2800: { items: 8 },
  3400: { items: 10 },
};

const overall_items: ReactElement[] = [
  <MediaCard
    teamImage={pathFinder}
    placement="Best Overall"
    teamName="Path Finder"
    link="https://devpost.com/software/path-finder-l1zg0x"
    buttonText="See on Devpost"
  />,
  <MediaCard
    teamImage={goGetEmployed}
    placement="Best Solo"
    teamName="GoGetEmployed"
    link="https://devpost.com/software/gogetemployed"
    buttonText="See on Devpost"
  />,
  <MediaCard
    teamImage={styleSensei}
    placement="Best First Time Hacker"
    teamName="Style Sensei"
    link="https://devpost.com/software/style-sensei"
    buttonText="See on Devpost"
  />,
  <MediaCard
    teamImage={courseMiner}
    placement="Best First Time Hacker"
    teamName="CourseMiner"
    link="https://devpost.com/software/courseminer"
    buttonText="See on Devpost"
  />,
  <MediaCard
    teamImage={shareStead}
    placement="Best Hardware Track"
    teamName="Share Stead"
    link="https://devpost.com/software/namegoeshere"
    buttonText="See on Devpost"
  />,
  <MediaCard
    teamImage={firstArt}
    placement="1st Place Art"
    teamName="Prateek Yadav"
    link={firstArt}
    buttonText="View Art"
  />,
  <MediaCard
    teamImage={secondArt}
    placement="2nd Place Art"
    teamName="Nnamdi Obichi"
    link={secondArt}
    buttonText="View Art"
  />,
  <MediaCard
    teamImage={thirdArt}
    placement="3rd Place Art"
    teamName="Prateek Yadav"
    link={thirdArt}
    buttonText="View Art"
  />,
  <MediaCard
    teamImage={esports}
    placement="[eSports] Best Gamers"
    teamName="UGA eSports"
    link={esports}
    buttonText="See Winners"
  />,
];

const category_items: ReactElement[] = [
  <MediaCard
    teamImage={styleSensei}
    placement="[NCR] Data Science Winner"
    teamName="Style Sensei"
    link="https://devpost.com/software/style-sensei"
    buttonText="See on Devpost"
  />,
  <MediaCard
    teamImage={posRec}
    placement="[NCR] Data Science Winner"
    teamName="Demand-Based POS Rec"
    link="https://devpost.com/software/max-and-abdu"
    buttonText="See on Devpost"
  />,
  <MediaCard
    teamImage={courseDawg}
    placement="[NCR] Eliminate the Friction"
    teamName="CourseDawg"
    link="https://devpost.com/software/coursedawg"
    buttonText="See on Devpost"
  />,
  <MediaCard
    teamImage={dawgConnect}
    placement="[NCR] Eliminate the Friction"
    teamName="DawgConnect"
    link="https://devpost.com/software/dawgconnect"
    buttonText="See on Devpost"
  />,
  <MediaCard
    teamImage={cryptoClerkNCR}
    placement="[NCR] Blockchain Tech"
    teamName="CryptoClerk"
    link="https://devpost.com/software/cryptoclerk"
    buttonText="See on Devpost"
  />,
  <MediaCard
    teamImage={deSign}
    placement="[NCR] Blockchain Tech"
    teamName="DeSign"
    link="https://devpost.com/software/design-7f1w6r"
    buttonText="See on Devpost"
  />,
  <MediaCard
    teamImage={spaceGo}
    placement="[NCR] Retail Gamification"
    teamName="spaceGO"
    link="https://devpost.com/software/spagego"
    buttonText="See on Devpost"
  />,
  <MediaCard
    teamImage={jasmine}
    placement="[BlackRock] 1st"
    teamName="Jasmine - Green, Grassroots Investing"
    link="https://devpost.com/software/pending-name"
    buttonText="See on Devpost"
  />,
  <MediaCard
    teamImage={lightswitch}
    placement="[BlackRock] 2nd"
    teamName="lightswitch"
    link="https://devpost.com/software/lightswitch"
    buttonText="See on Devpost"
  />,
  <MediaCard
    teamImage={cryptoClerk}
    placement="[Capital One] 1st"
    teamName="CryptoClerk"
    link="https://devpost.com/software/cryptoclerk"
    buttonText="See on Devpost"
  />,
  <MediaCard
    teamImage={cryptoClerk}
    placement="[TSYS] 1st"
    teamName="CryptoClerk"
    link="https://devpost.com/software/cryptoclerk"
    buttonText="See on Devpost"
  />,
  <MediaCard
    teamImage={shareStead}
    placement="[TSYS] 2nd"
    teamName="CryptoClerk"
    link="https://devpost.com/software/namegoeshere"
    buttonText="See on Devpost"
  />,
  <MediaCard
    teamImage={jasmine}
    placement="[Figma] 1st"
    teamName="Jasmine - Green, Grassroots Investing"
    link="https://devpost.com/software/pending-name"
    buttonText="See on Devpost"
  />,
  <MediaCard
    teamImage={freeFoodUGA}
    placement="[MLH] Best GCP Use"
    teamName="Free Food UGA"
    link="https://devpost.com/software/free-food-uga"
    buttonText="See on Devpost"
  />,
  <MediaCard
    teamImage={dawgTreats}
    placement="[MLH] Best Domain"
    teamName="DawgTreats"
    link="https://devpost.com/software/dawgtreats"
    buttonText="See on Devpost"
  />,
  <MediaCard
    teamImage={byteDriver}
    placement="[MLH] Creative GitHub"
    teamName="Byte Driver"
    link="https://devpost.com/software/byte-driver"
    buttonText="See on Devpost"
  />,
  <MediaCard
    teamImage={bioLearn}
    placement="[MLH] Best CI/CD"
    teamName="Biolearn"
    link="https://devpost.com/software/biolearn-awvgeb"
    buttonText="See on Devpost"
  />,
  <MediaCard
    teamImage={pathFinder}
    placement="[MLH] Best Twilio"
    teamName="Path Finder"
    link="https://devpost.com/software/path-finder-l1zg0x"
    buttonText="See on Devpost"
  />,
];

interface disabledProps {
  isDisabled: boolean;
}

const PrevButton = ({ isDisabled }: disabledProps) => {
  return (
    <IconButton disabled={isDisabled} color="inherit" size="large">
      <NavigateBeforeIcon fontSize="large" aria-label="Previous" />
    </IconButton>
  );
};

const NextButton = ({ isDisabled }: disabledProps) => {
  return (
    <IconButton disabled={isDisabled} color="inherit" size="large">
      <NavigateNextIcon fontSize="large" aria-label="Next" />
    </IconButton>
  );
};

const HallOfFame = (): ReactElement => {
  return (
    <section className="section hof-section" id="hof">
      <div id="HallOfFame">
        <h1 className="header">HALL OF FAME</h1>
        <h2 className="subheader">Congratulations to Our Winners!</h2>
        <div className="carousel overall-winners">
          <h3 className="title">Overall Winners</h3>
          <AliceCarousel
            mouseTracking
            disableDotsControls
            responsive={responsive}
            renderPrevButton={PrevButton}
            renderNextButton={NextButton}
            items={overall_items}
          />
        </div>
        <div className="carousel art-winners">
          <h3 className="title">Sponsor Winners</h3>
          <AliceCarousel
            mouseTracking
            disableDotsControls
            responsive={responsive}
            renderPrevButton={PrevButton}
            renderNextButton={NextButton}
            items={category_items}
          />
        </div>
      </div>
    </section>
  );
};

export default HallOfFame;
