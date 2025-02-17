import styles from './TC.module.css';

export default function TC() {
  return (
    <div className={styles.tcContainer}>
      <div className={styles.tcWrapper}>
        <h1>Términos y Condiciones de END</h1>
        <p className={styles.date}>Fecha de entrada en vigencia: 17 de febrebro del 2025</p>

        <section className={styles.section}>
          <h2>1. Introducción</h2>
          <p>Bienvenido a END ("nosotros", "nuestro" o "nos"). Estos Términos y Condiciones rigen el uso de nuestro sitio web y nuestros servicios de consultoría de software. Al acceder o utilizar nuestros servicios, usted acepta cumplir con estos términos. Si no está de acuerdo, por favor absténgase de utilizar nuestros servicios.</p>
        </section>

        <section className={styles.section}>
          <h2>2. Servicios Ofrecidos</h2>
          <p>END brinda servicios de consultoría en desarrollo de software, incluyendo pero no limitado a:</p>
          <ul>
            <li>Desarrollo y diseño de software a medida</li>
            <li>Análisis y optimización de sistemas</li>
            <li>Implementación de soluciones tecnológicas</li>
            <li>Mantenimiento y soporte técnico</li>
          </ul>
          <p>Los servicios se prestan según los términos acordados en cada contrato específico con el cliente.</p>
        </section>

        <section className={styles.section}>
          <h2>3. Uso del Sitio Web</h2>
          <ul>
            <li>Usted se compromete a utilizar nuestro sitio web y servicios de manera legal y ética.</li>
            <li>No está permitido el uso de nuestro sitio web para actividades fraudulentas, ilegales o que violen los derechos de terceros.</li>
            <li>Nos reservamos el derecho de restringir o cancelar su acceso a nuestro sitio web si detectamos un uso indebido.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>4. Recopilación y Uso de Datos</h2>
          <p>Podemos recopilar información personal y no personal, como:</p>
          <ul>
            <li>Nombre, correo electrónico, número de teléfono</li>
            <li>Dirección IP, tipo de navegador y comportamiento en el sitio</li>
          </ul>
          <p>Estos datos serán utilizados para mejorar nuestros servicios, comunicarnos con usted y cumplir con obligaciones legales.</p>
        </section>

        <section className={styles.section}>
          <h2>5. Confidencialidad y Seguridad</h2>
          <p>Nos comprometemos a proteger su información con medidas de seguridad adecuadas. Sin embargo, no podemos garantizar una seguridad absoluta contra accesos no autorizados.</p>
        </section>

        <section className={styles.section}>
          <h2>6. Propiedad Intelectual</h2>
          <p>Todos los contenidos de nuestro sitio web, incluyendo textos, imágenes, logotipos y software, están protegidos por derechos de propiedad intelectual y no pueden ser utilizados sin nuestro consentimiento.</p>
        </section>

        <section className={styles.section}>
          <h2>7. Limitación de Responsabilidad</h2>
          <p>No garantizamos que nuestros servicios sean ininterrumpidos o libres de errores. No somos responsables por daños directos o indirectos derivados del uso de nuestros servicios o sitio web.</p>
        </section>

        <section className={styles.section}>
          <h2>8. Modificaciones a los Términos y Condiciones</h2>
          <p>Nos reservamos el derecho de modificar estos Términos y Condiciones en cualquier momento. Los cambios serán efectivos desde su publicación en nuestro sitio web.</p>
        </section>

        <section className={styles.section}>
          <h2>9. Legislación Aplicable</h2>
          <p>Estos Términos y Condiciones se rigen por las leyes de la República del Perú. Cualquier disputa será resuelta ante los tribunales competentes en Perú.</p>
        </section>

        <section className={styles.section}>
          <h2>10. Contacto</h2>
          <p>Si tiene preguntas sobre estos Términos y Condiciones, puede contactarnos en:</p>
          <div className={styles.contactInfo}>
            <p><strong>END</strong></p>
            <p>Correo electrónico: ermarlevh04@gmail.com</p>
            <p>Teléfono: +51 937007562</p>
            <p>Dirección: Chincha Alta</p>
          </div>
        </section>

        <div className={styles.acceptance}>
          <p>Al utilizar nuestros servicios, usted acepta estos Términos y Condiciones.</p>
        </div>
      </div>
    </div>
  );
}
