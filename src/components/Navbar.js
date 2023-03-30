import React, {useState} from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import "../styles/Navbar.css"

function Navbar() {

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  

  return (
    <div className='navbar'>
      <div className="navbar-container">

        <div className='navbar-logo' onClick={closeMobileMenu}>
            <Link to='/'>
            <img src={logo} />
            </Link>
        </div>
       
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link
                to='/menu'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Menu
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/about'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                About
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/contact'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/cart'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                <i className="fa-sharp fa-solid fa-cart-shopping"></i> Cart
              </Link>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default Navbar