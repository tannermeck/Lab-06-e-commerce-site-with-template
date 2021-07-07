export function renderBikes(bike) {
    const bikeLi = document.createElement('li');
    const bikeh3 = document.createElement('h3');
    bikeh3.textContent = bike.name;

    const bikeImg = document.createElement('img');
    bikeImg.src = `./assets/${bike.id}.jpeg`;
    bikeImg.alt = bike.name;

    const bikeSpan1 = document.createElement('span');
    bikeSpan1.textContent = bike.description;

    const bikeSpan2 = document.createElement('span');
    bikeSpan2.textContent = '$' + bike.price;

    const button = document.createElement('button');
    button.textContent = 'Buy now';

    bikeLi.appendChild(bikeh3);
    bikeLi.appendChild(bikeImg);
    bikeLi.appendChild(bikeSpan1);
    bikeLi.appendChild(bikeSpan2);
    bikeLi.appendChild(button);
    
    return bikeLi;
}