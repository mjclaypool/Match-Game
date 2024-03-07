import { useState, useEffect } from 'react';

export default function GameBoard({board, onWin, reset, onReset}) {
    const [ selectedButton, setSelectedButton ] = useState({rowIndex: -1, colIndex: -1, card:{image:'', title:''}});
    const [ matchedCards, setMatchedCards ] = useState([]);
    const [ clickCount, setClickCount ] = useState(0);
    const [ prevButton, setPrevButton ] = useState({rowIndex: -1, colIndex: -1, card:{image:'', title:''}})

    function handleSelect(rowIndex, colIndex, card) {
        let newSelection = {rowIndex, colIndex, card};
        if (!buttonCompare(selectedButton, newSelection)){
            setPrevButton(selectedButton);
            setClickCount((prevClickCount) => prevClickCount+1)
            if (selectedButton.card.title !== '') {
                if (selectedButton.card.title === newSelection.card.title){
                    setMatchedCards([...matchedCards, newSelection.card.title]);
                }
                setSelectedButton({rowIndex: rowIndex, colIndex: colIndex, card:{image:card.image, title:''}})
            }
            setSelectedButton(newSelection)
        }
    }

    function buttonCompare(oldButton, newButton){
        if (oldButton.rowIndex === newButton.rowIndex && oldButton.colIndex === newButton.colIndex){
            return true
        } else {
            return false
        }
    }

    useEffect(() => {
        if (matchedCards.length === 8) {
            onWin(clickCount);
            setMatchedCards([])
            setSelectedButton({rowIndex: -1, colIndex: -1, card:{image:'', title:''}})
            setPrevButton({rowIndex: -1, colIndex: -1, card:{image:'', title:''}})
            setClickCount(0);
            onReset(false);
        } else if (reset === true) {
            setMatchedCards([])
            setSelectedButton({rowIndex: -1, colIndex: -1, card:{image:'', title:''}})
            setPrevButton({rowIndex: -1, colIndex: -1, card:{image:'', title:''}})
            setClickCount(0);
            onReset(false);
        }
    })

    function setCardImg(rowIndex, colIndex, selectedButton, matchedCards){
        if (matchedCards.length === 8) {
            return '';
        }
        for (let index = 0; index < matchedCards.length; index++) {
            if (matchedCards[index] === board[rowIndex][colIndex].title) {
                return board[rowIndex][colIndex].image;
            }
        }
        if (clickCount%2 === 0) {
            if (rowIndex === selectedButton.rowIndex && colIndex === selectedButton.colIndex) {
                return selectedButton.card.image;
            } else if (rowIndex === prevButton.rowIndex && colIndex === prevButton.colIndex) {
                    return prevButton.card.image;
            } else {
                return '';
            }
        } else {
            if (rowIndex === selectedButton.rowIndex && colIndex === selectedButton.colIndex) {
                return selectedButton.card.image;
        } else {
            return '';
            }
        }
    }

    return (
        <>
            <ol id='game-board'>
                {board.map((row, rowIndex) => (
                    <li key={rowIndex}>
                        <ol>
                            {row.map((selectedCard, colIndex) => (
                                <li key={colIndex}>
                                    <button onClick={() => {handleSelect(rowIndex, colIndex, selectedCard)}}>
                                        <img src={setCardImg(rowIndex, colIndex, selectedButton, matchedCards)}/>
                                    </button>
                                </li>))}
                        </ol>
                    </li>))}
            </ol>
        </>
    );
}