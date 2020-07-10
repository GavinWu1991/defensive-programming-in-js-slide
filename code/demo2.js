//example: null and undefined
function renderMenuItem(item) {
    if (!item) {
        throw new Error("Item is required.")
    }
    const {name, price, inStock} = item;
    if (!name || !price) {
        throw new Error("Item name and price are required.")
    }
    return `<h1>${name} - ${price} *${inStock}</h1>`
}

console.log(renderMenuItem({name: "Beijing Beef", price: 12.00, inStock: '2'}));
console.log(renderMenuItem({name: "Beijing Beef", price: 12.00, inStock: null}));
console.log(renderMenuItem({name: "Beijing Beef", price: 12.00}));