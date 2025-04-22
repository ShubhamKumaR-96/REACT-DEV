import React from "react";
import "./Countdown.css";

const Countdown = () => {
  return (
    <div className="countdown-container">
      <h2>Countdown Timer</h2>
      <div className="input-container">
        <input type="datetime-local" className="datetime-input" />
        <button className="submit-btn">Start</button>
      </div>
      <div className="timer-display">
        <ul className="timer-list">
          <li className="timer-item">
            <span className="timer-value" id="days">00</span>
            <span className="timer-label">Days</span>
          </li>
          <li className="timer-item">
            <span className="timer-value" id="hours">00</span>
            <span className="timer-label">Hours</span>
          </li>
          <li className="timer-item">
            <span className="timer-value" id="minutes">00</span>
            <span className="timer-label">Minutes</span>
          </li>
          <li className="timer-item">
            <span className="timer-value" id="seconds">00</span>
            <span className="timer-label">Seconds</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Countdown;