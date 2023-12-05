let myLibrary = []

const bookSection = document.querySelector('#book-section')
const blurOverlay = document.querySelector('#blur-overlay')
const bookInfo = document.querySelector('#book-info')

const titleInput = document.querySelector('#title-input')
const authorInput = document.querySelector('#author-input')
const pagesInput = document.querySelector('#pages-input')

const addBtn = document.querySelector('#add-btn')   
const submitBtn = document.querySelector('#submit-btn')

addBtn.addEventListener('click', () => {
    blurOverlay.style.webkitFilter = "blur(15px)"
    bookInfo.style.visibility = 'visible'
    bookInfo.style.opacity = '1'
})

function Book(_title, _author, _pages, _read) {
    this._title = _title
    this._author = _author
    this._pages = _pages
    this._read = _read
}

submitBtn.addEventListener('click', (event) => {
    event.preventDefault()

    blurOverlay.style.webkitFilter = "none"
    bookInfo.style.visibility = 'hidden'
    bookInfo.style.opacity = '0'

    let readValue

    if(document.querySelector('#yes-read').checked) {
        readValue = true
    } else {
        readValue = false
    }

    let book = new Book(titleInput.value, authorInput.value, parseInt(pagesInput.value, 10), readValue)

    myLibrary.push(book)

    console.log(myLibrary)

    for(i = 0; i < myLibrary.length; i++) {

        const div = document.createElement('div')
        div.className = 'book-style'
        bookSection.appendChild(div)
    
        const pTitle = document.createElement('p')
        const pAuthor = document.createElement('p')
        const pPages = document.createElement('p')
        const pRead = document.createElement('p')
    
        pTitle.innerText = myLibrary[i]._title
        pAuthor.innerText = myLibrary[i]._author
        pPages.innerText = myLibrary[i]._pages
        pRead.innerText = myLibrary[i]._read
    
        div.appendChild(pTitle)
        div.appendChild(pAuthor)
        div.appendChild(pPages)
        div.appendChild(pRead)
    }
})