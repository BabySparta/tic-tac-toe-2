import React, { useState } from "react";
import { calculateWinner } from "../utils/calculateWinner";
import Board from "./Board";

function Game() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setxIsNext] = useState(true);

  const handleClick = (i) => {
    const newSquares = squares.slice();

    if (calculateWinner(squares) || newSquares[i]) return;

    newSquares[i] = xIsNext ? "X" : "O";

    setxIsNext(!xIsNext);
    setSquares(newSquares);
  }

  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setxIsNext(true);
  }

  const BoardIsFull = () => {
    for (let i=0; i<squares.length; i++) {
      if (squares[i] === null) return false;
    }
    return true;
  }

  const winner = calculateWinner(squares);
  
  let status;
  if (winner) {
    status = "Winner: " + winner
  } else if(BoardIsFull()) {
    status = "It's A Draw";
  } else {
    status = (xIsNext ? "X" : "O") + "'s Turn"
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