import { useState, useEffect } from 'react';
import styles from './Header.module.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <a href="#home" className={styles.logo} onClick={closeMenu}>
          <span className={styles.logoText}>Taha Neji</span>
          <span className={styles.logoDot}>.</span>
        </a>
        
        <button 
          className={`${styles.menuButton} ${isMenuOpen ? styles.active : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <span className={styles.menuIcon}></span>
        </button>
        
        <nav className={`${styles.nav} ${isMenuOpen ? styles.active : ''}`}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <a 
                href="#home" 
                className={styles.navLink}
                onClick={closeMenu}
              >
                Home
              </a>
            </li>
            <li className={styles.navItem}>
              <a 
                href="#about" 
                className={styles.navLink}
                onClick={closeMenu}
              >
                About
              </a>
            </li>
            <li className={styles.navItem}>
              <a 
                href="#skills" 
                className={styles.navLink}
                onClick={closeMenu}
              >
                Skills
              </a>
            </li>
            <li className={styles.navItem}>
              <a 
                href="#projects" 
                className={styles.navLink}
                onClick={closeMenu}
              >
                Projects
              </a>
            </li>
            <li className={styles.navItem}>
              <a 
                href="#contact" 
                className={styles.navLink}
                onClick={closeMenu}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;