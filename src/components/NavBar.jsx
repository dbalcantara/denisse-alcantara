import React from 'react';
import './NavBar.css';

const NavBar = () => {
  return (
    <div className='navbar'>
      <a href='/'>
        <img src='./src/assets/logo-red.png'/>
      </a>
        <div className='nav options'>
            <a href="/about" className='navitem'>About</a>
            <a href="/projects" className='navitem'>Projects</a>
            <a href="/" className='navitem'>Contact</a>
        </div>
    </div>
  )
}

export default NavBar