import React from 'react';
import './Services.css';
import { ArrowRight } from 'lucide-react';

function Services() {
  const services = [
    {
      title: 'WORDPRESS DEVELOPMENT',
    },
    {
      title: 'REACT WEB APPLICATIONS',
    },
    {
      title: 'REACT NATIVE MOBILE APPS',
    },
    {
      title: 'CUSTOM WEB DESIGN',
    },
    {
      title: 'E-COMMERCE SOLUTIONS',
    },
    {
      title: 'API INTEGRATION & DEVELOPMENT',
    }
  ];

  return (
    <section id="services" className="services">
      <div className="services-divider"></div>
      
      <h2 className="services-title">what I do</h2>
      
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-content">
              <h3>{service.title}</h3>
              <button className="service-btn">
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
