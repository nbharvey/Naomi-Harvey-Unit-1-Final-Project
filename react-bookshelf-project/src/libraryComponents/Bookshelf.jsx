import books from "../books"
import Book from "./Book"

function Bookshelf() {

    return (
        <>
        <div>
            <h1>Naomi's Bookshelf</h1>
            <p>Click on each book to interact with the content, and discover some of my favorite reads!</p>
        </div>
        
        <Book />
        </>
    )
}

export default Bookshelf