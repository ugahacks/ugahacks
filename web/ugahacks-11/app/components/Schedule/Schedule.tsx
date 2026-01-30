"use client";

import Image from "next/image";
import React from "react";
import { DaySchedule, Event, schedule } from "./scheduleData";

const Schedule: React.FC = () => {
  const icsPath = "/UGAHacks_2026_Schedule.ics";
  const icsUrl = "https://11.ugahacks.com" + icsPath;

  const gcalUrl =
    "https://calendar.google.com/calendar/u/0/r?cid=" +
    encodeURIComponent(icsUrl);
  return (
    <section
      id="schedule"
      className="min-h-screen w-full flex flex-col items-center pt-30 text-[#152673] font-amarante relative"
      style={{ background: "#A7B7D9" }}
    >
      {/* Decorative stars */}
      <div className="absolute top-20 left-4 sm:left-10 md:left-16 z-10">
        <Image
          src="/Star 37.png"
          alt="Star"
          width={60}
          height={60}
          className="object-contain opacity-80 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16"
        />
      </div>

      <div className="absolute top-32 right-4 sm:right-10 md:right-16 z-10">
        <Image
          src="/Star 47.png"
          alt="Star"
          width={80}
          height={80}
          className="object-contain opacity-75 w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20"
        />
      </div>

      {/* Schedule Header Image */}
      {/* Schedule Header + Calendar Buttons */}
      <div className="w-full max-w-5xl flex flex-col sm:flex-row items-center justify-between mb-8 px-4 sm:px-6 md:px-8 gap-4">
        {/* Schedule Header Image */}
        <Image
          src="/Textschedule.png"
          alt="Schedule"
          width={800}
          height={200}
          className="object-contain w-72 sm:w-80 md:w-96 h-20 sm:h-24 md:h-24"
        />

        {/* Calendar Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <a href={gcalUrl} target="_blank" className="rounded-xl px-4 py-2 text-sm font-semibold text-white bg-[#152673] hover:opacity-90 transition shadow-md" rel="noopener noreferrer">Add to Google Calendar</a>

          <a
            href="/UGAHacks_2026_Schedule.ics"
            download
            className="rounded-xl px-4 py-2 text-sm font-semibold text-[#152673] border-2 border-[#152673] hover:bg-[#152673] hover:text-white transition shadow-md"
          >
            Download .ics
          </a>
        </div>
      </div>


      {/* Schedule content */}
      <div className="schedule-container w-full max-w-5xl px-4 sm:px-6 md:px-8">
        {schedule.map((day: DaySchedule, index: number) => (
          <div
            key={index}
            className={`day-card mb-10 ${day.day === "Saturday"
              ? "max-h-[600px] overflow-y-auto pr-2 sm:pr-4 md:pr-4"
              : ""
              }`}
          >
            {/* Day header */}
            <h2 className="mb-6 text-center text-2xl sm:text-3xl font-bold text-[#3E4C88]">
              {day.day} – {day.date}
            </h2>

            {/* Header row (desktop/tablet) */}
            <div className="hidden md:grid grid-cols-3 gap-4 font-semibold border-b pb-2 text-xl">
              <span>Event</span>
              <span className="text-center">Time</span>
              <span className="text-right">Location</span>
            </div>

            {/* Events */}
            {day.events.map((event: Event, i: number) => (
              <div
                key={i}
                className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 py-3 border-b last:border-b-0 text-base sm:text-lg"
              >
                {/* Event title */}
                <span className="font-medium">{event.title}</span>

                {/* Time + mobile location */}
                <div className="flex justify-between md:justify-center">
                  <span>{event.time}</span>
                  <span className="md:hidden text-right">{event.location}</span>
                </div>

                {/* Desktop-only location */}
                <span className="hidden md:block text-right">{event.location}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Schedule;
