
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styles from './Navbar.module.css';
import { motion, useScroll, useTransform } from 'framer-motion';


export default function Navbar({ onLanguageChange }) {
  const { scrollYProgress } = useScroll();
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", latest => {
      // Show navbar in section 1 (start) and section 10
      if (latest <= 0.01 || latest >= 0.57) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <motion.nav className={styles.navbar}>
      <Link to="/" className={styles.logo}>END</Link>
      <div className={styles.navLinks}>
        <Link to="/about">About</Link>
        <Link to="/work">Work</Link>
        <Link to="/approach">Our Approach</Link>
        <Link to="/blog">Blog</Link>
      </div>
      <div className={styles.rightSection}>
        <button onClick={onLanguageChange} className={styles.langButton}>
          ES
        </button>
        <button className={styles.contactBtn}>
          Contact
        </button>
      </div>
    </motion.nav>
  );
}