import React, { Component } from 'react';

import Hand from './Hand';
import Deck from './Deck';
import Field from './Field';

import style from './Board.module.css';

class Board extends Component {
  render() {
    return (
        <div className={style.Board}>
            <div className={style.Top}>                
                <div className={style.Hand}>
                    <Hand />
                    <Deck />               
                </div>
                <Field />
            </div>
            <div className={style.Bottom}>                
                <Field />
                <div className={style.Hand}>
                    <Hand />
                    <Deck />               
                </div>
            </div>            
        </div>
    );
  }
}

export default Board;