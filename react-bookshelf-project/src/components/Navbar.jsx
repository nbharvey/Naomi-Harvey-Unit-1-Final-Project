import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react';
import './Navbar.css'

function Navbar() {

  return (
    <div>
      <nav className="navbar">
        <div className='nav-links'>
  <NavLink to="/" className={({ isActive }) => isActive ? 'active-link' : ''}>Home</NavLink>
        </div>
        <div className='nav-links'>

          <NavLink to="/library" className={({ isActive }) => isActive ? 'active-link' : ''}>Library</NavLink>
          </div>

  <div className="nav-item dropdown">
          <span className="dropdown-label">About           <i class="fa-solid fa-circle-chevron-down"></i>
</span>
    <ul className="ul-dropdown">
      <li><Link to="/aboutnaomi">About Naomi</Link></li>
      <li><Link to="/aboutprojects">About Projects</Link></li>
    </ul>
  </div>
</nav>
    </div>
  );
}











    
    

export default Navbar