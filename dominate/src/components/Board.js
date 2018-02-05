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
                    <Hand cards={this.props.G.hands[0]} />
                    <Deck click={() => this.props.moves.drawCard(0)} 
                        isEmpty={this.props.G.decks[0].length <= 0} />               
                </div>
                <Field />
            </div>
            <div className={style.Bottom}>                
                <Field />
                <div className={style.Hand}>
                    <Hand cards={this.props.G.hands[1]} />
                    <Deck click={() => this.props.moves.drawCard(1)} 
                        isEmpty={this.props.G.decks[1].length <= 0} />
                </div>
            </div>            
        </div>
    );
  }
}

export default Board;