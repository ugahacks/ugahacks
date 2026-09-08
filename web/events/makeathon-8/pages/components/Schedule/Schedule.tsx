import React, { useState, ReactElement } from "react";
import { motion } from "framer-motion";
// import Image from 'next/image';

const day1: string = "/icons/ScheduleImages/images/day1.svg";
const day2: string = "/icons/ScheduleImages/images/day2.svg";

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

const eventsDay1: string[][] = [
  ["Event Check in", "9:00am-9:30pm", "East Commons"],
  ["Opening Ceremony", "9:00am - 10:30am", "Room 1453"],
  ["Sponsors Introduce Challenges", "10:30am - 11:00am", "Room 1453"],
  ["First Time Maker Workshop", "11:00am - 12:00pm", "Room 1401"],
  ["Lunch", "12:00pm - 1:00pm", "East Commons"],
  ["Chill Space", "1:00pm - 9:00pm", "Room 1405"],
  ["McKenny's Presentation", "1:00pm - 1:30pm", "Room 1456"],
  ["Devfest #1: Google Cloud", "2:30pm - 3:30pm", "Room 1456"],
  ["Sustainable Code Workshop", "3:30pm - 4:30pm", "Room 1401"],
  ["Devfest #2: Flutter/Firebase", "5:00pm - 6:00pm", "Room 1456"],
  ["Dinner", "6:00pm - 7:00pm", "East Commons"],
  ["End of Day", "9:00pm", ""],
];

const eventsDay2: string[][] = [
  ["Breakfeast", "9:00am-10:00am", "East Commons"],
  ["Roller Coaster w/Recycles", "10:00am - 11:00am", "Room 1290"],
  ["Devfest #3: ML", "11:00am - 12:00am", "Room 1456"],
  ["Lunch", "12:00pm - 1:00pm", "East Commons"],
  ["Sponsor \"Career Fair\"", "2:00pm - 4:00pm", "East Commons"],
  ["Egg Drop Challenge", "3:00pm - 4:00pm", "Room 1290"],
  ["Recycled Knowledge Kahoot", "5:00pm - 6:00pm", "Room 1456"],
  ["Projects Due", "6:00pm", ""],
  ["Dinner", "6:00pm - 7:00pm", "East Commons"],
  ["Judging/Expo", "6:00pm - 8:00pm", "East Commons"],
  ["Closing Ceremony", "8:00pm-9:00pm", "East Commons"],
];

function DayImg(props: ScheduleProps): ReactElement {
  return <img src={props.image} alt={props.alt} />;
}

function Schedule(): ReactElement {
  // eslint-disable-next-line
  const dayMapping = {
    0: "saturday",
    1: "sunday"
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
    } else {
      return 0;
    }
  }

  function getEvents(events: string[][]): ReactElement {
    return (
      <>
        {
          events.map((event, idRow) => (
          <tr key={idRow}>
            {event.map((item, id) => (<td key={id}>{item}</td>))}
          </tr>))
        }
      </>
    );
  }

  // eslint-disable-next-line
  function renderDay(): ReactElement {
    if (day === 0) {
      return (
        <>
          <DayImg image={day1} alt="Day 1 banner" />
          <div className="day-wrapper">
            <table>
              <tbody>
                {getEvents(eventsDay1)}
              </tbody>
            </table>
          </div>
        </>
      );
    } else {
      return (
        <>
          <DayImg image={day2} alt="Day 2 banner" />
          <div className="day-wrapper">
            <table className="daytwo">
              <tbody>
                {getEvents(eventsDay2)}
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

    if (day + increment >= 0 && day + increment <= 1) {
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
