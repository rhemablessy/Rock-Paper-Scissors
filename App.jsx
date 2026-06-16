import React, { useState } from "react";
import "./App.css";

function App() {
  const choices = ["Rock", "Paper", "Scissors"];

  const [playerChoice, setPlayerChoice] = useState("");
  const [aiChoice, setAiChoice] = useState("");
  const [result, setResult] = useState("");

  const [playerScore, setPlayerScore] = useState(0);
  const [aiScore, setAiScore] = useState(0);
  const [draws, setDraws] = useState(0);

  const playGame = (choice) => {
    const randomIndex = Math.floor(Math.random() * 3);
    const computerChoice = choices[randomIndex];

    setPlayerChoice(choice);
    setAiChoice(computerChoice);

    if (choice === computerChoice) {
      setResult("🤝 Draw!");
      setDraws(draws + 1);
    } else if (
      (choice === "Rock" && computerChoice === "Scissors") ||
      (choice === "Paper" && computerChoice === "Rock") ||
      (choice === "Scissors" && computerChoice === "Paper")
    ) {
      setResult("🎉 You Win!");
      setPlayerScore(playerScore + 1);
    } else {
      setResult("😢 AI Wins!");
      setAiScore(aiScore + 1);
    }
  };

  const resetGame = () => {
    setPlayerScore(0);
    setAiScore(0);
    setDraws(0);
    setPlayerChoice("");
    setAiChoice("");
    setResult("");
  };

  return (
    <div className="container">
      <h1>✊ Rock Paper Scissors ✋</h1>

      <div className="scoreboard">
        <div className="score-card">
          <h2>You</h2>
          <p>{playerScore}</p>
        </div>

        <div className="score-card">
          <h2>Draws</h2>
          <p>{draws}</p>
        </div>

        <div className="score-card">
          <h2>AI</h2>
          <p>{aiScore}</p>
        </div>
      </div>

      <div className="buttons">
        <button onClick={() => playGame("Rock")}>🪨 Rock</button>
        <button onClick={() => playGame("Paper")}>📄 Paper</button>
        <button onClick={() => playGame("Scissors")}>✂️ Scissors</button>
      </div>

      {playerChoice && (
        <div className="result-box">
          <h3>Your Choice: {playerChoice}</h3>
          <h3>AI Choice: {aiChoice}</h3>
          <h2>{result}</h2>
        </div>
      )}

      <button className="reset-btn" onClick={resetGame}>
        Reset Game
      </button>
    </div>
  );
}

export default App;