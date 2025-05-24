import { NavLink } from 'react-router-dom'
import './Navbar.css'

function Navbar() {

    return (
        <nav className='navbar'>
          <NavLink to="/" className={({ isActive }) => isActive ? 'active-link' : ''}>Home</NavLink>
          <NavLink to="/library" className={({ isActive }) => isActive ? 'active-link' : ''}>Library</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'active-link' : ''}>About</NavLink>
        </nav>
    )
}

export default Navbar