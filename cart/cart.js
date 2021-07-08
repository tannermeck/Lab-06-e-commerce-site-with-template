import { findById, calcOrderTotal, toUSD, renderLineItems } from '../utils.js';
import cart from '../data/shopping-cart.js';
import dirtbikes from '../data/dirtbikes.js';

const tBody = document.getElementById('table-body');
for (let item of cart) {
    const bike1 = findById(dirtbikes, item.id);
    const tr = renderLineItems(bike1, item);
    tBody.appendChild(tr);
}
const totalDom = document.getElementById('order-total');
const total = calcOrderTotal(dirtbikes, cart);
totalDom.textContent = toUSD(total);
