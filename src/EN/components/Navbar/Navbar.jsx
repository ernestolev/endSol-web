
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styles from './Navbar.module.css';
import { motion, useScroll, useTransform } from 'framer-motion';


export default function Navbar({ onLanguageChange }) {
  const { scrollYProgress } = useScroll();
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", latest => {
      if (latest <= 0.01 || (latest >= 0.57 && latest <= 0.85)) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <motion.nav 
      className={styles.navbar}
      initial={{ y: 0 }}
      animate={{ y: showNavbar ? 0 : -100 }}
      transition={{ duration: 0.5 }}
    >
      <Link to="/" className={styles.logo}>END</Link>
      <div className={styles.navLinks}>
        <Link to="/about">About</Link>
        <Link to="/work">Work</Link>
        <Link to="/approach">Our Approach</Link>
        <Link to="/blog">Blog</Link>
      </div>
      <div className={styles.rightSection}>
        <Link to="/" className={styles.langButton}>
          <button className={styles.langButton}>
            ES
          </button>
        </Link>
        <button className={styles.contactBtn}>
          Contact
        </button>
      </div>
    </motion.nav>
  );
}