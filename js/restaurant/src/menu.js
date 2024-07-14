function createMenu() {
    const parent = document.querySelector('#content');

    const headline = document.createElement('h1');
    headline.textContent = "Menu";
    parent.appendChild(headline);

    const items = [
        {
            title: 'Pizza',
            ingredients: 'Flour, Cheese, Meat'
        },
        {
            title: 'Sandwich',
            ingredients: 'Bread, Burger, Cheese'
        },
        {
            title: 'Salad',
            ingredients: 'Tomato, Potato, Leaves'
        },
        {
            title: 'French Fries',
            ingredients: 'Fries, Salt'
        },
        {
            title: 'Meatballs',
            ingredients: 'Meat, Balls'
        }
    ];

    items.forEach((item) => {
        const dl = document.createElement('dl');

        const dt = document.createElement('dt');
        dt.textContent = item.title;
        const dd = document.createElement('dd');
        dd.textContent = item.ingredients;

        dl.appendChild(dt);
        dl.appendChild(dd);
        parent.appendChild(dl);
    });
}

export default createMenu;
