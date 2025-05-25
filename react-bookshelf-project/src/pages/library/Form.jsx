// import { Link } from 'react-router-dom'
import UserData from './UserData'
import '../../index.css'
import './Forms.css'
import { useState } from 'react'

function Form({onFormSubmit}) {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    note: '',
    name: '',
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
          <div className='form-shelf'>

          <p>Leave your stamp on my website in the form of a book recommendation!</p>
          </div>
          <div className='form-shelf'>
          <br />

          <label>What is the title of your book rec?<br />          

            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
            </label>
            </div>
          <br />
          <div className='form-shelf'>

          <label>Who is the author of the book?<br />          

            <input
              type="text"
              id="author"
              name="author"
              value={formData.author}
              onChange={handleChange}
            />
            </label>
            </div>
          <br />
          <div className='form-shelf'>
          <label>Leave a note for Naomi!    <br />             
  
            <textarea
              id="note"
              name="note"
              value={formData.note}
              onChange={handleChange}
              placeholder='I am recommending this book because...'
            />
          </label>
          </div>
          <br />
      <div className='form-shelf'>
          <label>Enter your name:<br />        

            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            </label>
           
            </div>
          <button type="submit" className="form-submit"
          >Add book to the shelf</button>
        </form>
        <UserData data={submittedData} />
      </div>
    </>
  );
}

export default Form