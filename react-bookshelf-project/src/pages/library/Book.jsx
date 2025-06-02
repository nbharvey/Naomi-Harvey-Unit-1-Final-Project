import "./Book.css";
import Button from "../../components/Button";
import UserData from "./UserData";
import { useState } from 'react'


function Book({ book, toggleModal, isOpen, formData, setFormData, updateBook, deleteBook }) {

    const handleEdit = (e) => {
        updateBook({ ...book, isEditing: true });
        toggleModal(null);
    };

    const handleDelete = (bookToDelete) => {
        deleteBook(bookToDelete);
        toggleModal(null);
    };

    return (
        <>
            <div>
                <div
                    className="spine"
                    onClick={() => toggleModal(book)}
                    style={{ backgroundColor: book.spineColor }}
                >
                    <h3>{book.title}</h3>
                </div>

                {isOpen && (
                    <div onClick={toggleModal} className="modal">

                        {/* if there is no book.name, it evaluates to true and will display the content of the ul. */}
                        {!book.name && (
                            <div className='book-content'>
                                <ul className="ul-book-style">
                                    <li><h2 id="open-book-header" style={{ backgroundColor: book.spineColor }}>{book.title}</h2></li>
                                    <li><p id="author">Author: {book.author}</p></li>
                                    <li><p id="genre">Genre: {book.status}</p></li>
                                    <li><p id="description">Summary: {book.description}</p></li>
                                    <li><p id="because">{book.because}</p></li>
                                </ul>
                            </div>
                        )}

                        {/* if there is a book.name, it will display the content of UserData. */}

                        {book.name && (
                            <>
                                <UserData data={book} />
                                <div className="modal-buttons">
                                    <div className="edit-delete-buttons">
                                        <div className="edit-button">
                                            <Button onClick={() => handleEdit(book)}>
                                                Edit book rec
                                            </Button>
                                        </div>
                                        <div className="delete-button">

                                            <Button onClick={() => handleDelete(book)}>
                                                Delete book
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                        <div className="return-button">
                            <Button onClick={() => toggleModal(book)}>
                                Return book
                            </Button>
                        </div>
                    </div>
                )}
            </div>

        </>
    );
}

export default Book;
