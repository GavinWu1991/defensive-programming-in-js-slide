//example: Check Type
function renderMenuItem(item) {
    if (!item) {
        throw new Error("Item is required.")
    }
    let {name, price} = item;
    if (!name) {
        throw new Error("item name are required.")
    }

    if (typeof price === "undefined") {
        // set to default
        price = 100000000000;
    }
    return `<h1>${name} - ${price.toExponential(2)}</h1>`
}

// 120b
console.log(renderMenuItem({name: "Beijing Beef", price: 120000000000}));
console.log(renderMenuItem({name: "Beijing Beef"}));
console.log(renderMenuItem({name: "Beijing Beef", price: '120000000000'}));

