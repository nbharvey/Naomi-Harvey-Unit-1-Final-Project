import Shelf from "./Shelf";
import Form from "./Form";
import '../../index.css'
import './Bookshelf.css'
import useBooks from "./useBooks";

function Bookshelf() {
  const { currentBooks, shelves, addOrUpdateBook, updateBook, editingBook, deleteBook } = useBooks();

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
                <Shelf books={shelf} updateBook={updateBook} deleteBook={deleteBook} />
              </div>
            ))}
          </div>
        </div>
        <div className="form-container">
          <img src="./coffeeonbooks.png" className="coffee-on-books" alt="Coffee on Books" />
          {editingBook ?
            <Form onFormSubmit={addOrUpdateBook} book={editingBook} />
            : <Form onFormSubmit={addOrUpdateBook} />
          }
        </div>
      </div >
    </>
  );
}

export default Bookshelf