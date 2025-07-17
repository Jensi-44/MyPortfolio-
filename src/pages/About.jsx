import React from 'react';
import './About.css';
import profileImg from '../assets/about.jpg'; // Replace with your image

const About = () => {
  return (
    <section className="about-section">
      <h2 className="section-title">About <span>me</span></h2>
      <div className="about-container">

        <div className="about-image">
          <img src={profileImg} alt="Jensi Kachhadiya" />
        </div>

        <div className="about-content">
          <p>
            I'm a Computer Engineering student passionate about Web and App Development. I have completed an internship at
            <strong> Hackveda Limited</strong> where I gained hands-on experience with HTML, CSS, React JS, and Flutter.
            I love building modern UIs and scalable web apps.
          </p>
          <p>
            I’ve worked on multiple projects including a <strong>Mobile App</strong>, <strong>Recipe Sharing Platform</strong>, and a
            <strong> Smart Kitchen</strong> using Flutter and Firebase.
          </p>

          <div className="skills">
            <div className="skill"><span>HTML & CSS</span><div className="bar html"></div></div>
            <div className="skill"><span>React JS</span><div className="bar react"></div></div>
            <div className="skill"><span>JavaScript</span><div className="bar js"></div></div>
            <div className="skill"><span>Flutter</span><div className="bar flutter"></div></div>
          </div>
        </div>
      </div>

      <div className="about-stats">
        <div className="stat"><h3>1+</h3><p>Months of Experience</p></div>
        <div className="stat"><h3>10+</h3><p>Projects Completed</p></div>
        <div className="stat"><h3>5+</h3><p>Happy Clients</p></div>
      </div>
    </section>
  );
};

export default About;
