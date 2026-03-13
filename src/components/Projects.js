import React from 'react';
import './Projects.css';
import buildmodeLogo from '../image/logo2.png';
import optimusLogo from '../image/optimus-logo-white.webp';
import visionCareLogo from '../image/logo2 (1).png';
import arenaProLogo from '../image/pitch it logo (500 x 200 px) (2).png';
import arenaProBg from '../image/Whisk_d46323c90133a6db64e49b2ab1bf60f9dr.jpeg';
import hawkDispatchLogo from '../image/LOGO-SCHOLARSHIP-SEEKERS-HUB-5.webp';

function Projects() {
  const projects = [
    {
      title: 'Optimus Properties',
      category: 'WordPress Development',
      image: optimusLogo,
      link: 'https://theoptimus.ae',
      isLogo: true,
      backgroundColor: '#1e3a8a'
    },
    {
      title: 'Vision Care',
      category: 'React Development',
      image: visionCareLogo,
      link: 'https://thevisioncare.shop',
      isLogo: true,
      backgroundColor: '#87CEEB'
    },
    {
      title: 'Arena Pro',
      category: 'React Development',
      image: arenaProLogo,
      link: 'https://arenapropk.online',
      isLogo: true,
      backgroundImage: arenaProBg,
      noOverlay: true
    },
    {
      title: 'Hawk Dispatch',
      category: 'WordPress Development',
      image: hawkDispatchLogo,
      link: 'https://hawkdispatchinc.com',
      isLogo: true,
      backgroundColor: '#FF8C00'
    },
    {
      title: 'Vision Care POS',
      category: 'Laravel Development',
      image: visionCareLogo,
      link: null,
      isLogo: true,
      backgroundColor: '#87CEEB'
    },
    {
      title: 'Buildmode',
      category: 'WordPress Development',
      image: buildmodeLogo,
      link: 'https://buildmode.com',
      isLogo: true,
      backgroundColor: '#1e3a8a'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-header">
        <h2 className="projects-title">
          My<br />projects
        </h2>
        <p className="projects-subtitle">
          A showcase of web development projects built with<br />
          WordPress, React, and React Native. Each project demonstrates<br />
          modern design, clean code, and exceptional user experience.
        </p>
      </div>
      
      <div className="projects-grid">
        {projects.map((project, index) => (
          <a 
            key={index} 
            href={project.link || '#'} 
            target={project.link ? '_blank' : '_self'}
            rel={project.link ? 'noopener noreferrer' : ''}
            className="project-card"
            style={{ textDecoration: 'none' }}
          >
            <div 
              className={`project-image ${project.isLogo ? 'project-logo-container' : ''} ${project.noOverlay ? 'no-overlay' : ''}`}
              style={{
                ...(project.backgroundColor ? { backgroundColor: project.backgroundColor } : {}),
                ...(project.backgroundImage ? { 
                  backgroundImage: `url(${project.backgroundImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                } : {})
              }}
            >
              <img src={project.image} alt={project.title} />
              <div className="project-overlay">
                <div className="project-info">
                  <span className="project-category">{project.category}</span>
                  <h3 className="project-title">{project.title}</h3>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Projects;
