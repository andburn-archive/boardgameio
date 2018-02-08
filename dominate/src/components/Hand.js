import React from 'react';

import Card from './Card';

import style from './Hand.module.css';

const hand = (props) => {
    const cards = [];
    props.cards.forEach((x, i) => {
        const card = (
            <Card key={`${i}${x}`} cardId={x} 
                click={() => props.click(props.player, i)} />
        );
        cards.push(card)
    });

    return (
        <div className={style.Hand}>
            {cards}
        </div>
    );
}

export default hand;