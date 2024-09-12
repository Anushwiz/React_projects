import { useQuiz } from "../contexts/QuizContext";
function Progress() {
  const { answer, index, numQuestions, maxPossiblePoints, points } = useQuiz();
  return (
    <header className="progress">
      <progress max={15} value={index + Number(answer !== null)}></progress>
      <p>
        Question <strong>{index + 1}</strong>/ {numQuestions}
      </p>
      <p>
        Points <strong>{points}</strong>/{maxPossiblePoints}
      </p>
    </header>
  );
}

export default Progress;
