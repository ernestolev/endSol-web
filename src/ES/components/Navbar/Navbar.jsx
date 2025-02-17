
import { Link, Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styles from './Navbar.module.css';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaGlobe } from 'react-icons/fa';


export default function Navbar() {
  const { scrollYProgress } = useScroll();
  const [showNavbar, setShowNavbar] = useState(false);
  const location = useLocation();

  const isDarkPage = location.pathname.includes('/nosotros') ||
    location.pathname.includes('/trabajo') ||
    location.pathname.includes('/metodologia') ||
    location.pathname.includes('/blog');


  const handleLanguageSwitch = () => {
    const currentPath = location.pathname;
    const paths = {
      '/': '/en',
      '/nosotros': '/en/about',
      '/trabajo': '/en/work',
      '/metodologia': '/en/approach',
      '/blog': '/en/blog',
      '/contactanos': '/en/contact',
      '/terminos-y-condiciones': '/en/terms-&-conditions'

    };
    return paths[currentPath] || '/en';
  };

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", latest => {
      // Show navbar when at top (0) or when scrolling up
      if (latest <= 0.005) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  // Reset navbar visibility when route changes
  useEffect(() => {
    setShowNavbar(true);
  }, [location]);

  return (
    <>
      <motion.nav
        className={`${styles.navbar} ${isDarkPage ? styles.darkMode : ''}`}
        initial={{ y: 0 }}
        animate={{ y: showNavbar ? 0 : -100 }}
        transition={{ duration: 0.5 }}
      >
        <Link to="/" className={styles.logo}>END</Link>
        <div className={styles.navLinks}>
          <Link to="/nosotros">Nosotros</Link>
          <Link to="/trabajo">Proyectos</Link>
          <Link to="/metodologia">Metodología</Link>
          <Link to="/blog">Blog</Link>
        </div>
        <div className={styles.rightSection}>
          <Link to={handleLanguageSwitch()} className={styles.langButton}>
            <FaGlobe /> EN
          </Link>
          <Link to="/contactanos">
            <button className={styles.contactBtn}>
              Contáctanos
            </button>
          </Link>

        </div>
      </motion.nav>
      <Outlet />
    </>
  );
}