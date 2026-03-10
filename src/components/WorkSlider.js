import React from 'react';
import './WorkSlider.css';

function WorkSlider() {
  const projects = [
    {
      id: 1,
      name: 'CourseSite',
      image: 'https://via.placeholder.com/800x500/f5f5f5/333333?text=CourseSite+Preview',
      description: 'Web Dev & Design made Simple, Better.'
    },
    {
      id: 2,
      name: 'E-Commerce Platform',
      image: 'https://via.placeholder.com/800x500/f5f5f5/333333?text=E-Commerce+Preview',
      description: 'Modern shopping experience'
    },
    {
      id: 3,
      name: 'Portfolio Builder',
      image: 'https://via.placeholder.com/800x500/f5f5f5/333333?text=Portfolio+Preview',
      description: 'Create stunning portfolios'
    },
    {
      id: 4,
      name: 'Task Manager',
      image: 'https://via.placeholder.com/800x500/f5f5f5/333333?text=Task+Manager+Preview',
      description: 'Organize your workflow'
    }
  ];

  // Duplicate projects for infinite loop effect
  const duplicatedProjects = [...projects, ...projects, ...projects];

  return (
    <section className="work-slider">
      <div className="carousel-container">
        <div className="carousel-track">
          {duplicatedProjects.map((project, index) => (
            <div key={`${project.id}-${index}`} className="carousel-card">
              <div className="project-card-slider">
                <div className="project-preview">
                  <img src={project.image} alt={project.name} />
                </div>
                <div className="project-info">
                  <h3>{project.name}</h3>
                  <button className="view-project">↗</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WorkSlider;
