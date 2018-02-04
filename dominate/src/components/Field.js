import React from 'react';

import Card from './Card';

import style from './Field.module.css';

const field = () => {
    return (
        <div className={style.Field}>
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    );
}

export default field;