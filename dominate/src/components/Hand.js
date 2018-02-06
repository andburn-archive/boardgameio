import React from 'react';

import Card from './Card';

import style from './Hand.module.css';

const hand = (props) => {
    const cards = [];
    props.cards.forEach((x, i) => {
        cards.push(<Card key={`${i}${x}`} cardId={x} />)
    });

    return (
        <div className={style.Hand}>
            {cards}
        </div>
    );
}

export default hand;