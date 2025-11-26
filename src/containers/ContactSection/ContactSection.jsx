import ContactLinks from '../../components/ContactLinks/ContactLinks';
import './ContactSection.css';

export default function ContactSection() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-section__container">
        <h2 className="contact-section__title">
          Links
        </h2>
        <p className="contact-section__description">
          Currently, I have a job, but am open to other engineering opportunities.
        </p>
        
        <ContactLinks />
      </div>
    </section>
  );
}