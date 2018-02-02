import { Client } from 'boardgame.io/react';
import { Game } from 'boardgame.io/core';

import TicTacToeBoard from './Board';

function IsVictory(cells) {
  // check the victory condition
}

const TicTacToe = Game({
  setup: () => ({ cells: Array(9).fill(null) }),
  moves: {
    clickCell(G, ctx, id) {
      const cells = [...G.cells];

      // only allow clicking on empty cells
      if (cells[id] === null) {
        cells[id] = ctx.currentPlayer;
      }
      
      return { ...G, cells };
    },
  },
  flow: {
    endGameIf: (G, ctx) => {
      if (IsVictory(G.cells)) {
        return ctx.currentPlayer;
      }
    }
  }
});

const App = Client({ 
  game: TicTacToe,
  board: TicTacToeBoard
});

export default App;
