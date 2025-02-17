import styles from './TC.module.css';

export default function TC() {
  return (
    <div className={styles.tcContainer}>
      <div className={styles.tcWrapper}>
        <h1>Terms and Conditions of END</h1>
        <p className={styles.date}>Effective Date: February 17, 2025</p>

        <section className={styles.section}>
          <h2>1. Introduction</h2>
          <p>Welcome to END ("we", "our", or "us"). These Terms and Conditions govern the use of our website and software consulting services. By accessing or using our services, you agree to comply with these terms. If you do not agree, please refrain from using our services.</p>
        </section>

        <section className={styles.section}>
          <h2>2. Services Offered</h2>
          <p>END provides software development consulting services, including but not limited to:</p>
          <ul>
            <li>Custom software development and design</li>
            <li>System analysis and optimization</li>
            <li>Implementation of technological solutions</li>
            <li>Maintenance and technical support</li>
          </ul>
          <p>Services are provided according to the terms agreed upon in each specific contract with the client.</p>
        </section>

        <section className={styles.section}>
          <h2>3. Use of the Website</h2>
          <ul>
            <li>You agree to use our website and services in a legal and ethical manner.</li>
            <li>The use of our website for fraudulent, illegal activities or activities that violate third-party rights is not permitted.</li>
            <li>We reserve the right to restrict or cancel your access to our website if we detect misuse.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>4. Collection and Use of Data</h2>
          <p>We may collect personal and non-personal information, such as:</p>
          <ul>
            <li>Name, email, phone number</li>
            <li>IP address, browser type, and site behavior</li>
          </ul>
          <p>This data will be used to improve our services, communicate with you, and fulfill legal obligations.</p>
        </section>

        <section className={styles.section}>
          <h2>5. Confidentiality and Security</h2>
          <p>We are committed to protecting your information with appropriate security measures. However, we cannot guarantee absolute security against unauthorized access.</p>
        </section>

        <section className={styles.section}>
          <h2>6. Intellectual Property</h2>
          <p>All content on our website, including texts, images, logos, and software, is protected by intellectual property rights and cannot be used without our consent.</p>
        </section>

        <section className={styles.section}>
          <h2>7. Limitation of Liability</h2>
          <p>We do not guarantee that our services will be uninterrupted or error-free. We are not responsible for any direct or indirect damages arising from the use of our services or website.</p>
        </section>

        <section className={styles.section}>
          <h2>8. Modifications to the Terms and Conditions</h2>
          <p>We reserve the right to modify these Terms and Conditions at any time. Changes will be effective upon publication on our website.</p>
        </section>

        <section className={styles.section}>
          <h2>9. Applicable Law</h2>
          <p>These Terms and Conditions are governed by the laws of the Republic of Peru. Any disputes will be resolved before the competent courts in Peru.</p>
        </section>

        <section className={styles.section}>
          <h2>10. Contact</h2>
          <p>If you have any questions about these Terms and Conditions, you can contact us at:</p>
          <div className={styles.contactInfo}>
            <p><strong>END</strong></p>
            <p>Email: ermarlevh04@gmail.com</p>
            <p>Phone: +51 937007562</p>
            <p>Address: Chincha Alta</p>
          </div>
        </section>

        <div className={styles.acceptance}>
          <p>By using our services, you agree to these Terms and Conditions.</p>
        </div>
      </div>
    </div>
  );
}
