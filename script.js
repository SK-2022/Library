// Remember, each element in your array is an object
const myLibrary = [];

//Constructor function for my books
function Book(bookTitle, author, pageNumbers, readingStatus){
    this.bookTitle = bookTitle;
    this.author = author;
    this.pageNumbers = pageNumbers
    this.readingStatus = readingStatus
}

//This adds the books to the page display
function render() {
    let libraryContainerElement = document.querySelector('.book-card-container')
    myLibrary.forEach((i) => {
        let book = myLibrary[i]
        let bookCardElement = document.createElement('div')
        bookCardElement.innerHTML = 
        `<div class="book-card">
        <div class="book-title">${book.bookTitle}</div>
        <div class="book-author">By ${book.author}</div>
        <div class="pages">Pages: ${book.pageNumbers}</div>
        <div class="book-card-btn-container">
            <button class="toggle-button reading-status-btn">${book.readingStatus}</button>
            <img class="trash-icon" src="/images/trash-icon.png" alt="Remove button trashcan">
        </div>
        <div class="my-rating-container">
            <label for="my-rating" class="book-rating">My Rating:</label>
            <select name="my-rating" id="my-rating">
                <option value="not sure ">Not sure </option>
                <option value="terrible">Terrible</option>
                <option value="bad">Bad</option>
                <option value="ok">OK</option>
                <option value="good">Good</option>
                <option value="amazing">Amazing</option>
            </select>
        </div>
    </div>`
    libraryContainerElement.appendChild(bookCardElement)
     })

}

//Add to library function
function addBookToLibrary(){
     //Selects all inputs from the dialog
     const title = document.getElementById('title').value
     const author = document.getElementById('author').value
     const pages = document.getElementById('pages').value
     const readingStatus = document.getElementById('reading-status').checked

     //Creates new book object using my constructor function
     let book = new Book(title, author, pages, readingStatus);
     myLibrary.push(book);
     render();
}


   const bookSubmitBtn = document.querySelector('.book-form')
   bookSubmitBtn.addEventListener('submit', function (event) {
    event.preventDefault(); //Prevent the default form submission behavior
    addBookToLibrary()
 })

const addBookButton = document.querySelector('.add-book-button');
const dialogBox = document.querySelector('.dialog-box');


addBookButton.addEventListener('click', () => {
    dialogBox.showModal();
})


// Book Card Reading status btn toggle logic
const readingStatusBtn = document.querySelectorAll('.toggle-button')

//This gets the job done but its inefficient. Use a prototype.
// readingStatusBtn.forEach((button) => {
//     let isToggled = false; // Initial state is "Not toggled"

//     button.addEventListener('click', () => {

//         isToggled = !isToggled //Toggle the state making it true
//         button.classList.toggle('reading-status-btn');
//         button.classList.toggle('not-read');
        
//         // Toggle the text based on the state
//         if(isToggled){
//             button.textContent = 'Not read'
//         } else{
//             button.textContent = 'Read'
//         }
//         })
// })

//More Efficient
 Book.prototype.toggleRead = function (readingStatusBtn){
    let isToggled = false; // Initial state is "Not toggled"

    readingStatusBtn.addEventListener('click', () => {

        isToggled = !isToggled //Toggle the state making it true
        readingStatusBtn.classList.toggle('reading-status-btn');
        readingStatusBtn.classList.toggle('not-read');
        
        // Toggle the text based on the state
        if(isToggled){
            readingStatusBtn.textContent = 'Not read'
        } else{
            readingStatusBtn.textContent = 'Read'
        }
        })
}