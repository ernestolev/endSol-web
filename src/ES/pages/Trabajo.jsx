import styles from './Trabajo.module.css';
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';

import Lenis from '@studio-freight/lenis';


export default function Trabajo() {

  useEffect(() => {
          const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            smoothTouch: false,
            touchMultiplier: 2
          });
      
          function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
          }
      
          requestAnimationFrame(raf);
      
          return () => {
            lenis.destroy();
          };
        }, []);

  return (
    <div className={styles.workContainer}>
      {/* Sección Hero */}
      <section className={styles.hero}>
        <h1>Explora nuestras soluciones digitales innovadoras diseñadas para transformar ideas en resultados reales.</h1>
        <div className={styles.statsGrid}>
          <div className={styles.statBox}>
            <span>100+</span>
            <p>Proyectos Completados</p>
          </div>
          <div className={styles.statBox}>
            <span>50+</span>
            <p>Clientes Satisfechos</p>
          </div>
          <div className={styles.statBox}>
            <span>7+</span>
            <p>Contribuciones de Código Abierto</p>
          </div>
        </div>
      </section>

      {/* Sección de Proyectos */}
      <section className={styles.showcase}>
        <h2>Presentamos nuestro mejor trabajo</h2>
        <p>Explora nuestras soluciones tecnológicas avanzadas y casos de éxito diseñados para impulsar la transformación digital.</p>
        
        <div className={styles.projectsGrid}>
          {proyectos.map((proyecto, index) => (
            <div key={index} className={styles.projectCard}>
              <div className={styles.projectImage}>
                <img src={proyecto.image} alt={proyecto.title} />
              </div>
              <div className={styles.projectContent}>
                <span className={styles.projectType}>{proyecto.type}</span>
                <h3>{proyecto.title}</h3>
                <div className={styles.techTags}>
                  {proyecto.technologies.map((tech, i) => (
                    <span key={i} className={styles.tag}>{tech}</span>
                  ))}
                </div>
                <Link to={proyecto.link} className={styles.readMore}>
                  Leer más
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sección de Industrias */}
      <section className={styles.industries}>
        <h2>Industrias a las que Servimos</h2>
        <div className={styles.industriesGrid}>
          {industrias.map((industria, index) => (
            <div key={index} className={styles.industryCard}>
              {industria}
            </div>
          ))}
        </div>
      </section>

      {/* Sección de Enfoque */}
      <section className={styles.approach}>
        <h2>Cómo abordamos cada proyecto</h2>
        <div className={styles.approachSteps}>
          {enfoques.map((paso, index) => (
            <div key={index} className={styles.stepCard}>
              <h3>{paso.title}</h3>
              <p>{paso.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sección de Tecnología */}
      <section className={styles.techStack}>
        <h2>Nuestra Tecnología</h2>
        <div className={styles.stackCategories}>
          {tecnologias.map((categoria, index) => (
            <div key={index} className={styles.stackCategory}>
              <h3>{categoria.title}</h3>
              <div className={styles.technologies}>
                {categoria.techs.map((tech, i) => (
                  <span key={i} className={styles.techItem}>{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sección de Preguntas Frecuentes */}
      <section className={styles.faq}>
        <h2>Preguntas Frecuentes</h2>
        <div className={styles.faqList}>
          {preguntas.map((faq, index) => (
            <details key={index} className={styles.faqItem}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Sección CTA */}
      <section className={styles.cta}>
        <h2>Hagamos algo increíble juntos.</h2>
        <p>Cuéntanos qué desafíos estás tratando de resolver para que podamos ayudarte.</p>
        <Link to="/contact" className={styles.ctaButton}>Comenzar</Link>
      </section>
    </div>
  );
}

const proyectos = [
  {
    type: "Desarrollo Web",
    title: "Marina India: Una odisea digital con las grandes Fuerzas Navales de la India",
    technologies: ["UI UX", "Desarrollo Web", "Despliegue", "Capacitación"],
    image: "/ruta-a-imagen.jpg",
    link: "/projects/marina-india"
  },
  // ... agregar más proyectos
];

const industrias = [
  "E-Commerce",
  "Salud",
  "Finanzas y Fintech",
  // ... agregar más industrias
];

const enfoques = [
  {
    title: "Descubrimiento y Planificación",
    description: "Creemos que una buena comprensión es un buen comienzo..."
  },
  // ... agregar más enfoques
];

const tecnologias = [
  {
    title: "Herramientas de Diseño y UI/UX",
    techs: ["Figma", "Adobe Photoshop", "Adobe Illustrator", "Adobe After Effects"]
  },
  // ... agregar más tecnologías
];

const preguntas = [
  {
    question: "¿Cuál es su fase de planificación?",
    answer: "Nuestra fase de planificación implica..."
  },
  // ... agregar más preguntas
];
