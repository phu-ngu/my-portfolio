import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import './ContactLinks.css';

const contactLinks = [
  {
    icon: Mail,
    title: 'Email',
    value: 'nphuey@gmail.com',
    href: 'mailto:nphuey@gmail.com'
  },
  {
    icon: Github,
    title: 'GitHub',
    value: '@phu-ngu',
    href: 'https://github.com/phu-ngu'
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    value: 'Phu Nguyen',
    href: 'https://www.linkedin.com/in/phu-nguyen21/'
  }
];

export default function ContactLinks() {
  return (
    <div className="contact-links">
      {contactLinks.map((link, index) => {
        const IconComponent = link.icon;
        return (
          <a
            key={index}
            href={link.href}
            target={link.href.startsWith('http') ? '_blank' : undefined}
            rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="contact-links__link"
          >
            <IconComponent className="contact-links__icon" />
            <h3 className="contact-links__title">{link.title}</h3>
            <p className="contact-links__value">{link.value}</p>
          </a>
        );
      })}
    </div>
  );
}