import { useState } from 'react';
import { DRINKS, DESSERTS } from '../data.js';

export default function Card(card) {
    const [activeCard, setActiveCard] = useState();

    function handleSetActiveCard() {
        setActiveCard(cardImage);
    }

    function handleClick(){
        console.log(card.image);
    }

    return (
        // <button onClick={() => {handleSelect(rowIndex, colIndex, selectedCard)}}>
        //     <img src={setCardImg(rowIndex, colIndex, selectedButton, matchedCards)}/>
        // </button>
        <>
            <button onClick={handleClick}><img src={card.image}/></button>
            {/* <p>{card.image}</p> */}
        </>
    );
}