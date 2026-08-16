import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';

const Services = ({ onSelectService }) => {
  const services = [
    {
      id: '01',
      name: 'Classic Manicure',
      price: '₹799',
      description: 'Clean, polished and timeless. Precision cuticle care, nourishing hand massage and breathable high-shine polish.',
    },
    {
      id: '02',
      name: 'Gel Extensions',
      price: '₹1,299',
      description: 'Strong, glossy and effortlessly elegant. Sculpted gel tips tailored to your desired length and natural nail shape.',
    },
    {
      id: '03',
      name: 'Nail Art',
      price: '₹999+',
      description: 'Custom hand-painted patterns, French twists, 3D gems and abstract graphics rendered with meticulous precision.',
    },
    {
      id: '04',
      name: 'Chrome & Aura',
      price: '₹1,499',
      description: 'Futuristic iridescence, glazed donut finishes, and dreamy airbrush ombre blends for statement hands.',
    },
  ];

  return (
    <section id="services" className="section-padding services-section">
      <div className="container">
        <div className="services-header">
          <span className="section-label">02 — SIGNATURE SERVICES</span>
          <h2 className="section-heading">
            Pick your <span className="highlight-burgundy">mood.</span>
          </h2>
          <p className="section-subtext" style={{ margin: '0 auto' }}>
            Whether you are going for understated clean-girl minimalism or bold editorial extravagance, our master artists bring your vision to life.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div
              className="service-card"
              key={index}
              onClick={() => onSelectService(service.name)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  onSelectService(service.name);
                }
              }}
              aria-label={`Book ${service.name} for ${service.price}`}
            >
              <div className="service-card-top">
                <span className="service-card-index">{service.id}</span>
                <h3 className="service-card-title">{service.name}</h3>
                <p className="service-card-desc">{service.description}</p>
              </div>

              <div className="service-card-bottom">
                <span className="service-card-price">{service.price}</span>
                <div className="service-card-arrow" aria-hidden="true">
                  <FiArrowUpRight />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
