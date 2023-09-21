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
            <h2 className={styles.schedule_header}>Schedule</h2>
            <div className={styles.content}>
                {
                    currentDay === 0 ? (
                    
                        <>
                        <h3 style={{ textAlign: 'center', margin: '20px 0', fontSize:'30px'}}>Sat. October 21</h3>

                    <div className={styles.tableContainer}>
                        <table>
                        <thead>
                            <tr>
                            <th style={{ fontSize: '2em' }}>What</th>
                            <th style={{ fontSize: '2em' }}>When</th>
                            <th style={{ fontSize: '2em' }}>Where</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>Opening Ceremony</td>
                            <td>10:00 AM</td>
                            <td>Room A</td>
                            </tr>
                            <tr>
                            <td>First Time Makers</td>
                            <td>11:00 AM</td>
                            <td>Room B</td>
                            </tr>
                            <tr>
                                <td>Arduino Workshop</td>
                                <td>12:00 pm</td>
                                <td>Room C</td>
                            </tr>
                            <tr>
                                <td>3D Modeling Workshop</td>
                                <td>1:00 pm</td>
                                <td>Room D</td>
                            </tr>
                            <tr>
                                <td>Sustainable Making Workshop</td>
                                <td>2:00 pm</td>
                                <td>Room E</td>
                            </tr>
                            <tr>
                                <td>GDG Workshop #1 - Internet of Things</td>
                                <td>3:00 pm</td>
                                <td>Room F</td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                    </>
                    ) : (
                        <>
                        <h3 style={{ textAlign: 'center', margin: '20px 0', fontSize:'30px' }}>Sun. October 22</h3>

                    <div className={styles.tableContainer}>
                        <table>
                        <thead>
                            <tr>
                            <th style={{ fontSize: '2em' }}>What</th>
                            <th style={{ fontSize: '2em' }}>When</th>
                            <th style={{ fontSize: '2em' }}>Where</th>
                            </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>GDG Workshop #2 - Sustainability with AI</td>
                            <td>10:00 AM</td>
                            <td>Room A</td>
                            </tr>
                            <tr>
                            <td>Recycled Roller Coaster</td>
                            <td>11:00 AM</td>
                            <td>Room B</td>
                            </tr>
                            <tr>
                                <td>Egg Drop</td>
                                <td>12:00 pm</td>
                                <td>Room C</td>
                            </tr>
                            <tr>
                                <td>Recycled Sailboat</td>
                                <td>1:00 pm</td>
                                <td>Room D</td>
                            </tr>
                            <tr>
                                <td>Beyond the Makeathon Workshop</td>
                                <td>2:00 pm</td>
                                <td>Room E</td>
                            </tr>
                            <tr>
                                <td>Optional Expo</td>
                                <td>3:00 pm</td>
                                <td>Room F</td>
                            </tr>
                            <tr>
                                <td>Closing Ceremony</td>
                                <td>4:00 pm</td>
                                <td>Room G</td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                    </>
                    )
                }
            </div>
                <div className={styles.slider}>
                    <button className={styles.sliderButton} onClick={handlePrev}>
                        <FiChevronLeft size={24} />
                    </button>
                    <div className={styles.dots}>
                        <span className={currentDay === 0 ? styles.activeDot : styles.inactiveDot}></span>
                        <span className={currentDay === 1 ? styles.activeDot : styles.inactiveDot}></span>
                    </div>
                    <button className={styles.sliderButton} onClick={handleNext}>
                        <FiChevronRight size={24} />
                    </button>
                </div>
            <p style={{ fontSize: '26xpx', color: 'lightgray', marginTop: '10px', textAlign: 'center'}}>
              All Times are in Eastern Standard Time
            </p>
        </section>
    );
}

export default Schedule;




