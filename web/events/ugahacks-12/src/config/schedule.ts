/**
 * Schedule (§5.7), transcribed from the Figma day frames on 2026-08-27
 * (Friday `637:5440`, Saturday `637:6357`, Sunday `637:10121`). The design
 * now carries real programming, including sponsor-run sessions, so this
 * replaces the filler that stood here before.
 *
 * The event runs three days, Friday to Sunday, which settles the day count
 * PLAN.md §7 item 2 left open. Dates are Feb 5-7 2027. Feb 5 2027 is a
 * Friday, and three days starting Friday is the only reading consistent with
 * the Sunday frame. The hero chalkboard says "February 5-8" and the stat bar
 * says "Feb 6-8", so those two disagree with each other and with this. The
 * conflict stays open in PLAN.md §7. It is a copy question rather than a
 * schedule question, because the day frames name no calendar dates at all.
 *
 * The programming also argues for 36 hours over 48. Hacking runs from Friday
 * evening to the Sunday 8:00 AM submission deadline, which is about 36 hours.
 *
 * `start` and `end` are ISO local timestamps, with no `Z` or offset.
 * `src/lib/ics.ts` pairs them with a static `TZID:America/New_York`
 * VTIMEZONE block, so they must stay wall-clock times for Athens, GA, not
 * UTC. Events running past midnight carry the next day's date in `end`,
 * which is what makes the ICS durations come out right.
 *
 * `emphasis` marks the rows the design draws in gold rather than cream:
 * check-in, the opening ceremony, and meals. Everything else is a workshop,
 * challenge, or side session. The design applies no gold on Sunday even
 * though that day has two meals and the closing ceremony. That looks like an
 * oversight, but it is transcribed as drawn, because whether to make it
 * consistent is a design call.
 *
 * `name` and `ordinal` back the paged day header the design introduces, a
 * cream pill with gold arrows: Friday forward, Saturday both ways, Sunday
 * back. `label` stays because `Schedule.tsx` still reads it, and goes away
 * once that component is rebuilt against the paged layout.
 *
 * Three drawn times were corrected, all flagged for design review:
 *  - Saturday "Professional Development Workshop 11-11:30 PM" to AM. It sits
 *    between two 11 AM sessions and Lunch at 12 PM.
 *  - Sunday "Breakfast 8-9:30 PM" to AM. It sits between an 8:00 AM deadline
 *    and a 10 AM judging block.
 *  - Saturday "Hot Ones: Tractian 2-:00 PM" had no end hour drawn. Set to
 *    3:00 PM to match every other session in that slot.
 *
 * Times the comp leaves ambiguous but which read clearly in context, such as
 * "Scavenger Hunt 10-6:30 PM" meaning 10 AM to 6:30 PM, are resolved without
 * a note.
 */
export const SCHEDULE: {
  /** Day name as drawn in the paged header, e.g. "Friday". */
  name: string;
  /** Ordinal line under the day name, e.g. "Day 1". */
  ordinal: string;
  /** Combined badge text retained for the pre-paged `Schedule.tsx`. */
  label: string;
  date: string;
  iso: string;
  events: {
    what: string;
    start: string;
    end: string;
    where: string;
    /** Drawn in gold rather than cream: meals and all-hands moments. */
    emphasis?: boolean;
  }[];
}[] = [
  {
    name: "Friday",
    ordinal: "Day 1",
    label: "Friday — Day 1",
    date: "February 5",
    iso: "2027-02-05",
    events: [
      {
        what: "Check-In",
        start: "2027-02-05T17:00:00",
        end: "2027-02-05T18:30:00",
        where: "1st Floor",
        emphasis: true,
      },
      {
        what: "Opening Ceremony",
        start: "2027-02-05T18:30:00",
        end: "2027-02-05T19:30:00",
        where: "MLC 102",
        emphasis: true,
      },
      {
        what: "EL Credit Info Session",
        start: "2027-02-05T19:30:00",
        end: "2027-02-05T20:30:00",
        where: "MLC 102",
      },
      {
        what: "Dinner",
        start: "2027-02-05T20:30:00",
        end: "2027-02-05T21:30:00",
        where: "2nd Floor",
        emphasis: true,
      },
      {
        what: "First-Time Hackers",
        start: "2027-02-05T21:30:00",
        end: "2027-02-05T23:30:00",
        where: "MLC 171",
      },
      {
        what: "Cox Challenge",
        start: "2027-02-05T22:00:00",
        end: "2027-02-05T23:00:00",
        where: "MLC 213",
      },
      {
        what: "NCR Voyix Challenge",
        start: "2027-02-05T22:00:00",
        end: "2027-02-05T23:00:00",
        where: "MLC 214",
      },
      {
        what: "Tractian Challenge",
        start: "2027-02-05T22:00:00",
        end: "2027-02-05T23:00:00",
        where: "MLC 148",
      },
      {
        what: "State Farm Challenge",
        start: "2027-02-05T22:00:00",
        end: "2027-02-05T23:00:00",
        where: "MLC 150",
      },
    ],
  },
  {
    name: "Saturday",
    ordinal: "Day 2",
    label: "Saturday — Day 2",
    date: "February 6",
    iso: "2027-02-06",
    events: [
      {
        what: "Breakfast",
        start: "2027-02-06T08:00:00",
        end: "2027-02-06T09:00:00",
        where: "2nd Floor",
        emphasis: true,
      },
      {
        // Runs most of the day alongside everything else, per the comp.
        what: "Scavenger Hunt",
        start: "2027-02-06T10:00:00",
        end: "2027-02-06T18:30:00",
        where: "All MLC",
      },
      {
        what: "Git Workshop",
        start: "2027-02-06T10:00:00",
        end: "2027-02-06T11:00:00",
        where: "MLC 250",
      },
      {
        what: "Intro React.js Workshop",
        start: "2027-02-06T10:00:00",
        end: "2027-02-06T11:00:00",
        where: "MLC 213",
      },
      {
        what: "Tractian Workshop",
        start: "2027-02-06T10:00:00",
        end: "2027-02-06T11:00:00",
        where: "MLC 148",
      },
      {
        what: "Microcontroller Workshop",
        start: "2027-02-06T11:00:00",
        end: "2027-02-06T12:00:00",
        where: "MLC 251",
      },
      {
        what: "Cox Workshop",
        start: "2027-02-06T11:00:00",
        end: "2027-02-06T12:00:00",
        where: "MLC 213",
      },
      {
        // Comp draws "11-11:30 PM"; corrected to AM (see header note).
        what: "Professional Development Workshop",
        start: "2027-02-06T11:00:00",
        end: "2027-02-06T11:30:00",
        where: "MLC 207",
      },
      {
        what: "Lunch",
        start: "2027-02-06T12:00:00",
        end: "2027-02-06T13:00:00",
        where: "2nd Floor",
        emphasis: true,
      },
      {
        what: "ESports Challenges",
        start: "2027-02-06T13:00:00",
        end: "2027-02-06T19:30:00",
        where: "MLC 102",
      },
      {
        what: "Chrome Extension Workshop",
        start: "2027-02-06T13:00:00",
        end: "2027-02-06T14:00:00",
        where: "MLC 250",
      },
      {
        what: "NCR Voyix Workshop",
        start: "2027-02-06T13:00:00",
        end: "2027-02-06T14:00:00",
        where: "MLC 214",
      },
      {
        what: "Palantir Guest Speaker",
        start: "2027-02-06T14:00:00",
        end: "2027-02-06T15:00:00",
        where: "MLC 148",
      },
      {
        what: "AWS Workshop",
        start: "2027-02-06T14:00:00",
        end: "2027-02-06T15:00:00",
        where: "MLC 250",
      },
      {
        what: "Intro to Databases Workshop",
        start: "2027-02-06T14:00:00",
        end: "2027-02-06T15:00:00",
        where: "MLC 213",
      },
      {
        // Comp draws "2- :00 PM" with no end hour; set to 3:00 PM.
        what: "Hot Ones: Tractian",
        start: "2027-02-06T14:00:00",
        end: "2027-02-06T15:00:00",
        where: "MLC 268",
      },
      {
        what: "MLH Workshop",
        start: "2027-02-06T15:00:00",
        end: "2027-02-06T16:00:00",
        where: "MLC 147",
      },
      {
        what: "State Farm Workshop",
        start: "2027-02-06T15:00:00",
        end: "2027-02-06T16:00:00",
        where: "MLC 150",
      },
      {
        what: "Hot Ones: Cox",
        start: "2027-02-06T15:00:00",
        end: "2027-02-06T16:00:00",
        where: "MLC 268",
      },
      {
        what: "Intro to ML Workshop",
        start: "2027-02-06T15:00:00",
        end: "2027-02-06T16:00:00",
        where: "MLC 250",
      },
      {
        what: "Game Development Workshop",
        start: "2027-02-06T16:00:00",
        end: "2027-02-06T17:00:00",
        where: "MLC 213",
      },
      {
        what: "Hot Ones: NCR Voyix",
        start: "2027-02-06T16:00:00",
        end: "2027-02-06T17:00:00",
        where: "MLC 268",
      },
      {
        what: "IEEE Workshop",
        start: "2027-02-06T16:00:00",
        end: "2027-02-06T17:00:00",
        where: "MLC 214",
      },
      {
        what: "Google Cloud AI Workshop",
        start: "2027-02-06T17:00:00",
        end: "2027-02-06T18:00:00",
        where: "MLC 250",
      },
      {
        what: "House of Cards Challenge",
        start: "2027-02-06T17:00:00",
        end: "2027-02-06T18:00:00",
        where: "MLC 267",
      },
      {
        what: "Beyond the Hackathon",
        start: "2027-02-06T17:00:00",
        end: "2027-02-06T17:30:00",
        where: "MLC 150",
      },
      {
        what: "Meet the Team",
        start: "2027-02-06T17:30:00",
        end: "2027-02-06T18:00:00",
        where: "MLC 147",
      },
      {
        what: "AI Assistant Workshop",
        start: "2027-02-06T18:00:00",
        end: "2027-02-06T19:00:00",
        where: "MLC 350",
      },
      {
        what: "Lettuce Eating Competition",
        start: "2027-02-06T18:00:00",
        end: "2027-02-06T19:00:00",
        where: "MLC 148",
      },
      {
        what: "Escape Room - SCS",
        start: "2027-02-06T18:00:00",
        end: "2027-02-06T19:00:00",
        where: "MLC 150",
      },
      {
        what: "MLH Challenge",
        start: "2027-02-06T19:00:00",
        end: "2027-02-06T20:00:00",
        where: "MLC 147",
      },
      {
        what: "Dinner",
        start: "2027-02-06T20:00:00",
        end: "2027-02-06T21:00:00",
        where: "2nd Floor",
        emphasis: true,
      },
      {
        what: "Nerf War",
        start: "2027-02-06T21:30:00",
        end: "2027-02-06T23:00:00",
        where: "3rd Floor",
      },
      {
        // Crosses midnight -- `end` carries Sunday's date.
        what: "Talent Show",
        start: "2027-02-06T23:00:00",
        end: "2027-02-07T00:30:00",
        where: "MLC 213",
      },
      {
        // Open all afternoon and evening, closing at midnight.
        what: "Chill Space",
        start: "2027-02-06T13:00:00",
        end: "2027-02-07T00:00:00",
        where: "MLC 207",
      },
      {
        what: "Point Store",
        start: "2027-02-06T13:00:00",
        end: "2027-02-07T00:00:00",
        where: "4th Floor",
      },
      {
        what: "Painting Workshop",
        start: "2027-02-06T13:00:00",
        end: "2027-02-07T00:00:00",
        where: "MLC 348",
      },
    ],
  },
  {
    name: "Sunday",
    ordinal: "Day 3",
    label: "Sunday — Day 3",
    date: "February 7",
    iso: "2027-02-07",
    events: [
      {
        // Point-in-time deadline, not a span -- `end` mirrors `start` so the
        // shared {start,end} shape still holds and `ics.ts` can emit a VEVENT
        // without a special case (it omits DTEND when the two are equal).
        what: "Submission Deadline",
        start: "2027-02-07T08:00:00",
        end: "2027-02-07T08:00:00",
        where: "Devpost",
      },
      {
        // Comp draws "8-9:30 PM"; corrected to AM (see header note).
        what: "Breakfast",
        start: "2027-02-07T08:00:00",
        end: "2027-02-07T09:30:00",
        where: "2nd Floor",
      },
      {
        what: "Judging + Company Expo",
        start: "2027-02-07T10:00:00",
        end: "2027-02-07T13:00:00",
        where: "4th Floor",
      },
      {
        what: "Lunch",
        start: "2027-02-07T13:00:00",
        end: "2027-02-07T14:00:00",
        where: "2nd Floor",
      },
      {
        what: "Closing Ceremony",
        start: "2027-02-07T15:00:00",
        end: "2027-02-07T16:00:00",
        where: "MLC 102",
      },
    ],
  },
];
