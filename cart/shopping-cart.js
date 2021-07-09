import { findById, calcOrderTotal, toUSD, renderLineItems } from '../utils.js';
//import cart from '../data/shopping-cart.js';
import dirtbikes from '../data/dirtbikes.js';
import { getCart, clearCart } from '../storage-utils.js';

const tBody = document.getElementById('table-body');
const placeOrder = document.getElementById('place-order');
placeOrder.addEventListener('click', () => {
    const cart = getCart();
    const cartString = JSON.stringify(cart, true, 2);
    if (cart.length){
        alert(`Your order is: ${cartString}`);
        localStorage.removeItem(cart);
        location.href = '../index.html';
        clearCart();
    } else {
        placeOrder.disabled = true;
        alert('Please Add Items To Place Order');
    }
    
});

function addCartProducts(){
    const cart = getCart();
    for (let item of cart) {
        const bike1 = findById(dirtbikes, item.id);
        const tr = renderLineItems(bike1, item);
        tBody.appendChild(tr);
    }
    if (cart.length === 0){
        tBody.innerHTML = '';
    }
    const totalDom = document.getElementById('order-total');
    const total = calcOrderTotal(dirtbikes, cart);
    totalDom.textContent = toUSD(total);
}
addCartProducts();

const clearButton = document.getElementById('clear');
clearButton.addEventListener('click', () => {
    clearCart();
    location.reload();
    location.href = '../index.html';
});


