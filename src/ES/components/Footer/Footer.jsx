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
            <p className={styles.slogan}>Innovación y tecnología a tu alcance</p>
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
              <h3>Empresa</h3>
              <a href="#">Sobre nosotros</a>
              <a href="#">Nuestro equipo</a>
              <a href="#">Blog</a>
            </div>
            <div className={styles.footerColumn}>
              <h3>Servicios</h3>
              <a href="#">Desarrollo Web</a>
              <a href="#">Desarrollo Móvil</a>
              <a href="#">Consultoría TI</a>
              <a href="#">UI/UX Design</a>
            </div>
            <div className={styles.footerColumn}>
              <h3>Recursos</h3>
              <a href="#">Casos de éxito</a>
              <a href="#">FAQs</a>
              <a href="#">Documentación</a>
            </div>
            <div className={styles.footerColumn}>
              <h3>Contacto</h3>
              <a href="#">soporte@end.solutions</a>
              <a href="#">+51 999 888 777</a>
              <a href="#">Ubicación</a>
            </div>
          </div>

          {/* Newsletter */}
          <div className={styles.footerNewsletter}>
            <h3>Newsletter</h3>
            <p>Suscríbete para recibir las últimas noticias y tendencias tecnológicas</p>
            <div className={styles.newsletterForm}>
              <input type="email" placeholder="Tu correo electrónico" />
              <button>Suscribirse</button>
            </div>
          </div>
        </div>

        {/* Legal Section */}
        <div className={styles.footerLegal}>
          <div className={styles.legalLinks}>
            <Link to="/terminos-y-condiciones">
              <a href=''>Términos y condiciones</a>
            </Link>
            <span>|</span>
            <a href="#">Política de privacidad</a>
          </div>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} End Solutions. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}