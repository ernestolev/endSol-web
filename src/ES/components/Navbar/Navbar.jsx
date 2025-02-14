
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
import styles from './Navbar.module.css';
import { motion, useScroll, useTransform } from 'framer-motion';


export default function Navbar() {
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
        <Link to="/about">Nosotros</Link>
        <Link to="/work">Proyectos</Link>
        <Link to="/approach">Metodología</Link>
        <Link to="/blog">Blog</Link>
      </div>
      <div className={styles.rightSection}>
        <Link to="/en" className={styles.langButton}>
          <button className={styles.langButton}>
            EN
          </button>
        </Link>
        <button className={styles.contactBtn}>
          Contacto
        </button>
      </div>
    </motion.nav>
  )
}