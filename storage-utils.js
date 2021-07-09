import { findById } from './utils.js';
export const CART = 'CART';

export function getCart(){
    const stringCart = localStorage.getItem(CART);
    const cart = JSON.parse(stringCart) || [];
    return cart;
}
function setCart(cart){
    localStorage.setItem(CART, JSON.stringify(cart));
}
export function addItemToCart(itemId){
    const cart = getCart();
    const item = findById(cart, itemId);

    if (item) {
        item.qty += 1;
    } else {
        const newItem = { id: itemId, qty: 1 };
        cart.push(newItem);
    }
    setCart(cart);
}
export function clearCart(){
    localStorage.removeItem(CART);
}
