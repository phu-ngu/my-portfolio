import React from 'react';
import ContactLinks from '../../components/ContactLinks/ContactLinks';
import ContactForm from '../../components/ContactForm/ContactForm';
import './ContactSection.css';

export default function ContactSection() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-section__container">
        <h2 className="contact-section__title">
          Contact
        </h2>
        <p className="contact-section__description">
          Let me get to know more about you!
        </p>
        
        <ContactLinks />
        <ContactForm />
      </div>
    </section>
  );
}