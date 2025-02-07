
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import { motion, useScroll, useTransform } from 'framer-motion';


export default function Navbar() {
  const { scrollYProgress } = useScroll();
  const navbarY = useTransform(scrollYProgress, [0, 0.1], [0, -100]);



  return (
    <motion.nav
      className={styles.navbar}
      style={{ y: navbarY }}
    >
      <Link to="/" className={styles.logo}>
        END
      </Link>
      <div className={styles.navLinks}>
        <Link to="/about" className={styles.navLink}>About</Link>
        <Link to="/work" className={styles.navLink}>Work</Link>
        <Link to="/approach" className={styles.navLink}>Our Approach</Link>
        <Link to="/blog" className={styles.navLink}>Blog</Link>
      </div>
      <button className={styles.contactBtn}>
        Contact
      </button>
    </motion.nav>
  );
}