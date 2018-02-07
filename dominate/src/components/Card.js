import React from 'react';

import Cards from '../cards';

import style from './Card.module.css';

const card = (props) => {
    let card = { id: 0, name: '?' }
    const cardData = Cards.get(props.cardId);  
    if (cardData !== undefined) {
        card = cardData;
    }
    return (
        <div className={style.Card}>
            <p>{card.id}</p>
            <p>{card.name}</p>
        </div>
    );
}

export default card;