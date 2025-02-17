import styles from './Footer.module.css';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.footerMainContent}>
          {/* Company Identity */}
          <div className={styles.footerBrand}>
            <h2>END</h2>
            <p className={styles.slogan}>Innovation and technology at your fingertips</p>
            <div className={styles.socialLinks}>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://behance.net" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-behance"></i>
              </a>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className={styles.footerNavigation}>
            <div className={styles.footerColumn}>
              <h3>Company</h3>
              <a href="#">About Us</a>
              <a href="#">Our Team</a>
              <a href="#">Blog</a>
            </div>
            <div className={styles.footerColumn}>
              <h3>Services</h3>
              <a href="#">Web Development</a>
              <a href="#">Mobile Development</a>
              <a href="#">IT Consulting</a>
              <a href="#">UI/UX Design</a>
            </div>
            <div className={styles.footerColumn}>
              <h3>Resources</h3>
              <a href="#">Case Studies</a>
              <a href="#">FAQs</a>
              <a href="#">Documentation</a>
            </div>
            <div className={styles.footerColumn}>
              <h3>Contact</h3>
              <a href="#">support@end.solutions</a>
              <a href="#">+51 999 888 777</a>
              <a href="#">Location</a>
            </div>
          </div>

          {/* Newsletter */}
          <div className={styles.footerNewsletter}>
            <h3>Newsletter</h3>
            <p>Subscribe to receive the latest news and tech trends</p>
            <div className={styles.newsletterForm}>
              <input type="email" placeholder="Your email address" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>

        {/* Legal Section */}
        <div className={styles.footerLegal}>
          <div className={styles.legalLinks}>
            <Link to="/en/terms-&-conditions">
              <a href="#">Terms & Conditions</a>
            </Link>
            <span>|</span>
            <a href="#">Privacy Policy</a>
          </div>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} End Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
