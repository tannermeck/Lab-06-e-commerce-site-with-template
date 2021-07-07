// import functions

// reference needed DOM elements


// set event listeners 
  // get user input(s)
  // do any needed work with the value(s)
  // update DOM to reflect new value(s)
import dirtbikes from './data/dirtbikes.js';
import { renderBikes } from './render-dirtbikes.js';

const bikeUl = document.getElementById('bike-ul');

for (let mxbike of dirtbikes) {
    const bikeLi = renderBikes(mxbike);
    bikeUl.appendChild(bikeLi);
}