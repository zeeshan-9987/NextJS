import Board from "@/components/Board";

export default function Home() {
  return (
    <main
      className="
        flex
        min-h-screen
        flex-col
        items-center
        justify-center
        bg-gradient-to-br
        from-slate-900
        via-slate-800
        to-slate-900
        p-6
      "
    >
      <div className="mb-8 text-center">
        <h1
          className="
            text-5xl
            font-extrabold
            tracking-tight
          "
        >
          Tic Tac Toe
        </h1>

        <p className="mt-2 text-slate-300">
          Modern Next.js Game
        </p>
      </div>

      <Board />

      <p
  className="
    fixed
    bottom-4
    left-4
    text-sm
    text-slate-400
  "
>
  Built by Zeeshan Ansari 🚀
</p>
    </main>
  );
}