import React from 'react';
import './NavBar.css';

const NavBar = () => {
  return (
    <div className='navbar'>
      <a href='/denisse-alcantara/'>
        <img src='./src/assets/logo-red.png'/>
      </a>
        <div className='nav options'>
            <a href="/denisse-alcantara/about" className='about-navitem'>About</a>
            <a href="/denisse-alcantara/projects" className='project-navitem'>Projects</a>
            <a href="/denisse-alcantara/" className='contact-navitem'>Contact</a>
        </div>
    </div>
  )
}

export default NavBar