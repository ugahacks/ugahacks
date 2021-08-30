import React, { useState, ReactElement } from 'react';
//import './Schedule.module.css';
//import '../../bootstrap.css'
import { motion } from "framer-motion"
import day1 from './images/day1.svg';
import day2 from './images/day2.svg';
import day3 from './images/day3.svg';
// import comingsoon from './images/comingsoon.svg';
import Image from 'next/image';

interface ScheduleProps {
  image: string,
  alt: string
}

// eslint-disable-next-line
const buttonVariants = {
  hover: {
    scale: 1.1,
  },
  tap: {
    scale: .9,
  }
}

function DayImg(props: ScheduleProps): ReactElement {
  return (
      <Image
        src={props.image}
        alt={props.alt}
        layout="fill"
      />
  );
}

function Schedule(): ReactElement {

  // eslint-disable-next-line
  const dayMapping = {
    0: "friday",
    1: "saturday",
    2: "sunday",
  }

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
    } else if( dateDay === 0) {
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
        <DayImg image={day1} alt="Day 1 banner"/>
        <div>
          <table>
            <tbody>
              <tr>
                <td>Opening Ceremony</td>
                <td>6:30 pm</td>
              </tr>
              <tr>
                <td>Dinner and Check-in Closes</td>
                <td>7:00 pm</td>
              </tr>
              <tr>
                <td>First Time Hacker/Team Building Workshop</td>
                <td>7:30 pm</td>
              </tr>
              <tr>
                <td>Art Contest</td>
                <td>7:30 pm</td>
              </tr>
              <tr>
                <td>Sponsor Fair</td>
                <td>8:30 pm</td>
              </tr>
              <tr>
                <td>Workshop - NCR</td>
                <td>9:30 pm</td>
              </tr>
              <tr>
                <td>Workshop - NCR</td>
                <td>10:30 pm</td>
              </tr>
              <tr>
                <td>BlackRock: Sustainable Investing Challenge + API Demo</td>
                <td>10:30 pm</td>
              </tr>
            </tbody>
          </table>
        </div>
        </>
      );
    } else if (day === 1) {
      return (
        <>
        <DayImg image={day2} alt="Day 2 banner"/>
        <div className="daytwo-wrapper">
          <table className="daytwo">
            <tbody>
              <tr>
                <td>Breakfast</td>
                <td>9:00 am</td>
              </tr>
              <tr>
                <td>How to Start Building Your Web App - Paul Hansa</td>
                <td>10:00 am</td>
              </tr>
              <tr>
                <td>How to Test Your Website with Selenium WebDriver - Safiyullah Khan </td>
                <td>10:00 am</td>
              </tr>
              <tr>
                <td>Building an API w/ Python and FastAPI - Paul Hansa</td>
                <td>11:00 am</td>
              </tr>
              <tr>
                <td>Workshop - TSYS</td>
                <td>11:00 am</td>
              </tr>
              <tr>
                <td>Break (15 mins)</td>
                <td>12:00 pm</td>
              </tr>
              <tr>
                <td>NCR Q&A/1-on-1s and BlackRock Q&A/1-on-1s</td>
                <td>12:15 pm</td>
              </tr>
              <tr>
                <td>Equifax/State Farm/TSYS 1-on-1s</td>
                <td>1:15 pm</td>
              </tr>
              <tr>
                <td>Life After College is Hard: This Session Can Help - Malinda Inthirath</td>
                <td>1:15 pm</td>
              </tr>
              <tr>
                <td>Lunch</td>
                <td>2:15 pm</td>
              </tr>
              <tr>
                <td>BlackRock: Journey to FinTech - Aladdin</td>
                <td>3:15 pm</td>
              </tr>
              <tr>
                <td>Pitch Perfect: Communicating Your Ideas Quickly, Succinctly, <br></br> and Compellingly - Penn Hansa</td>
                <td>3:15 pm</td>
              </tr>
              <tr>
                <td>AWS at State Farm Workshop</td>
                <td>4:15 pm</td>
              </tr>
              <tr>
                <td>Getting Started with Angular - Chris Martinez</td>
                <td>4:15 pm</td>
              </tr>
              <tr>
                <td>Break (15 mins)</td>
                <td>5:15 pm</td>
              </tr>
              <tr>
                <td>Manipulating Cloud Data - Equifax</td>
                <td>5:30 pm</td>
              </tr>
              <tr>
                <td>Data Base with Data Lake & Blockchain - Jose Alexandro Acha Gomes</td>
                <td>5:30 pm</td>
              </tr>
              <tr>
                <td>Building Serverless Applications with AWS - Nick Tang</td>
                <td>6:30 pm</td>
              </tr>
              <tr>
                <td>Patient Health History Record System - Jose Alexandro Acha Gomes</td>
                <td>6:30 pm</td>
              </tr>
              <tr>
                <td>NCR Mini Event/Raffle</td>
                <td>7:30 pm</td>
              </tr>
              <tr>
                <td>Dinner</td>
                <td>8:00 pm</td>
              </tr>
              <tr>
                <td>Git(Hub) Basics: Git + GitHub Concepts - Shaun Mitchell</td>
                <td>9:00 pm</td>
              </tr>
              <tr>
                <td>Join the UGAHacks Team + Hacker Initiatives Workshop</td>
                <td>9:00 pm</td>
              </tr>
              <tr>
                <td>Tips and Tricks for a Broke College Dev - Paul Hansa</td>
                <td>10:00 pm</td>
              </tr>
              <tr>
                <td>Git - Akash Veerappan</td>
                <td>10:00 pm</td>
              </tr>
              <tr>
                <td>Break (15 mins)</td>
                <td>11:00 pm</td>
              </tr>
              <tr>
                <td>Among Us</td>
                <td>11:15 pm</td>
              </tr>
            </tbody>
          </table>
        </div>
        </>
      );
    } else {
      return (
        <>
        <DayImg image={day3} alt="Day 3 banner"/>
        <div>
          <table>
            <tbody>
              <tr>
                <td>Breakfast and Submissions Due</td>
                <td>9:00 am</td>
              </tr>
              <tr>
                <td>Judging Expo</td>
                <td>10:00 am</td>
              </tr>
              <tr>
                <td>Lunch</td>
                <td>2:00 pm</td>
              </tr>
              <tr>
                <td>Closing Ceremony</td>
                <td>3:00 pm</td>
              </tr>
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
      setDay(day+increment);
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
      <section id='schedule' className='section'>
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
              > </motion.button>
          </div>
          <div className="day-container">
          {renderDay()}
          </div>
          <p id="timecaption"><i>All times are in Eastern Standard Time</i></p>
        </div>
      </section>
    </>
  );
}

export default Schedule;
