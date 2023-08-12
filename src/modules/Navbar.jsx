import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className='navbar'>
      <ul>
        <Link to='/buscadorpeliculas'><li>HOME</li></Link>
        <Link to='/about'><li>ABOUT</li></Link>
        <Link to='/contacto'><li>CONTACTO</li></Link>
      </ul>
    </nav>
  )
}
