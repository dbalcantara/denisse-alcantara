import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <p className='name'>DENISSE ALCANTARA</p>
        <div className='made-by' >
        <p className='foot-det'>handcrafted by</p>
          <img  className='heart' src='./assets/heart.gif'/>
          <p className='foot-det'>yours truly</p>
        </div>
        <p className='foot-det'>Taguig City</p>
    </div>
  )
}

export default Footer