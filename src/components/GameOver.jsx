export default function GameOver({onRestart, onReturnHome, msg}) {
    return (
        <div id='game-over'>
            <h2>You win!</h2>
            <p>{msg}</p>
            <div id='game-restart'>
                {/* <button onClick={onRestart}>Play Again</button> */}
                <button onClick={onReturnHome}>Return Home</button>
            </div>
        </div>
    );
}