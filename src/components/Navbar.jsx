import React from 'react';
import '../styles/Navbar.css';
import starkLogo from '../assets/stark-logo.jpg'; // use your actual filename

const Navbar = () => (
  <nav className="got-navbar">
    <div className="got-logo">
      <img src={starkLogo} alt="House Stark Logo" className="got-logo-img" />
      GOT
    </div>
    <ul className="got-nav-links">
      <li><a href="#/">Home</a></li>
      <li><a href="#/characters">Characters</a></li>
      <li><a href="#/maps">Maps</a></li>
      <li><a href="#/families">Families</a></li>
      <li><a href="#/episodes">Episodes</a></li>
      <li><a href="#/about">About</a></li>
    </ul>
  </nav>
);

export default Navbar;
