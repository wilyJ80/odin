const myLibrary = [];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = false;

    function info() {
        const info = `${title} by ${author}, ${pages} pages, `;

        if (read) {
            info += 'already read.';
        } else {
            info += 'not read yet.';
        }
    }
}

function addBookToLibrary(book) {
    myLibrary.push(book);
} 

