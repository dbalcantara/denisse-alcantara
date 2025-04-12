import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';  // Import the Link component

const NavBar = () => {
  return (
    <div className='navbar'>
      <Link to="/">
        <img src='./public/assets/logo-red.png' alt="Logo" />
      </Link>
      <div className='nav options'>
        <Link to="/about" className='about-navitem'>About</Link>
        <Link to="/projects" className='project-navitem'>Projects</Link>
        <Link to="/" className='contact-navitem'>Contact</Link>
      </div>
    </div>
  )
}

export default NavBar;
