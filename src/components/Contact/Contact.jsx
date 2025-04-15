// components/Contact/Contact.jsx
import { useState } from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Get In Touch</h2>
        <div className={styles.contactContent}>
          <div className={styles.contactInfo}>
            <p className={styles.infoText}>
              Feel free to reach out if you're looking for a developer, have a 
              question, or just want to connect.
            </p>
            <h3 className={styles.infoTitle}>Contact Information</h3>
            <div className={styles.infoItems}>
              <div className={styles.infoItem}>
                <span className={styles.infoIcon}>📧</span>
                <span>tahaneji@example.com</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoIcon}>📱</span>
                <span>+1 (123) 456-7890</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoIcon}>📍</span>
                <span>San Francisco, CA</span>
              </div>
            </div>
            <div className={styles.socialLinks}>
              <a href="#" className={styles.socialLink}>GitHub</a>
              <a href="#" className={styles.socialLink}>LinkedIn</a>
              <a href="#" className={styles.socialLink}>Twitter</a>
            </div>
          </div>
          <form onSubmit={handleSubmit} className={styles.contactForm}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <div className={styles.cta}>
            <button type="submit" className={styles.submitBtn}>Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;