const test = QUnit.test;
import { renderBikes } from '../render-dirtbikes.js';

test('should return proper dirtbike', (expect) => {
    const expected = `<li><h3>Ktm</h3><img src="./assets/ktm.jpeg" alt="Ktm"><span>2021 ktm 450sxf</span><span>$10,5000</span><button>Buy now</button></li>`;
    const ktm = {
        id: 'ktm',
        name: 'Ktm',
        image: 'ktm.jpeg',
        description:'2021 ktm 450sxf',
        category: 'first-place',
        price: '10,5000'
    };
    const actual = renderBikes (ktm);
    expect.equal(actual.outerHTML, expected);
});
