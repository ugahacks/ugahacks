import React, { useState, useEffect, ReactElement } from "react";
import styles from "../../../styles/countdown.module.css";

const Countdown = (): ReactElement => {
  const [countdownDate, setCountdownDate] = useState(
    new Date("02/18/2022").getTime()
  );
  const [state, setState] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    setInterval(() => updateCountdown(), 1000);
  }, []);

  const updateCountdown = (): void => {
    if (countdownDate) {
      // Get the current time
      const currentTime = new Date().getTime();

      // Get the time remaining until the countdown date
      const distanceToDate = countdownDate - currentTime;

      // Calculate days, hours, minutes and seconds remaining
      let days = Math.floor(distanceToDate / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor(
        (distanceToDate % (1000 * 60 * 60)) / (1000 * 60)
      );
      let seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000);

      // Set the state to each new time
      setState({ days: days, hours: hours, minutes, seconds });
    }
  };

  return (
    <div>
      <div className="countdown-wrapper">
        <div className={styles.border}>
          <div>
            {" "}
            Countdown to Hacks 7: {state.days || "0"} days {state.hours || "00"}{" "}
            hours {state.minutes || "00"} minutes {state.seconds || "00"}{" "}
            seconds!
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
