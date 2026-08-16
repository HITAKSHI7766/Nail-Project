import React from 'react';
import { FiShield, FiUserCheck, FiHeart } from 'react-icons/fi';

const WhyUs = () => {
  const features = [
    {
      number: '01',
      title: 'Hygienic Studio',
      description: 'Hospital-grade autoclaves, medical sterilization protocols, and 100% single-use disposable files & buffers for complete peace of mind.',
      icon: <FiShield />,
    },
    {
      number: '02',
      title: 'Certified Artists',
      description: 'Master nail technicians continuously certified in advanced Japanese gel techniques, Russian cuticle care, and 3D architectural shaping.',
      icon: <FiUserCheck />,
    },
    {
      number: '03',
      title: 'Premium Products',
      description: 'Exclusively non-toxic, 10-free, vegan gel formulas and breathable bases imported from Tokyo and Milan for long-lasting healthy nails.',
      icon: <FiHeart />,
    },
  ];

  return (
    <section id="why-us" className="section-padding why-us-section">
      {/* Decorative Blur Background Element */}
      <div className="why-us-decor-circle" aria-hidden="true" />

      <div className="container">
        <div className="why-us-grid">
          {/* Left: Statement Column */}
          <div className="why-us-statement-col">
            <span className="section-label section-label-light">
              ✦ THE LUNÉ PHILOSOPHY
            </span>
            <h2 className="why-us-large-statement">
              WE DON'T JUST<br />
              PAINT NAILS.<br />
              <span className="highlight-statement">WE CREATE</span>
              MOODS.
            </h2>
          </div>

          {/* Right: Features Column */}
          <div className="why-us-features-col">
            {features.map((feature, index) => (
              <div className="why-us-feature-card" key={index}>
                <div className="why-us-feature-header">
                  <span className="why-us-feature-number">{feature.number} — FEATURE</span>
                  <div style={{ color: 'var(--pink)', fontSize: '1.2rem' }}>
                    {feature.icon}
                  </div>
                </div>
                <h3 className="why-us-feature-title">{feature.title}</h3>
                <p className="why-us-feature-desc">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
