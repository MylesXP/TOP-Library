let addBookButton = document.getElementById('book_add__button');
let addBookText = document.getElementById('book_add__text');
let addBookForm = document.getElementsByClassName('book-add-form')[0];
let formCancelButton = document.getElementById('form_cancel_button');


addBookButton.addEventListener('click', () => {
    addBookButton.classList.add('width-extend')
    addBookText.classList.add('button-hide')
    setTimeout(() => {
        addBookForm.classList.add('book-add-form--display')
    }, 700)
    console.log('clicked')
},false)

formCancelButton.addEventListener('click', () => {
    // addBookButton.classList.remove('book-add-form');
    addBookButton.classList.remove('width-extend')
    setTimeout(() => {
        addBookText.classList.remove('button-hide')
    }, 700);
    addBookForm.classList.remove('book-add-form--display')
})



let myLibrary = [];

function Book() {
  // the constructor...
}

function addBookToLibrary() {
  // do stuff here
}

function childClicked() {
    console.log('child clicked')
}

function submitForm() {
    addBookForm.submit();
}

