//example: Method parameter Input
function renderMenuItem(item) {
    const {name, price} = item;
    return `<h1>${name} - ${price}</h1>`
}

console.log(renderMenuItem({name: "Beijing Beef", price: 12.00}));

console.log(renderMenuItem({}));

// console.log(renderMenuItem());