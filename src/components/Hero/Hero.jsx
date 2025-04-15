// components/Hero/Hero.jsx
import styles from './Hero.module.css';
import image from '../../assets/OIUGRK0.jpg';

const Hero = () => {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            <span>Hi, I'm</span>
            <span className={styles.name}>Taha Neji</span>
          </h1>
          <h2 className={styles.subtitle}>Software Developer</h2>
          <p className={styles.description}>
            I build exceptional digital experiences with clean, efficient code and 
            thoughtful user interfaces.
          </p>
          <div className={styles.cta}>
            <a href="#projects" className={styles.primaryBtn}>View My Work</a>
            <a href="#contact" className={styles.secondaryBtn}>Contact Me</a>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <div className={styles.imageWrapper}>
            <img 
              src={image}
              alt="Taha Neji" 
              className={styles.profileImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;