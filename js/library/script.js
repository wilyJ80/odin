const myLibrary = [];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = false;

    this.info = function () {
        allInfo = `${title} by ${author}, ${pages} pages, `;

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

// test

const myBook = new Book('myTitle', 'myAuthor', 300);
console.log(myBook);

