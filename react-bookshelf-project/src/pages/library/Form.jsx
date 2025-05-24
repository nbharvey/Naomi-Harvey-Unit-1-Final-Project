// import { Link } from 'react-router-dom'
import UserData from './UserData'
import '../../index.css'
import './Forms.css'
import { useState } from 'react'

function Form({onFormSubmit}) {
  const [formData, setFormData] = useState({
    name: '',
    title: '',
    author: '',
    note: '',
  });

  const [submittedData, setSubmittedData] = useState(null);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
    onFormSubmit(formData);
  };

  return (
    <>
      <div>
            
        <form className='form' onSubmit={handleSubmit}>
          <h3>Leave a book recommendation for Naomi!</h3>
          <p>I would love to hear from you! Please use this form to add a book to my library.</p>

          <label>Enter your name:<br />

            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </label>
          <br />
          <br />
          
          <label>What is the title of your book?<br />

            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
          </label>
          <br />
          <br />
          
          <label>Who is the author of the book?<br />

            <input
              type="text"
              id="author"
              name="author"
              value={formData.author}
              onChange={handleChange}
            />
          </label>
          <br />
          <br />
          
          <label>Leave a note for Naomi!          <br />

            <textarea
              id="note"
              name="note"
              value={formData.note}
              onChange={handleChange}
              placeholder='I am recommending this book because...'
            />
          </label>
          <br />
          <button type="submit" className="form-submit"
          >Add book to the shelf</button>
        </form>
        <UserData data={submittedData} />
      </div>
    </>
  );
}


export default Form


// // import { Link } from 'react-router-dom'
// import '../../index.css'
// import './Forms.css'
// import { useState } from 'react'

// function Form( ) {
//     const [name, setName] = useState("")
//     const [title, setTitle] = useState("")
//     const [author, setAuthor] = useState("")
//   const [note, setNote] = useState("")
  
//   const [formData, setFormData] = useState({
//     name: '',
//     title: '',
//     author: '',
//     note: '',
//   });

// const handleSubmit = (e) => {
//   setFormData(prev => (prev === book ? null : book));
// }


//     return (
//         <div>
            
//         <form className='form'>
//         <h3>Leave a book recommendation for Naomi!</h3>
//         <p>I would love to hear from you! Please use this form to add a book to my library.</p>

//     <label>Enter your name:<br />

//         <input
//           type="text" 
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//     </label>
//           <br />      
//           <br />      
          
//     <label>What is the title of your book?<br />

//         <input
//           type="text" 
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />
//     </label>
//           <br />      
//           <br />      
          
//     <label>Who is the author of the book?<br />

//         <input
//           type="text" 
//           value={author}
//           onChange={(e) => setAuthor(e.target.value)}
//         />
//     </label>
//     <br />      
//     <br />      
          
//     <label>Leave a note for Naomi!          <br />

//         <textarea
//           type="text" 
//           value={note}
//           onChange={(e) => setNote(e.target.value)}
//           placeholder='I am recommending this book because...'
//         />
//           </label> 
//     <button type="submit" className="form-submit" onClick={() => handleSubmit()}
// >Add book to the shelf</button>      
//     </form>
//        </div>
//     )
// }

// export default Form