import React, { useState } from "react";
import { calculateWinner } from "../utils/calculateWinner";
import Board from "./Board";
import { getBestMove } from "../utils/minimax";
import "../App.css";

function Game() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  const handleClick = (i) => {
    const newSquares = squares.slice();

    if (calculateWinner(squares) || newSquares[i]) return;

    newSquares[i] = "X";

    
    const bestMove = getBestMove(newSquares);
    if (bestMove !== -1) {
      newSquares[bestMove] = 'O';
    }

    setSquares(newSquares);
  }

  const resetGame = () => {
    setSquares(Array(9).fill(null));
  }

  const winner = calculateWinner(squares);
  
  let status;
  if (winner === "Draw") {
    status = "It's A Draw";
  } else if(winner) {
    status = "The AI Overlord Wins Again";
  } else {
    status = "Your Turn";
  }

  return (
    <div className="body">
      <div className="status">{status}</div>
      <Board onClick={(i) => handleClick(i)} squares={squares}/>
      <button className="resetGame" onClick={() => resetGame()}>Reset Game</button>
    </div>
  )
}

export default Game;