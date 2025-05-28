// import Book from "./Book"
import Modal from "./Modal";
import books from "../../books"
import Form from "./Form";
import '../../index.css'
import './Bookshelf.css'
import {useState, useMemo} from 'react'

function createShelf(b, booksPerShelf) {
  const shelf = [];
  for (let i = 0; i < b.length; i += booksPerShelf) {
    shelf.push(b.slice(i, i + booksPerShelf));
  }
  return shelf;
}


function Bookshelf() {
  const [currentBooks, setCurrentBooks] = useState(books)

  // const shelves = createShelf(currentBooks, 10);

  const shelves = useMemo(() => {
    return createShelf(currentBooks, 12)
  }, [currentBooks])

  const addNewBook = function (book) {
    if (!book.spineColor) {
      book.spineColor = '#66bfbf';
    }
    setCurrentBooks((prevBooks) => [...prevBooks, book]
  )
  }

  return (
    <>
          <div className="library-header-wrapper">
            <h2 className="library-header">Naomi's Bookshelf</h2>
      </div>
          <div className="page-layout">
        <div className="bookshelf-container">
        <img src="/plants.png" className="plants" alt="plants" />            
          <div className="bookshelf">
              {shelves.map((shelf, i) => (
                <div key={i} className="shelf">
                  <Modal books={shelf} />
                </div>
              ))}
            </div>
          </div>
        <div className="form-container">
        <img src="./coffeeonbooks.png" className="coffee-on-books" alt="Coffee on Books" />            
          <Form onFormSubmit={addNewBook}/>
        </div>
      </div>
    </>
  )
}

export default Bookshelf