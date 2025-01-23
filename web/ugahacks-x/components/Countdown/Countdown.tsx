"use client";
import React, { useEffect, useState } from "react";

const Countdown: React.FC = () => {
  const targetDate = new Date("February 7, 2025 17:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  function calculateTimeLeft() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="countdown text-white text-center p-4 rounded-md shadow-lg"
      style={{ fontFamily: "'Distortion Dos Analogue', sans-serif", backgroundColor: "transparent" }}
    >
      <h1 className="text-sm md:text-xl lg:text-2xl font-bold mb-4 text-pink-500 uppercase tracking-wider">
        Countdown to UGAHACKS-X
      </h1>
      <div className="time-display flex justify-center gap-2 md:gap-4 lg:gap-6 text-base md:text-lg lg:text-xl font-bold">
        <span className="bg-gray-900 px-3 py-1 rounded hover:bg-pink-500 transition-colors duration-300">
          {timeLeft.days}d
        </span>
        <span className="bg-gray-900 px-3 py-1 rounded hover:bg-pink-500 transition-colors duration-300">
          {timeLeft.hours}h
        </span>
        <span className="bg-gray-900 px-3 py-1 rounded hover:bg-pink-500 transition-colors duration-300">
          {timeLeft.minutes}m
        </span>
        <span className="bg-gray-900 px-3 py-1 rounded hover:bg-pink-500 transition-colors duration-300">
          {timeLeft.seconds}s
        </span>
      </div>
    </div>
  );
};

export default Countdown;
