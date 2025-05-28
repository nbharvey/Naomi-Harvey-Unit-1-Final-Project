import { useState } from 'react'
// import Book from './Book'
import "./Book.css";

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
            {books.map((book, index) => (
                <div key={index}>
                    <div
                        className="spine"
                        onClick={() => toggleModal(book)}
                        style={{ backgroundColor: book.spineColor }}
                    >
                        <h3>{book.title}</h3>
                    </div>
      
                    {modal?.title === book.title && (
                        <div className="modal">
                        <div key={index}>
                        <div className='modal-content' >
                                    <div onClick={toggleModal} className="overlay" >
                                        <ul className='book-content'>
                                    <li><h2 id="open-book-header" style={{backgroundColor: book.spineColor}}>{book.title}</h2></li>
                                    <li><p id="genre">Genre: {book.status}</p></li>
                                    <li><p>TL;DR: {book.description}</p></li>
                                    <li><button className="close-modal" style={{backgroundColor: book.spineColor}} onClick={() => toggleModal(book)}>
                                    Return to library
                                            </button></li>
                                            </ul>
                                    </div>
                            </div>
                            </div>
                            </div>
                    )}
                </div>
            ))}
        </>
    );
}


    export default Modal