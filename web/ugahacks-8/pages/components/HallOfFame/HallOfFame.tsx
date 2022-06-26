/* eslint-disable react/jsx-key */
import React, { ReactElement } from "react";

import MediaCard from "./MediaCard";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import IconButton from "@material-ui/core/IconButton";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

const reading_buddy: string = "/icons/HallOfFameImages/media/reading_buddy.png";
const astrodog: string = "/icons/HallOfFameImages/media/astrodog.png";
const luxstra: string = "/icons/HallOfFameImages/media/luxstra.png";
const octocat: string = "/icons/HallOfFameImages/media/octocat.png";
const macro: string = "/icons/HallOfFameImages/media/macro.png";
const sign_assist: string = "/icons/HallOfFameImages/media/sign_assist.png";
const inventrack: string = "/icons/HallOfFameImages/media/inventrack.png";
const chopchop: string = "/icons/HallOfFameImages/media/chopchop.png";
const atm_pal: string = "/icons/HallOfFameImages/media/atm_pal.png";
const landr: string = "/icons/HallOfFameImages/media/landr.png";
const solvit_sus: string = "/icons/HallOfFameImages/media/solvit_sus.png";
const oz: string = "/icons/HallOfFameImages/media/oz.png";
const magic: string = "/icons/HallOfFameImages/media/magic.png";
const food_1: string = "/icons/HallOfFameImages/media/food_1.png";
const food_2: string = "/icons/HallOfFameImages/media/food_2.png";
const food_3: string = "/icons/HallOfFameImages/media/food_3.png";
const workspace_1: string = "/icons/HallOfFameImages/media/workspace_1.png";
const workspace_2: string = "/icons/HallOfFameImages/media/workspace_2.png";
const workspace_3: string = "/icons/HallOfFameImages/media/workspace_3.png";

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
    teamImage={reading_buddy}
    placement="Best Overall"
    teamName="Path Finder"
    link="https://devpost.com/software/path-finder-l1zg0x"
    buttonText="See on Devpost"
  />,
  <MediaCard
    teamImage={astrodog}
    placement="Best Solo"
    teamName="GoGetEmployed"
    link="https://devpost.com/software/gogetemployed"
    buttonText="See on Devpost"
  />,
  <MediaCard
    teamImage={luxstra}
    placement="Best First Time Hacker"
    teamName="Style Sensei"
    link="https://devpost.com/software/style-sensei"
    buttonText="See on Devpost"
  />,
  <MediaCard
    teamImage={luxstra}
    placement="Best First Time Hacker"
    teamName="CourseMiner"
    link="https://devpost.com/software/courseminer"
    buttonText="See on Devpost"
  />,
  <MediaCard
    teamImage={oz}
    placement="[Art Contest] 1st"
    teamName="Danielle Mawson"
    link={oz}
    buttonText="See Artwork"
  />,
  <MediaCard
    teamImage={magic}
    placement="[Art Contest] 2nd"
    teamName="Lauren Lin"
    link={magic}
    buttonText="See Artwork"
  />,
  <MediaCard
    teamImage={macro}
    placement="[MLH] Best Domain"
    teamName="m4cro.space"
    link="https://devpost.com/software/dawgtreats"
    buttonText="Go to Wesbite"
  />,
  <MediaCard
    teamImage={macro}
    placement="[MLH] Creative GitHub"
    teamName="Byte Driver"
    link="https://devpost.com/software/byte-driver"
    buttonText="Go to Wesbite"
  />,
  <MediaCard
    teamImage={reading_buddy}
    placement="Best Solo Hack"
    teamName="Reading Buddy"
    link="https://devpost.com/software/reading-buddy-0idbug"
    buttonText="See on Devpost"
  />,
  <MediaCard
    teamImage={solvit_sus}
    placement="[MLH] Best CI/CD"
    teamName="Biolearn"
    link="https://devpost.com/software/biolearn-awvgeb"
    buttonText="See on Devpost"
  />,
  <MediaCard
    teamImage={astrodog}
    placement="Best Hardware Track"
    teamName="Share Stead"
    link="https://devpost.com/software/namegoeshere"
    buttonText="See on Devpost"
  />,
  <MediaCard
    teamImage={food_1}
    placement="[Best Meal] 1st"
    teamName="Anita Yep"
    link={food_1}
    buttonText="See Meal"
  />,
  <MediaCard
    teamImage={food_2}
    placement="[Best Meal] 2nd"
    teamName="Ngan Tran"
    link={food_2}
    buttonText="See Meal"
  />,
  <MediaCard
    teamImage={food_3}
    placement="[Best Meal] 3rd"
    teamName="Deeksha Koya"
    link={food_3}
    buttonText="See Meal"
  />,
  <MediaCard
    teamImage={workspace_1}
    placement="[Best Workspace] 1st"
    teamName="Rachel Moan"
    link={workspace_1}
    buttonText="See Workspace"
  />,
  <MediaCard
    teamImage={workspace_2}
    placement="[Best Workspace] 2nd"
    teamName="Katie Park"
    link={workspace_2}
    buttonText="See Workspace"
  />,
  <MediaCard
    teamImage={workspace_3}
    placement="[Best Workspace] 3rd"
    teamName="Brandon Yau"
    link={workspace_3}
    buttonText="See Workspace"
  />,
];

const category_items: ReactElement[] = [
  <MediaCard
    teamImage={inventrack}
    placement="[NCR] Data Science Winner"
    teamName="Demand-Based POS Rec"
    link="https://devpost.com/software/max-and-abdu"
    buttonText="See on Devpost"
  />,
  <MediaCard
    teamImage={chopchop}
    placement="[NCR] Eliminate the Friction"
    teamName="CourseDawg"
    link="https://devpost.com/software/coursedawg"
    buttonText="See on Devpost"
  />,
  <MediaCard
    teamImage={atm_pal}
    placement="[NCR] Eliminate the Friction"
    teamName="DawgConnect"
    link="https://devpost.com/software/dawgconnect"
    buttonText="See on Devpost"
  />,
  <MediaCard
    teamImage={atm_pal}
    placement="[NCR] Blockchain Tech"
    teamName="CryptoClerk"
    link="https://devpost.com/software/cryptoclerk"
    buttonText="See on Devpost"
  />,
  <MediaCard
    teamImage={atm_pal}
    placement="[NCR] Blockchain Tech"
    teamName="DeSign"
    link="https://devpost.com/software/design-7f1w6r"
    buttonText="See on Devpost"
  />,
  <MediaCard
    teamImage={atm_pal}
    placement="[NCR] Retail Gamification"
    teamName="spaceGO"
    link="https://devpost.com/software/spagego"
    buttonText="See on Devpost"
  />,
  <MediaCard
    teamImage={luxstra}
    placement="[GCP] Best GCP Use"
    teamName="Free Food UGA"
    link="https://devpost.com/software/free-food-uga"
    buttonText="See on Devpost"
  />,
  <MediaCard
    teamImage={landr}
    placement="[BlackRock] 1st"
    teamName="Jasmine - Green, Grassroots Investing"
    link="https://devpost.com/software/pending-name"
    buttonText="See on Devpost"
  />,
  <MediaCard
    teamImage={solvit_sus}
    placement="[BlackRock] 2nd"
    teamName="lightswitch"
    link="https://devpost.com/software/lightswitch"
    buttonText="See on Devpost"
  />,
];

interface disabledProps {
  isDisabled: boolean;
}

const PrevButton = ({ isDisabled }: disabledProps) => {
  return (
    <IconButton disabled={isDisabled} color="inherit">
      <NavigateBeforeIcon fontSize="large" aria-label="Previous" />
    </IconButton>
  );
};

const NextButton = ({ isDisabled }: disabledProps) => {
  return (
    <IconButton disabled={isDisabled} color="inherit">
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
