import { useState } from "react";
import React from "react";
import Square from "./Square";
import "./Board.css";

function Board({ onClick, squares }) {
  const renderSquare = (i) => (
    <Square onClick={() => onClick(i)} id={squares[i]} />
  );
  return (
    <div className="board">
      {renderSquare(0)}
      {renderSquare(1)}
      {renderSquare(2)}
      {renderSquare(3)}
      {renderSquare(4)}
      {renderSquare(5)}
      {renderSquare(6)}
      {renderSquare(7)}
      {renderSquare(8)}
    </div>
  );
}

export default Board;
