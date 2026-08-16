import React from 'react';
import { FiArrowRight, FiClock } from 'react-icons/fi';

const CTA = ({ onOpenBooking }) => {
  return (
    <section id="contact" className="cta-section">
      {/* Background Glowing Ambient Light */}
      <div className="cta-glow-bg" aria-hidden="true" />

      <div className="container">
        <div className="cta-content">
          <span className="section-label section-label-light">
            ✦ RESERVATIONS OPEN
          </span>

          <h2 className="cta-heading">
            Ready to make<br />
            your hands<br />
            <span className="main-char">the main character?</span>
          </h2>

          <button
            type="button"
            className="btn-primary cta-btn"
            onClick={onOpenBooking}
          >
            BOOK YOUR APPOINTMENT <FiArrowRight />
          </button>

          <div className="cta-hours">
            <FiClock style={{ color: 'var(--pink)' }} />
            <span>Mon — Sat / 10AM — 8PM</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
