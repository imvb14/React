import quizlogo from "../assets/quiz-logo.png";
export default function Header() {
  return (
    <div>
      <header>
        <img src={quizlogo} />
        <p> Quizz</p>
      </header>
    </div>
  );
}
