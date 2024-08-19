import React, { useState, useEffect } from "react";

const QuestionTimer = ({ timeout, onTimeout }) => {
  const [remainingTime, setremainingTime] = useState(timeout);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      console.log("timeout");
      onTimeout();
    }, timeout);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [onTimeout, timeout]);

  useEffect(() => {
    const timeoutId = setInterval(() => {
      console.log("interval");
      setremainingTime((prev) => prev - 100);
    }, 100);
    return () => {
      clearInterval(timeoutId);
    };
  }, []);

  return (
    <div>
      <progress id="question-time" max={timeout} value={remainingTime} />
    </div>
  );
};

export default QuestionTimer;
