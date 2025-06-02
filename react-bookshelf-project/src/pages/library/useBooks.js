import { useState, useMemo, useEffect } from 'react';
import books from '../../books';
import { getItem, setItem } from '../../utils/localStorage'

function createShelf(b, booksPerShelf) {
    const shelf = [];
    for (let i = 0; i < b.length; i += booksPerShelf) {
        shelf.push(b.slice(i, i + booksPerShelf));
    }
    return shelf;
}

//custom hook to help manage code duplication and centralize state
function useBooks() {
    const [currentBooks, setCurrentBooks] = useState(() => {
        const item = getItem('currentBooks');
        return item || books;
    });
    // logic for storing currentBooks in local storage
    useEffect(() => {
        setItem('currentBooks', currentBooks)
    }, [currentBooks]);
    //useMemo calculates state automatically when it's dependecies change, and if dependecies do not change then useMemo returns the previous cached result
    const shelves = useMemo(() => {
        return createShelf(currentBooks, 12)
    }, [currentBooks])

    //logic to either add or update, because the form component will need to change based on user actions
    const addOrUpdateBook = function (book) {
        book.isEditing = false;
        if (!book.spineColor) {
            book.spineColor = '#6B2F4E';
        }
        // this checks if the current books exists in the array, and if it does then it needs to check if it has a key name, because only user added books have that key
        if (currentBooks.filter((b) => b.name && (b.id === book.id)).length > 0) {
            updateBook(book);
            //this adds a new book to the array
        } else {
            setCurrentBooks((prevBooks) => [...prevBooks, book]
            )
        }
    };
    //handles update of book and adds to array if it was updated, if not just returns the book
    function updateBook(updatedBook) {
        setCurrentBooks((prevBooks) =>
            prevBooks.map(book => {
                return book.id === updatedBook.id ? { ...book, ...updatedBook } : book
            }
            )
        )
    }

    //useMemo to handle edit logic, because no rerender will be required if books are filtered and the previous books don't equal the id of book to delete
    const editingBook = useMemo(() => {
        return (
            currentBooks.filter((b) => b.name && (b.isEditing))[0] ?? null
        );
    }, [currentBooks]);
    //similar logic to updateBook
    function deleteBook(bookToDelete) {
        setCurrentBooks((prevBooks) => {
            return prevBooks.filter((b) => b.id !== bookToDelete.id);
        }
        )
    }

    //returning the functions being used
    return {
        currentBooks, shelves, addOrUpdateBook, updateBook, editingBook, deleteBook
    }
}

export default useBooks