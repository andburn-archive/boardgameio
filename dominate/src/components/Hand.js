import React from 'react';

import Card from './Card';

import style from './Hand.module.css';

const hand = () => {
    return (
        <div className={style.Hand}>
            <Card />
            <Card />
            <Card />
        </div>
    );
}

export default hand;