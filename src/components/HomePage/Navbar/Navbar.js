import React from 'react'
import Logo from '../../../Assets/Images/logo.svg'
import './Navbar.css'

function Navbar() {
  return (
    <div className='navbar' >
      <div className='logo' >
        <img src={Logo} alt="" />
      </div>
      <div className='nav-links'>
      <p>Portfolio</p>
      <p>Services</p>
      <p>Clients</p>
      </div>
      <div className='nav-menu-btn'>
      <p>Menu</p>
      </div>
    </div>
  )
}

export default Navbar
