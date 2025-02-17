import styles from './Work.module.css';
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';

export default function Work() {

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
      {/* Hero Section */}
      <section className={styles.hero}>
        <h1>Explore our innovative digital solutions crafted to transform ideas into real results.</h1>
        <div className={styles.statsGrid}>
          <div className={styles.statBox}>
            <span>100+</span>
            <p>Projects Completed</p>
          </div>
          <div className={styles.statBox}>
            <span>50+</span>
            <p>Satisfied Clients</p>
          </div>
          <div className={styles.statBox}>
            <span>7+</span>
            <p>Open Source Contributions</p>
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section className={styles.showcase}>
        <h2>Showcasing our best work</h2>
        <p>Explore our cutting-edge tech solutions and success stories crafted to drive digital transformation.</p>

        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <div key={index} className={styles.projectCard}>
              <div className={styles.projectImage}>
                <img src={project.image} alt={project.title} />
              </div>
              <div className={styles.projectContent}>
                <span className={styles.projectType}>{project.type}</span>
                <h3>{project.title}</h3>
                <div className={styles.techTags}>
                  {project.technologies.map((tech, i) => (
                    <span key={i} className={styles.tag}>{tech}</span>
                  ))}
                </div>
                <Link to={project.link} className={styles.readMore}>
                  Read more
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Industries Section */}
      <section className={styles.industries}>
        <h2>Industries We Serve</h2>
        <div className={styles.industriesGrid}>
          {industries.map((industry, index) => (
            <div key={index} className={styles.industryCard}>
              {industry}
            </div>
          ))}
        </div>
      </section>

      {/* Approach Section */}
      <section className={styles.approach}>
        <h2>How we approach every project</h2>
        <div className={styles.approachSteps}>
          {approaches.map((step, index) => (
            <div key={index} className={styles.stepCard}>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className={styles.techStack}>
        <h2>Our Tech Stack</h2>
        <div className={styles.stackCategories}>
          {techStacks.map((category, index) => (
            <div key={index} className={styles.stackCategory}>
              <h3>{category.title}</h3>
              <div className={styles.technologies}>
                {category.techs.map((tech, i) => (
                  <span key={i} className={styles.techItem}>{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className={styles.faq}>
        <h2>Frequently Asked Questions</h2>
        <div className={styles.faqList}>
          {faqs.map((faq, index) => (
            <details key={index} className={styles.faqItem}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
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

const projects = [
  {
    type: "Web Development",
    title: "Indian Navy: A digital odyssey with the great Indian Naval Forces",
    technologies: ["UI UX", "Web Development", "Deployment", "Training"],
    image: "/path-to-image.jpg",
    link: "/projects/indian-navy"
  },
  // ... add more projects
];

const industries = [
  "E-Commerce",
  "Healthcare",
  "Finance & Fintech",
  // ... add more industries
];

const approaches = [
  {
    title: "Discovery & Planning",
    description: "We believe that a good understanding is a good start..."
  },
  // ... add more approaches
];

const techStacks = [
  {
    title: "Design & UI/UX Tools",
    techs: ["Figma", "Adobe Photoshop", "Adobe Illustrator", "Adobe After Effects"]
  },
  // ... add more tech stacks
];

const faqs = [
  {
    question: "What is your planning phase?",
    answer: "Our planning phase involves..."
  },
  // ... add more FAQs
];