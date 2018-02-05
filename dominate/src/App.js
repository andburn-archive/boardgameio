import { Client } from 'boardgame.io/react';

import Dominate from './Dominate';
import Board from './components/Board';

const App = Client({ 
  game: Dominate, 
  board: Board 
});

export default App;
