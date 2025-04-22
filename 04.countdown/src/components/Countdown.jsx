import React, { useEffect, useRef, useState } from "react";
import "./Countdown.css";

const Countdown = () => {
  const [target, setTarget] = useState(null);
  const [diff, setDiff] = useState(0);
  const id = useRef(0);

  const handleSubmit = () => {
    id.current = setInterval(() => {
      const difference = new Date(target) - new Date();
      setDiff(difference);
      console.log(difference); // Log the calculated value directly
    },1000);
  };

  useEffect(()=>{
    if (diff<=0){
        clearInterval(id.current)
        setDiff(0)
    }
  },[diff])

  const getDays=()=>{
    return Math.floor(diff/(1000*60*60*24))
  }
  const getHours=()=>{
    const hoursInMns=diff%(1000*60*60*24)
    return Math.floor(hoursInMns/(1000*60*60))
  }

  const getMints=()=>{
    const inMns=diff%(1000*60*60)
    return Math.floor(inMns/(1000*60))
  }
  
  const getSeconds=()=>{
    const inSec=diff%(1000*60)
    return Math.floor(inSec/(1000))
  }



  return (
    <div className="countdown-container">
      <h2>Countdown Timer</h2>
      <div className="input-container">
        <input
          type="datetime-local"
          className="datetime-input"
          onChange={(e) => setTarget(e.target.value)}
        />
        <button className="submit-btn" onClick={handleSubmit}>
          Start
        </button>
      </div>
      <div className="timer-display">
        <ul className="timer-list">
          <li className="timer-item">
            <span className="timer-value" id="days">
              {getDays()}
            </span>
            <span className="timer-label">Days</span>
          </li>
          <li className="timer-item">
            <span className="timer-value" id="hours">
              {getHours()}
            </span>
            <span className="timer-label">Hours</span>
          </li>
          <li className="timer-item">
            <span className="timer-value" id="minutes">
              {getMints()}
            </span>
            <span className="timer-label">Minutes</span>
          </li>
          <li className="timer-item">
            <span className="timer-value" id="seconds">
              {getSeconds()}
            </span>
            <span className="timer-label">Seconds</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Countdown;
