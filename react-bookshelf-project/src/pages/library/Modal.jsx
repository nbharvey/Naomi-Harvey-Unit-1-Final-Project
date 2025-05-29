import { useState } from 'react';
import "./Book.css";
import Book from './Book';

function Modal({ books }) {
    const [modal, setModal] = useState(null);

    const toggleModal = (book) => {
        if (modal && book?.title === modal.title) {
            setModal(null);
        } else {
            setModal(book);
        }
    };

    //TODO: close books when click on new book

    return (
        <>
            {books.map((book) => (
                <Book
                    key={book.id}
                    book={book}
                    toggleModal={toggleModal}
                    isOpen={modal?.title === book.title}
                />
            ))}
        </>
    );
}


export default Modal