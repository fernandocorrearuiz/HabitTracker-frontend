import React, { useEffect, useState } from "react";
import useSound from "use-sound";

import sound from "../sounds/2019-04-06_-_Deep_Meditation_-_David_Fesliyan.mp3";
import "./Yoga.css";
import { Jumbotron } from "react-bootstrap";

const Yoga = () => {
  const [play, { stop }] = useSound(sound);

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
    <div
      style={{
        backgroundImage: `url("https://www.mandarinstone.com/app/uploads/2018/03/Fusion-Light-Grey-Matt-Porcelain-1a-1400x1400.jpg")`,
      }}
    >
      <Jumbotron>
        <h1>Yoga Sessions</h1>
      </Jumbotron>

      <div className="container1">
        <div className="time">
          <span className="minute">{minute}</span>
          <span>:</span>
          <span className="second">{second}</span>
        </div>
        <div className="buttons">
          <button
            onClick={() => {
              setIsActive(!isActive);
              isActive === false ? play() : stop();
            }}
            className="start"
          >
            {isActive ? "Pause" : "Start"}
          </button>
          <button
            onClick={() => {
              stop();
              stopTimer();
            }}
            className="reset"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Yoga;
