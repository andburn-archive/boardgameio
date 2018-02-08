import React from 'react';

import Card from './Card';

import style from './Field.module.css';

const field = (props) => {
    const cards = [];
    props.cards.forEach((x, i) => {
        cards.push(<Card key={`${i}${x}`} cardId={x} />)
    });

    return (
        <div className={style.Field}>
            {cards}
        </div>
    );
}

export default field;