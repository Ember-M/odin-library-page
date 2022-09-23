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
    BookConstructor.prototype.toggleRead = function(value){
        if (value ==  true){
            this.read = true
        }
        else if (value == false){
            this.read = false
        }
    }
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
    bookCard.setAttribute('id', `div${bookCount}`);
    let titleDisplay = document.createElement('p');
    let authorDisplay = document.createElement('p');
    let pagesDisplay = document.createElement('p');
    let readDisplay = document.createElement('p')
    let readButton = document.createElement('input');
    let removeButton = document.createElement('button');
    array.forEach(element => {
          
        titleDisplay.innerHTML = `Book Title: <br> ${element.title}`;
        authorDisplay.innerHTML = `Book Author:<br> ${element.author}`;
        pagesDisplay.innerHTML = `Number of pages: <br> ${element.pages}`;
        if (element.read == true){
            readDisplay.innerHTML = `You have read this book!`;
            readButton.checked = true;
        }
        else{
            readDisplay.innerHTML = `You have not read this book!`;
            readButton.checked = false;
        }
        bookCard.appendChild(titleDisplay);
        bookCard.appendChild(authorDisplay);
        bookCard.appendChild(pagesDisplay);
        bookCard.appendChild(readDisplay);
        bookCard.appendChild(readButton);
        bookCard.appendChild(removeButton);
        removeButton.innerHTML = "REMOVE!";
        readButton.setAttribute('type', 'checkbox');
        readButton.addEventListener('click', () =>{
            console.log(readButton.checked);
            element.toggleRead(readButton.checked)
            if (element.read === true){
                readDisplay.innerHTML = `You have read this book!`;
            }
            else if (element.read === false){
                readDisplay.innerHTML = `You have not read this book!`;
            }
        })
        document.getElementById('libraryContainer').appendChild(bookCard)
        let thisDiv = document.getElementById(`div${bookCount}`);
        removeButton.addEventListener('click', function handleClick(event) {
            thisDiv.remove();
            array.splice(bookCount,1);
          });
        console.log(thisDiv);
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