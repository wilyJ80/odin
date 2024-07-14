function createAbout() {
    const parent = document.querySelector('#content');

    const headline = document.createElement('h1');
    headline.textContent = "Welcome to your favorite restaurant";
    parent.appendChild(headline);

    const dataList = document.createElement('dl');

    const contact = document.createElement('dt');
    contact.textContent = 'Contact';
    const telephone = document.createElement('dd');
    telephone.textContent = '+55719987987911';
    contact.appendChild(telephone);
    const location = document.createElement('dd');
    location.textContent = 'Sesame Street, Gotham City, United States of Far Far Away';
    contact.appendChild(location);

    dataList.appendChild(contact);

    parent.appendChild(dataList);
}

export default createAbout;
