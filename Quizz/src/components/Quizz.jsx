import React, { useCallback, useState, useRef } from "react";
import question from "../questions";
import compeltedlogo from "../assets/quiz-complete.png";

import Questions from "./Questions";

function Quizz() {
  const [answerState, setAnswersState] = useState("");
  const [userAnswer, setuserAnswer] = useState([]);
  const activeQuestion =
    answerState === "" ? userAnswer.length : userAnswer.length - 1;

  const selectedAnswer = useCallback(
    function selectedAnswer(answer) {
      setAnswersState("answered");
      setuserAnswer((prev) => {
        return [...prev, answer];
      });
      setTimeout(() => {
        if (answer === question[activeQuestion].answers[0]) {
          setAnswersState("correct");
        } else {
          setAnswersState("wrong");
        }
      }, 1000);

      setTimeout(() => {
        setAnswersState("");
      }, 2000);
    },
    [activeQuestion],
  );

  const skipAnswer = useCallback(() => {
    selectedAnswer(null);
  }, [selectedAnswer]);
  if (userAnswer.length === question.length) {
    return (
      <div id="summary">
        <img src={compeltedlogo} />

        <h2> Quiz Completed </h2>
      </div>
    );
  }

  return (
    <div>
      <Questions
        key={activeQuestion}
        questionText={question[activeQuestion].text}
        answers={question[activeQuestion].answers}
        answerState={answerState}
        onselectedAnswer={selectedAnswer}
        answerLength={userAnswer[userAnswer.length - 1]}
        skipAnswer={skipAnswer}
        no={userAnswer.length + 1}
      />
    </div>
  );
}

export default Quizz;
