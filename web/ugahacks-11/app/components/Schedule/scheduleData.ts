
export interface Event {
    time: string;
    title: string;
    location: string;
}

export interface DaySchedule {
  day: string;
  date: string;
  events: Event[];
}

export const schedule: DaySchedule[] = [
  {
    day: "Friday",
    date: "DAY 1",
    events: [
        { title: "Check-In", time: "5-6:30 PM", location: "1ST FLOOR" },
        { title: "Opening Ceremony", time: "6:30-7:30 PM", location: "MLC 102" },
        { title: "EL Credit Info Session", time: "7:30-8:30 PM", location: "MLC 102" },
        { title: "Dinner", time: "8:30-9:30 PM", location: "2ND FLOOR" },
        { title: "First-Time Hackers", time: "9:30-11:30 PM", location: "MLC 171" },
        { title: "Cox Challenge", time: "10-11:00 PM", location: "MLC 213" },
        { title: "NCR Voyix Challenge", time: "10-11:00 PM", location: "MLC 214" },
        { title: "Tractian Challenge", time: "10-11:00 PM", location: "MLC 148" },
        { title: "State Farm Challenge", time: "10-11:00 PM", location: "MLC 150" }
    ]
    },
    {
        day: "Saturday",
        date: "DAY 2",
        events: [
            { title: "Breakfast", time: "8-9:00 AM", location: "2ND FLOOR" },
            { title: "Scavenger Hunt", time: "10-6:30 PM", location: "ALL MLC" },
            { title: "Git Workshop", time: "10-11:00 AM", location: "MLC 250" },
            { title: "Intro React.js Workshop", time: "10-11:00 AM", location: "MLC 213" },
            { title: "Tractian Workshop", time: "10-11:00 AM", location: "MLC 148" },
            { title: "MLH: Coding with Google AI Studio Workshop", time: "10-11:00 AM", location: "MLC 147" },
            { title: "Microcontroller Workshop", time: "11-12:00 PM", location: "MLC 251" },
            { title: "Cox Workshop", time: "11-12:00 PM", location: "MLC 213" },
            { title: "Professional Development Workshop", time: "11-11:30 AM", location: "MLC 207" },
            { title: "Lunch", time: "12-1:00 PM", location: "2ND FLOOR" },
            { title: "Esports Challenges", time: "1-7:30 PM", location: "MLC 102" },
            { title: "Chrome Extension Workshop", time: "1-2:00 PM", location: "MLC 250" },
            { title: "NCR Voyix Workshop", time: "1-2:00 PM", location: "MLC 214" },
            { title: "Palantir Guest Speaker", time: "2-3:00 PM", location: "MLC 148" },
            { title: "AWS Workshop", time: "2-3:00 PM", location: "MLC 250" },
            { title: "Intro to Databases Workshop", time: "2-3:00 PM", location: "MLC 213" },
            { title: "Hot Ones: Tractian", time: "2-3:00 PM", location: "MLC 268" },
            { title: "MLH Workshop", time: "3-4:00 PM", location: "MLC 147" },
            { title: "State Farm Workshop", time: "3-4:00 PM", location: "MLC 150" },
            { title: "Hot Ones: Cox", time: "3-4:00 PM", location: "MLC 268" },
            { title: "Intro to ML Workshop", time: "3-4:00 PM", location: "MLC 250" },
            { title: "Game Development Workshop", time: "4-5:00 PM", location: "MLC 213" },
            { title: "Hot Ones: NCR Voyix", time: "4-5:00 PM", location: "MLC 268" },
            { title: "IEEE Workshop", time: "4-5:00 PM", location: "MLC 214" },
            { title: "Google Cloud AI Workshop", time: "5-6:00 PM", location: "MLC 250" },
            { title: "House of Cards Challenge", time: "5-6:00 PM", location: "MLC 267" },
            { title: "Beyond the Hackathon", time: "5-5:30 PM", location: "MLC 150" },
            { title: "Meet the Team", time: "5:30-6:00 PM", location: "MLC 147" },
            { title: "AI Assistant Workshop", time: "6-7:00 PM", location: "MLC 350" },
            { title: "Lettuce Eating Competition", time: "6-7:00 PM", location: "MLC 148" },
            { title: "Escape Room - SCS", time: "6-7:00 PM", location: "MLC 150" },
            { title: "Dinner", time: "8-9:00 PM", location: "2ND FLOOR" },
            { title: "Nerf War", time: "9:30-11:00 PM", location: "3RD FLOOR" },
            { title: "Talent Show", time: "11-12:30 AM", location: "MLC 213" },
            { title: "Chill Space", time: "1 PM-12 AM", location: "MLC 207" },
            { title: "Point Store", time: "1 PM-12 AM", location: "4TH FLOOR" },
            { title: "Painting Workshop", time: "1 PM-12 AM", location: "MLC 348" }
        ]
    },
    {
        day: "Sunday",
        date: "DAY 3",
        events: [
            { title: "Submission Deadline", time: "8:00 AM", location: "DEVPOST" },
            { title: "Breakfast", time: "8-9:30 AM", location: "2ND FLOOR" },
            { title: "Judging + Company Expo", time: "10-1:00 PM", location: "4TH FLOOR" },
            { title: "Lunch", time: "1-2:00 PM", location: "2ND FLOOR" },
            { title: "Closing Ceremony", time: "3-4:00 PM", location: "MLC 102" }
        ]
    }
];