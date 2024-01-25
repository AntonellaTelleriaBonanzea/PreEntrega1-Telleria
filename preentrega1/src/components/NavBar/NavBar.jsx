import React from 'react'
import CardWidget from '../CardWidget/CardWidget'

export const NavBar = () => {
  return (
    <>
    <h1>HENKO</h1>

    <ul>
        <li><a href="#">INICIO</a></li>
        <li><a href="#">NOVEDADES</a></li>
        <li><a href="#">PRODUCTOS</a></li>
        <li><a href="#">NOSOTROS</a></li>
        <li><a href="#">CONTACTO</a></li>
    </ul>

    <CardWidget/>
    
    </>
  )
}

export default NavBar