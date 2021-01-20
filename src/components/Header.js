import '../App.css'
import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return(
    <div className="header">
      <h1>Creo</h1>
      <nav>
        <ul>
          <li>
            <Link to="/creopalette">Home</Link>
          </li>
          <li>
            <Link to="/creopalette/creo">Creo</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header;
