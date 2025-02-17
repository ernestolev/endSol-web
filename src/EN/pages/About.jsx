import styles from './About.module.css';
import { Link } from 'react-router-dom';


export default function About() {
    
  return (
    <div className={styles.aboutContainer}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <h1>We Are Technocrats, Digital Natives, and Problem-Solvers</h1>
        <p className={styles.heroText}>
          END Solutions is a full-service technology company with an expert team that specializes in Digital Transformation. 
          We provide a wide range of services including UI UX, Website Development, Mobile App Development, Digital Marketing, and IT Consultancy.
        </p>
        <h2 className={styles.subHeading}>Enhancing digital solutions for every business.</h2>
      </section>

      {/* Vision & Mission Section */}
      <section className={styles.visionMission}>
        <div className={styles.visionBox}>
          <h2>Our Vision</h2>
          <p>We envision a world where technology seamlessly integrates with everyday life, enhancing experiences and enabling possibilities beyond imagination.</p>
        </div>
        <div className={styles.missionBox}>
          <h2>Our Mission</h2>
          <p>To make technology easy and accessible for everyone. Delivering solutions that not only promotes business growth but also improve developer experience.</p>
        </div>
      </section>

      {/* Team Section */}
      <section className={styles.team}>
        <h2>Our Leadership</h2>
        <p className={styles.teamIntro}>Our leadership comprises young, tech-savvy professionals, bringing technological and marketing capabilities for the future.</p>
        <div className={styles.teamMembers}>
          {/* Add team member cards here */}
        </div>
      </section>

      {/* Values Section */}
      <section className={styles.values}>
        <h2>Our Core Values</h2>
        <div className={styles.valuesGrid}>
          {[
            {
              title: "Communication",
              description: "Clear, Concise and Confident communication is the key to our success. We believe in fostering open, transparent, and honest dialogues."
            },
            {
              title: "Accountability",
              description: "END Solutions is run by young professionals who take full responsibility for their actions and decisions."
            },
            {
              title: "Trust",
              description: "Trust is at the core of everything we do. We always strive to create lasting partnerships by demonstrating reliability and integrity."
            },
            {
              title: "Gratitude",
              description: "We approach every opportunity with humility and appreciation, fostering meaningful relationships and positive collaboration."
            },
            {
              title: "Efficiency",
              description: "If you pride yourself as an engineer, try to be lazy without compromising the quality of work. We believe in working smarter, not harder."
            },
            {
              title: "Lifelong Learning",
              description: "You can never know everything, but you can always learn something new. Even a small ant can teach you big a lesson. Be humble."
            }
          ].map((value, index) => (
            <div key={index} className={styles.valueCard}>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
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