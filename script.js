const addBtn = document.getElementById('add-btn')
const bookDetails = document.getElementById('book-details')

const detailForm = document.getElementById('book-details')

const cancelBtn = document.getElementById('cancel-btn')
const submitBtn = document.getElementById('submit-btn')
const delBtn = document.getElementById('del-btn')

const bookTable = document.getElementById('book-table')

const myLibrary = []


addBtn.addEventListener('click', () => {
    bookDetails.style.display = "grid"
})

function createBook(title, author, pages, read, index) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.index = index
}

function submitFunc() {
    let inRead = false
    let inBookName = document.getElementById('in-book-name').value
    let inBookAuthor = document.getElementById('in-book-author').value
    let inBookPages = document.getElementById('in-book-pages').value
    
    if (document.querySelector('input[name="read"]:checked').value === 'Yes') {
        inRead = "Yes"
    } else {
        inRead = "No"
    }

    bookDetails.style.display = 'none'

    let book = new createBook(inBookName, inBookAuthor, inBookPages, inRead)

    myLibrary.push(book)

    console.log(myLibrary)

    bookDetails.reset()

    createTable(inBookName, inBookAuthor, inBookPages, inRead)
}

function createTable(inBookName, inBookAuthor, inBookPages, inRead) {
    const tableRow = document.createElement('tr')

    const titleData = document.createElement('td')
    const authorData = document.createElement('td')
    const pagesData = document.createElement('td')
    const readData = document.createElement('td')
    const delCol = document.createElement('td')
    const delBtn = document.createElement('button')

    titleData.innerText = inBookName
    authorData.innerText = inBookAuthor
    pagesData.innerText = inBookPages
    readData.innerText = inRead
    delBtn.innerText = 'Delete'
    delBtn.setAttribute('id', 'del-btn')

    tableRow.appendChild(titleData)
    tableRow.appendChild(authorData)
    tableRow.appendChild(pagesData)
    tableRow.appendChild(readData)
    tableRow.appendChild(delCol)
    delCol.appendChild(delBtn)

    document.getElementById('book-table').appendChild(tableRow)
}




bookDetails.addEventListener('submit', (event) => {
    event.preventDefault()
    submitFunc()
})

cancelBtn.addEventListener('click', () => {
    bookDetails.style.display = "none"
})


