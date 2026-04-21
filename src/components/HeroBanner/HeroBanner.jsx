import React, { useState } from 'react';
import './HeroBanner.css';
import bgRect from '../../assets/Rectangle1.png';
import buildingImg from '../../assets/building.png';

const HeroBanner = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section className="hero" id="home">
      <div className="hero__card">

        {/* Sky blue background rectangle */}
        <div className="hero__bg">
          <img src={bgRect} alt="" className="hero__bg-img" />
        </div>

        {/* Building image — right side, full height, no overlay */}
        <div className="hero__building">
          <img src={buildingImg} alt="Modern luxury property" className="hero__building-img" />
        </div>

        {/* Text content — overlaid on left */}
        <div className="hero__content">
        <h1 className="hero__headline">
        <span className="hero__headline-line1">Want To Get The Most</span>
        <span className="hero__headline-line2">Return From Your</span>
        <span className="hero__headline-line3">Property?</span>
        </h1>

          <ul className="hero__services">
            <li>ROI Consultation</li>
            <li>Design + Marketing Services</li>
          </ul>

          <form className="hero__form" onSubmit={handleSubmit}>
            <input
              type="email"
              className="hero__input"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="hero__submit">
              {submitted ? 'Sent!' : 'Submit'}
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default HeroBanner;