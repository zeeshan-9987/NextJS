import { SquareValue } from "@/types/game";

type SquareProps = {
  value: SquareValue;
  onClick: () => void;
};

export default function Square({
  value,
  onClick,
}: SquareProps) {
  return (
    <button
      onClick={onClick}
      className="
        h-24 w-24
        rounded-2xl
        bg-slate-800
        text-4xl
        font-bold
        shadow-lg
        transition-all
        duration-200
        hover:bg-slate-700
        hover:scale-105
        active:scale-95
      "
    >
      {value}
    </button>
  );
}