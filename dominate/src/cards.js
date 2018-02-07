const cards = [
    { 
        id: 0,
        type: "unit",
        name: "One One",
        attack: 1,
        health: 1,
    },
    {   
        id: 1,
        type: "unit",
        name: "Three Two",
        attack: 3,
        health: 2,
    },
    { 
        id: 2,
        type: "spell",
        name: "Three Damage",
        action: { "damage": 3 }        
    },
    { 
        id: 3,
        type: "spell",
        name: "Draw 1",
        action: { "draw": 1 }
    },
];

const cardData = {
    get: (id) => {
        for (let c of cards) {
            if (c.id === id) {
                return { ...c };
            }
        }
    }
};

export default cardData;