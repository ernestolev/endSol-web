import styles from './Nosotros.module.css';
import { Link } from 'react-router-dom';


export default function Nosotros() {
  return (
    <div className={styles.aboutContainer}>
      {/* Sección Hero */}
      <section className={styles.hero}>
        <h1>Somos Tecnócratas, Nativos Digitales y Solucionadores de Problemas</h1>
        <p className={styles.heroText}>
          END Solutions es una empresa de tecnología de servicio completo con un equipo experto especializado en Transformación Digital.
          Ofrecemos una amplia gama de servicios, incluyendo UI/UX, Desarrollo de Sitios Web, Desarrollo de Aplicaciones Móviles, Marketing Digital y Consultoría IT.
        </p>
        <h2 className={styles.subHeading}>Mejorando soluciones digitales para cada negocio.</h2>
      </section>

      {/* Sección Visión y Misión */}
      <section className={styles.visionMission}>
        <div className={styles.visionBox}>
          <h2>Nuestra Visión</h2>
          <p>Visualizamos un mundo donde la tecnología se integra perfectamente con la vida cotidiana, mejorando experiencias y permitiendo posibilidades más allá de la imaginación.</p>
        </div>
        <div className={styles.missionBox}>
          <h2>Nuestra Misión</h2>
          <p>Hacer que la tecnología sea fácil y accesible para todos. Brindar soluciones que no solo impulsen el crecimiento empresarial, sino que también mejoren la experiencia del desarrollador.</p>
        </div>
      </section>

      {/* Sección del Equipo */}
      <section className={styles.team}>
        <h2>Nuestro Liderazgo</h2>
        <p className={styles.teamIntro}>Nuestro liderazgo está compuesto por jóvenes profesionales expertos en tecnología, aportando capacidades tecnológicas y de marketing para el futuro.</p>
        <div className={styles.teamMembers}>
          {/* Agregar tarjetas de miembros del equipo aquí */}
        </div>
      </section>

      {/* Sección de Valores */}
      <section className={styles.values}>
        <h2>Nuestros Valores Fundamentales</h2>
        <div className={styles.valuesGrid}>
          {[
            {
              title: "Comunicación",
              description: "La comunicación clara, concisa y segura es la clave de nuestro éxito. Creemos en fomentar diálogos abiertos, transparentes y honestos."
            },
            {
              title: "Responsabilidad",
              description: "END Solutions está dirigida por jóvenes profesionales que asumen plena responsabilidad por sus acciones y decisiones."
            },
            {
              title: "Confianza",
              description: "La confianza está en el núcleo de todo lo que hacemos. Siempre buscamos crear asociaciones duraderas demostrando confiabilidad e integridad."
            },
            {
              title: "Gratitud",
              description: "Afrontamos cada oportunidad con humildad y aprecio, fomentando relaciones significativas y una colaboración positiva."
            },
            {
              title: "Eficiencia",
              description: "Si te enorgulleces de ser ingeniero, intenta ser eficiente sin comprometer la calidad del trabajo. Creemos en trabajar de manera más inteligente, no más dura."
            },
            {
              title: "Aprendizaje Continuo",
              description: "Nunca se puede saber todo, pero siempre se puede aprender algo nuevo. Incluso una pequeña hormiga puede enseñarte una gran lección. Sé humilde."
            }
          ].map((value, index) => (
            <div key={index} className={styles.valueCard}>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sección de Llamado a la Acción (CTA) */}
      <section className={styles.cta}>
        <h2>Hagamos algo increíble juntos.</h2>
        <p>Cuéntanos qué desafíos estás tratando de resolver para que podamos ayudarte.</p>
        <Link to="/contact" className={styles.ctaButton}>Comenzar</Link>
      </section>
    </div>
  );
}
