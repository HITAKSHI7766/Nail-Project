import React, { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Marquee from './components/Marquee.jsx';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import Gallery from './components/Gallery.jsx';
import WhyUs from './components/WhyUs.jsx';
import Testimonials from './components/Testimonials.jsx';
import CTA from './components/CTA.jsx';
import Footer from './components/Footer.jsx';
import { FiX, FiCheck, FiCalendar, FiClock } from 'react-icons/fi';
import { HiSparkles } from 'react-icons/hi';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Chrome & Aura');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '11:00 AM',
    notes: '',
  });
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const serviceOptions = [
    'Classic Manicure (₹799)',
    'Gel Extensions (₹1,299)',
    'Nail Art (₹999+)',
    'Chrome & Aura (₹1,499)',
    'CHERRY GLOSS Special',
    'MILKY CHROME Special',
    'AURA DREAM Special',
    'FRENCH REDEFINED Special',
  ];

  const handleOpenBooking = (serviceName = 'Chrome & Aura') => {
    if (serviceName && typeof serviceName === 'string') {
      const match = serviceOptions.find((opt) =>
        opt.toLowerCase().includes(serviceName.toLowerCase())
      );
      setSelectedService(match || serviceName);
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitBooking = (e) => {
    e.preventDefault();
    setIsModalOpen(false);
    setToastMessage(`✨ Appointment requested for ${formData.name || 'you'}! We'll confirm via WhatsApp/SMS.`);
    setShowToast(true);
    
    // Reset form
    setFormData({
      name: '',
      phone: '',
      date: '',
      time: '11:00 AM',
      notes: '',
    });

    setTimeout(() => {
      setShowToast(false);
    }, 5000);
  };

  return (
    <div className="app-wrapper">
      {/* Navigation */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* Main Sections */}
      <main>
        <Hero onOpenBooking={() => handleOpenBooking()} />
        <Marquee />
        <About />
        <Services onSelectService={(service) => handleOpenBooking(service)} />
        <Gallery onSelectService={(service) => handleOpenBooking(service)} />
        <WhyUs />
        <Testimonials />
        <CTA onOpenBooking={() => handleOpenBooking()} />
      </main>

      {/* Footer */}
      <Footer onOpenBooking={() => handleOpenBooking()} />

      {/* Interactive Booking Modal */}
      <div
        className={`modal-backdrop ${isModalOpen ? 'open' : ''}`}
        onClick={handleCloseModal}
        aria-hidden={!isModalOpen}
      >
        <div
          className="booking-modal"
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-labelledby="modal-title"
        >
          <button
            type="button"
            className="modal-close-btn"
            onClick={handleCloseModal}
            aria-label="Close booking modal"
          >
            <FiX />
          </button>

          <div style={{ textAlign: 'center', marginBottom: '1.25rem' }}>
            <span className="section-label" style={{ marginBottom: '0.5rem' }}>
              ✦ RESERVATIONS
            </span>
            <h3 id="modal-title" className="section-heading" style={{ fontSize: '1.8rem', marginBottom: '0.4rem' }}>
              Book Your Appointment
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--dark-muted)' }}>
              Step into the LUNÉ studio for a bespoke pampering session.
            </p>
          </div>

          <form onSubmit={handleSubmitBooking} className="booking-form">
            <div className="form-group">
              <label htmlFor="service-select">Select Service / Art Style</label>
              <select
                id="service-select"
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                required
              >
                {serviceOptions.map((opt, i) => (
                  <option key={i} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="client-name">Your Full Name</label>
                <input
                  id="client-name"
                  type="text"
                  name="name"
                  placeholder="e.g. Maya Sen"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="client-phone">Phone / WhatsApp</label>
                <input
                  id="client-phone"
                  type="tel"
                  name="phone"
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="booking-date">Preferred Date</label>
                <input
                  id="booking-date"
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="booking-time">Time Slot</label>
                <select
                  id="booking-time"
                  name="time"
                  value={formData.time}
                  onChange={handleInputChange}
                >
                  <option value="10:30 AM">10:30 AM (Morning Glow)</option>
                  <option value="12:00 PM">12:00 PM (Afternoon Chic)</option>
                  <option value="02:30 PM">02:30 PM (Matinee Art)</option>
                  <option value="04:30 PM">04:30 PM (Golden Hour)</option>
                  <option value="06:30 PM">06:30 PM (Evening Sunset)</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="special-notes">Custom Art Notes / Pinterest Link (Optional)</label>
              <input
                id="special-notes"
                type="text"
                name="notes"
                placeholder="Mention specific lengths, charms, or colors"
                value={formData.notes}
                onChange={handleInputChange}
              />
            </div>

            <button
              type="submit"
              className="btn-primary"
              style={{ width: '100%', marginTop: '0.75rem', padding: '1.05rem' }}
            >
              <HiSparkles />
              CONFIRM RESERVATION
            </button>
          </form>
        </div>
      </div>

      {/* Toast Notification */}
      {showToast && (
        <div className="toast-notification" role="status" aria-live="polite">
          <div
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              background: 'var(--burgundy)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--white)',
            }}
          >
            <FiCheck />
          </div>
          <span style={{ fontSize: '0.9rem', fontWeight: '500' }}>
            {toastMessage}
          </span>
        </div>
      )}
    </div>
  );
};

export default App;
