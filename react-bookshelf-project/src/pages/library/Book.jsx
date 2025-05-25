import {useState} from 'react'
import "./Book.css";

function Book({ books }) {
  // const [displayCover, setDisplayCover] = useState(null)
  const [selectedBook, setSelectedBook] = useState(null)

const handleClick = (book) => {
  setSelectedBook(prev => (prev === book ? null : book));
}

  return (
    <>
      {books.map((book, index) => (
        <div
          key={index}
          className="spine"
          onClick={() => handleClick(book)}
          style={{ backgroundColor: book.spineColor }}

          >
          <h3>{book.title}</h3>
        </div>
      ))}

      {selectedBook && (
        <div className="book-cover"
          style={{ marginTop: '20px' }}>
          <img src={selectedBook.coverUrl} alt={selectedBook.title} />
              </div>
      )}
      </>
  );
}

export default Book;