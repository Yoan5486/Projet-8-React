// Importation des Composants Reacts

import React from 'react';
import logoKasaWhite from '../images/LOGO_white.png';

// Footer 

const Footer = () => (
  <footer>
    <img className="logo__white" src={logoKasaWhite} alt="Logo Kasa Blanc" />
    <p className="copyright">&copy; 2020 Kasa. All rights reserved</p>
  </footer>
);

// Exportation du Composant Footer 

export default Footer;