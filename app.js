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
let formRead = document.getElementById('read_toggle');
let libContainer = document.getElementById('library_container');
let dButton = document.getElementsByClassName('delete');
let newBook;


// Creating function for Dark/Light mode button logic
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

modeToggler.addEventListener('click', toggleMode); // Assigning the function to toggler when clicked


// Creating functions for hiding and showing forms for use w/ multiple buttons
let sf = function showForm() {
    overlay.classList.remove('overlay-hide');
    overlay.classList.add('overlay-show');
}

addBookButton.addEventListener('click', sf); // Assigning the function to outer outer book button when clicked

let ho = function hideOverlay() {
    overlay.classList.remove('overlay-show');
    overlay.classList.add('overlay-hide');
    formTitle.value = "";
    formAuthor.value = "";
    formPages.value = "";
    formRead.checked = false;
}
// Assigning hideOverlay to both overlay and close button as they both have identical functions
overlay.addEventListener('click', ho);
formCloseButton.addEventListener('click', ho)


// Created Book object constructor
let myLibrary = []; // Array where Book objects are stored

function Book (title, author, pages, read) {
        // the constructor...
        this.title = title,
        this.author = author,
        this.pages = pages,
        this.read = read
    }


//Created function for the in-form add book button, used to submit the form
function submitForm() {
    if(formTitle.value && formAuthor.value && formPages.value){
        newBook = new Book(formTitle.value,formAuthor.value,formPages.value, formRead.checked);
        myLibrary.push(newBook);
        createBookEntry()
        ho();
    }
}

formAddButton.addEventListener('click', submitForm());








function createBookEntry() {
        const div = document.createElement('div');
        const title = document.createElement('h3');
        const author = document.createElement('p');
        const pages = document.createElement('p');
        const readStat = document.createElement('p');
        const deleteButton = document.createElement('button');
        title.textContent = newBook.title;
        author.textContent = newBook.author;
        pages.textContent = newBook.pages + ' page(s)';
        readStat.textContent = newBook.read ? 'Read' : "Haven't Read";
        deleteButton.textContent = 'Delete'
        div.classList.add('book');
        deleteButton.classList.add('delete');
        author.classList.add('book-author');
        deleteButton.setAttribute('onclick','event.stopPropagation()');



        deleteButton.addEventListener('click', () => {
            console.log('hellpo')
        });



        libContainer.appendChild(div);
        div.appendChild(title);
        div.appendChild(author);
        div.appendChild(pages);
        div.appendChild(readStat);
        div.appendChild(deleteButton)
    };



