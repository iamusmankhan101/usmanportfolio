import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        {/* Status Badge */}
        <div className="status-badge">
          <span className="status-dot"></span>
          AVAILABLE FOR WORK — WORLDWIDE
        </div>

        {/* Main Content */}
        <div className="hero-content">
          <div className="hero-tagline">
            <span className="tagline-text">I MAKE YOUR </span>
            <span className="tagline-dreams">dreams</span>
            <span className="tagline-text"> COME TRUE</span>
          </div>

          <div className="hero-name">
            <h1 className="name-first">Usman</h1>
            <h1 className="name-last">Khan</h1>
          </div>

          <div className="hero-description">
            <p>
              Full-stack developer, React specialist, and WordPress expert with 3+ years 
              shipping real products. Two live platforms. 500+ users. Built from 
              scratch — solo.
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
