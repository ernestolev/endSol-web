import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Lenis from '@studio-freight/lenis';
import styles from './Approach.module.css';

export default function Approach() {

  return (
    <div className={styles.approachContainer}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <h1>Crafting Excellence Through Strategic Steps</h1>
        <p>Every project is a journey. We guide you through a well-defined process, ensuring each step brings you closer to success.</p>
        <Link to="/contact" className={styles.ctaButton}>Talk to an expert</Link>
      </section>

      {/* Approach Steps */}
      <section className={styles.steps}>
        <h2>Our Approach</h2>
        <p className={styles.stepsIntro}>Our approach is simple yet effective. We follow a systematic process to deliver the best results.</p>
        
        <div className={styles.stepsGrid}>
          {steps.map((step, index) => (
            <div key={index} className={styles.stepCard}>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Collaboration Section */}
      <section className={styles.collaboration}>
        <div className={styles.collabContent}>
          <h2>Collaborate with us</h2>
          <p>At END Solutions, collaboration is key to every successful project. From discovery to delivery, we work closely with you to bring your vision to life, ensuring open communication and adaptability throughout the process.</p>
          <p>Our team is dedicated to turning your goals into reality through a thoughtful, client-centered approach.</p>
          
          <div className={styles.valueProps}>
            {['Open Communication', 'Feedback Loops', 'Adaptability', 'Transparency'].map((value, index) => (
              <div key={index} className={styles.valueProp}>{value}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className={styles.techStack}>
        <h2>Our Tech Stack</h2>
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

      {/* CTA Section */}
      <section className={styles.cta}>
        <h2>Let's make something great together.</h2>
        <p>Let us know what challenges you are trying to solve so we can help.</p>
        <Link to="/contact" className={styles.ctaButton}>Get Started</Link>
      </section>
    </div>
  );
}

const steps = [
  {
    title: "Discovery & Planning",
    description: "We understand your requirements and plan the project accordingly. We also identify the key stakeholders and set project goals."
  },
  {
    title: "Design, Development & Execution",
    description: "We understand your requirements and plan the project accordingly. We also identify the key stakeholders and set project goals."
  },
  {
    title: "Testing & Launch",
    description: "We understand your requirements and plan the project accordingly. We also identify the key stakeholders and set project goals."
  },
  {
    title: "Ongoing & Support",
    description: "We understand your requirements and plan the project accordingly. We also identify the key stakeholders and set project goals."
  }
];

const techStacks = [
  {
    title: "Design & UI/UX Tools",
    technologies: ["Figma", "Adobe Photoshop", "Adobe Illustrator", "Adobe After Effects"],
    description: "We use the latest design tools to create stunning designs and user interfaces."
  },
  // ... add other tech stacks
];