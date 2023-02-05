let addBookButton = document.getElementById('book_add__button');
let addBookText = document.getElementById('book_add__text');

addBookButton.addEventListener('click', () => {
    addBookButton.classList.add('width-extend')
    addBookText.classList.toggle('button-hide')
    console.log('hello')
})

let myLibrary = [];

function Book() {
  // the constructor...
}

function addBookToLibrary() {
  // do stuff here
}