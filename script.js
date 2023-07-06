function book(title, author, pages, readOrNot){
    this.title = title
    this.author = author
    this.pages = pages
    this.readOrNot = readOrNot

    this.info = function() {
        return `${title}, by ${author}, ${pages}, ${readOrNot}`
    }
}

const theWitcher = new book('The Witcher: The last wish','Andrzej Sapkowski', '288 pages', 'not read yet' )

console.log(theWitcher.info())

const deepWork = new book('Deep Work', 'Cal Newport', '287 pages', 'read')

console.log(deepWork.info())