
import { Link, Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styles from './Navbar.module.css';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaGlobe } from 'react-icons/fa';


export default function Navbar() {
  const { scrollYProgress } = useScroll();
  const [showNavbar, setShowNavbar] = useState(false);
  const location = useLocation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigationLinks = [
    { path: "/nosotros", label: "Nosotros" },
    { path: "/trabajo", label: "Proyectos" },
    { path: "/metodologia", label: "Metodología" },
    { path: "/blog", label: "Blog" }
  ];

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
      // Show navbar in section 1 and 10
      if (latest <= 0.005 || (latest >= 0.95 && latest <= 0.99)) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
        // Close mobile menu when navbar hides
        if (isMenuOpen) {
          setIsMenuOpen(false);
        }
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress, isMenuOpen]);

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

        <button
          className={`${styles.hamburger} ${isMenuOpen ? styles.active : ''}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`${styles.navContent} ${isMenuOpen ? styles.active : ''}`}>
          <div className={styles.navLinks}>
            {navigationLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path}
                onClick={() => setIsMenuOpen(false)} // Close menu on click
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className={styles.rightSection}>
            <Link 
              to="/contactanos" 
              className={styles.contactBtn}
              onClick={() => setIsMenuOpen(false)}
            >
              Contacto
            </Link>
          </div>
        </div>
      </motion.nav>
      <Outlet />
    </>
  );
}