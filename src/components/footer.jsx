import React from 'react';
import logoKasaWhite from '../images/LOGO_white.png';

const Footer = () => (
  <footer>
    <img className = "logo__white" src={logoKasaWhite} alt = "Logo Kasa White"/>
    <p className="copyright">&copy; 2020 Kasa. All rights reserved</p>
  </footer>
);

export default Footer;