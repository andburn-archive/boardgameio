import React, { Component } from 'react';

import './Board.css';

class TicTacToeBoard extends Component {
    onClick(id) {
        if (this.isActive(id)) {
            this.props.moves.clickCell(id);
            this.props.events.endTurn();
        }
    }

    isActive(id) {
        if (!this.props.isActive) return false;
        if (this.props.G.cells[id] !== null) return false;
        return true;
    }

    render() {
        let winner = '';
        
        if (this.props.ctx.gameover !== null) {
            winner = <div>Winner: {this.props.ctx.gameover}</div>;
        }

        let tbody = [];
        for (let i = 0; i < 3; i++) {
            let cells = [];
            for (let j = 0; j < 3; j++) {
                const id = 3 * i + j;
                cells.push(
                    <td key={id} 
                        onClick={() => this.onClick(id)}>
                        {this.props.G.cells[id]}
                    </td>
                )
            }
            tbody.push(<tr key={10}>{cells}</tr>);
        }

        return (
            <div>
                <table id="board">
                    <tbody>{tbody}</tbody>
                </table>
                {winner}
            </div>
        );
    }
}

export default TicTacToeBoard;