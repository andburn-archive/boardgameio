import { Game } from 'boardgame.io/core';

import Cards from './cards';

const defaultDeck = [];

for (let i = 0; i < 10; i++) {
    defaultDeck.push(Math.floor(Math.random() * 4));
}

const draw = (src, dest, num) => {
    for (let i = 0; i < num; i++) {
        const card = src.pop();
        if (card !== undefined) {
            dest.push(card);
        }
    }
};

const dominate = Game({
    setup: (ctx) => ({
        started: false,
        decks: [
            ctx.random.Shuffle([...defaultDeck]),
            ctx.random.Shuffle([...defaultDeck])
        ],
        hands: [[], []],
        fields: [[], []],
    }),
    moves: {
        drawCard(G, ctx, playerId, number=1) {
            const playerIndex = parseInt(ctx.currentPlayer, 10);
            const decks = [[...G.decks[0]], [...G.decks[1]]];
            const hands = [[...G.hands[0]], [...G.hands[1]]];

            if (playerIndex !== parseInt(playerId, 10)) {
                return { ...G };
            }
            draw(decks[playerIndex], hands[playerIndex], number);

            return {
                ...G,
                decks: decks,
                hands: hands
            };
        },
        playFromHand(G, ctx, playerId, source, target) {
            const id = parseInt(playerId, 10);
            const playerIndex = parseInt(ctx.currentPlayer, 10);

            const decks = [[...G.decks[0]], [...G.decks[1]]];
            const hands = [[...G.hands[0]], [...G.hands[1]]];
            const fields = [[...G.fields[0]], [...G.fields[1]]];

            if (playerIndex !== id) {
                return { ...G };
            }
            
            const cardId = hands[id][source];
            const card = Cards.get(cardId);
            if (card === undefined) {
                return { ...G };
            }

            hands[id].splice(source, 1);

            if (card.action !== undefined) {
                if ('draw' in card.action) {
                    draw(decks[id], hands[id], card.action.draw)
                }
            } else {
                fields[id].push(cardId);
            }

            return {
                ...G,
                decks: decks,
                hands: hands,
                fields: fields
            };
        }
    },
    flow: {
        onTurnBegin: (G, ctx) => {            
            console.log("turn begins: " + ctx.currentPlayer);
            
            const decks = [[...G.decks[0]], [...G.decks[1]]];
            const hands = [[...G.hands[0]], [...G.hands[1]]];

            let gameStarted = G.started; // primitive type, not ref
            if (!G.started) {
                draw(decks[0], hands[0], 3);
                draw(decks[1], hands[1], 3);
                gameStarted = true;
            }

            const playerIndex = parseInt(ctx.currentPlayer, 10);
            draw(decks[playerIndex], hands[playerIndex], 1);
            
            return {
                ...G,
                started: gameStarted,
                decks: decks,
                hands: hands
            };
        }
    }
});

export default dominate;