import dirtbikes from './dirtbikes.js';
import { renderBikes } from './render-dirtbikes.js';

const bikeUl = document.getElementById('bike-ul');

for (let mxbike of dirtbikes) {
    const bikeLi = renderBikes(mxbike);
    bikeUl.appendChild(bikeLi);
}