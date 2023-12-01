const myLibrary = [
    {
        title: 'test',
        author: 'test',
        pages: 123,
        read: true
    },
    {
        title: 'test',
        author: 'test',
        pages: 123,
        read: true
    },
        {
        title: 'test',
        author: 'test',
        pages: 123,
        read: true
    }
]

const bookSection = document.querySelector('#book-section')
const blurOverlay = document.querySelector('#blur-overlay')
const bookInfo = document.querySelector('#book-info')

const addBtn = document.querySelector('#add-btn')   

function handleAddBtn () {

    addBtn.addEventListener('click', () => {
        blurOverlay.style.webkitFilter = "blur(15px)"
        bookInfo.style.visibility = 'visible'
        bookInfo.style.opacity = '1'
    })

}

handleAddBtn()


function Book(_title, _author, _pages, _read) {
  this._title = _title
  this._author = _author
  this._pages = _pages
  this._read = _read
}

function addBookToLibrary() {
  // do stuff here
}

