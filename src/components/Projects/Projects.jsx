import React from 'react';
import './Projects.css';

import project1 from '../../assets/projects 1.png';
import project2 from '../../assets/projects 2.png';
import project3 from '../../assets/projects 3.png';
import project4 from '../../assets/projects 4.png';
import project5 from '../../assets/projects 5.png';

const Projects = () => {
  return (
    <section className="projects">
      <div className="projects__container">

        {/* ── Header Row ── */}
        <div className="projects__header">
          <div className="projects__header-left">
            <h2 className="projects__heading">Our Projects</h2>
            <p className="projects__subhead">
              We know what buyers are looking for and suggest projects
              that will bring her clients Top Dollar for the sale of their home.
            </p>
          </div>
          <a href="#gallery" className="projects__cta">
            View Gallery <span className="projects__cta-arrow">→</span>
          </a>
        </div>

        {/*
          Grid layout:
          ┌──────────┬──────────────────────┬──────────┐
          │          │      project2        │          │
          │ project1 ├───────────┬──────────┤ project3 │
          │          │ project4  │ project5 │          │
          └──────────┴───────────┴──────────┴──────────┘
        */}
        <div className="projects__grid">

          {/* Left — full height */}
          <div className="projects__cell projects__cell--left">
            <img src={project1} alt="Project 1" className="projects__img" />
            <div className="projects__img-overlay" />
          </div>

          {/* Middle — top wide image + bottom two images */}
          <div className="projects__middle">
            <div className="projects__cell projects__cell--top">
              <img src={project2} alt="Project 2" className="projects__img" />
              <div className="projects__img-overlay" />
            </div>
            <div className="projects__bottom-row">
              <div className="projects__cell">
                <img src={project4} alt="Project 4" className="projects__img" />
                <div className="projects__img-overlay" />
              </div>
              <div className="projects__cell">
                <img src={project5} alt="Project 5" className="projects__img" />
                <div className="projects__img-overlay" />
              </div>
            </div>
          </div>

          {/* Right — full height */}
          <div className="projects__cell projects__cell--right">
            <img src={project3} alt="Project 3" className="projects__img" />
            <div className="projects__img-overlay" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;
