

import { Link, Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styles from './Navbar.module.css';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaGlobe } from 'react-icons/fa';


export default function Navbar() {
  const { scrollYProgress } = useScroll();
  const [showNavbar, setShowNavbar] = useState(false);
  const location = useLocation();

  const isDarkPage = location.pathname.includes('/en/about') ||
    location.pathname.includes('/en/work') ||
    location.pathname.includes('/en/approach') ||
    location.pathname.includes('/en/blog');

  const handleLanguageSwitch = () => {
    const currentPath = location.pathname;
    const paths = {
      '/en': '/',
      '/en/about': '/nosotros',
      '/en/work': '/trabajo',
      '/en/approach': '/metodologia',
      '/en/blog': '/blog',
      '/en/contact': '/contactanos',
      '/en/terms-&-conditions': '/terminos-y-condiciones'
    };
    return paths[currentPath] || '/';
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
        <Link to="/en" className={styles.logo}>END</Link>
        <div className={styles.navLinks}>
          <Link to="/en/about">About</Link>
          <Link to="/en/work">Work</Link>
          <Link to="/en/approach">Our Approach</Link>
          <Link to="/en/blog">Blog</Link>
        </div>
        <div className={styles.rightSection}>
          <Link to={handleLanguageSwitch()} className={styles.langButton}>
            <FaGlobe /> ES
          </Link>
          <Link to="/en/contact" >
            <button className={styles.contactBtn}>
              Contact us
            </button>
          </Link>
        </div>
      </motion.nav>
      <Outlet />
    </>
  );
}
