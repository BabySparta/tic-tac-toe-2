import { calculateWinner } from "./calculateWinner";

const getEmptySquares = (squares) => {
  return squares.reduce((acc, square, index) => {
    if (square === null) acc.push(index);
    return acc;
  }, []);
};

const evaluate = (squares) => {
  const winner = calculateWinner(squares);
  if (winner === "X") {
    return -10;
  } else if (winner === "O") {
    return 10;
  } else {
    return 0;
  }
};

const minimax = (squares, depth, isMaximizing) => {
  const score = evaluate(squares);

  if (score === 10) return 10 - depth;

  if (score === -10) return -10 + depth;

  if (!getEmptySquares(squares).length) return 0;

  if (isMaximizing) {
    let best = -Infinity

    for (let i of getEmptySquares(squares)) {
      squares[i] = "O";
      best = Math.max(best, minimax(squares, depth + 1, false))
      squares[i] = null;
    }

    return best;
  } else {
    let best = Infinity;

    for (let i of getEmptySquares(squares)) {
      squares[i] = "X";
      best = Math.min(best, minimax(squares, depth + 1, true));
      squares[i] = null;
    }

    return best;
  }
};

export const getBestMove = (squares) => {
  let bestScore = -Infinity;
  let bestMove = -1;

  for (let i of getEmptySquares(squares)) {
    squares[i] = "O";
    let moveScore = minimax(squares, 0, false)
    squares[i] = null;

    if (moveScore > bestScore) {
      bestScore = moveScore;
      bestMove = i;
    }
  }

  return bestMove;
}
