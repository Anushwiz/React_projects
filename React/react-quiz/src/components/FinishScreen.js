import { useQuiz } from "../contexts/QuizContext";

function FinishScreen() {
  const { points, maxPossiblePoints, highScore, dispatch } = useQuiz();
  const pointsPercentage = (points / maxPossiblePoints) * 100;
  let emoji;
  if (pointsPercentage === 100) emoji = "🏆";
  if (pointsPercentage === 80 && pointsPercentage < 100) emoji = "🎊";
  if (pointsPercentage === 50 && pointsPercentage < 80) emoji = "😍";
  if (pointsPercentage > 0 && pointsPercentage < 50) emoji = "😃";
  if (pointsPercentage === 0) emoji = "🗑";
  return (
    <>
      <p className="result">
        <span>{emoji}</span> You have got {points} out of {maxPossiblePoints}(
        {Math.ceil(pointsPercentage)}%)
      </p>
      <p className="highscore">High Score is {highScore}</p>
      <button className="btn" onClick={() => dispatch({ type: "restart" })}>
        Restart
      </button>
    </>
  );
}

export default FinishScreen;
