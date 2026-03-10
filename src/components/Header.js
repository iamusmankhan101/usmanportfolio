import React from 'react';
import './Header.css';

function Header() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="bottom-nav">
      <div className="nav-container">
        <a onClick={() => scrollToSection('home')} className="nav-item">Home</a>
        <a onClick={() => scrollToSection('projects')} className="nav-item">Projects</a>
        <a onClick={() => scrollToSection('skills')} className="nav-item">Services</a>
        <a onClick={() => scrollToSection('contact')} className="nav-item">Contact</a>
        <button className="nav-item nav-button">Get Template</button>
      </div>
    </nav>
  );
}

export default Header;
