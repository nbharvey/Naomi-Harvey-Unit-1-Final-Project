import { useState } from 'react';
import "./Book.css";
import Book from './Book';

function Shelf({ books, updateBook }) {
    const [modal, setModal] = useState(null);

    const toggleModal = (book) => {
        // closes modal if it's clicked again
        if (modal && book?.title === modal.title) {
            setModal(null);
        } else {
            setModal(book);
        }
    };

    return (
        <>
            {/* renders a colletion of books and allows one to be opened at a time */}
            {books.map((book) => (
                <Book
                    key={book.id}
                    book={book}
                    toggleModal={toggleModal}
                    isOpen={modal?.title === book.title}
                    updateBook={updateBook}
                />
            ))}
        </>
    );
}


export default Shelf