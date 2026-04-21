import React, { useState } from 'react';
import './StagingMoodBoard.css';

import scandinavianImg from '../../assets/scandinavian.png';
import luxuryImg from '../../assets/luxury.png';
import cozyImg from '../../assets/cozy.png';

const MOOD_CARDS = [
  {
    style: 'Scandinavian',
    emoji: '🌿',
    palette: ['#dce8e0', '#b8d4c0', '#8fbfa0'],
    accent: '#2d4a38',
    image: scandinavianImg,
    tip: 'Warm woods, soft greens, and cozy textures create an inviting, nature-inspired atmosphere.',
    tags: ['Warm woods', 'Soft greens', 'Hygge vibes'],
  },
  {
    style: 'Luxury',
    emoji: '✨',
    palette: ['#f0ead8', '#d4b896', '#b8936a'],
    accent: '#6b4c2a',
    image: luxuryImg,
    tip: 'Rich materials, statement pieces, and layered lighting elevate every room into a premium experience.',
    tags: ['Rich textures', 'Gold accents', 'Statement art'],
  },
  {
    style: 'Cozy',
    emoji: '🕯️',
    palette: ['#f2e8df', '#e0c9b8', '#c9a898'],
    accent: '#7a4f3a',
    image: cozyImg,
    tip: 'Soft throws, warm lighting, and layered rugs make buyers feel instantly at home.',
    tags: ['Soft textiles', 'Warm lighting', 'Layered rugs'],
  },
];

const StagingMoodBoard = () => {
  const [flipped, setFlipped] = useState(null);

  return (
    <div className="moodboard">
      <div className="moodboard__grid">
        {MOOD_CARDS.map((card, i) => (
          <div
            key={card.style}
            className={`moodboard__card ${flipped === i ? 'moodboard__card--flipped' : ''}`}
            onMouseEnter={() => setFlipped(i)}
            onMouseLeave={() => setFlipped(null)}
            onClick={() => setFlipped(flipped === i ? null : i)}
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <div className="moodboard__inner">

              {/* ── FRONT: blurred image ── */}
              <div className="moodboard__front">
                <img
                  src={card.image}
                  alt={card.style}
                  className="moodboard__img moodboard__img--blurred"
                />
                <div className="moodboard__overlay" />
                <div className="moodboard__front-content">
                  <div className="moodboard__swatches">
                    {card.palette.map((c) => (
                      <span key={c} className="moodboard__swatch" style={{ background: c }} />
                    ))}
                  </div>
                  <div className="moodboard__emoji">{card.emoji}</div>
                  <div className="moodboard__style">{card.style}</div>
                  <div className="moodboard__hint">Hover to explore</div>
                </div>
              </div>

              {/* ── BACK: sharp/clear image ── */}
              <div className="moodboard__back">
                <img
                  src={card.image}
                  alt={card.style}
                  className="moodboard__img moodboard__img--sharp"
                />
                <div
                  className="moodboard__back-overlay"
                  style={{
                    background: `linear-gradient(to top, ${card.accent}ee 0%, ${card.accent}88 50%, transparent 100%)`,
                  }}
                />
                <div className="moodboard__back-content">
                  <div className="moodboard__back-emoji">{card.emoji}</div>
                  <div className="moodboard__back-title">{card.style}</div>
                  <p className="moodboard__back-tip">{card.tip}</p>
                  <div className="moodboard__tags">
                    {card.tags.map((tag) => (
                      <span key={tag} className="moodboard__tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>

      <div className="moodboard__footer">
        <span className="moodboard__footer-dot" />
        Hover any style to explore staging options
      </div>
    </div>
  );
};

export default StagingMoodBoard;
