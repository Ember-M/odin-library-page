let libraryArray = [];
function BookConstructor(title,author,pages,read){
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read,
    console.log(`${title}, ${author}, ${pages}, ${read}`)
}
function addBookToLibrary(book){
    libraryArray.push(book)
}
