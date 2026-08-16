import React from 'react';
import { FiArrowDown } from 'react-icons/fi';
import { HiSparkles } from 'react-icons/hi';
import { RiSparkling2Fill } from 'react-icons/ri';

const Hero = ({ onOpenBooking }) => {
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      {/* Subtle Background Glowing Accents */}
      <div className="hero-shape-1" aria-hidden="true" />
      <div className="hero-shape-2" aria-hidden="true" />

      <div className="container">
        <div className="hero-grid">
          {/* Left Hero Content */}
          <div className="hero-content">
            <div className="hero-badge">
              <RiSparkling2Fill className="hero-badge-sparkle" />
              <span>NAIL ART • BEAUTY • SELF LOVE</span>
            </div>

            <h1 className="hero-title">
              Your nails,<br />
              but make them<br />
              <span className="art-text">ART.</span>
            </h1>

            <p className="hero-description">
              Minimal details, bold ideas and carefully crafted nail art designed to make your hands impossible to ignore.
            </p>

            <div className="hero-btn-group">
              <a
                href="#gallery"
                className="btn-secondary"
                onClick={(e) => scrollToSection(e, '#gallery')}
              >
                EXPLORE DESIGNS
              </a>
              <button
                type="button"
                className="btn-primary"
                onClick={onOpenBooking}
              >
                <HiSparkles />
                BOOK APPOINTMENT
              </button>
            </div>
          </div>

          {/* Right Hero Visuals */}
          <div className="hero-visual">
            <div className="hero-image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=900&q=80"
                alt="Editorial luxury burgundy and gold nail art"
                className="hero-img"
                loading="eager"
              />
            </div>

            {/* Floating Highlight Card: THIS WEEK */}
            <div className="floating-card-this-week">
              <div className="floating-icon-box">
                <HiSparkles />
              </div>
              <div className="floating-card-details">
                <span className="floating-card-tag">THIS WEEK</span>
                <h4 className="floating-card-title">Chrome Aura</h4>
                <span className="floating-card-price">₹1,499</span>
              </div>
            </div>

            {/* Subtle Circular Rotating Badge */}
            <div className="floating-circle-badge" aria-hidden="true">
              <span className="badge-text">✦ BESPOKE<br />STUDIO ✦</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <a
        href="#about"
        className="hero-scroll-indicator"
        onClick={(e) => scrollToSection(e, '#about')}
        aria-label="Scroll down to explore about section"
      >
        <span>SCROLL TO EXPLORE</span>
        <FiArrowDown className="scroll-arrow" />
      </a>
    </section>
  );
};

export default Hero;
