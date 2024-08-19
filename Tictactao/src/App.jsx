import { useState } from "react";
import Board from "./components/Board";
import Player from "./components/Player";
import Info from "./components/Info";

function App() {
  const initalnameGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];

  const [turns, setTruns] = useState(initalnameGameBoard);
  const [activePlayer, setActivePlayer] = useState("X");
  function handleBoardClick(rowIndex, colIndex) {
    setTruns((prev) => {
      let newTurns = [...prev.map((item) => [...item])];
      newTurns[rowIndex][colIndex] = activePlayer;
      return newTurns;
    });
    setActivePlayer((prev) => (prev === "X" ? "O" : "X"));
  }

  return (
    <>
      <main>
        <div id="game-container">
          <ol id="players" className="highlight-player">
            <Player
              initalname="Player 1"
              symbol="X"
              active={activePlayer === "X"}
            />
            <Player
              initalname="Player 2"
              symbol="O"
              active={activePlayer === "O"}
            />
          </ol>
          <Board board={turns} onHandleBoardClick={handleBoardClick} />
        </div>
        <Info Info={activePlayer} />
      </main>
    </>
  );
}

export default App;
