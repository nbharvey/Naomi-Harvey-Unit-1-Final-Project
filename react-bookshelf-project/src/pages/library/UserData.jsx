import './Book.css'

function UserData({ data }) {
  //TODO: add CRUD functionality here

  return (
    <>
      <div className='modal'>
        <div className='overlay'></div>
        {data && (
          <div className='book-content'>
            <ul>
              <li><h2 id="open-book-header">{data.title}</h2></li>
              <li><p id='name'>Name: {data.name}</p></li>
              <li><p id='author'>Author: {data.author}</p></li>
              <li><p id='note'>My note: {data.note}❣</p></li>
              <li><p id='rec'>This recommendation is from {data.name}❣</p></li>
            </ul>
          </div>

        )}
      </div >
    </>

  )

}

export default UserData