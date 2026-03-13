import React, { useState } from 'react';
import './Header.css';
import { Sun, Moon } from 'lucide-react';

function Header() {
  const [isDark, setIsDark] = useState(true);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleTheme = () => {
    setIsDark(!isDark);
    // Add theme toggle logic here if needed
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <span className="logo-text">usman</span>
        </div>
        
        <nav className="nav-menu">
          <a onClick={() => scrollToSection('about')} className="nav-link">ABOUT</a>
          <a onClick={() => scrollToSection('skills')} className="nav-link">SKILLS</a>
          <a onClick={() => scrollToSection('projects')} className="nav-link">PROJECTS</a>
          <a onClick={() => scrollToSection('education')} className="nav-link">EDUCATION</a>
          <a onClick={() => scrollToSection('contact')} className="nav-link">CONTACT</a>
        </nav>

        <button className="theme-toggle" onClick={toggleTheme}>
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </header>
  );
}

export default Header;
