import { useEffect } from "react";
import { useQuiz } from "../contexts/QuizContext";
function Timer() {
  const { secondsRemaining, dispatch } = useQuiz();
  const min = Math.ceil(secondsRemaining / 60);
  const sec = secondsRemaining % 60;
  useEffect(
    function () {
      const id = setInterval(() => {
        dispatch({ type: "tick" });
      }, 1000);
      return () => clearInterval(id);
    },
    [dispatch]
  );
  return (
    <div>
      <button className="btn timer">
        {min < 10 && "0"}
        {min}:{sec < 10 && "0"}
        {sec}
      </button>
    </div>
  );
}

export default Timer;
