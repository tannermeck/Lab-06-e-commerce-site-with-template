export function findById(items, id){
    for (let item of items){
        if (item.id === id) {
            return item;
        }
    }
}
export function calcItemTotal(dirtbikes, cart){
    let orderTotal = 0;
    for (let item of cart) {
        const dirtbike = findById(dirtbikes, item.id);
        orderTotal += dirtbike.price * item.qty;
    }
    return orderTotal;
}
export function toUSD(number) {
    return number.toLocaleString(
        'en-US', { style: 'currency', currency: 'USD' });
}
export function renderLineItems(dirtbikeItem, cartItem){

    const tr = document.createElement('tr');
    const tdName = document.createElement('td');
    tdName.textContent = dirtbikeItem.name;
    tr.appendChild(tdName);

    const tdPrice = document.createElement('td');
    tdPrice.textContent = toUSD(dirtbikeItem.price);
    tr.appendChild(tdPrice);

    const tdQty = document.createElement('td');
    tdQty.textContent = cartItem.qty;
    tr.appendChild(tdQty);

    const tdTotal = document.createElement('td');
    const total = dirtbikeItem.price * cartItem.qty;
    tdTotal.textContent = toUSD(total);
    tr.appendChild(tdTotal);
    
    return tr;
}
export function calcOrderTotal(productArray, cartArray){
    let grandTotal = 0;
    for (let eachProduct of cartArray) {
        const productItem = findById(productArray, eachProduct.id);
        const itemTotal = calcItemTotal(productItem.price, eachProduct.qty);
        grandTotal += itemTotal;
    }
    return grandTotal;
}
// export function calcItemTotal(dirtbikes, cart){
//     let orderTotal = 0;
//     for (let item of cart) {
//         const dirtbike = findById(dirtbikes, item.id);
//         orderTotal += dirtbike.price * item.qty;
//     }
//     return orderTotal;
// }
