//example: Method parameter Input
// Temporal correct solution
function renderMenuItem(item) {
    if (!item) {
        throw new Error("Item is required.")
    }
    const {name, price} = item;
    if (!name || !price) {
        throw new Error("Item name and price are required.")
    }
    return `<h1>${name} - ${price}</h1>`
}

console.log(renderMenuItem({name: "Beijing Beef", price: 12.00}));

console.log(renderMenuItem({}));

console.log(renderMenuItem());

