"use client";

import React, { useState } from "react";
import styles from "../../styles/Schedule.module.css";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

function Schedule() {
  const [currentDay, setCurrentDay] = useState(0); // Starts with Day 1

  const handleNext = () => {
    if (currentDay < 1) setCurrentDay(currentDay + 1);
  };

  const handlePrev = () => {
    if (currentDay > 0) setCurrentDay(currentDay - 1);
  };

  return (
    <section className={styles.body}>
      <img
        className={styles.dolphin1}
        src="/graphics/scheduleAssets/dolphin1.png"
        alt="fish"
      />
      <img
        className={styles.fish1}
        src="/graphics/scheduleAssets/fish 1.png"
        alt="fish"
      />
      <img
        className={styles.fish2}
        src="/graphics/scheduleAssets/fish 2.png"
        alt="fish"
      />
      <img
        className={styles.cliff_left}
        src="/graphics/scheduleAssets/cliff_left.png"
        alt="ocean cliff"
      />
      <img
        className={styles.cliff_right}
        src="/graphics/scheduleAssets/cliff_right.png"
        alt="ocean cliff"
      />

      <h2 className={styles.schedule_header}>Schedule</h2>
      <div className={styles.content}>
        {currentDay === 0 ? (
          <>
            <h3
              style={{
                textAlign: "center",
                margin: "20px 0",
                fontSize: "30px",
              }}
            >
              Sat. October 21
            </h3>

            <div className={styles.tableContainer}>
              <div className={styles.dayContainer}>
                <img src="/graphics/scheduleAssets/day1.png" alt="day 1"></img>
              </div>
              <table>
                <thead>
                  <tr>
                    <th style={{ fontSize: "2em" }}>What</th>
                    <th style={{ fontSize: "2em" }}>When</th>
                    <th style={{ fontSize: "2em" }}>Where</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Event Check-in</td>
                    <td>9:00am - 10:30am</td>
                    <td>East Commons</td>
                  </tr>
                  <tr>
                    <td>Breakfast</td>
                    <td>9:00am - 10:30am</td>
                    <td>East Commons</td>
                  </tr>
                  <tr>
                    <td>Opening Ceremony</td>
                    <td>10:30am - 11:00am</td>
                    <td>1453</td>
                  </tr>
                  <tr>
                    <td>First Time Makers</td>
                    <td>11:00am - 12:00pm</td>
                    <td>1456</td>
                  </tr>
                  <tr>
                    <td>Lunch</td>
                    <td>12:00pm - 1:00pm</td>
                    <td>East Commons</td>
                  </tr>
                  <tr>
                    <td>Chill Space</td>
                    <td>1:00pm - 8:00pm</td>
                    <td>1401</td>
                  </tr>
                  <tr>
                    <td>Painting Workshop</td>
                    <td>1:00pm - 8:00pm</td>
                    <td>1350</td>
                  </tr>
                  <tr>
                    <td>Arduino</td>
                    <td>1:00pm - 2:00pm</td>
                    <td>1456</td>
                  </tr>
                  <tr>
                    <td>3D Printing</td>
                    <td>2:00pm - 3:00pm</td>
                    <td>1405</td>
                  </tr>
                  <tr>
                    <td>Sustainable Making Workshop + GDG</td>
                    <td>3:00pm - 4:00pm</td>
                    <td>1456</td>
                  </tr>
                  <tr>
                    <td>GDG Workshop #1- Internet of Things</td>
                    <td>4:00pm - 5:00pm</td>
                    <td>1405</td>
                  </tr>
                  <tr>
                    <td>Dinner</td>
                    <td>6:00pm - 7:00pm</td>
                    <td>East Commons</td>
                  </tr>
                  <tr>
                    <td>End of Day</td>
                    <td>9:00pm</td>
                    <td>East Commons</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </>
        ) : (
          <>
            <h3
              style={{
                textAlign: "center",
                margin: "20px 0",
                fontSize: "30px",
              }}
            >
              Sun. October 22
            </h3>

            <div className={styles.tableContainer}>
              <div className={styles.dayContainer}>
                <img src="/graphics/scheduleAssets/day2.png" alt="day 1"></img>
              </div>
              <table>
                <thead>
                  <tr>
                    <th style={{ fontSize: "2em" }}>What</th>
                    <th style={{ fontSize: "2em" }}>When</th>
                    <th style={{ fontSize: "2em" }}>Where</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Breakfast</td>
                    <td>9:00am - 10:00am</td>
                    <td>East Commons</td>
                  </tr>
                  <tr>
                    <td>GDG Workshop #2 - Intro to GCP</td>
                    <td>10:00am - 11:00am</td>
                    <td>1456</td>
                  </tr>
                  <tr>
                    <td>Recycled Roller Coaster</td>
                    <td>11:00am - 12:00am</td>
                    <td>1290</td>
                  </tr>
                  <tr>
                    <td>Lunch</td>
                    <td>12:00pm - 1:00pm</td>
                    <td>East Commons</td>
                  </tr>
                  <tr>
                    <td>Chill Space</td>
                    <td>1:00pm - 6:00pm</td>
                    <td>1401</td>
                  </tr>
                  <tr>
                    <td>Egg Drop</td>
                    <td>1:00pm - 2:00pm</td>
                    <td>1290</td>
                  </tr>
                  <tr>
                    <td>SSRL: Antenna Workshop</td>
                    <td>2:00pm - 3:00pm</td>
                    <td>1456</td>
                  </tr>
                  <tr>
                    <td>Recycled Sailboat</td>
                    <td>3:00pm - 4:00pm</td>
                    <td>1290</td>
                  </tr>
                  <tr>
                    <td>Beyond the Makeathon</td>
                    <td>5:00pm - 6:00pm</td>
                    <td>1456</td>
                  </tr>
                  <tr>
                    <td>Judging + Submission Deadline</td>
                    <td>6:00pm</td>
                    <td>Devpost</td>
                  </tr>
                  <tr>
                    <td>Project Expo</td>
                    <td>6:30pm - 8:00pm</td>
                    <td>East Commons</td>
                  </tr>
                  <tr>
                    <td>Closing Ceremony</td>
                    <td>8:00pm - 9:00pm</td>
                    <td>1453</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
      <div className={styles.slider}>
        <button className={styles.sliderButton} onClick={handlePrev}>
          <FiChevronLeft size={24} />
        </button>
        <div className={styles.dots}>
          <span
            className={currentDay === 0 ? styles.activeDot : styles.inactiveDot}
          ></span>
          <span
            className={currentDay === 1 ? styles.activeDot : styles.inactiveDot}
          ></span>
        </div>
        <button className={styles.sliderButton} onClick={handleNext}>
          <FiChevronRight size={24} />
        </button>
      </div>
      <p
        style={{
          fontSize: "26xpx",
          color: "lightgray",
          marginTop: "10px",
          textAlign: "center",
        }}
      >
        All Times are in Eastern Standard Time
      </p>
    </section>
  );
}

export default Schedule;
