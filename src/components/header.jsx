// Importation des Composants Reacts

import React from 'react';
import { Link } from 'react-router-dom';
import logoKasa from '../images/LOGO.png';

// Header

const Header = () => (
  <header>
    <nav className="main__menu">
      <img className="margin__logo" src={logoKasa} alt="Logo Kasa" />
      <ul className="align__nav">
        <li className="link__home"><Link to="/">Accueil</Link></li>
        <li className="link__about"><Link to="/about">A Propos</Link></li>
      </ul>
    </nav>
  </header>
);

// Exportation du Composant Header

export default Header;