import React from 'react';
import './Services.css';
import { ArrowRight } from 'lucide-react';

function Services() {
  const services = [
    {
      title: 'WORDPRESS DEVELOPMENT',
      description: 'Custom themes, plugins, and full-stack WordPress solutions',
      tags: ['PHP', 'MySQL', 'Custom Themes', 'Plugins', 'WooCommerce']
    },
    {
      title: 'REACT WEB APPLICATIONS',
      description: 'Modern, responsive web apps with React and Next.js',
      tags: ['React', 'Next.js', 'JavaScript', 'TypeScript', 'Redux']
    },
    {
      title: 'REACT NATIVE MOBILE APPS',
      description: 'Cross-platform mobile applications for iOS and Android',
      tags: ['React Native', 'Expo', 'Mobile UI', 'Cross-platform', 'Native APIs']
    },
    {
      title: 'CUSTOM WEB DESIGN',
      description: 'Beautiful, user-centered designs that convert visitors',
      tags: ['UI/UX', 'Figma', 'Responsive Design', 'CSS3', 'Animation']
    },
    {
      title: 'E-COMMERCE SOLUTIONS',
      description: 'Complete online stores with payment integration',
      tags: ['WooCommerce', 'Shopify', 'Payment Gateways', 'Inventory', 'Analytics']
    },
    {
      title: 'API INTEGRATION & DEVELOPMENT',
      description: 'RESTful APIs, third-party integrations, and backend services',
      tags: ['REST API', 'Node.js', 'Express', 'Database Design', 'Authentication']
    }
  ];

  return (
    <section id="services" className="services">
      <div className="services-divider"></div>
      
      <h2 className="services-title">What I do</h2>
      
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-content">
              <div className="service-text">
                <h3>{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <div className="service-tags">
                  {service.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="service-tag">{tag}</span>
                  ))}
                </div>
              </div>
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
