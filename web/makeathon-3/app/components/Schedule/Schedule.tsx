import Image from "next/image";
export default function SchedulePage() {
    return (
        <div style={{ position: 'relative', width: '1920px', height: '1080px', marginBottom: '100px'}}>
        <Image 
            src="/schedule_final.svg"
            alt="Schedule image"
            width={1920}
            height={1080}
        />

        <div style={{
            position: 'absolute',
            top: '0', 
            left: '0',
            marginTop: '350px', // Adjust as needed
            marginLeft: '200px',
            color: 'black', // Change color for better visibility over image
            fontWeight: 'bold',
            padding: '20px',
            width: '1000px',
            display: 'flex',
            flexDirection: 'column',
            gap: "50px",
        }}>
            <p style={{fontSize: '25px'}}>Monday, Nov 11 - Bridge: Challenge your team to build a bridge using popsicle sticks. The bridge that holds the most weight wins! w/ UGAHacks from 7-8PM in Science Library 382.</p>
            <p style={{fontSize: '25px'}}>Tuesday, Nov 12 - Robots: Come check out 1lb premade robots with a tour of the electronics and a fighting demo! w/ Robotics from 5:45-7PM in Driftmier 1240.</p>
            <p style={{fontSize: '25px'}}>Wednesday, Nov 13 - Coding: Learn how to host a website on Github pages through a hands on coding workshop! w/ Codehub at 5PM in Boyd 201.</p>
            <p style={{fontSize: '25px'}}>Thursday, Nov 14 - Arduino: Learn how to use Arduino's from IEEE in a hands on workshop! w/ IEEE from 6-7PM in Driftmier Room 1290.</p>
            <p style={{fontSize: '25px'}}>Friday, Nov 15 - 3D Printing: Get 3D printing certified at the UGA Makerspace and create something of your own to print out! w/ UGAHacks from 5-6PM in Science Library 382 + Makerspace.</p>
        </div>
    </div>
        );
}
