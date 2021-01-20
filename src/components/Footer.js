import '../App.css'
import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return(
    <div className="footer">
      <nav>
        <ul>
          <li>
            <Link to="/creopalette">Home</Link>
          </li>
          <li>
            <a href="https://github.com/CoLorDe">GitHub</a>
          </li>
          <li>
            <a href="https://colorde.github.com/">Other apps</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Footer;
