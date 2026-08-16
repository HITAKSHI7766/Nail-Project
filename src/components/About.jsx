import React from 'react';
import { FiCheckCircle, FiHeart, FiAward } from 'react-icons/fi';

const About = () => {
  const stats = [
    { number: '5,000+', label: 'Sets Styled' },
    { number: '100%', label: 'Non-Toxic & Cruelty-Free' },
    { number: '4.9 ★', label: 'Client Rating' },
  ];

  return (
    <section id="about" className="section-padding about-section">
      <div className="container">
        <div className="about-grid">
          {/* Visual Column */}
          <div className="about-visual-col">
            <div className="about-image-main-wrap">
              <img
                src="https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=900&q=80"
                alt="LUNÉ luxury nail art studio and artist at work"
                className="about-img"
                loading="lazy"
              />
            </div>

            {/* EST. 2021 Badge */}
            <div className="about-est-badge">
              <span className="est-title">ESTABLISHED</span>
              <span className="est-year">2021</span>
            </div>

            {/* Floating Mini Feature */}
            <div className="about-floating-mini-card">
              <FiAward className="mini-card-icon" />
              <span className="mini-card-text">Award-Winning Studio Artistry</span>
            </div>
          </div>

          {/* Content Column */}
          <div className="about-content-col">
            <span className="section-label">01 — OUR STORY</span>
            
            <h2 className="about-heading">
              Small details.<br />
              <span className="highlight-burgundy">Big confidence.</span>
            </h2>

            <p className="about-lead-text">
              "At LUNÉ, we believe your nails are more than an accessory. They are a tiny canvas for your mood, personality and style."
            </p>

            <p className="about-paragraph">
              Founded in 2021, LUNÉ was created for individuals who value precision, luxury, and artistic expression. Every set we craft is treated as a bespoke work of art—tailored to your skin tone, aesthetic desires, and lifestyle. From whisper-soft minimalist gradients to head-turning chrome aura designs, we elevate everyday beauty into an unforgettable statement.
            </p>

            {/* Stats Grid */}
            <div className="about-stats-grid">
              {stats.map((stat, index) => (
                <div className="about-stat-item" key={index}>
                  <span className="stat-number">{stat.number}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
