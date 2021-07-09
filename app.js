import dirtbikes from './data/dirtbikes.js';
import { renderBikes } from './render-dirtbikes.js';
import { addItemToCart } from './storage-utils.js';

const bikeUl = document.getElementById('bike-ul');

for (let mxbike of dirtbikes) {
    const bikeLi = renderBikes(mxbike);
    bikeUl.appendChild(bikeLi);
}
const addButtons = document.querySelectorAll('.add');
for (let btn of addButtons) {
    btn.addEventListener('click', (e) => {
        addItemToCart(Number(e.target.value));
    });
}