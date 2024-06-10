import React, { useState, useEffect } from 'react';
import './GameStation.css';

function GameStation() {
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10); // 10 segundos de tempo de jogo
  const [isPlaying, setIsPlaying] = useState(false);

  const startGame = () => {
    setScore(0);
    setTimeLeft(10);
    setIsPlaying(true);
  };

  useEffect(() => {
    if (isPlaying && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0) {
      setIsPlaying(false);
    }
  }, [isPlaying, timeLeft]);

  const handleButtonClick = () => {
    if (isPlaying) {
      setScore(score + 1);
    }
  };

  return (
    <div className="game-station-container">
      <h1>Game Station</h1>
      <p>Click the button as many times as you can in 10 seconds!</p>
      <button onClick={startGame} disabled={isPlaying}>
        {isPlaying ? 'Game in Progress' : 'Start Game'}
      </button>
      <div className="game-info">
        <p>Time Left: {timeLeft}</p>
        <p>Score: {score}</p>
      </div>
      {isPlaying && (
        <button className="click-button" onClick={handleButtonClick}>
          Click Me!
        </button>
      )}
    </div>
  );
}

export default GameStation;
