// components/About/About.jsx
import styles from './About.module.css';
import image from '../../assets/about.jpg'

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <img 
            src={image} 
            alt="About Tahaneji" 
            className={styles.aboutImage}
          />
        </div>
        <div className={styles.content}>
          <h2 className={styles.sectionTitle}>About Me</h2>
          <p className={styles.text}>
            I'm a passionate software developer with 5+ years of experience building 
            web applications. I specialize in React, Node.js, and modern JavaScript 
            frameworks.
          </p>
          <p className={styles.text}>
            My approach combines technical expertise with creative problem-solving 
            to deliver high-quality solutions that meet both user needs and business 
            objectives.
          </p>
          <div className={styles.stats}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>50+</span>
              <span className={styles.statLabel}>Projects Completed</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>5+</span>
              <span className={styles.statLabel}>Years Experience</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>30+</span>
              <span className={styles.statLabel}>Happy Clients</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;