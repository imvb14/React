import QuestionTimer from "./QuestionTimer";
import Answers from "./Answers";

const Questions = ({
  questionText,
  answers,
  answerState,
  onselectedAnswer,
  answerLength,
  skipAnswer,
  no,
}) => {
  return (
    <div id="quiz">
      <QuestionTimer timeout={10000} onTimeout={skipAnswer} />
      <div id="questions">
        <p>
          {no} {questionText}
        </p>
        <Answers
          answers={answers}
          selectedAnswer={answerLength}
          answerState={answerState}
          onSelect={onselectedAnswer}
        />
      </div>
    </div>
  );
};

export default Questions;
