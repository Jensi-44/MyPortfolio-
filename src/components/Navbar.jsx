import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="logo">
          Jen<span className="logo-accent">si</span>
        </div>

        <nav className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
          <NavLink to="/" end onClick={closeMenu}>Home</NavLink>
          <NavLink to="/about" onClick={closeMenu}>About Me</NavLink>
          <NavLink to="/projects" onClick={closeMenu}>Projects</NavLink>
          <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
        </nav>

      

        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
