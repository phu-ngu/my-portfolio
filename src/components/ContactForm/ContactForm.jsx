import React from 'react';
import './ContactForm.css';

export default function ContactForm() {
  return (
    <div className="contact-form">
      <div className="contact-form__content">
        <div className="contact-form__fields">
          <input
            type="text"
            placeholder="Your Name"
            className="contact-form__input"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="contact-form__input"
          />
        </div>
        <textarea
          rows={5}
          placeholder="Your Message"
          className="contact-form__textarea"
        ></textarea>
        <button
          type="button"
          className="contact-form__submit"
        >
          Send Message
        </button>
      </div>
    </div>
  );
}