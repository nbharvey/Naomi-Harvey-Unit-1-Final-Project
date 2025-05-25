import './Footer.css'

function Footer() {

    return (
      
      <div className='footer'>
        <div id="copyright">
          <small>&copy; 2025 Naomi Harvey</small>
        </div>
        
        <div id="location">
            <small>St. Louis, MO</small>
        </div>
      
          <ul className='list'>
            <li>
            <a href="https://github.com/nbharvey" target='_blank'>GitHub</a>
              </li>
          
            <li>
            <a href="www.linkedin.com/in/naomi-harvey-masters-in-education-and-self-taught-software-developer" target='_blank'>LinkedIn</a>
              </li>
          
            <li className='Resume'>
              <a href="" target='_blank'>Resume</a>
                </li>
            </ul>
        </div>
    )
}

export default Footer

