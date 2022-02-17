import React, { Fragment, ReactElement } from "react";
import { useState } from "react";
import styles from ".//../../styles/Carousel.module.css";

const day: string[] = ["Day 1", "Day 2", "Day 3"];

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
  "Sponsor's Introduce Challenges + Art Competetion",
  "NCR Digital Banking API Crash Course",
  "Hot Ones Broadcast #1 - State Farm",
  "Sponsor Fair",
  "I LOVE Data Science, but HATE Web Dev: An Intro to Dash",
  "First Time Hacker Workshop",
  "Gaming Tournament with Esports",
  "Midnight Anime/Movie Session",
];

// Schedule array for February 19
const schedule_19: string[] = [
  "Breakfast",
  "Yoga with Shakti",
  "Pokemon Showdown Battles",
  "How We Built ByteCoin",
  "Lunch",
  "Aladdin Software Overview and Technology at BlackRock",
  'NCR\'s "Digital Art Competition"',
  "Hot Ones Broadcast #2 - NCR",
  "An Intro into Asset Management with BlackRock",
  "Entrepreneurship Info Session with Kickstart",
  "Data Science in Industry",
  "Introduction to Static Site Generation and How to get started with Eleventy with Max Rey",
  "State Farm Raffle",
  "Hot Ones Broadcast #3",
  '"Fundamentals of Augmented Reality" with NCR',
  "Join the UH8 Team!",
  '"Applied ML in Industry - NLP and CV" with NCR',
  "Dinner",
  "Nerf Gun Fight",
  "Midnight Anime/Movie Session",
];

// Schedule array for February 20
const schedule_20: string[] = [
  "Submissions Due",
  "Breakfast",
  "Judging Begin/Expo",
  "Closing Ceremony",
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
  "3:00 PM - 4:00 PM",
  "4:00 PM",
  "4:00 PM",
  "4:15 PM - 5:00 PM",
  "5:00 PM - 6:00 PM",
  "6:00 PM - 7:00 PM",
  "7:00 PM - 8:00 PM",
  "8:15 PM - 9:00 PM",
  "11:00 PM - 12:00 AM",
];

// Times for corresponding schedules on February 20
const time_20: string[] = [
  "8:00 AM",
  "8:00 AM - 9:00 AM",
  "9:30 AM - 1:00 PM",
  "2:30 PM - 3:00 PM",
];

export function MobileSchedule(): ReactElement {
  const [day, setDay] = useState("day1");

  return (
    <>
      <div className={styles.buttons}>
        <button
          className={styles.button}
          onClick={() => setDay("day1")}
          value={"Day 1"}
        >
          Day 1
        </button>
        <button
          className={styles.button}
          onClick={() => setDay("day2")}
          value={"Day 2"}
        >
          Day 2
        </button>
        <button
          className={styles.button}
          onClick={() => setDay("day3")}
          value={"Day 3"}
        >
          Day 3
        </button>
      </div>
      <div>
          {generateTitleDate(day)}
      </div>
      <div>{generateSchedule(day)}</div>
    </>
  );
}

function generateTitleDate(date: string): ReactElement {
    let currentDate: string = "";

    switch (date) {
        case "day1":
            currentDate = "February 18, 2021";
            break;
        case "day2":
            currentDate = "February 19, 2021";
            break;
        case "day3":
            currentDate = "February 20, 2021";
            break;
        default:
            currentDate = "February 18, 2021";
            break;
    } // switch

    return (
        <>
            <div className={styles.date}>
                {currentDate}
                <p className={styles.timeZone}>All times are in Eastern Standard Time</p>
            </div>
        </>
    )
}

function generateSchedule(date: string): ReactElement {
  let schedule: ReactElement[] = [];

  switch (date) {
    case "day1":
      schedule = generateTimeScheduleArray(time_18, schedule_18);
      break;
    case "day2":
      schedule = generateTimeScheduleArray(time_19, schedule_19);
      break;
    case "day3":
      schedule = generateTimeScheduleArray(time_20, schedule_20);
      break;
    default:
      schedule = generateTimeScheduleArray(time_18, schedule_18);
      break;
  }

  return (
    <>
      {/* <ul className="tree-view">{schedule}</ul> */}
      {schedule}
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
      <div className={styles.timeSlot}>
        <div className={styles.time}>{time_array[i]}</div>
        <div className={styles.event}>{schedule_array[i]}</div>
      </div>
    );
  } // for

  return schedule;
} // generateTimeScheduleArray

export default MobileSchedule;
