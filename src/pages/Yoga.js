import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Jumbotron } from "react-bootstrap";

const Yoga = () => {
  const [second, setSecond] = useState("00");
  const [minute, setMinute] = useState("00");
  const [isActive, setIsActive] = useState(false);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    let intervalId;

    if (isActive) {
      intervalId = setInterval(() => {
        const secondCounter = counter % 60;
        const minuteCounter = Math.floor(counter / 60);

        const computedSecond =
          String(secondCounter).length === 1
            ? `0${secondCounter}`
            : secondCounter;
        const computedMinute =
          String(minuteCounter).length === 1
            ? `0${minuteCounter}`
            : minuteCounter;

        setSecond(computedSecond);
        setMinute(computedMinute);

        setCounter((counter) => counter + 1);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isActive, counter]);

  const stopTimer = () => {
    setIsActive(false);
    setCounter(0);
    setSecond("00");
    setMinute("00");
  };

  return (
    <div>
      <Jumbotron>
        <h1>Yoga</h1>
      </Jumbotron>
      <h1>Here you can find Yoga!</h1>

      <div className="container">
        <div className="time">
          <span className="minute">{minute}</span>
          <span>:</span>
          <span className="second">{second}</span>
        </div>
        <div className="buttons">
          <button onClick={() => setIsActive(!isActive)} className="start">
            {isActive ? "Pause" : "Start"}
          </button>
          <button onClick={stopTimer} className="reset">
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Yoga;
