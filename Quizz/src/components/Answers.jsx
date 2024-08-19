import React, { useRef } from "react";

const Answers = ({ answers, selectedAnswer, answerState, onSelect }) => {
  const shuffleAnswer = useRef();
  if (!shuffleAnswer.current) {
    shuffleAnswer.current = [...answers].sort(() => Math.random() - 0.5);
  }

  return (
    <div>
      <ul id="answers">
        {shuffleAnswer.current.map((answer) => {
          const isAnswer = selectedAnswer === answer;
          let cssClasses = "";

          if (answerState === "answered" && isAnswer) {
            cssClasses = "selected";
          }

          if (answerState === "correct" && isAnswer) {
            cssClasses = answerState;
          }

          if (answerState === "wrong" && isAnswer) {
            cssClasses = answerState;
          }
          return (
            <li key={answer} className="answer">
              <button onClick={() => onSelect(answer)} className={cssClasses}>
                {answer}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Answers;
