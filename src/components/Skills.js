import React from 'react';
import './Skills.css';

function Skills() {
  const skillCategories = [
    {
      title: 'Web Development',
      skills: ['React', 'WordPress', 'JavaScript', 'HTML5', 'CSS3', 'Responsive Design']
    },
    {
      title: 'Mobile Development',
      skills: ['React Native', 'iOS & Android', 'Cross-Platform Apps', 'Mobile UI/UX']
    },
    {
      title: 'Tools & Technologies',
      skills: ['Git', 'REST APIs', 'npm', 'PHP', 'MySQL', 'Redux']
    }
  ];

  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-card">
            <h3>{category.title}</h3>
            <ul>
              {category.skills.map((skill, idx) => (
                <li key={idx}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
