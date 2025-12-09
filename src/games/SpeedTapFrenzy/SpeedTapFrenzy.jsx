import { useState, useEffect } from "react";
import "./style.css";

const SpeedTapFrenzy = ({ mode = "free", onFinish }) => {
  // mode = "free" | "paid" | "referral"

  const [timeLeft, setTimeLeft] = useState(10);
  const [score, setScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);

  // Start countdown
  useEffect(() => {
    if (!gameStarted) return;
    if (timeLeft <= 0) {
      onFinish && onFinish(score, mode);
      return;
    }

    const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft, gameStarted]);

  const startGame = () => {
    setGameStarted(true);
    setScore(0);
    setTimeLeft(10);
  };

  return (
    <div className="tap-container">
      {!gameStarted ? (
        <button onClick={startGame} className="tap-start-btn">
          Start Game
        </button>
      ) : (
        <>
          <h2 className="tap-timer">Time: {timeLeft}</h2>
          <h3 className="tap-score">Score: {score}</h3>

          <button className="tap-btn" onClick={() => setScore(score + 1)}>
            TAP!
          </button>
        </>
      )}
    </div>
  );
};

export default SpeedTapFrenzy;
