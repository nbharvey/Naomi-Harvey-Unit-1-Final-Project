import Shelf from "./Shelf";
import Form from "./Form";
import '../../index.css'
import './Bookshelf.css'
import useBooks from "./useBooks";
import Shimmer from "../../components/Shimmer";
import { useState } from "react";


let id = 0;
function Bookshelf() {
  //creates custom hook
  const { currentBooks, shelves, addOrUpdateBook, updateBook, editingBook, deleteBook } = useBooks();
  const [emojis, setEmojis] = useState([]);

  const dropEmoji = (e) => {
    const x = e.clientX;
    setEmojis((prev) => [
      ...prev,
      {
        id: id++,
        x,
        emoji: "📚",
      },
    ]);
  };
  return (
    <>

      <div className="library-header-wrapper">
        <div className="app" onClick={dropEmoji}>
          <Shimmer><h2 className="library-header">Welcome to Naomi's Bookshelf!
          </h2>
          </Shimmer>
          {/* <button className="drop-btn">Click to Drop Emoji</button> */}
          {emojis.map(({ id, x, emoji }) => (
            <span
              key={id}
              className="emoji"
              style={{ left: x }}
              onAnimationEnd={() =>
                setEmojis((prev) => prev.filter((e) => e.id !== id))
              }
            >
              {emoji}
            </span>
          ))}
        </div>

      </div >
      <p id="bookshelf-para">These books made the shelf - browse my bookshelf and discover the stories that inspire me!</p>

      <div className="page-layout">
        <div className="bookshelf-container">
          <img src="/plants.png" className="plants" alt="plants" />
          <div className="bookshelf">
            {/* mapping over shelf and placing books by index */}
            {shelves.map((shelf, i) => (
              <div key={i} className="shelf">
                <Shelf books={shelf} updateBook={updateBook} deleteBook={deleteBook} />
              </div>
            ))}
          </div>
        </div>
        <div className="form-container">
          <img src="./coffeeonbooks.png" className="coffee-on-books" alt="Coffee on Books" />
          {editingBook ?
            <Form onFormSubmit={addOrUpdateBook} book={editingBook} />
            : <Form onFormSubmit={addOrUpdateBook} />
          }
        </div>
      </div >
    </>
  );
}

export default Bookshelf