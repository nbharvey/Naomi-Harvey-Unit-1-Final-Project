import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {

  return (

    <div className='footer'>
      <div id="copyright">
        <p><i className="fa-solid fa-copyright"></i>     2025 Naomi Harvey</p>
      </div>

      <div id="location">
        <p>St. Louis, MO</p>
      </div>

      <div className='list'>
        <a href="https://github.com/nbharvey" target='_blank' rel='noopener noreferrer'>
          <i className="fa-brands fa-github"></i>
        </a>
        |
        <a href="https://www.linkedin.com/in/naomi-harvey-masters-in-education-and-self-taught-software-developer" target='_blank' rel='noopener noreferrer'>
          <i className="fa-brands fa-linkedin-in"></i>
        </a>
        |
        <Link to="./resume" className='resume'>Resume</Link>
      </div>
    </div>
  )
}

export default Footer

