import { useState } from 'react';
import styles from './Contactanos.module.css';

export default function Contactanos() {
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
        <h1>Hablemos de tus ideas,<br />Juntos...</h1>
        
        <form onSubmit={handleSubmit} className={styles.contactForm}>
          <div className={styles.formGroup}>
            <label>Nombre*</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              placeholder="Ingresa tu nombre completo"
            />
          </div>

          <div className={styles.formGroup}>
            <label>Email*</label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              placeholder="Ingresa un correo válido donde podamos contactarte"
            />
          </div>

          <div className={styles.formGroup}>
            <label>Teléfono*</label>
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              placeholder="Ingresa tu número incluyendo el código de área"
            />
          </div>

          <div className={styles.formGroup}>
            <label>Empresa*</label>
            <input
              type="text"
              required
              value={formData.company}
              onChange={(e) => setFormData({...formData, company: e.target.value})}
              placeholder="Ingresa el nombre de tu empresa u organización"
            />
          </div>

          <div className={styles.formGroup}>
            <label>Presupuesto*</label>
            <select
              required
              value={formData.budget}
              onChange={(e) => setFormData({...formData, budget: e.target.value})}
            >
              <option value="">Selecciona un rango</option>
              <option value="5000-10000">$5,000 - $10,000</option>
              <option value="10000-25000">$10,000 - $25,000</option>
              <option value="25000-50000">$25,000 - $50,000</option>
              <option value="50000+">$50,000+</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label>Servicios*</label>
            <div className={styles.servicesGrid}>
              {[
                'Desarrollo Web',
                'Desarrollo Móvil',
                'Servicios SEO',
                'Marketing Digital',
                'Diseño UI/UX',
                'Otros'
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
            <label>Mensaje</label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              placeholder="Proporciona información adicional o detalles del proyecto"
              rows={5}
            />
          </div>

          <button type="submit" className={styles.submitButton}>
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}