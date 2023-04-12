const addBtn = document.querySelector('.addBtn')
const titleInput = document.querySelector('.titleInput')
const authorInput = document.querySelector('.authorInput')
const booksDiv = document.querySelector('.books')
const readInput = document.querySelector('.readInput')

let myLibrary = []

// function Book() {}

function addBookToLibrary() {
  myLibrary.push(
    (Book = {
      title: titleInput.value,
      author: authorInput.value,
      isRead: readInput.value,
    })
  )

  const cardEl = document.createElement('div')
  cardEl.className = 'card-el'
  for (let i = 0; i < myLibrary.length; i++) {
    cardEl.innerHTML = `
    <p class='title-el'>"${myLibrary[i].title}"</p> 
    <p class='author-el'>- ${myLibrary[i].author}</p>
    <p class='isRead-el'>${myLibrary[i].isRead}</p>
    `
    booksDiv.appendChild(cardEl)
  }

  titleInput.value = ''
  authorInput.value = ''
}
