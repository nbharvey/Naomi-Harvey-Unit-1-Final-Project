import books from "../books"
import "./Book.css"

function Book() {

    return (
        <div>
            
            <div className="holds-books">
            {books.map((book) => (
              <div key={book.id} className="spine" style={{backgroundColor: book.spineColor}}>
                <h2>{book.title}</h2>
              </div>
            ))}
          </div>
        </div>
    )
}

export default Book