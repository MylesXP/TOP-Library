let addBookButton = document.getElementById('book_add__button');
let addBookText = document.getElementById('book_add__text');
let addBookForm = document.getElementsByClassName('book-add-form')[0];
let formTitle = document.getElementById('book_title');
let formAuthor = document.getElementById('book_author');
let formPages = document.getElementById('book_pages');
let formRead = document.getElementById('book_read');
let formCancelButton = document.getElementById('form_cancel_button');


let addButtonEL = addBookButton.addEventListener('click', () => {
    addBookButton.classList.add('width-extend')
    addBookText.classList.add('button-hide')
    setTimeout(() => {
        addBookForm.classList.add('book-add-form--display')
    }, 700)
    console.log('clicked')
})



// addButtonEL.removeEventListener('click',addButtonEL)

let cancelButtonEL = formCancelButton.addEventListener('click', () => {
    addBookButton.classList.remove('width-extend')
    setTimeout(() => {
        addBookText.classList.remove('button-hide')
    }, 700);
    addBookForm.classList.remove('book-add-form--display')
})

document.body.addEventListener('click',() => {
    addBookButton.classList.remove('width-extend')
    addBookForm.classList.remove('book-add-form--display')
    setTimeout(() => {
        addBookText.classList.remove('button-hide')
    }, 700);
})





let myLibrary = [];

function Book (title, author, pages, read) {
        // the constructor...
        this.title = title,
        this.author = author,
        this.pages = pages,
        this.read = read
        // createBookEntry = function() {
        //     const div = document.createElement('div');
        //     div.style.color = 'blue';
        //     div.style.height = '400px';
        //     div.style.width = '400px';
        //     document.appendChild(div)
        //     const title = document.createElement('p');
        //     const author = document.createElement('p');
        //     const pages = document.createElement('p');
        // }
    }

function submitForm() {
    if(formTitle.value && formAuthor.value && formPages.value){
        let newBook = new Book(formTitle.value,formAuthor.value,formPages.value, formRead.checked);
        myLibrary.push(newBook);
        formTitle.value = "";
        formAuthor.value = "";
        formPages.value = "";
        formRead.checked = false;
    }
}

function addBookToLibrary() {
  // do stuff here
}

function childClicked() {
    console.log('child clicked')
}



