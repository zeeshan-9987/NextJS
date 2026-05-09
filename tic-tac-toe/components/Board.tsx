"use client";

import { useState } from "react";
import Square from "./Square";
import { SquareValue, Player } from "@/types/game";
import { checkWinner } from "@/utils/checkWinner";

export default function Board() {
  const [board, setBoard] = useState<SquareValue[]>(
    Array(9).fill(null)
  );

  const [currentPlayer, setCurrentPlayer] =
    useState<Player>("X");

  const result = checkWinner(board);

  const winner = result?.winner;

  const winningPattern = result?.pattern;

  const isDraw =
    !winner && board.every((square) => square !== null);

  function handleClick(index: number) {
    // Prevent overwrite
    if (board[index]) return;

    // Prevent clicks after winner
    if (result) return;

    const newBoard = [...board];

    newBoard[index] = currentPlayer;

    setBoard(newBoard);

    setCurrentPlayer(
      currentPlayer === "X" ? "O" : "X"
    );
  }

  function restartGame() {
    setBoard(Array(9).fill(null));
    setCurrentPlayer("X");
  }

  function getLineClasses() {
    if (!winningPattern) return "";

    const pattern = winningPattern.join(",");

    switch (pattern) {
      case "0,1,2":
        return "-translate-y-[115px]";

      case "3,4,5":
        return "";

      case "6,7,8":
        return "translate-y-[115px]";

      case "0,3,6":
        return "rotate-90 -translate-x-[115px]";

      case "1,4,7":
        return "rotate-90";

      case "2,5,8":
        return "rotate-90 translate-x-[115px]";

      case "0,4,8":
        return "rotate-45";

      case "2,4,6":
        return "-rotate-45";

      default:
        return "";
    }
  }

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="text-2xl font-bold">
        {winner && `Winner: ${winner}`}
        {isDraw && "It's a Draw!"}
        {!winner && !isDraw && `Turn: ${currentPlayer}`}
      </div>

      <div className="relative">
        {winningPattern && (
          <div
            className={`
              absolute
              left-1/2
              top-1/2
              z-10
              h-1
              w-[320px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-green-400
              shadow-lg
              transition-all
              duration-500
              ${getLineClasses()}
            `}
          />
        )}

        <div className="grid grid-cols-3 gap-4">
          {board.map((square, index) => (
            <Square
              key={index}
              value={square}
              onClick={() => handleClick(index)}
            />
          ))}
        </div>
      </div>

      <button
        onClick={restartGame}
        className="
          rounded-xl
          bg-blue-600
          px-6
          py-3
          text-lg
          font-semibold
          transition-all
          duration-200
          hover:scale-105
          hover:bg-blue-500
          active:scale-95
        "
      >
        Restart Game
      </button>
    </div>
  );
}