// example: Immutable Object
// item <- selected: boolean
const menuItem = {name: "Beijing Beef", price: 12.00};

Object.freeze(menuItem);

// Fix undefined issue
function renderMenuItem(item) {
    if (!item) {
        throw new Error("Item is required.")
    }
    const {name, price, selected} = item;
    if (!name || !price) {
        throw new Error("Item name and price are required.")
    }

    return `<h1>${name} - ${price} - [${selected ? 'v' : 'x'}]</h1>`;
}

//fix immutable issue
function orderItem(item) {
    if (!item) {
        throw new Error("Item is required.")
    }

    return renderMenuItem({
        ...item,
        selected: true
    })
}

// Customer A
console.log('A check the menu: ' + renderMenuItem(menuItem));
console.log('A order a item: ' + orderItem(menuItem));

// Customer B
console.log('B check the menu: ' + renderMenuItem(menuItem));