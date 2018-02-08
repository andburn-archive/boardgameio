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
                    <Hand cards={this.props.G.hands[0]} 
                        click={this.props.moves.playFromHand}
                        player="0" />
                    <Deck click={() => this.props.moves.drawCard(0)} 
                        isEmpty={this.props.G.decks[0].length <= 0} />               
                </div>
                <Field cards={this.props.G.fields[0]} />
            </div>
            <div className={style.Bottom}>                
                <Field cards={this.props.G.fields[1]} />
                <div className={style.Hand}>
                    <Hand cards={this.props.G.hands[1]} 
                        click={this.props.moves.playFromHand} 
                        player="1" />
                    <Deck click={() => this.props.moves.drawCard(1)} 
                        isEmpty={this.props.G.decks[1].length <= 0} />
                </div>
            </div>            
        </div>
    );
  }
}

export default Board;