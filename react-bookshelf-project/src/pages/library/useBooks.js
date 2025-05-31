import { useState, useMemo } from 'react'
import books from '../../books';

function createShelf(b, booksPerShelf) {
    const shelf = [];
    for (let i = 0; i < b.length; i += booksPerShelf) {
        shelf.push(b.slice(i, i + booksPerShelf));
    }
    return shelf;
}

//created useBooks hook to wrap functions and state that manage book, for clean code
function useBooks() {
    const [currentBooks, setCurrentBooks] = useState(books)

    const shelves = useMemo(() => {
        return createShelf(currentBooks, 12)
    }, [currentBooks])

    const addOrUpdateBook = function (book) {
        if (!book.spineColor) {
            book.spineColor = '#6B2F4E';
        }
        // this checks if the current books exists in the arary
        //filtering because static books should not be allowed to be edited
        if (currentBooks.filter((b) => b.name && (b.id === book.id)).length > 0) {
            updateBook(book);
            // this adds a new book to the array
        } else {
            setCurrentBooks((prevBooks) => [...prevBooks, book]
            )
        }
    };

    function updateBook(updatedBook) {
        setCurrentBooks((prevBooks) =>
            prevBooks.map(book =>
                book.id === updatedBook.id ? { ...book, ...updatedBook } : book)
        )
    }
    //useMemo calculates state automatically when it's dependencies change
    //if unedfined, it will return null
    const editingBook = useMemo(() => {
        console.log("Currently edited book changed")
        return (
            currentBooks.filter((b) => b.name && (b.isEditing))[0] ?? null
        );
    }, [currentBooks]);

    //returning the functions being used
    return {
        currentBooks, shelves, addOrUpdateBook, updateBook, editingBook
    }
}

export default useBooks