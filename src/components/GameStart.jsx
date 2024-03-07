import { useState } from 'react';
// import { DRINKS, DESSERTS } from '../data.js';

export default function GameStart({onNewGame}) {
    const [gameMode, setGameMode] = useState('DRINKS');

    function handleSelect(option){
        // console.log(option);
        setGameMode(option);
    }

    return (
        <div id='game-start'>
            <h2>Welcome!</h2>
            <p>Select a game mode.</p>
            <div id='game-mode'>
                <div>
                    <input type='radio' name='game_mode' value='drinks' id='drinks' defaultChecked onClick={() => handleSelect('DRINKS')}/>
                    <label htmlFor='drinks'>Drinks</label>
                </div>
                <div>
                    <input type='radio' name='game_mode' value='desserts' id='desserts' onClick={() => handleSelect('DESSERTS')}/>
                    <label htmlFor='desserts'>Desserts</label>
                </div>
            </div>
            <button onClick={() => onNewGame(gameMode)}>Let's Play!</button>
        </div>
    );
}