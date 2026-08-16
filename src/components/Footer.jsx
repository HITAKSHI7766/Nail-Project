import React from 'react';
import { FiInstagram, FiHeart } from 'react-icons/fi';
import { FaPinterestP } from 'react-icons/fa';

const Footer = ({ onOpenBooking }) => {
  const footerLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-top">
          {/* Brand Col */}
          <div className="footer-brand">
            <span className="footer-logo-main">LUNÉ</span>
            <span className="footer-logo-sub">NAILS</span>
            <p className="footer-tagline">
              "Tiny canvas. Big personality."
            </p>
          </div>

          {/* Quick Links Col */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">NAVIGATION</h4>
            <ul className="footer-links-list">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="footer-link"
                    onClick={(e) => handleLinkClick(e, link.href)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Connect Col */}
          <div className="footer-social-col">
            <h4 className="footer-col-title">FOLLOW THE ART</h4>
            <div className="footer-social-list">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="Follow LUNÉ Nails on Instagram"
              >
                <FiInstagram />
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="Discover nail design inspiration on Pinterest"
              >
                <FaPinterestP />
              </a>
            </div>
            <p style={{ marginTop: '1.25rem', fontSize: '0.85rem', color: 'rgba(248, 243, 238, 0.6)' }}>
              Studio: 14th Ave, Bandra West, Mumbai<br />
              hello@lunenails.com
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <span>© 2026 LUNÉ NAILS. All rights reserved.</span>
          <span className="footer-made-with">
            Made with ✦ for gorgeous hands
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
