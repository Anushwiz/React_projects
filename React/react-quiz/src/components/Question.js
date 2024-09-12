import { useQuiz } from "../contexts/QuizContext";
import Options from "./Options";
function Question() {
  const { questions, index, dispatch, answer } = useQuiz();
  const question = questions[index];
  return (
    <div>
      <h3>{question.question}</h3>
      <div className="options">
        <Options question={question} answer={answer} dispatch={dispatch} />
      </div>
    </div>
  );
}

export default Question;
