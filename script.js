let myLibrary = []

function Book(title, author, pages, readingStatus){
    this.title = title
    this.author = author
    this.pages = pages
    this.readingStatus = readingStatus
    
    }

function addBookToLibrary(book){
    myLibrary.push(book)
}

const theWitcher = new Book('The Witcher: The last wish','Andrzej Sapkowski', '288 pages', 'not read' )

const deepWork = new Book('Deep Work', 'Cal Newport', '287 pages', 'read')

addBookToLibrary(theWitcher)
addBookToLibrary(deepWork)