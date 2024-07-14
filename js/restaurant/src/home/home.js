import GrillImage from './grilling.jpg';

function createHome() {
    const parent = document.querySelector('#content');

    const img = document.createElement('img');
    img.src = GrillImage;
    img.style.width = '50%';
    parent.appendChild(img);

    const h1 = document.createElement('h1');
    h1.textContent = 'Ristorante La Carne';
    parent.appendChild(h1);

    const p = document.createElement('p');
    p.textContent = 'This is some serious gormet stuff. Do not waste this opportunity. You. Need. Meat!';
    parent.appendChild(p);
}

export default createHome;
