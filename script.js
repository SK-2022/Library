
// Book Card Reading status btn toggle logic
const readingStatusBtn = document.querySelectorAll('.toggle-button')

readingStatusBtn.forEach((button) => {
    let isToggled = false; // Initial state is "Not toggled"

    button.addEventListener('click', () => {

        isToggled = !isToggled //Toggle the state making it true
        button.classList.toggle('reading-status-btn');
        button.classList.toggle('not-read');
        
        // Toggle the text based on the state
        if(isToggled){
            button.textContent = 'Not read'
        } else{
            button.textContent = 'Read'
        }
        })
})

const myLibrary = ['Witcher','Deep Work','Pragmatic programmer'];

//Constructor function for my books
function Book(bookTitle, author, pageNumbers, status){
    this.bookTitle = bookTitle;
    this.author = author;
    this.pageNumbers = pageNumbers
    this.status = status


}
const bookTitle = document.querySelector('.title-label').textContent
//Function to add books to the library.

// function addBookToLibrary(){

// }

const addBookButton = document.querySelector('.add-book-button');
const dialogBox = document.querySelector('.dialog-box');


addBookButton.addEventListener('click', () => {
    dialogBox.showModal();
})