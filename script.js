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

//Reading status btn toggle logic
const readingStatusBtn = document.querySelector('.toggle-button')

let isToggled = false; // Initial state is "Not toggled"

readingStatusBtn.addEventListener('click', () => {
    isToggled = !isToggled //Toggle the state making it true
    readingStatusBtn.classList.toggle('reading-status-btn');
    readingStatusBtn.classList.toggle('not-read');

    if(isToggled){
        readingStatusBtn.textContent = 'Not read'
    } else{
        readingStatusBtn.textContent = 'Read'
    }
    })