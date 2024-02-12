const myLibrary = [];

function Book(title, author) {
    this.title = title;
    this.author = author;
    this.read = false;
}

function addBookToLibrary(book, myLibrary) {
    myLibrary.push(book);
    return myLibrary;
}