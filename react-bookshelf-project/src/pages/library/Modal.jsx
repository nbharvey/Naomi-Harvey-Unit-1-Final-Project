import { useState } from 'react'
// import Book from './Book'
import "./Book.css";

function Modal({ books }) {
    const [modal, setModal] = useState(false);

    const toggleModal = (book) => {
        setModal(!modal);
    };

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
      
                    {modal && (
                        <div className="modal">
                        <div key={index}>

                            <div onClick={toggleModal} className="overlay"></div>
                            <div className="modal-content">
                                    <h2>{book.title}</h2>
                                <p>idkidkdidkdidkdidkdidkdidk</p>
                                <button className="close-modal" onClick={() => toggleModal(book)}>
                                    Return to library
                                </button>
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