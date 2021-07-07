import { findById, renderLineItems } from '../utils.js';
import { calcItemTotal } from '../utils.js';
const test = QUnit.test;

test('returns item by ID', (expect) => {
    const dirt = [{ id: 1, name: 'sand' }, { id: 2, name: 'loomy' }];
    const expected = { id: 1, name: 'sand' };
    const actual = findById(dirt, 1);

    expect.deepEqual(actual, expected);
});
test('calculates quantity and amount, returning a total', (expect) => {
    const cart = [
        { id: 1, qty: 4 },
        { id: 2, qty: 6 }
    ];
    const data = [{
        id: 1,
        price: 2
    },
    {
        id: 2,
        price: 4
    }];
    const expected = 32;
    const actual = calcItemTotal(data, cart);
    expect.equal(actual, expected);

});
test('renderLineItems returns a <tr> element', (expect) => {
    const ktm = {
        id: 1,
        name: 'Ktm',
        image: 'Ktm.jpeg',
        description:'2021 ktm 450sxf',
        category: 'first-place',
        price: '10500'
    };
    const ktmCart = {
        id: 1, 
        qty: 2
    };
    const expected = `<tr><td>Ktm</td><td>$10500</td><td>2</td><td>$21,000.00</td></tr>`;
    const dom = renderLineItems(ktm, ktmCart);
    const html = dom.outerHTML;
    expect.equal(html, expected);
});