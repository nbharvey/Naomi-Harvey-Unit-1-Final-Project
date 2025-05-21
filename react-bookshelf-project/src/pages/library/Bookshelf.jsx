import Book from "./Book"
import books from "../../books"
import Form from "./Form";
import '../../index.css'
import './Bookshelf.css'

function Bookshelf() {
  function createShelf(books, booksPerShelf) {
    const shelf = [];
    for (let i = 0; i < books.length; i += booksPerShelf) {
      shelf.push(books.slice(i, i + booksPerShelf));
    }
    return shelf;
  }
    
  const shelves = createShelf(books, 6);

  return (
    <>
          <div className="library-header-wrapper">
            <h2 className="library-header">Naomi's Bookshelf</h2>
          </div>
          <div className="page-layout">
            <div className="bookshelf-container">
              <div className="bookshelf">
              {shelves.map((shelf, i) => (
                <div key={i} className="shelf">
                  <Book books={shelf} />
                </div>
              ))}
            </div>
          </div>
        <div className="form-container">
          <Form />
        </div>
      </div>
    </>
  )
}

export default Bookshelf