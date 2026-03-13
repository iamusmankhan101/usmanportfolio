import React from 'react';
import './Contact.css';
import { Mail, Github, Globe, Phone } from 'lucide-react';

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="contact-content">
          <h2 className="contact-title">
            Let's build<br />
            something <span className="contact-highlight">great</span>
          </h2>
          
          <p className="contact-description">
            From initial architecture to final deployment, I engineer complete, enterprise-ready systems. If your project requires React expertise, full-stack depth, or AI capabilities, I’m here to lead the build. Drop me a message to start the conversation.
          </p>
          
          <div className="contact-buttons">
            <a href="mailto:iamusmankhan101@gmail.com" className="contact-btn">
              <Mail size={18} />
              Email Me
            </a>
            <a href="https://github.com/iamusmankhan101/" className="contact-btn">
              <Github size={18} />
              GitHub
            </a>
      
            <a href="tel:+923058562523" className="contact-btn">
              <Phone size={18} />
              Call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
