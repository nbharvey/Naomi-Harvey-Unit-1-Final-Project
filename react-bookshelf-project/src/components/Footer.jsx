import './Footer.css'

function Footer() {

    return (
      
      <div className='footer'>
        <div id="copyright">
          <small><i class="fa-solid fa-copyright"></i>     2025 Naomi Harvey</small>
        </div>
        
        <div id="location">
            <small>St. Louis, MO</small>
        </div>
      
        <div className='list'>
  <a href="https://github.com/nbharvey" target='_blank'>
    <i class="fa-brands fa-github"></i>
  </a>
 |
  <a href="www.linkedin.com/in/naomi-harvey-masters-in-education-and-self-taught-software-developer" target='_blank'>
    <i class="fa-brands fa-linkedin-in"></i>
  </a>
 |
  <a href="" target='_blank' className='Resume'>Resume</a>
</div>
        </div>
    )
}

export default Footer

