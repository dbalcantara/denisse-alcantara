import React from 'react';
import './NavBar.css';

const NavBar = () => {
  return (
    <div className='navbar'>
      <Link href='/denisse-alcantara/'>
        <img src='./src/assets/logo-red.png'/>
      </Link>
        <div className='nav options'>
            <Link href="#/denisse-alcantara/about" className='about-navitem'>About</Link>
            <Link href="#/denisse-alcantara/projects" className='project-navitem'>Projects</Link>
            <Link href="#/denisse-alcantara/" className='contact-navitem'>Contact</Link>
        </div>
    </div>
  )
}

export default NavBar