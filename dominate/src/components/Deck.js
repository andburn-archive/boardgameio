import React from 'react';

import style from './Deck.module.css';

const deck = (props) => {
    const classNames = [style.Deck];
    if (props.isEmpty) {
        classNames.push(style.Empty);
    }

    return (
        <div className={classNames.join(' ')} onClick={props.click}>
            <div>DECK</div>
        </div>
    );
}

export default deck;