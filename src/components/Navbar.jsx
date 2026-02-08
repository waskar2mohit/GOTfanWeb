import React, { useState } from 'react';
import '../styles/Navbar.css';
import starkLogo from '../assets/stark-logo.jpg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="got-navbar">
      <div className="got-logo">
        <img src={starkLogo} alt="House Stark Logo" className="got-logo-img" />
        <span>GOT</span>
      </div>

      {/* Hamburger Icon */}
      <div className="got-menu-icon" onClick={() => setIsOpen(!isOpen)}>
        <div className={isOpen ? "bar open" : "bar"}></div>
        <div className={isOpen ? "bar open" : "bar"}></div>
        <div className={isOpen ? "bar open" : "bar"}></div>
      </div>

      {/* Nav Links */}
      <ul className={`got-nav-links ${isOpen ? "active" : ""}`}>
        <li><a href="#/" onClick={() => setIsOpen(false)}>Home</a></li>
        <li><a href="#/characters" onClick={() => setIsOpen(false)}>Characters</a></li>
        <li><a href="#/maps" onClick={() => setIsOpen(false)}>Maps</a></li>
        <li><a href="#/families" onClick={() => setIsOpen(false)}>Families</a></li>
        <li><a href="#/episodes" onClick={() => setIsOpen(false)}>Episodes</a></li>
        <li><a href="#/about" onClick={() => setIsOpen(false)}>About</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;