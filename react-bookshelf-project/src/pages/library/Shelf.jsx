import { useState } from 'react';
import "./Book.css";
import Book from './Book';

function Shelf({ books, updateBook, deleteBook }) {
    const [modal, setModal] = useState(null);

    const toggleModal = (book) => {
        //optional chaining operator will return undefined if conditions are not met
        if (modal && book?.title === modal.title) {
            // closes modal if it's clicked again
            setModal(null);
        } else {
            setModal(book);
        }
    };

    return (
        <>
            {/* renders a colletion of books and allows one to be opened at a time. allows for edit and delete. */}
            {books.map((book) => (
                <Book
                    key={book.id}
                    book={book}
                    toggleModal={toggleModal}
                    isOpen={modal?.title === book.title}
                    updateBook={updateBook}
                    deleteBook={deleteBook}
                />
            ))}
        </>
    );
}


export default Shelf