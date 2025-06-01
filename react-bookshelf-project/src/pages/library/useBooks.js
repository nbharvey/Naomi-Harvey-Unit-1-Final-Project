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

//created useBooks hook to wrap functions and state that manage book, for clean code
function useBooks() {
    const [currentBooks, setCurrentBooks] = useState(() => {
        const item = getItem('currentBooks');
        return item || books;
    });


    useEffect(() => {
        setItem('currentBooks', currentBooks)
    }, [currentBooks]);

    const shelves = useMemo(() => {
        return createShelf(currentBooks, 12)
    }, [currentBooks])


    const addOrUpdateBook = function (book) {
        book.isEditing = false;
        if (!book.spineColor) {
            book.spineColor = '#6B2F4E';
        }
        // this checks if the current books exists in the array
        //filtering because static books should not be allowed to be edited
        if (currentBooks.filter((b) => b.name && (b.id === book.id)).length > 0) {
            updateBook(book);
            //this adds a new book to the array
        } else {
            setCurrentBooks((prevBooks) => [...prevBooks, book]
            )
        }
    };

    function updateBook(updatedBook) {
        setCurrentBooks((prevBooks) =>
            prevBooks.map(book => {
                return book.id === updatedBook.id ? { ...book, ...updatedBook } : book
            }
            )
        )
    }

    //useMemo calculates state automatically when it's dependencies change
    //if unedfined, it will return null
    const editingBook = useMemo(() => {
        console.log("Currently edited book changed");
        return (
            currentBooks.filter((b) => b.name && (b.isEditing))[0] ?? null
        );
    }, [currentBooks]);

    function deleteBook(bookToDelete) {
        console.log("Book is deleting");
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