import { Game } from 'boardgame.io/core';

const defaultDeck = [ 0, 0, 1, 2, 2 ];

const dominate = Game({
    setup: () => ({
        decks: [[...defaultDeck], [...defaultDeck]],
        hands: [[], []],
    }),
    moves: {
        drawCard(G, ctx, playerId) {
            const playerIndex = parseInt(ctx.currentPlayer, 10);
            if (playerIndex !== playerId) {
                return { ...G };
            }
            const decks = [[...G.decks[0]], [...G.decks[1]]];
            const drawn = decks[playerIndex].pop();
            if (drawn === undefined) {
                return { ...G };
            }
            const hands = [[...G.hands[0]], [...G.hands[1]]];
            hands[playerIndex].push(drawn);
            return {
                ...G,
                decks: decks,
                hands: hands,
            };
        }
    }
});

export default dominate;