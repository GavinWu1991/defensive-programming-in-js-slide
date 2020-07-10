//example: Check Type
function renderMenuItem(item) {
    if (!item) {
        throw new Error("Item is required.")
    }
    const {name, price} = item;
    if (!name || !price) {
        throw new Error("Item name and price are required.")
    }
    return `<h1>${name} - ${price.toExponential(2)}</h1>`
}

// 120b
console.log(renderMenuItem({name: "Beijing Beef", price: 120000000000}));
console.log(renderMenuItem({name: "Beijing Beef"}));