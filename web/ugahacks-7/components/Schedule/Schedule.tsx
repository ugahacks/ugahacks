import React, { ReactElement, useState } from "react";
import Window from "../Window";
import styles from "../../styles/Schedule.module.css";

export { schedule };

// Create an array of days that will be accessed by the option HTML tag
const days: string[] = ["February 18, 2022", "February 19, 2022", "February 20, 2022"];

// Schedule array for February 18
const schedule_18: string[] = [
    "Eat Food"
];

// Schedule array for February 19
const schedule_19: string[] = [
    "EAT FOOD"
];

// Schedule array for February 20
const schedule_20: string[] = [
    "Eating Competition"
];

// Times for corresponding schedules on February 18
const time_18: string[] = [
    "8:00 AM EST"
]; 

// Times for corresponding schedules on February 19
const time_19: string[] = [
    "8:00 PM EST"
]; 

// Times for corresponding schedules on February 20
const time_20: string[] = [
    "12:00 PM EST"
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

const Schedule = (): ReactElement => {
  return (
    <>
      <div>
        <Window
          windowTitle="Schedule"
          windowType="schedule"
          showTopBarButtons
          width="40vw"
          height="auto"
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
    schedule.push(
      <li className={styles.scheduleText}>
        <span className={styles.time2}>{time_array[i]}: </span>
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
