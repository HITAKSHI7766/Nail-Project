import React from 'react';

const Gallery = ({ onSelectService }) => {
  const galleryItems = [
    {
      id: 1,
      name: 'CHERRY GLOSS',
      category: 'High Shine Gel',
      image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=800&q=80',
      alt: 'Deep cherry red high gloss editorial nail art',
    },
    {
      id: 2,
      name: 'MILKY CHROME',
      category: 'Glazed Finish',
      image: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&w=800&q=80',
      alt: 'Luminous milky chrome glazed manicure',
    },
    {
      id: 3,
      name: 'AURA DREAM',
      category: 'Airbrush Art',
      image: 'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?auto=format&fit=crop&w=800&q=80',
      alt: 'Dreamy airbrush aura gradient nail art',
    },
    {
      id: 4,
      name: 'FRENCH REDEFINED',
      category: 'Modern Micro-Tips',
      image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
      alt: 'Clean girl modern redefined French tip manicure',
    },
    {
      id: 5,
      name: 'PEARL GLOW',
      category: 'Lustrous Minimal',
      image: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=800&q=80',
      alt: 'Pearl shimmer glow luxury hand and nail treatment',
    },
    {
      id: 6,
      name: 'MIDNIGHT',
      category: 'Velvet Noir',
      image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80',
      alt: 'Midnight velvet luxury dark dramatic nail set',
    },
  ];

  return (
    <section id="gallery" className="section-padding gallery-section">
      <div className="container">
        <div className="gallery-header">
          <div>
            <span className="section-label">03 — THE NAIL EDIT</span>
            <h2 className="section-heading" style={{ marginBottom: 0 }}>
              Some of our favorite<br />
              <span className="highlight-burgundy">little masterpieces.</span>
            </h2>
          </div>
          <p className="section-subtext" style={{ maxWidth: '400px' }}>
            Every set is individually sculpted, hand-painted, and finished with salon-grade longevity.
          </p>
        </div>

        <div className="gallery-grid">
          {galleryItems.map((item) => (
            <div
              className="gallery-card"
              key={item.id}
              onClick={() => onSelectService(item.name)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  onSelectService(item.name);
                }
              }}
              aria-label={`View details for ${item.name}`}
            >
              <img
                src={item.image}
                alt={item.alt}
                className="gallery-img"
                loading="lazy"
              />
              <div className="gallery-overlay">
                <span className="gallery-card-tag">{item.category}</span>
                <h3 className="gallery-card-name">{item.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
