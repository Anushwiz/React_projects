function Progress({ answer, index, numQuestions, maxPossiblePoints, points }) {
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
