import './Book.css'

function UserData({ data }) {

  return (
    <>
      {data && (
        <div className='modal'>
          <div className='book-content'>
            <ul className='ul-book-style'>
              <li><h2 id="user-book-header">{data.title}</h2></li>
              <li><p id='author'>Author: {data.author}</p></li>
              <li><p id='note'>My note: {data.note}❣</p></li>
              <li><p id='rec'>This recommendation is from {data.name}❣</p></li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default UserData