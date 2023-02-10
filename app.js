// Declaring Variables
let addBookButton = document.getElementById('book_add__button');
let modeToggler = document.getElementById('mode_toggler');
let modeTogglerIcon = document.getElementById('mode_toggler__icon');
let overlay = document.getElementById('overlay');
let formCloseButton = document.getElementById('close_button');
let formTitle = document.getElementById('form_book_title');
let formAuthor = document.getElementById('form_author');
let formPages = document.getElementById('form_pages');
let formAddButton = document.getElementById('form_add_button');
let formRead = document.getElementById('read_toggle')
// Creating functions for expanding and closing button form logic

let toggleMode = function () {
    if(modeTogglerIcon.classList.contains('fa-moon')){
        modeTogglerIcon.classList.remove('fa-moon');
        modeTogglerIcon.classList.add('fa-sun');
        document.body.classList.add('light-mode')
        document.body.style.backgroundColor = 'white';
    } else if(modeTogglerIcon.classList.contains('fa-sun')){
        modeTogglerIcon.classList.remove('fa-sun');
        modeTogglerIcon.classList.add('fa-moon');
        document.body.classList.remove('light-mode');
        document.body.style.backgroundColor = '#323940';
    }
}


let sf = function showForm() {
    overlay.classList.remove('overlay-hide');
    overlay.classList.add('overlay-show');
}

let ho = function hideOverlay() {
    overlay.classList.remove('overlay-show');
    overlay.classList.add('overlay-hide');
    console.log('clicked');
}

let cb = function closeButton() {
    overlay.classList.remove('overlay-show');
    overlay.classList.add('overlay-hide');
}

// Adding event listeners to buttons with above functions as arguments
addBookButton.addEventListener('click', sf);

formAddButton.addEventListener('click', submitForm())

modeToggler.addEventListener('click', toggleMode);

overlay.addEventListener('click', ho);

formCloseButton.addEventListener('click', cb)


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



