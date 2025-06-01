import '../../index.css'
import './Form.css'
import { useEffect, useState } from 'react'
import Button from '../../components/Button';

const defaultBook = {
  id: Date.now().toString(),
  title: '',
  author: '',
  note: '',
  name: '',
  isEditing: false,
};

function Form({ book = defaultBook, onFormSubmit }) {
  const [formData, setFormData] = useState(book);

  //when currently edited book changes, form data is reset
  useEffect(() => {
    setFormData(book);
  }, [book]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(formData);
    setFormData({
      id: Date.now().toString(),
      title: '',
      author: '',
      note: '',
      name: '',
      isEditing: false,
    })
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
                minLength={3}
                value={formData.title}
                onChange={handleChange}
                required
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
                required
              />
            </label>
          </div>
          <br />

          <div className='form-shelf'>
            <label>Leave a note for Naomi!<br />
              <textarea
                id="note"
                name="note"
                value={formData.note}
                onChange={handleChange}
                placeholder='I am recommending this book because...'
                required
                minLength={3}
                maxLength={200}
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
                required
              />
            </label>
          </div>
          <div className='form-submit'>
            <Button>
              {book.isEditing ? ('Save Changes') : ('Add Book')}
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Form