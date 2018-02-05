import React from 'react';

import Card from './Card';

import style from './Hand.module.css';

const hand = (props) => {
    const cards = [];
    props.cards.forEach(x => {
        cards.push(<Card key={x} />) // need a better key
    });

    return (
        <div className={style.Hand}>
            {cards}
        </div>
    );
}

export default hand;