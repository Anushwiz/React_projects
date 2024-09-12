import Options from "./Options";
function Question({ question, dispatch, answer }) {
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
