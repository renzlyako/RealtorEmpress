import React from 'react';
import './CTA.css';

const ROWS = [
  [
    { label: 'AVG SALE PRICE', val: '$710K',  style: 'sw-navy' },
    { label: 'ROI BOOST',      val: '+42%',   style: 'sw-blue' },
    { label: 'RATING',         val: '4.9★',   style: 'sw-mid'  },
  ],
  [
    { label: 'HAPPY CLIENTS',  val: '200+',   style: 'sw-light' },
    { label: 'ABOVE ASKING',   val: '$40K',   style: 'sw-navy'  },
    { label: 'DAYS TO SELL',   val: '4 days', style: 'sw-blue'  },
  ],
  [
    { label: 'SATISFACTION',   val: '98%',    style: 'sw-mid'  },
    { label: 'PROJECTS DONE',  val: '150+',   style: 'sw-pale' },
    { label: 'EXPERIENCE',     val: '10 yrs', style: 'sw-navy' },
  ],
];

const lightStyles = ['sw-light', 'sw-pale'];

const CTA = () => {
  return (
    <section className="cta">
      <div className="cta__container">

        {/* ── LEFT ── */}
        <div className="cta__left">
          <div className="cta__text">
            <h2 className="cta__heading">
              Find the right fit<br />
              <span className="cta__heading--light">to your Property</span>
            </h2>
            <p className="cta__quote">
              "Realtor Empress made selling my home a breeze! Their design
              recommendations and marketing strategy got me multiple offers
              above asking price. Highly recommend!"
            </p>
            <p className="cta__author">— Sarah M., Home Seller</p>
          </div>

          <div className="cta__actions">
            <button type="button" className="cta__btn cta__btn--primary">
              Book Consultation →
            </button>
            <button type="button" className="cta__btn cta__btn--ghost">
              View Pricing
            </button>
          </div>
        </div>

        {/* ── RIGHT: Swipe blocks ── */}
        <div className="cta__right">
          <div className="cta__swipe-outer">
            <div className="cta__swipe">
              {ROWS.map((row, ri) => (
                <div
                  key={ri}
                  className={`cta__sw-row ${ri % 2 === 0 ? 'cta__sw-row--right' : 'cta__sw-row--left'}`}
                  style={{ animationDelay: `${ri * 0.4}s` }}
                >
                  {row.map((block, bi) => (
                    <div key={bi} className={`cta__sw ${block.style}`}>
                      <div className={lightStyles.includes(block.style) ? 'cta__sw-lbl--dark' : 'cta__sw-lbl'}>
                        {block.label}
                      </div>
                      <div className={lightStyles.includes(block.style) ? 'cta__sw-val--dark' : 'cta__sw-val'}>
                        {block.val}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CTA;