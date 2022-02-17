import React, { ReactElement, useState } from "react";
import Window from "../Window";
import styles from "../../styles/Schedule.module.css";
import { filterProps } from "framer-motion";

export { schedule };

// Create an array of days that will be accessed by the option HTML tag
const days: string[] = [
  "February 18, 2022",
  "February 19, 2022",
  "February 20, 2022",
];

// Schedule array for February 18
const schedule_18: string[] = [
  "Event Check-in",
  "Opening Ceremony",
  "Dinner",
  "Sponsor Introduce Challenges + Art Competetion",
  "NCR Digital Banking API Crash Course",
  "Hot Ones broadcast #1 - State Farm",
  "Sponsor Fair",
  "I LOVE Data Science, but HATE Web Dev: An Intro to Dash",
  "First time Hacker workshop",
  "Gaming Tournament with esports",
  "Midnight Anime/Movie Session",
];

// Schedule array for February 19
const schedule_19: string[] = [
  "Breakfast",
  "Yoga with Shakti",
  "Scavenger hunt/Pokemon Go Hunt",
  "How We Built ByteCoin",
  "Lunch",
  "Aladdin Software overview and Technology at BlackRock",
  'NCR\'s "Digital Art Competition"',
  "Hot Ones Broadcast #2 - NCR",
  "An Intro into Asset Management with BlackRock",
  "Entrepreneruship Info Session with Kickstart",
  "Introduction to Static Site Generation and How to get started with Eleventy with Max Rey",
  "State Farm Raffle",
  "Hot Ones Broadcast #3",
  "\"Fundamentals of Augmented Reality\" with NCR",
  "Join the UH8 Team!",
  "Dinner",
  "Nerf Gun Fight",
  "Midnight Anime/Movie Session"
];

// Schedule array for February 20
const schedule_20: string[] = [
  "Submissions Due",
  "Breakfast",
  "Judging Begin/Expo",
  "Closing Ceremony"
];

// Times for corresponding schedules on February 18
const time_18: string[] = [
  "5:30 PM - 6:00 PM",
  "6:30 PM - 7:00 PM",
  "7:00 PM - 8:00 PM",
  "8:00 PM - 10:00 PM",
  "8:00 PM - 8:45 PM",
  "8:00 PM",
  "8:30 PM - 9:30 PM",
  "8:45 PM - 9:30 PM",
  "9:00 PM - 10:00 PM",
  "10:00 PM - 12:00 AM",
  "11:00 PM - 12:00 AM",
];

// Times for corresponding schedules on February 19
const time_19: string[] = [
  "8:00 AM - 9:00 AM",
  "9:00 AM - 10:00 AM",
  "10:00 AM - 3:00 PM",
  "10:30 AM - 11:30 AM",
  "12:00 PM - 1:00 PM",
  "1:00 PM - 2:00 PM",
  "1:30 PM - 2:00 PM",
  "2:00 PM",
  "2:00 PM - 3:00 PM",
  "3:00 PM - 4:00 PM",
  "3:00 PM - 4:00 PM",
  "4:00 PM",
  "4:00 PM",
  "4:15 PM - 5:00 PM",
  "5:00 PM - 6:00 PM",
  "7:00 PM - 8:00 PM",
  "8:15 PM - 9:00 PM",
  "11:00 PM - 12:00 AM"
];

// Times for corresponding schedules on February 20
const time_20: string[] = [
  "8:00 AM EST",
  "8:00 AM - 9:00 AM",
  "9:30 AM - 1:00 PM",
  "2:30 PM - 3:00 PM",
];

function CurrentDay(): ReactElement {
  const [day, setDay] = useState(days[0]);

  const inputHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDay(e.target.value);
  };

  return (
    <>
      <label className={styles.dates}>Dates: </label>
      <select value={day} onChange={inputHandler} className={styles.dropdown}>
        <option value={"18"}>{days[0]}</option>
        <option value={"19"}>{days[1]}</option>
        <option value={"20"}>{days[2]}</option>
      </select>
      <div className={styles.scroll}>{generateSchedule(day)}</div>
    </>
  );
}

const Schedule = (props: any): ReactElement => {
  return (
    <>
      <div>
        <Window
          windowTitle="Schedule"
          windowType="schedule"
          showTopBarButtons
          width="60vw"
          height="auto"
          stateChanger={props.stateChanger}
        />
      </div>
    </>
  );
};

function generateSchedule(date: string): ReactElement {
  let schedule: ReactElement[] = [];

  switch (date) {
    case "18":
      schedule = generateTimeScheduleArray(time_18, schedule_18);
      break;
    case "19":
      schedule = generateTimeScheduleArray(time_19, schedule_19);
      break;
    case "20":
      schedule = generateTimeScheduleArray(time_20, schedule_20);
      break;
    default:
      schedule = generateTimeScheduleArray(time_18, schedule_18);
      break;
  }

  return (
    <>
      <ul className="tree-view">{schedule}</ul>
    </>
  );
}

function generateTimeScheduleArray(
  time_array: string[],
  schedule_array: string[]
): ReactElement[] {
  let schedule: ReactElement[] = [];

  for (let i = 0; i < schedule_array.length; i++) {
    schedule.push(
      <li className={styles.scheduleText}>
        <span className={styles.time}>{time_array[i]}: </span>
        {schedule_array[i]}
      </li>
    );
  } // for

  return schedule;
} // generateQA

function schedule(): ReactElement {
  return (
    <>
      <div className={styles.scheduleContainer}>{CurrentDay()}</div>
    </>
  );
}

export default Schedule;
