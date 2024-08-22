import React from 'react';
import { Link } from 'react-router-dom';
import logoKasa from '../images/LOGO.png'

const Header = () => (
  <header>
    <nav className = "main__menu">
      <img src={logoKasa} alt = "Logo Kasa"/>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;

