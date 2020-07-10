// example: Immutable Collection
const {List} = require('immutable');

const menu = List([{name: "Seafood Hotpot", price: 20.00, spicy: false},
    {name: "Beijing Beef", price: 12.00, spicy: false},
    {name: "Orange Chicken", price: 10.00, spicy: false},
    {name: "Kung Pao Chicken", price: 10.00, spicy: true},
    {name: "Mapo Tofu", price: 8.00, spicy: true}]).asImmutable();

function renderMenuItem(item) {
    if (!item) {
        throw new Error("Item is required.")
    }
    const {name, price, selected = false} = item;
    if (!name || !price) {
        throw new Error("Item name and price are required.")
    }

    return `<h1>${name} - ${price} - [${selected ? 'v' : 'x'}]</h1>`;
}

function renderCustomizedMenu(menu, spicy) {
    let sortedMenu = menu;
    if (typeof spicy !== "undefined") {
        sortedMenu = menu.sort((a, b) => (b.spicy === spicy) - (a.spicy === spicy));
    }
    for (let i = 0; i < sortedMenu.size; i++) {
        console.log(renderMenuItem(sortedMenu.get(i)))
    }
}

// Customer A
console.log('A check the spicy menu: ');
renderCustomizedMenu(menu, true)

console.log(' ----------------- ');
// Customer B
console.log('B check the regular menu: ');
renderCustomizedMenu(menu)