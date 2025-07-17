import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-logo">Jensi<span>.</span></div>

        <ul className="footer-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Me</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        <div className="footer-socials">
          <a href="https://github.com/jensikachhadiya" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
          <a href="https://linkedin.com/in/jensikachhadiya" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
          <a href="mailto:jensikachhadiya09@gmail.com"><i className="fas fa-envelope"></i></a>
        </div>

        <p className="footer-copy">&copy; {new Date().getFullYear()} Jensi Kachhadiya. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
