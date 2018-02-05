const cards = [
    { id: 0, name: "One One", attack: 1, health: 1 },
    { id: 1, name: "Three Two", attack: 3, health: 2 },
    { id: 2, name: "Four Five", attack: 4, health: 5 },
];

const getCardById = (id) => {
    console.log("get " + id);
    for(let c in cards) {
        if (c.id === id)
            return c;
    }
};

export default getCardById;