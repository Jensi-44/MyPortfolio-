import React from 'react';
import './Projects.css';

const projectData = [
  {
    id: 1,
    title: "Mobile Selling",
    desc: "Mobile Selling Website Using HTML, CSS, Javascript",
    github: "https://github.com/Jensi-44/Mobile-Selling.git",
  },
  {
    id: 2,
    title: "Recipe Sharing App",
    desc: "MERN-based web platform to post, view, and manage recipes.",
    github: "https://github.com/jensikachhadiya/recipe-app",
  },
  {
    id: 3,
    title: "Smart Kitchen",
    desc: "AI nad ML base on Smart Kitchen",
    github: "https://github.com/Jensi-44/Smart_Kitchen.git",
  },
  {
    id: 4,
    title: "Portfolio App",
    desc: "This personal portfolio built with Flutter.",
    github: "https://github.com/Jensi-44/Portfolio.git",
  },
  {
    id: 5,
    title: "Cake",
    desc: "Cake Website Using HTML, CSS, Javascript",
    github: "https://github.com/Jensi-44/Cake.git",
  },
  {
    id: 6,
    title: "CGPA Calculator",
    desc: "Android app to manage SPI and calculate CGPA using SQLite.",
    github: "https://github.com/jensikachhadiya/cgpa-calculator",
  },
];

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <h2 className="section-title">My <span>Projects</span></h2>
      <div className="projects-grid">
        {projectData.map((project) => (
          <div key={project.id} className="project-card">
            <h3>{String(project.id).padStart(2, '0')}</h3>
            <h4>{project.title}</h4>
            <p>{project.desc}</p>
            <div className="project-buttons">
              <a href={project.github} target="_blank" rel="noreferrer">
                <button className="github-btn">GitHub ↗</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
