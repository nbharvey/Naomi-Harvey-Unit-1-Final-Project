import "./Book.css";
import Button from "../../components/Button";


function Book({book, toggleModal, isOpen}) {

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
                        <div className="modal">
                        <div className='modal-content' >
                                    <div onClick={toggleModal} className="overlay" >
                                        <ul className='book-content'>
                                    <li><h2 id="open-book-header" style={{backgroundColor: book.spineColor}}>{book.title}</h2></li>
                                    <li><p id="genre">Genre: {book.status}</p></li>
                                    <li><p>TL;DR: {book.description}</p></li>
                                            <li>
                                                <Button onClick={() => toggleModal(book)}>
                                                    Return book to library 
                                                </Button>
                                            </li>
                                            </ul>
                                    </div>
                            </div>
                            </div>
                    )}
                </div>
            
      </>
  );
}

export default Book;


