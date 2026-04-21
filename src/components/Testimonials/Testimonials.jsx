import React, { useState } from 'react';
import './Testimonials.css';

const TESTIMONIALS = [
  {
    id: 1,
    name: 'Marcus Holloway',
    role: 'Property Investor',
    initials: 'MH',
    color: '#0d2f4f',
    quote:
      'Working with this team completely transformed my investment property. The ROI consultation alone saved me from making a $40K mistake. Absolutely worth every penny.',
    rating: 5,
    location: 'San Francisco, CA',
  },
  {
    id: 2,
    name: 'Sophia Reyes',
    role: 'First-Time Home Seller',
    initials: 'SR',
    color: '#1a4a6b',
    quote:
      'I had no idea staging could make such a huge difference. My home sold in 6 days — 18% above asking price. The team was professional, fast, and incredibly talented.',
    rating: 5,
    location: 'Austin, TX',
  },
  {
    id: 3,
    name: 'Daniel Park',
    role: 'Real Estate Agent',
    initials: 'DP',
    color: '#2e6a9e',
    quote:
      'I refer all my clients here now. The before-and-after renovation work speaks for itself. Listings move faster and for more money — it\'s that simple.',
    rating: 5,
    location: 'Seattle, WA',
  },
  {
    id: 4,
    name: 'Natalie Brooks',
    role: 'Luxury Home Buyer',
    initials: 'NB',
    color: '#6b4c2a',
    quote:
      'The interior redesign exceeded every expectation I had. They understood my vision immediately and delivered something even more beautiful than I imagined.',
    rating: 5,
    location: 'Miami, FL',
  },
  {
    id: 5,
    name: 'James Whitfield',
    role: 'Property Developer',
    initials: 'JW',
    color: '#2d4a38',
    quote:
      'Their marketing strategy is on another level. Professional photography, targeted campaigns, and a listing plan that got us 3 offers on day one. Phenomenal work.',
    rating: 5,
    location: 'New York, NY',
  },
];

const StarRating = ({ count }) => (
  <div className="testi__stars">
    {Array.from({ length: count }).map((_, i) => (
      <svg key={i} className="testi__star" viewBox="0 0 20 20" fill="currentColor">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const Testimonials = () => {
  const [active, setActive] = useState(0);

const handleSelect = (index) => {
  if (index === active) return;
  setActive(index);
};


  return (
    <section className="testi">
      <div className="testi__container">

        {/* Header — matches Projects layout */}
        <div className="testi__header">
          <div className="testi__header-left">
            <h2 className="testi__heading">What our clients say</h2>
            <p className="testi__subhead">
              Real results from real homeowners, investors, and agents.
            </p>
          </div>
          <button type="button" className="testi__view-btn">
            Read All Reviews →
          </button>
        </div>

        {/* Stage */}
        <div className="testi__stage">

          {/* Fixed-height quote card */}
          <div className="testi__card-wrap">
            {TESTIMONIALS.map((t, i) => (
              <div
                key={t.id}
                className={`testi__card ${active === i ? 'testi__card--active' : ''}`}
              >
                <svg className="testi__quote-icon" viewBox="0 0 60 44" fill="none">
                  <path
                    d="M0 44V26.4C0 18.667 1.867 12.267 5.6 7.2 9.333 2.133 14.933 0 22.4 0L24 3.2C19.2 4.267 15.467 6.8 12.8 10.8 10.133 14.667 8.8 19.067 8.8 24H20V44H0ZM36 44V26.4C36 18.667 37.867 12.267 41.6 7.2 45.333 2.133 50.933 0 58.4 0L60 3.2C55.2 4.267 51.467 6.8 48.8 10.8 46.133 14.667 44.8 19.067 44.8 24H56V44H36Z"
                    fill="currentColor"
                  />
                </svg>

                <blockquote className="testi__quote">{t.quote}</blockquote>

                <StarRating count={t.rating} />

                <div className="testi__author">
                  <div
                    className="testi__avatar testi__avatar--card"
                    style={{ background: t.color }}
                  >
                    {t.initials}
                  </div>
                  <div className="testi__author-info">
                    <div className="testi__author-name">{t.name}</div>
                    <div className="testi__author-role">{t.role}</div>
                  </div>
                  <div className="testi__location">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2C8.134 2 5 5.134 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7z" />
                      <circle cx="12" cy="9" r="2.5" />
                    </svg>
                    {t.location}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mishin-style bottom nav bar */}
          <div className="testi__nav">
            {TESTIMONIALS.map((t, i) => (
              <button
                key={t.id}
                className={`testi__nav-item ${active === i ? 'testi__nav-item--active' : ''}`}
                onClick={() => handleSelect(i)}
                onMouseEnter={() => handleSelect(i)}
                aria-label={`View testimonial from ${t.name}`}
              >
                <div className="testi__avatar" style={{ background: t.color }}>
                  {t.initials}
                </div>
                <div className="testi__nav-info">
                  <div className="testi__nav-name">{t.name}</div>
                  <div className="testi__nav-role">{t.role}</div>
                </div>
                <div
                  className="testi__nav-indicator"
                  style={{ background: t.color }}
                />
              </button>
            ))}

            <div
              className="testi__nav-highlight"
              style={{ transform: `translateX(${active * 100}%)` }}
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;