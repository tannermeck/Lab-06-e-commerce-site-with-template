const test = QUnit.test;

import { CART, getCart, addItemToCart } from '../storage-utils.js';

test('get item from cart and return from local storage', (expect) => {
    const fakeCart = [
        { id: 1, qty: 2 },
        { id: 5, qty: 3 },
    ];
    const fakeCartString = JSON.stringify(fakeCart);
    localStorage.setItem(CART, fakeCartString);

    const cart = getCart();
    expect.deepEqual(cart, fakeCart);
});

test('get item from cart and return [ ] if none', (expect) => {
    localStorage.removeItem(CART);

    const cart = getCart();
    const expected = [];
    expect.deepEqual(cart, expected);
});

test('addItemToCart should update quantity if item already in cart', (expect) => {
    const fakeCart = [
        { id: 1, qty: 2 },
        { id: 5, qty: 3 },
    ];
    const fakeCartString = JSON.stringify(fakeCart);
    localStorage.setItem(CART, fakeCartString);

    addItemToCart(1);

    const newCart = getCart();

    const expected = [
        { id: 1, qty: 3 },
        { id: 5, qty: 3 },
    ];
    expect.deepEqual(newCart, expected);

});
test('addItem to cart should add an item if its not already there', (expect) => {
    const fakeCart = [
        { id: 1, qty: 3 },
        { id: 4, qty: 3 },
    ];
    const fakeCartString = JSON.stringify(fakeCart);
    localStorage.setItem(CART, fakeCartString);

    addItemToCart(2);
    const newCart = getCart();

    const expected = [
        { id: 1, qty: 3 },
        { id: 4, qty: 3 },
        { id: 2, qty: 1 }
    ];
    expect.deepEqual(newCart, expected);
});

