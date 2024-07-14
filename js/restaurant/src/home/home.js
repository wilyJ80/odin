function createHome() {
    const parent = document.querySelector('#content');

    const img = document.createElement('img');
    img.src = "https://upload.wikimedia.org/wikipedia/commons/5/5d/Preparing_grill_for_grilling%2C_grill_with_flames_and_cones_near_Host%C3%A1kov%2C_Vladislav%2C_T%C5%99eb%C3%AD%C4%8D_District.jpg";
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
