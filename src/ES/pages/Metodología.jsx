import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Lenis from '@studio-freight/lenis';
import styles from './Metodología.module.css';

export default function Enfoque() {

  return (
    <div className={styles.approachContainer}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <h1>Creando Excelencia a Través de Pasos Estratégicos</h1>
        <p>Cada proyecto es un viaje. Te guiamos a través de un proceso bien definido, asegurando que cada paso te acerque al éxito.</p>
        <Link to="/contact" className={styles.ctaButton}>Habla con nosotros</Link>
      </section>

      {/* Approach Steps */}
      <section className={styles.steps}>
        <h2>Nuestro Enfoque</h2>
        <p className={styles.stepsIntro}>Nuestro enfoque es simple pero efectivo. Seguimos un proceso sistemático para ofrecer los mejores resultados.</p>
        
        <div className={styles.stepsGrid}>
          {steps.map((step, index) => (
            <div key={index} className={styles.stepCard}>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sección de Colaboración */}
      <section className={styles.collaboration}>
        <div className={styles.collabContent}>
          <h2>Colabora con Nosotros</h2>
          <p>En END Solutions, la colaboración es clave para el éxito de cada proyecto. Desde la fase de descubrimiento hasta la entrega, trabajamos contigo para hacer realidad tu visión, asegurando comunicación abierta y adaptabilidad durante todo el proceso.</p>
          <p>Nuestro equipo está dedicado a convertir tus objetivos en realidad a través de un enfoque centrado en el cliente.</p>
          
          <div className={styles.valueProps}>
            {['Comunicación Abierta', 'Ciclos de Retroalimentación', 'Adaptabilidad', 'Transparencia'].map((valor, index) => (
              <div key={index} className={styles.valueProp}>{valor}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección de Tecnología */}
      <section className={styles.techStack}>
        <h2>Nuestra Tecnología</h2>
        <div className={styles.stackGrid}>
          {techStacks.map((stack, index) => (
            <div key={index} className={styles.stackCard}>
              <h3>{stack.title}</h3>
              <div className={styles.technologies}>
              {stack.technologies.map((tech, i) => (
                  <span key={i} className={styles.tech}>{tech}</span>
                ))}
              </div>
              <p className={styles.stackDesc}>{stack.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sección de Llamado a la Acción */}
      <section className={styles.cta}>
        <h2>Hagamos algo grandioso juntos.</h2>
        <p>Cuéntanos qué desafíos estás tratando de resolver para que podamos ayudarte.</p>
        <Link to="/contact" className={styles.ctaButton}>Comenzar</Link>
      </section>
    </div>
  );
}

const steps = [
  {
    title: "Descubrimiento y Planificación",
    description: "Comprendemos tus necesidades y planificamos el proyecto en consecuencia. También identificamos a los principales interesados y establecemos los objetivos del proyecto."
  },
  {
    title: "Diseño, Desarrollo y Ejecución",
    description: "Creamos soluciones a medida asegurando un desarrollo sólido, eficiente y alineado con tus necesidades."
  },
  {
    title: "Pruebas y Lanzamiento",
    description: "Realizamos pruebas exhaustivas para garantizar un producto de alta calidad antes de su lanzamiento."
  },
  {
    title: "Soporte y Mantenimiento",
    description: "Ofrecemos soporte continuo para asegurar el correcto funcionamiento y evolución de tu producto."
  }
]

const techStacks = [
  {
    title: "Design & UI/UX Tools",
    technologies: ["Figma", "Adobe Photoshop", "Adobe Illustrator", "Adobe After Effects"],
    description: "We use the latest design tools to create stunning designs and user interfaces."
  },
  // ... add other tech stacks
];