const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function () {
        allInfo = `${this.title} by ${this.author}, ${this.pages} pages, `;

        if (this.read) {
            allInfo += 'already read.';
        } else {
            allInfo += 'not read yet.';
        }

        return allInfo;
    }
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function displayBooks() {
    const container = document.querySelector('.bookContainer');
    for (const book of myLibrary) {
        const card = document.createElement('div');
        card.classList.add('card');
        container.appendChild(card);

        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');
        card.appendChild(cardBody);

        const cardTitle = document.createElement('h5');
        cardTitle.classList.add('card-title');
        cardTitle.textContent = book.title;
        cardBody.appendChild(cardTitle);

        const cardText = document.createElement('p');
        cardText.classList.add('card-text');
        cardText.textContent = book.info();
        cardBody.appendChild(cardText);
    }
}

// form handling

const formTitle = document.querySelector('.my-form-title');
const formAuthor = document.querySelector('.my-form-author');
const formPages = document.querySelector('.my-form-pages');
const formRead = document.querySelector('.my-form-check')

const submitButton = document.querySelector('.my-form-submit');

submitButton.addEventListener('click', () => {
    const createdBook = new Book(formTitle.value, formAuthor.value, formPages.value, formRead.value);
    addBookToLibrary(createdBook);

    const container = document.querySelector('.bookContainer');

    const card = document.createElement('div');
    card.classList.add('card');
    container.appendChild(card);

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    card.appendChild(cardBody);

    const cardTitle = document.createElement('h5');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = createdBook.title;
    cardBody.appendChild(cardTitle);

    const cardText = document.createElement('p');
    cardText.classList.add('card-text');
    cardText.textContent = createdBook.info();
    cardBody.appendChild(cardText);

    // Reset form fields
    formTitle.value = '';
    formAuthor.value = '';
    formPages.value = '';
    formRead.checked = false;

});

// test

const myBook = new Book('myTitle', 'myAuthor', 300, false);
console.log(myBook);
console.log(myBook.info());

const myOtherBook = new Book('otherTitle', 'otherAuthor', 599, true);
myOtherBook.read = true;

addBookToLibrary(myBook);
addBookToLibrary(myOtherBook);

console.log(myLibrary);
displayBooks();
