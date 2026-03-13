import React from 'react';
import './Header.css';

function Header() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <span className="logo-text">usman</span>
        </div>
        
        <nav className="nav-menu">
          <a onClick={() => scrollToSection('home')} className="nav-link">HOME</a>
          <a onClick={() => scrollToSection('services')} className="nav-link">SERVICES</a>
          <a onClick={() => scrollToSection('projects')} className="nav-link">PROJECTS</a>
          <a onClick={() => scrollToSection('contact')} className="nav-link">CONTACT</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
