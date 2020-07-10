// example: Immutable Collection
const menu = [{name: "Seafood Hotpot", price: 20.00, spicy: false},
    {name: "Beijing Beef", price: 12.00, spicy: false},
    {name: "Orange Chicken", price: 10.00, spicy: false},
    {name: "Kung Pao Chicken", price: 10.00, spicy: true},
    {name: "Mapo Tofu", price: 8.00, spicy: true}];

// Enough?
Object.freeze(menu);

deepFreeze(menu);

function deepFreeze(obj) {
    // Get property name on the object
    const propNames = Object.getOwnPropertyNames(obj);

    propNames.forEach(function (name) {
        const prop = obj[name];
        // freeze if is a object
        if (typeof prop == 'object' && prop !== null)
            deepFreeze(prop);
    });
    // freeze self
    return Object.freeze(obj);
}

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
    if (typeof spicy !== "undefined") {
        menu = [...menu].sort((a, b) => (b.spicy === spicy) - (a.spicy === spicy));
    }
    for (let i = 0; i < menu.length; i++) {
        console.log(renderMenuItem(menu[i]))
    }
}

// Customer A
console.log('A check the spicy menu: ');
renderCustomizedMenu(menu, true)

console.log(' ----------------- ');
// Customer B
console.log('B check the regular menu: ');
renderCustomizedMenu(menu)