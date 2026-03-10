import React from 'react';
import './Hero.css';
import { Eye, CheckCircle, Code, Database, Smartphone, Globe, Layers, Terminal, Package, GitBranch, Cpu, Zap, Server } from 'lucide-react';
import characterImage from '../image/b9826aa4-5e3a-45dc-98b2-1955a8584271_removalai_preview.png';

function Hero() {
  return (
    <section id="home" className="hero">
      {/* Top Navigation Buttons */}
      <div className="hero-nav-buttons">
        <button className="nav-btn">
          <Eye size={18} /> See my work
        </button>
        <button className="nav-btn">
          <CheckCircle size={18} /> Book a service
        </button>
      </div>

      <div className="hero-container">
        {/* Left Side - Title */}
        <div className="hero-left">
          <h2 className="hero-subtitle">Full Stack</h2>
          <h2 className="hero-subtitle">Web Developer</h2>
        </div>

        {/* Center - Character */}
        <div className="hero-center">
          <div className="character-container">
            <img 
              src={characterImage}
              alt="Usman Khan" 
              className="character-image"
            />
            <div className="character-name">
              <span className="name-label">DEVELOPER</span>
              <h1 className="name-main">USMAN</h1>
            </div>
          </div>
          
          {/* Tool Icons */}
          <div className="tool-icons">
            <span className="tool-icon">React</span>
            <span className="tool-icon">WordPress</span>
            <span className="tool-icon">Node.js</span>
            <span className="tool-icon">JavaScript</span>
            <span className="tool-icon">PHP</span>
            <span className="tool-icon">MySQL</span>
            <span className="tool-icon">Git</span>
          </div>
        </div>

        {/* Right Side - Bio */}
        <div className="hero-right">
          <p className="hero-bio">
            Hi, I'm Usman, a web developer 
            specializing in WordPress, React, 
            and React Native. I build modern, 
            responsive websites and mobile 
            applications that deliver 
            exceptional user experiences.
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="hero-bottom">
        <div className="hero-divider"></div>
        
        <div className="hero-description">
          <h3>Building powerful web solutions, responsive designs, and scalable applications...</h3>
          <p>
            Web development is not just about writing code, it's about creating solutions that solve real problems and deliver value. From custom WordPress sites 
            to complex React applications and cross-platform mobile apps with React Native, I craft digital experiences that are fast, secure, and user-friendly. 
            Let's build something amazing together.
          </p>
        </div>

        {/* Tech Stack Icons */}
        <div className="social-icons">
          <Code size={24} className="social-icon" />
          <Database size={24} className="social-icon" />
          <Smartphone size={24} className="social-icon" />
          <Globe size={24} className="social-icon" />
          <Layers size={24} className="social-icon" />
          <Terminal size={24} className="social-icon" />
          <Package size={24} className="social-icon" />
          <GitBranch size={24} className="social-icon" />
          <Cpu size={24} className="social-icon" />
          <Zap size={24} className="social-icon" />
          <Server size={24} className="social-icon" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
