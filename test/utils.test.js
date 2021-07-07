import { findById } from '../utils.js';
const test = QUnit.test;

test('returns item by ID', (expect) => {
    const bike = [{ id: 1, name: 'Ktm' }, { id: 2, name: 'Yamaha' }];
    const expected = { id: 1, name: 'Ktm' };
    const actual = findById(bike, 1);

    expect.deepequal(actual, expected);
})
// export function findById(items, id){
//     for (let item of items){
//         if (item.id === id) {
//             return item;
//         }
//     }
// }