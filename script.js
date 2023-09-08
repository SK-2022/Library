const myLibrary = ['Witcher','Deep Work','Pragmatic programmer'];

//Constructor function for my books
function Book(bookTitle, author, pageNumbers, status){
    this.bookTitle = bookTitle;
    this.author = author;
    this.pageNumbers = pageNumbers
    this.status = status
}

//Function to add books to the library.
// function addBookToLibrary(){

// }

const addBookButton = document.querySelector('.add-book-button');
const dialogBox = document.querySelector('.dialog-box');

addBookButton.addEventListener('click', () => {
    dialogBox.showModal();
})