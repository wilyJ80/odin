const myLibrary = [];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = false;

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

// test

const myBook = new Book('myTitle', 'myAuthor', 300);
console.log(myBook);
console.log(myBook.info());

const myOtherBook = new Book('otherTitle', 'otherAuthor', 599);
myOtherBook.read = true;

addBookToLibrary(myBook);
addBookToLibrary(myOtherBook);

console.log(myLibrary);
displayBooks();
