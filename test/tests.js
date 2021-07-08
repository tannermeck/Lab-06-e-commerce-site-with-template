const test = QUnit.test;
import { renderBikes } from '../render-dirtbikes.js';
import './utils.test.js';
test('should return proper dirtbike', (expect) => {
    const expected = `<li><h3>Ktm</h3><img src="./assets/Ktm.jpeg" alt="Ktm"><span>2021 ktm 450sxf</span><span>$10,5000</span><button>Buy now</button></li>`;
    const ktm = {
        id: 'Ktm',
        name: 'Ktm',
        image: 'Ktm.jpeg',
        description:'2021 ktm 450sxf',
        category: 'first-place',
        price: '10,5000'
    };
    const actual = renderBikes (ktm);
    expect.equal(actual.outerHTML, expected);
});
