import { findById, calcItemTotal, toUSD, renderLineItems } from '../utils.js';
import cart from '../data/cart.js';
import dirtbikes from '../data/dirtbikes.js';

const tBody = document.getElementById('table-body');
for (let item of cart) {
    const bike1 = findById(dirtbikes, item.id);
    const tr = renderLineItems(bike1, item);
    tBody.appendChild(tr);
}
const totalDom = document.getElementById('order-total');
const total = calcItemTotal(dirtbikes, cart);
totalDom.textContent = toUSD(total);
