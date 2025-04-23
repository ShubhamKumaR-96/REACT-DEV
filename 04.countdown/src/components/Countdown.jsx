import React, { useEffect, useRef, useCallback, useState } from "react";
import "./Countdown.css";

const Countdown = () => {
  const [target, setTarget] = useState(null);
  const [diff, setDiff] = useState(0);
  const id = useRef(0);

  const getTimeValues = useCallback(() => {
    if (diff <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    return { days, hours, minutes, seconds };
  }, [diff]);

  useEffect(() => {
    if (target && !isNaN(new Date(target))) {
      clearInterval(id.current);
      id.current = setInterval(() => {
        const difference = new Date(target) - new Date();
        setDiff(difference);
        console.log(difference);
      }, 1000);
    }
    return () => clearInterval(id.current);
  }, [target]);

  useEffect(() => {
    if (diff <= 0) {
      clearInterval(id.current);
      setDiff(0);
    }
  }, [diff]);

  const { days, hours, minutes, seconds } = getTimeValues();

  return (
    <div className="countdown-container">
      <h2>Countdown Timer</h2>
      <div className="input-container">
        <input
          type="datetime-local"
          className="datetime-input"
          onChange={(e) => setTarget(e.target.value)}
        />
      </div>
      <div className="timer-display">
        <ul className="timer-list">
          <li className="timer-item">
            <span className="timer-value" id="days">
              {days}
            </span>
            <span className="timer-label">Days</span>
          </li>
          <li className="timer-item">
            <span className="timer-value" id="hours">
              {hours}
            </span>
            <span className="timer-label">Hours</span>
          </li>
          <li className="timer-item">
            <span className="timer-value" id="minutes">
              {minutes}
            </span>
            <span className="timer-label">Minutes</span>
          </li>
          <li className="timer-item">
            <span className="timer-value" id="seconds">
              {seconds}
            </span>
            <span className="timer-label">Seconds</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Countdown;