import { NavLink } from 'react-router-dom'
import './Navbar.css'

function Navbar() {

    return (
        <nav className='navbar'>
          <NavLink id="navlink" to="/">Home</NavLink>
          <NavLink id="navlink" to="/library">Library</NavLink>
          <NavLink id="navlink" to="/about">About</NavLink>
        </nav>
    )
}



        {/* <div>
        <h1>Naomi's Digital Playground</h1>
        <div class="profileHeading">
          <img src="./profilePic.png" class="profile-pic" alt="Animation of Naomi" /> 
          <h2>About Naomi</h2>    
        </div>
         
        <div class="top">
        <nav class="navbar-fixed">
          <ul>
            <li class="li-nav"><a href="./careerGoals.html">Career Goals</a></li>
            <li class="li-nav"><a href="./projects.html">Projects</a></li>
          </ul>
        </nav>
      </div>

    </div>  */}

export default Navbar