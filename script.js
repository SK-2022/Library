
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

// Remember, each element in your array is an object
const myLibrary = [
    {bookTitle: 'The Pragmatic programmer', author: 'Andy Hunt and Dave Thomas', pageNumbers: 352, status: 'read' }
    //Insert more books here
];

//Constructor function for my books
function Book(bookTitle, author, pageNumbers, status){
    this.bookTitle = bookTitle;
    this.author = author;
    this.pageNumbers = pageNumbers
    this.status = status
}


//Test Function for submit button to Add book to library
   const bookSubmitBtn = document.querySelector('.book-form')
 bookSubmitBtn.addEventListener('submit', function addBookToLibrary(event) {
    event.preventDefault(); //Prevent the default form submission behavior
    //Selects all inputs from the dialog
    const title = document.getElementById('title').value
    const author = document.getElementById('author').value
    const pages = document.getElementById('pages').value
    const readingStatus = document.getElementById('reading-status').checked
    //Creates new book object using my constructor function
    let book = new Book(title, author, pages, readingStatus)
    console.log(book)
 })

const addBookButton = document.querySelector('.add-book-button');
const dialogBox = document.querySelector('.dialog-box');


addBookButton.addEventListener('click', () => {
    dialogBox.showModal();
})