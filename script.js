let libraryArray = [];
let removeButton = document.getElementById('removeAll');

let addBookButton = document.getElementById("addBook");
let titleField = document.getElementById("title");
let authorField = document.getElementById('author');
let pagesField = document.getElementById('pages');
let readField = document.getElementById('read');



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

function createBook(){
    let title = titleField.value;
    let author = authorField.value;
    let pages = pagesField.value;
    let read = readField.checked;
    book = new BookConstructor(title, author, pages, read)
}

function displayBookArray(array){
    if (array.length == 0){
        document.getElementById('libraryContainer').innerHTML = '';
    } 
    let bookCount = (libraryArray.length-1);
    const bookCard = document.createElement('div');
    bookCard.setAttribute('id', bookCount);
    let titleDisplay = document.createElement('p');
    let authorDisplay = document.createElement('p');
    let pagesDisplay = document.createElement('p');
    let readDisplay = document.createElement('p')
    array.forEach(element => {   
        titleDisplay.innerHTML = `Book Title: <br> ${element.title}`;
        authorDisplay.innerHTML = `Book Author:<br> ${element.author}`;
        pagesDisplay.innerHTML = `Number of pages: <br> ${element.pages}`;
        if (element.read === true){
            readDisplay.innerHTML = `You have read this book`;
        }
        else{
            readDisplay.innerHTML = `You have not read this book`;
        }
        bookCard.appendChild(titleDisplay);
        bookCard.appendChild(authorDisplay);
        bookCard.appendChild(pagesDisplay);
        bookCard.appendChild(readDisplay);
        document.getElementById('libraryContainer').appendChild(bookCard);
    });
}

addBookButton.addEventListener('click', ()=> {
    if (titleField.value == ''||authorField.value == ''||pagesField.value ==''){
        return
    }
    else{
    createBook();
    addBookToLibrary(book);
    displayBookArray(libraryArray);
    titleField.value = '';
    authorField.value = '';
    pagesField.value = '';
    console.log(book.title);
    console.log(libraryArray)
    }
})
removeButton.addEventListener('click',()=>{
    libraryArray = [];
    displayBookArray(libraryArray);
})