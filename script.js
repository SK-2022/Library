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
// function render() {
//     let libraryContainerElement = document.querySelector('.book-card-container')
//     //Line below refreshes the book card container and prevents duplication of books when rendered
//     libraryContainerElement.innerHTML = ""
//     for (let i = 0; i < myLibrary.length; i++){
//         let book = myLibrary[i]
//         let bookCardElement = document.createElement('div')
//         //This allows us to display the myLibrary elements onto the page.
//         bookCardElement.innerHTML = 
//         `<div class="book-card">
//         <div class="book-title">${book.bookTitle}</div>
//         <div class="book-author">By ${book.author}</div>
//         <div class="pages">Pages: ${book.pageNumbers}</div>
//         <div class="book-card-btn-container">
//             <button class="toggle-button reading-status-btn" id="toggle-btn(${i})">${book.readingStatus ? "Read" : "Not Read"}</button>
//             <img class="trash-icon" onclick="removeBook(${i})" src="/images/trash-icon.png" alt="Remove button trashcan">
//         </div>
//     </div>`;
//     libraryContainerElement.appendChild(bookCardElement)
//     }
// }

// Prototype method to update the button class and text based on reading status
Book.prototype.updateButtonClass = function (buttonElement) {
    if (this.readingStatus) {
        buttonElement.textContent = "Read";
        buttonElement.classList.add('reading-status-btn'); // Add 'reading-status-btn' class
        buttonElement.classList.remove('not-read'); // Remove 'not-read' class
    } else {
        buttonElement.textContent = "Not Read";
        buttonElement.classList.add('not-read'); // Add 'not-read' class
        buttonElement.classList.remove('reading-status-btn'); // Remove 'reading-status-btn' class
    }
};

//Calls the function on the book at a specific index
function toggleRead(index) {
    const book = myLibrary[index];
    book.toggleRead(); // Toggle the reading status
    render(); //Re-render the books to update the display.
}

// Rendering books and attaching event listeners
function render() {
    let libraryContainerElement = document.querySelector('.book-card-container');
    libraryContainerElement.innerHTML = ""; // Clear previous content

    myLibrary.forEach((book, index) => {
        const bookCardElement = document.createElement('div');
        bookCardElement.innerHTML = `
        <div class="book-card">
            <div class="book-title">${book.bookTitle}</div>
            <div class="book-author">By ${book.author}</div>
            <div class="pages">Pages: ${book.pageNumbers}</div>
            <div class="book-card-btn-container">
                <button class="toggle-button" id="toggle-btn-${index}">${book.readingStatus ? "Read" : "Not Read"}</button>
                <img class="trash-icon" onclick="removeBook(${index})" src="/images/trash-icon.png" alt="Remove button trashcan">
            </div>
        </div>`;
        libraryContainerElement.appendChild(bookCardElement);

        // Attach event listener to the toggle button
        const toggleButton = document.getElementById(`toggle-btn-${index}`);
        toggleButton.addEventListener('click', () => {
            book.toggleRead(); // Toggle the reading status in the object
            book.updateButtonClass(toggleButton); // Update the button's class and text
        });

        // Set the button's initial class and text
        book.updateButtonClass(toggleButton);
    });
}

//Removes a book based on its index position in the myLibrary array
function removeBook(index) {
    //Removes 1 element from the array at the specified index 
    myLibrary.splice(index, 1)
    //This displays the new myLibrary array on the page without the removed element.
    render()
}

//This function adds a book to the myLibrary array.
function addBookToLibrary(){
     //Selects all inputs from the dialog
     const title = document.getElementById('title').value
     const author = document.getElementById('author').value
     const pages = document.getElementById('pages').value
     const readingStatus = document.getElementById('reading-status').checked

     //Creates new book object using my constructor function
     const book = new Book(title, author, pages, readingStatus);
     myLibrary.push(book);
     //Render function displays the items of the array to the html page
     render();
}

Book.prototype.toggleRead = function () {
    this.readingStatus = !this.readingStatus; // Toggle the readingStatus
}


//Book Submission button functionality
   const bookSubmitBtn = document.querySelector('.book-form')
   bookSubmitBtn.addEventListener('submit', function () {
    addBookToLibrary()
    //Resets form after submission
    bookSubmitBtn.reset()
 })


const addBookButton = document.querySelector('.add-book-button');
const dialogBox = document.querySelector('.dialog-box');

//Add book button functionality
addBookButton.addEventListener('click', () => {
    dialogBox.showModal();
})






