import React from 'react';
import './Hero.css';
import profileImg from '../assets/image.png'; // Replace with your circular photo
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="hero-dark" id="home">
      <div className="hero-content">
        <img src={profileImg} alt="Profile" className="hero-img" />
        <h1 className="hero-title">
          I'm <span className="purple">Jensi</span> <span className="orange">Kachhadiya</span>,<br />
          Web & App Developer In  <span className="white">India</span>.
        </h1>
        <p className="hero-subtext">
          I'm skilled in MERN, Firebase, and Flutter, currently studying Computer Engineering.
        </p>

        <div className="hero-buttons">
          <Link to="/contact" className="btn-gradient">Connect with Me</Link>
          <a href="/C:/Users/jensi/Downloads/Jensi Kachhdiya Resume.pdf" download className="btn-outline">My Resume</a>

        </div>
      </div>
    
    </section>
  );
};

export default Hero;
