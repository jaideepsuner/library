const addBtn = document.querySelector('.addBtn')
const titleInput = document.querySelector('.titleInput')
const authorInput = document.querySelector('.authorInput')
const booksDiv = document.querySelector('.books')

const bookList = []

addBtn.addEventListener('click', () => {
  bookList.push(
    (book = {
      title: titleInput.value,
      author: authorInput.value,
    })
  )
  console.log(bookList)
  const newBook = document.createElement('p')
  for (let i = 0; i < bookList.length; i++) {
    newBook.textContent = bookList[i].title
    booksDiv.appendChild(newBook)
  }
})
