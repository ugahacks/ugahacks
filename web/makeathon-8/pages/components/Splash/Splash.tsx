import React, { useEffect, useState, ReactElement } from "react";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
//import Image from 'next/image';

const makeEightLogo: string = "/icons/SplashImages/images/makeathonLogo.png";

interface TimeLeftObject {
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
}

const CustomButton = withStyles(
  {
    root: {
      backgroundColor: "#A6BDA4",
      paddingLeft: "55px",
      paddingRight: "55px",
      marginTop: "25px",
      fontSize: "1.3em",
      fontWeight: 600,
      fontFamily: "Poppins",
      borderRadius: "50px",
      width: "320px",
    },
  },
  { index: 1 }
)(Button);

function Countdown(): ReactElement {
  const calculateTimeLeft = (): TimeLeftObject => {
    //CHANGE DATE UNTIL REGISTRATION HERE:
    const difference: number = +new Date("10/30/2020 12:00:00") - +new Date();

    let timeLeft: TimeLeftObject = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeftObject>(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  function isValidTime(value: string): value is keyof typeof timeLeft {
    return value in timeLeft;
  }

  const timerComponents: ReactElement[] = [];

  Object.keys(timeLeft).forEach((interval) => {
    timerComponents.push(
      <li>
        <span>{isValidTime(interval)}</span>
        {interval}
      </li>
    );
  });

  // Replace button link to schedule post-registration

  if (timerComponents.length) {
    return (
      <div>
        <div className="subheader">
          <h2 id="eventdate">October 1-2, 2022 In Person</h2>
        </div>
        <div className="countdown-registration">
          {timerComponents}
          <h1> until registration</h1>
          <CustomButton
            variant="contained"
            size="medium"
            href="https://ugeorgia.ca1.qualtrics.com/jfe/form/SV_8x05NF3a2OkoMeh"
          >
            Interest Form
          </CustomButton>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="subheader">
          <h2 id="tagline">
            <b>
              <span className="eventline">THINK GREEN BUILD THE UNSEEN</span>
            </b>
          </h2>
          <h2 id="eventdate">October 1-2, 2022 In Person</h2>
        </div>
        <CustomButton
          variant="contained"
          size="large"
          href="/register-makeathon"
        >
          Register
        </CustomButton>
      </div>
    );
  }
}

function Splash(): ReactElement {
  return (
    <section className="section splash" id="splash">
      <div className="headercontainer">
        <img className="logo" src={makeEightLogo} alt="Makeathon Logo" />
        <Countdown />
      </div>
    </section>
  );
}

export default Splash;
