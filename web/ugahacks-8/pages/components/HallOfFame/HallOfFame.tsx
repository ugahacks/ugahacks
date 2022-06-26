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
    placement="[UGAHacks] 1st"
    teamName="Reading Buddy"
    link="https://devpost.com/software/reading-buddy-0idbug"
    buttonText="See on Devpost"
  />,
  <MediaCard
    teamImage={astrodog}
    placement="[UGAHacks] 2nd"
    teamName="AstroDog"
    link="https://devpost.com/software/astrodog"
    buttonText="See on Devpost"
  />,
  <MediaCard
    teamImage={luxstra}
    placement="[UGAHacks] 3rd"
    teamName="Luxstra"
    link="https://devpost.com/software/luxstra"
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
    teamImage={octocat}
    placement="Best Octocat Drawing"
    teamName="@ThePigOverlord"
    link="https://twitter.com/ThePigOverlord/status/1357845688743124993?s=20"
    buttonText="See Tweet"
  />,
  <MediaCard
    teamImage={macro}
    placement="Best Domain"
    teamName="m4cro.space"
    link="https://m4cro.space"
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
    teamImage={sign_assist}
    placement="Best First Time Hacker"
    teamName="Sign Assist"
    link="https://devpost.com/software/sign-assist"
    buttonText="See on Devpost"
  />,
  <MediaCard
    teamImage={sign_assist}
    placement="[Digi Key] 1st"
    teamName="Sign Assist"
    link="https://devpost.com/software/sign-assist"
    buttonText="See on Devpost"
  />,
  <MediaCard
    teamImage={astrodog}
    placement="[Digi Key] 2nd"
    teamName="AstroDog"
    link="https://devpost.com/software/astrodog"
    buttonText="See on Devpost"
  />,
  <MediaCard
    teamImage={astrodog}
    placement="Best Hardware Track"
    teamName="AstroDog"
    link="https://devpost.com/software/astrodog"
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
    placement="[NCR] 1st"
    teamName="InvenTrack"
    link="https://devpost.com/software/inventrack"
    buttonText="See on Devpost"
  />,
  <MediaCard
    teamImage={chopchop}
    placement="[NCR] 2nd"
    teamName="ChopChop"
    link="https://devpost.com/software/chopchop"
    buttonText="See on Devpost"
  />,
  <MediaCard
    teamImage={atm_pal}
    placement="[NCR] 3rd"
    teamName="ATM-Pal"
    link="https://devpost.com/software/atm-pal"
    buttonText="See on Devpost"
  />,
  <MediaCard
    teamImage={luxstra}
    placement="[State Farm] 1st"
    teamName="Luxstra"
    link="https://devpost.com/software/luxstra"
    buttonText="See on Devpost"
  />,
  <MediaCard
    teamImage={atm_pal}
    placement="[Capital One] 1st"
    teamName="ATM Pal"
    link="https://devpost.com/software/atm-pal"
    buttonText="See on Devpost"
  />,
  <MediaCard
    teamImage={luxstra}
    placement="[GCP] 1st"
    teamName="Luxstra"
    link="https://devpost.com/software/luxstra"
    buttonText="See on Devpost"
  />,
  <MediaCard
    teamImage={landr}
    placement="[BlackRock] 1st"
    teamName="Landr"
    link="https://devpost.com/software/landr"
    buttonText="See on Devpost"
  />,
  <MediaCard
    teamImage={solvit_sus}
    placement="[BlackRock] 2nd"
    teamName="Solvit Sustainable"
    link="https://devpost.com/software/solvit-eja01g"
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
