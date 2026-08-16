import React from 'react';
import { FaStar } from 'react-icons/fa';

const Testimonials = () => {
  const reviews = [
    {
      quote: "I showed her one Pinterest picture and she somehow made it even better.",
      author: "Riya M.",
      tag: "Chrome Aura Set",
      initials: "RM",
      stars: 5,
    },
    {
      quote: "My new favorite place for nail art. The details are insane.",
      author: "Ananya P.",
      tag: "Custom Hand-Painted",
      initials: "AP",
      stars: 5,
    },
    {
      quote: "Beautiful studio, amazing artists and the prettiest nails.",
      author: "Meera S.",
      tag: "Gel Extensions",
      initials: "MS",
      stars: 5,
    },
  ];

  return (
    <section id="reviews" className="section-padding testimonials-section">
      <div className="container">
        <div className="testimonials-header">
          <span className="section-label">04 — KIND WORDS</span>
          <h2 className="section-heading">
            Loved by those who <span className="highlight-burgundy">care for details.</span>
          </h2>
          <p className="section-subtext" style={{ margin: '0 auto' }}>
            Real reviews from clients who trust us with their hands every single month.
          </p>
        </div>

        <div className="testimonials-grid">
          {reviews.map((review, index) => (
            <div className="testimonial-card" key={index}>
              <div>
                <div className="testimonial-stars" aria-label={`${review.stars} out of 5 stars`}>
                  {[...Array(review.stars)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <blockquote className="testimonial-quote">
                  "{review.quote}"
                </blockquote>
              </div>

              <div className="testimonial-author-box">
                <div className="author-avatar-initials">
                  {review.initials}
                </div>
                <div className="author-info">
                  <span className="testimonial-author-name">{review.author}</span>
                  <span className="testimonial-author-tag">{review.tag}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
