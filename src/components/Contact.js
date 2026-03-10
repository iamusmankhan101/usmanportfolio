import React from 'react';
import './Contact.css';
import { Mail, Github, MessageCircle, Linkedin, Globe, Code } from 'lucide-react';

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-divider"></div>
      
      <h2 className="contact-title">Contact me</h2>
      
      <div className="contact-icons">
        <a href="mailto:usman@example.com" className="contact-icon" title="Email">
          <Mail size={24} />
        </a>
        <a href="https://github.com" className="contact-icon" title="GitHub">
          <Github size={24} />
        </a>
        <a href="https://linkedin.com" className="contact-icon" title="LinkedIn">
          <Linkedin size={24} />
        </a>
        <a href="https://wa.me/" className="contact-icon" title="WhatsApp">
          <MessageCircle size={24} />
        </a>
        <a href="https://portfolio.com" className="contact-icon" title="Portfolio">
          <Globe size={24} />
        </a>
        <a href="https://codepen.io" className="contact-icon" title="CodePen">
          <Code size={24} />
        </a>
      </div>
    </section>
  );
}

export default Contact;
