import React from 'react';

const Marquee = () => {
  const marqueeItems = [
    'NAIL ART',
    'SELF LOVE',
    'BEAUTY',
    'CONFIDENCE',
    'BESPOKE GEL',
    'HIGH GLOSS',
    'CHROME & AURA',
  ];

  return (
    <div className="marquee-section" aria-hidden="true">
      <div className="marquee-track">
        {/* Track 1 */}
        {marqueeItems.map((item, index) => (
          <span className="marquee-item" key={`t1-${index}`}>
            {item} <span className="marquee-symbol">✦</span>
          </span>
        ))}
        {/* Track 2 for seamless loop */}
        {marqueeItems.map((item, index) => (
          <span className="marquee-item" key={`t2-${index}`}>
            {item} <span className="marquee-symbol">✦</span>
          </span>
        ))}
      </div>
      <div className="marquee-track" aria-hidden="true">
        {/* Track 3 duplicate for continuous scroll */}
        {marqueeItems.map((item, index) => (
          <span className="marquee-item" key={`t3-${index}`}>
            {item} <span className="marquee-symbol">✦</span>
          </span>
        ))}
        {/* Track 4 */}
        {marqueeItems.map((item, index) => (
          <span className="marquee-item" key={`t4-${index}`}>
            {item} <span className="marquee-symbol">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
