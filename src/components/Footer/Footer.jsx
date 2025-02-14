import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerLeft}>
          <h3>END</h3>
          <p>Transforming ideas<br />into digital reality</p>
        </div>
        <div className={styles.footerRight}>
          <div className={styles.footerLinks}>
            <a href="#" className={styles.footerLink}>Instagram</a>
            <a href="#" className={styles.footerLink}>Twitter</a>
            <a href="#" className={styles.footerLink}>LinkedIn</a>
            <a href="#" className={styles.footerLink}>GitHub</a>
          </div>
          <p className={styles.copyright}>© 2024 END Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}