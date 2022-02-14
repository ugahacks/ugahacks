import React, { ReactElement } from "react";
import mobileStyle from "../../styles/mobile.module.css";
import Sides from "../Sides";
import FAQ from "./MobileFAQ";
import Image from 'next/image';
import titleWithByte from '../../public/TitlewithByte.png'
import MobileSchedule from "./MobileSchedule";

export function mobileSite(): ReactElement {
  return (
  <body className={mobileStyle.body}>
          <div className={mobileStyle.leftSide}>
            <Sides />
          </div>
          <div className={mobileStyle.middle}>
            <div className={mobileStyle.title}>
              <div className={mobileStyle.logo}>
              <Image className={mobileStyle.logoTitle} src={titleWithByte} alt="logo"/>
              <p className={mobileStyle.topText} style={{margin: "0"}}>Reimagine your world</p>
              <p className={mobileStyle.topText}> one pixel at a time.</p>
              <span>&nbsp;&nbsp;</span>
              <p className={mobileStyle.topText}>February 18-20, 2022</p>
              <span>&nbsp;&nbsp;</span>
              </div>
              <div className={mobileStyle.borderlink}>
                <a href="#about">
                  <h3 className={mobileStyle.link}>About</h3>
                </a>
                </div>
              <div className={mobileStyle.borderlink}>
                <a href="#schedule">
                  <h3 className={mobileStyle.link}>Schedule</h3>
                </a>
                </div>
              <div className={mobileStyle.borderlink}>
                <a href="#faq">
                  <h3 className={mobileStyle.link}>FAQ</h3>
                </a>
              </div>
              {/* <div className={mobileStyle.borderlink}>
                <a href="#sponsers">
                  <h3 className={mobileStyle.link} >Sponsers</h3>
                </a>
              </div> */}
            </div>
            <div className={mobileStyle.pageSep} />
            <div className={mobileStyle.pageSep} />
            <div id="about" className={mobileStyle.about}>
              <h4 className={mobileStyle.titleText}>What is UGAHacks?</h4>
              <div className={mobileStyle.border}>
              <p>UGAHacks is an annual hackathon organized by fellow students at the University of Georgia in Athens, Georgia. Hackathons are all about groups of dedicated people coming together to create something amazing in an epic 48-hour programming sleepover.</p>
              <p>Even though submitting a project is the main objective, that&quot;s not all there is. We&quot;ll have mentors, free food, video game competitions, workshops and more. There&quot;s even a workshop at the event for anyone that still needs to find some teammates!</p>
              </div>
            </div>
            <div className={mobileStyle.pageSep} />
            <div className={mobileStyle.pageSep} />
           <div id="schedule" className={mobileStyle.schedule}>
              <h4 className={mobileStyle.titleText}>Schedule</h4>
              <div className={mobileStyle.border}>
                {/* <div className={mobileStyle.day}> */}
                  {/* <div className={mobileStyle.schLinkDiv}>
                      <a href="day1.html" className={mobileStyle.schLink1}>Day 1</a>
                      <div className={mobileStyle.schLink2}>Day 2</div>
                      <div className={mobileStyle.schLink3}>Day 3</div>
 */}

                <MobileSchedule />
                <div className={mobileStyle.spacing} />
              </div>
            </div>
            <div className={mobileStyle.pageSep} />
            <div className={mobileStyle.pageSep} />
            <div id="faq" className={mobileStyle.faq}>
              <h4 className={mobileStyle.titleText}>FAQ</h4>
              <div className={mobileStyle.border}>
                {/* <FAQ /> */}
              </div>

            </div>
            {/* <div id="sponsers" className={mobileStyle.sponsers}> */}
              {/* <h4 className={mobileStyle.titleText}>Sponsers</h4> */}
              {/* <div className={mobileStyle.border}> */}
              {/* </div> */}
            {/* </div> */}
            
          </div>

          <div className={mobileStyle.rightSide}>
            <Sides />
          </div>
        </body>
  );
}

export default mobileSite;
