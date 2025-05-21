import "./Book.css";

function Book({books}) {
  return (
    <>
      {books.map((book) => (
        <div
          key={book.id}
          className="spine"
              style={{ backgroundColor: book.spineColor }}
          >
          <h2>{book.title}</h2>
        </div>
      ))}
      </>
  );
}

export default Book;

// TODO: decide where to display the inner content of the books and where to handle the click functionality

// <div className="container">
//   <div className="box" id="box1">
//     {books.map((book) => (
//       <div key={book.id} className="spine" style={{ backgroundColor: book.spineColor }}>
//         <h2>{book.title}</h2>
//       </div>
//     ))}
//   </div>
//   <div className="box" id="box2"></div>
//   <div className="box" id="box3"></div>
//   <div className="box" id="box4"></div>
// </div>