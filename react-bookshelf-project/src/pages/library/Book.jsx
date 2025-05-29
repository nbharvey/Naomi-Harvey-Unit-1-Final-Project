import "./Book.css";
import Button from "../../components/Button";
import UserData from "./UserData";
import { useState } from 'react'


function Book({ book, toggleModal, isOpen, formData, setFormData }) {
    // const [isEditing, setIsEditing] = useState(null)

    // const handleEdit = (e) => {
    //     e.preventDefault();
    //     setIsEditing(book);
    //     isEditing(book);
    //   };

    const deleteFormData = (bookToDelete) => {
        const updatedUserBooks = formData.filter(book => book.id !== bookToDelete.id);
        setFormData(updatedUserBooks);
    };

    return (
        <>
            {/* <pre>{JSON.stringify( book, null, 2)}</pre> */}
            <div>
                <div
                    className="spine"
                    onClick={() => toggleModal(book)}
                    style={{ backgroundColor: book.spineColor }}
                >
                    <h3>{book.title}</h3>
                </div>

                {isOpen && (
                    <div className="modal">
                        <div onClick={toggleModal} className="overlay" >
                            <img src="/openbook.png" class="book-image" alt="Open Book" />
                        </div>
                        {/* if there is no book.name, it evaluates to true and will display the content of the ul. */}
                        {!book.name && (
                            <div className='book-content'>
                                <ul>
                                    <li><h2 id="open-book-header" style={{ backgroundColor: book.spineColor }}>{book.title}</h2></li>
                                    <li><p id="author">Author: {book.author}</p></li>
                                    <li><p id="genre">Genre: {book.status}</p></li>
                                    <li><p id="description">Summary: {book.description}</p></li>
                                </ul>
                            </div>
                        )}

                        {/* if there is a book.name, it will display the content of UserData. */}
                        {book.name && (
                            <>
                                <UserData data={book} />

                                {/* <Button onClick={() => handleEdit(book)}>
                                            Edit book rec
                                        </Button> */}

                                <Button onClick={() => deleteFormData(book)}>
                                    Delete book
                                </Button>
                            </>
                        )}
                        <div className="modal-button">
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


