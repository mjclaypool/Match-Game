import { useState } from 'react'
import { DRINKS, DESSERTS } from './data.js';

import GameStart from './components/GameStart.jsx';
import GameBoard from './components/GameBoard.jsx';
import GameOver from './components/GameOver.jsx';
import './App.css'

const GAME_BOARD = [
  [null, null, null, null],
  [null, null, null, null],
  [null, null, null, null],
  [null, null, null, null]
];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function buildGameBoard(gameMode) {
  let selectedMode = DRINKS;
  if (gameMode === 'DESSERTS'){
    selectedMode = DESSERTS;
  }
  let newGameBoard = GAME_BOARD.map((array) => array);
  let assignList = [
    [0,0], [0,1], [0,2], [0,3],
    [1,0], [1,1], [1,2], [1,3],
    [2,0], [2,1], [2,2], [2,3],
    [3,0], [3,1], [3,2], [3,3]
  ];

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 2; j++) {
      let x = assignList[genRandomInt(assignList.length-1)];
      newGameBoard[x[0]][x[1]] = selectedMode[i];
      let toRemove = assignList.indexOf(x);
      assignList.splice(toRemove, 1);
    }
  }
  return newGameBoard;
}

function App() {
  const [board, setBoard] = useState(GAME_BOARD);
  const [winner, setWinner] = useState(false);
  const [reset, setReset] = useState(false);
  const [newGame, setNewGame] = useState(true);
  const [winnerMsg, setWinnerMsg] = useState(``);

  function handleNewGame(gameMode) {
    setBoard(buildGameBoard(gameMode));
    setWinner(false);
    setReset(true);
    setNewGame(false);
  }

  function handleReturnHome(){
    setNewGame(true);
    setWinner(false);
  }

  function handleWin(clickCount) {
      setWinnerMsg(`You won with ${clickCount} clicks!!!`)
      setWinner(true);
  }

  function handleReset(){
    setReset(false);
  }

  return (
    <>
      {/* <button onClick={handleNewGame}>New Game</button> */}
      <div id="game-container">
        {(newGame) && <GameStart onNewGame={handleNewGame}/>}
        {(winner) && <GameOver onRestart={handleNewGame} onReturnHome={handleReturnHome} msg={winnerMsg}/>}
        <GameBoard board={board} onWin={handleWin} reset={reset} onReset={handleReset}/>
      </div>
    </>
  )
}

export default App
