import React, { useState, useRef } from "react";
import ShowResult from "./ShowResult";

const TimerChallenge = ({ title, targetTime }) => {
  const timer = useRef();
  const modal = useRef();
  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

  // const timeIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;
  const timeIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    setTimeRemaining(targetTime * 1000);
    modal.current.open();
  }
  function handleStartTimer() {
    timer.current = setInterval(() => {
      setTimeRemaining((prevTime) => prevTime - 10);
    }, 10);
    settimerStarted(true);
  }
  function handleStopTimer() {
    clearInterval(timer.current);
    modal.current.open();
    // setTimeRemaining(targetTime * 1000);
  }
  return (
    <>
      <ShowResult
        targetTime={targetTime}
        ref={modal}
        remaining={timeRemaining}
      />

      <div className="challenge">
        <h2>{title}</h2>

        <p className="challenge-time">
          {targetTime + "second" + (targetTime > 1 ? "s" : "")}
        </p>
        <p>
          <button onClick={timeIsActive ? handleStopTimer : handleStartTimer}>
            {timeIsActive ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timeIsActive ? "active" : ""}>
          {timeIsActive ? "Timer is running.." : "Timer inactive.."}
        </p>
      </div>
    </>
  );
};

export default TimerChallenge;
