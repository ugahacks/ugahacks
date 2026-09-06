import React, { useState, ReactElement } from "react";
import { motion } from "framer-motion";
// import Image from 'next/image';

const day1: string = "/icons/ScheduleImages/images/day1.svg";
const day2: string = "/icons/ScheduleImages/images/day2.svg";
const day3: string = "/icons/ScheduleImages/images/day3.svg";

interface ScheduleProps {
  image: string;
  alt: string;
}

// eslint-disable-next-line
const buttonVariants = {
  hover: {
    scale: 1.1,
  },
  tap: {
    scale: 0.9,
  },
};

function DayImg(props: ScheduleProps): ReactElement {
  return <img src={props.image} alt={props.alt} />;
}

function Schedule(): ReactElement {
  // eslint-disable-next-line
  const dayMapping = {
    0: "friday",
    1: "saturday",
    2: "sunday",
  };

  const [day, setDay] = useState<number>(getDay());

  // Check that the number is a valid day in dayMapping
  function isValidDay(value: number): value is keyof typeof dayMapping {
    return value in dayMapping;
  }

  function getDay(): number {
    var date: Date = new Date();
    var dateDay: number = date.getDay();

    if (dateDay === 6) {
      return 1;
    } else if (dateDay === 0) {
      return 2;
    } else {
      return 0;
    }
  }

  // eslint-disable-next-line
  function renderDay(): ReactElement {
    if (day === 0) {
      return (
        <>
          <DayImg image={day1} alt="Day 1 banner" />
          <div>
            <table>
              <tbody>
                <tr>COMING SOON NEXT YEAR!</tr>
              </tbody>
            </table>
          </div>
        </>
      );
    } else if (day === 1) {
      return (
        <>
          <DayImg image={day2} alt="Day 2 banner" />
          <div className="daytwo-wrapper">
            <table className="daytwo">
              <tbody>
                <tr>COMING SOON NEXT YEAR!</tr>
              </tbody>
            </table>
          </div>
        </>
      );
    } else {
      return (
        <>
          <DayImg image={day3} alt="Day 3 banner" />
          <div>
            <table>
              <tbody>
                <tr>COMING SOON NEXT YEAR!</tr>
              </tbody>
            </table>
          </div>
        </>
      );
    }
  }

  // eslint-disable-next-line
  function changeDay(increment: number): void {
    if (!isValidDay(day)) {
      throw Error("Invalid Number Key");
    }

    if (day + increment >= 0 && day + increment <= 2) {
      setDay(day + increment);
    }
  }

  // Display the correct day
  // Replaced dayMapping[day] in h2 element because TS sees that day can be any number
  // This function will validate the input that day is only 1 | 2 | 0
  function displayDay(day: number): string {
    if (!isValidDay(day)) {
      throw Error("Invalid Day Key");
    }

    return dayMapping[day];
  }

  // return (
  //     <section id='schedule' className='section'>
  //       <img id="commingsoonimg" src={comingsoon} alt="Coming Soon banner"></img>
  //     </section>
  // )

  return (
    <>
      <section id="schedule" className="section">
        <div className="section-text schedule-text">
          <h1 id="scheduleheader">Schedule</h1>
          <div className="day-header">
            <motion.button
              onClick={() => changeDay(-1)}
              className="back-button"
              variants={buttonVariants}
              whileHover="hover"
            ></motion.button>
            <h1>{displayDay(day)} </h1>
            <motion.button
              onClick={() => changeDay(1)}
              className="forward-button"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              {" "}
            </motion.button>
          </div>
          <div className="day-container">{renderDay()}</div>
          <p id="timecaption">
            <i>All times are in Eastern Standard Time</i>
          </p>
        </div>
      </section>
    </>
  );
}

export default Schedule;
