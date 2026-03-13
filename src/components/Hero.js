import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        {/* Status Badge */}
        <div className="status-badge">
          <span className="status-dot"></span>
          AVAILABLE FOR WORK
        </div>

        {/* Main Content */}
        <div className="hero-content">
          <div className="hero-name">
            <h1 className="name-first">Usman</h1>
            <h1 className="name-last">Khan</h1>
          </div>

          <div className="hero-description">
            <p>
              I bridge the gap between a raw idea and a scalable full-stack system. Whether you need a sophisticated React app or an AI-driven engine, I handle the heavy lifting of architecture, security, and deployment so you can focus on growth.
            </p>
          </div>

          <div className="hero-buttons">
            <button className="btn-primary" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
              View Projects
            </button>
            <button className="btn-secondary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
