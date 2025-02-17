import { useState } from 'react';
import styles from './ContactUs.module.css';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    budget: '',
    services: [],
    message: ''
  });

  const handleServiceChange = (service) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add form submission logic here
  };

  return (
    <div className={styles.contactContainer}>
      <div className={styles.formWrapper}>
        <h1>Let's talk about your ideas,<br />Together...</h1>
        
        <form onSubmit={handleSubmit} className={styles.contactForm}>
          <div className={styles.formGroup}>
            <label>Name*</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              placeholder="Enter your full name"
            />
          </div>

          <div className={styles.formGroup}>
            <label>Email*</label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              placeholder="Enter a valid email where we can contact you"
            />
          </div>

          <div className={styles.formGroup}>
            <label>Phone*</label>
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              placeholder="Enter your number including the area code"
            />
          </div>

          <div className={styles.formGroup}>
            <label>Company*</label>
            <input
              type="text"
              required
              value={formData.company}
              onChange={(e) => setFormData({...formData, company: e.target.value})}
              placeholder="Enter your company or organization name"
            />
          </div>

          <div className={styles.formGroup}>
            <label>Budget*</label>
            <select
              required
              value={formData.budget}
              onChange={(e) => setFormData({...formData, budget: e.target.value})}
            >
              <option value="">Select a range</option>
              <option value="5000-10000">$5,000 - $10,000</option>
              <option value="10000-25000">$10,000 - $25,000</option>
              <option value="25000-50000">$25,000 - $50,000</option>
              <option value="50000+">$50,000+</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label>Services*</label>
            <div className={styles.servicesGrid}>
              {[
                'Web Development',
                'Mobile Development',
                'SEO Services',
                'Digital Marketing',
                'UI/UX Design',
                'Others'
              ].map((service) => (
                <label key={service} className={styles.serviceCheckbox}>
                  <input
                    type="checkbox"
                    checked={formData.services.includes(service)}
                    onChange={() => handleServiceChange(service)}
                  />
                  <span>{service}</span>
                </label>
              ))}
            </div>
          </div>

          <div className={styles.formGroup}>
            <label>Message</label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              placeholder="Provide additional information or project details"
              rows={5}
            />
          </div>

          <button type="submit" className={styles.submitButton}>
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
