import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { HiSparkles } from 'react-icons/hi';

const Navbar = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Left: Logo */}
        <a href="#home" className="nav-logo" onClick={(e) => handleLinkClick(e, '#home')}>
          <span className="logo-main">LUNÉ</span>
          <span className="logo-sub">NAILS</span>
        </a>

        {/* Center: Navigation Links (Desktop) */}
        <nav className="nav-links-desktop" aria-label="Main Navigation">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="nav-link-item"
              onClick={(e) => handleLinkClick(e, link.href)}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right: Booking Button (Desktop) */}
        <div className="nav-actions-desktop">
          <button 
            type="button"
            className="btn-primary nav-book-btn"
            onClick={onOpenBooking}
          >
            <HiSparkles />
            BOOK APPOINTMENT
          </button>
        </div>

        {/* Mobile Menu Button (Hamburger) */}
        <button
          type="button"
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Navigation Menu'}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      <div
        className={`mobile-drawer-overlay ${isMobileMenuOpen ? 'active' : ''}`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Navigation Drawer */}
      <aside className={`mobile-drawer ${isMobileMenuOpen ? 'active' : ''}`} aria-label="Mobile Navigation">
        <ul className="mobile-nav-links">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="mobile-drawer-footer">
          <button
            type="button"
            className="btn-primary"
            style={{ width: '100%' }}
            onClick={() => {
              setIsMobileMenuOpen(false);
              onOpenBooking();
            }}
          >
            <HiSparkles />
            BOOK APPOINTMENT
          </button>
          <p style={{ fontSize: '0.85rem', textAlign: 'center', color: 'var(--dark-muted)' }}>
            Mon — Sat / 10AM — 8PM
          </p>
        </div>
      </aside>
    </header>
  );
};

export default Navbar;
