import React, { useState, useEffect } from 'react';
import Board from './Board';
import './Game.css';

function Game() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    const gameWinner = calculateWinner(squares);
    if (gameWinner) {
      setWinner(gameWinner);
      updateLocalStorage(gameWinner);
    }
  }, [squares]);

  const handleClick = (i) => {
    const newSquares = squares.slice();
    if (winner || newSquares[i]) {
      return;
    }
    newSquares[i] = xIsNext ? 'X' : 'O';
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  };

  const handleReset = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
    setWinner(null);
  };

  const updateLocalStorage = (winner) => {
    const wins = JSON.parse(localStorage.getItem('Victorias')) || { X: 0, O: 0 };
    wins[winner] += 1;
    localStorage.setItem('Victorias', JSON.stringify(wins));
  };

  const status = winner ? 'Ganador: ' + winner : squares.every(square => square !== null) ? 'Empate' : 'Siguiente: ' + (xIsNext ? 'X' : 'O');

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={squares} onClick={handleClick} />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <div className="game-button">
          <button onClick={handleReset}>Restart</button>
        </div>
      </div>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default Game;