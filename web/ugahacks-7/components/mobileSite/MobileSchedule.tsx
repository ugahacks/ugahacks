import React, {  Fragment, ReactElement } from "react";
import { useState } from "react";
import styles from './/../../styles/Carousel.module.css';

   
const day: string[] = ["Day 1", "Day 2", "Day 3"];

export function MobileSchedule(): ReactElement {
    const [day, setDay] = useState("day1");
    
    return (
        <>
        <div className={styles.buttons}>
            <button className={styles.button} onClick={() => setDay("day1")} value={"Day 1"}>Day 1</button>
            <button className={styles.button} onClick={() => setDay("day2")} value={"Day 2"}>Day 2</button>
            <button className={styles.button} onClick={() => setDay("day3")} value={"Day 3"}>Day 3</button>
        </div>
       <div>
            {generateDay(day)}
        </div>
   </>
    );
}

function generateDay(type: string): ReactElement {
    let day: ReactElement[] =[];

    switch (type) {
        case "day1":
            day = generateDay1();
            break;
        case "day2":
            day = generateDay2();
        break;
        case "day3":
            day = generateDay3();
            break;
    }
    return (
        <>
        {day}
        </>
    );
}

function generateDay1(): ReactElement[] {
    let day: ReactElement[] =[];
    day.push(
        <>
        <div className={styles.date}>
            February 18
        </div>
        <div className={styles.timeSlot}>
            <div className={styles.time}>
                6:30PM-7:00PM
            </div>
            <div className={styles.event}>
                Opening Ceremony
            </div>

        </div>
        <div className={styles.timeSlot}>
            <div className={styles.time}>
                7:00PM-8:00PM
            </div>
            <div className={styles.event}>
                Dinner
            </div>

        </div>
        
    </>
    );
    return day;
}
function generateDay2(): ReactElement[] {
    let day: ReactElement[] =[];
    day.push(
        <>
        <div className={styles.date}>
            February 19
        </div>
        <div className={styles.timeSlot}>
            <div className={styles.time}>
                8:00AM-9:00AM
            </div>
            <div className={styles.event}>
                Breakfast
            </div>

        </div>
        <div className={styles.timeSlot}>
            <div className={styles.time}>
                12:00PM-1:00PM
            </div>
            <div className={styles.event}>
                Lunch 
            </div>

        </div>
        <div className={styles.timeSlot}>
            <div className={styles.time}>
                7:00PM-8:00PM
            </div>
            <div className={styles.event}>
                Dinner
            </div>

        </div>
 
        </>

    );
    return day;
}

function generateDay3(): ReactElement[] {
    let day: ReactElement[] =[];
    day.push(
        <>
        <div className={styles.date}>
            February 20 
        </div>
        <div className={styles.timeSlot}>
            <div className={styles.time}>
                8:00AM
            </div>
            <div className={styles.event}>
                Submission Due
            </div>
        </div>

         <div className={styles.timeSlot}>
            <div className={styles.time}>
                8:00AM-9:00AM
            </div>
            <div className={styles.event}>
                Breakfast
            </div>
        </div>
        <div className={styles.timeSlot}>
            <div className={styles.time}>
                9:30AM-1:00PM
            </div>
            <div className={styles.event}>
                Judging Expo
            </div>
        </div>
        <div className={styles.timeSlot}>
            <div className={styles.time}>
                2:30PM-3:00PM
            </div>
            <div className={styles.event}>
                Closing Ceremony
            </div>
        </div>
        </>
    );
    return day;
}

export default MobileSchedule;