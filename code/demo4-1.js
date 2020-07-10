// example: Immutable Object
// item <- selected: boolean
const menuItem = {name: "Beijing Beef", price: 12.00};

// Fix undefined issue
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

function orderItem(item) {
    if (!item) {
        throw new Error("Item is required.")
    }

    item.selected = true;
    return renderMenuItem(item)
}

// Customer A
console.log('A check the menu: ' + renderMenuItem(menuItem));
console.log('A order a item: ' + orderItem(menuItem));

// Customer B
console.log('B check the menu: ' + renderMenuItem(menuItem));