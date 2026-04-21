import React, { useEffect, useRef, useState } from 'react';
import './About.css';
import hand1 from '../../assets/hand1.png';
import man from '../../assets/man.png';
import square from '../../assets/square.png';

const useVisible = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return [ref, visible];
};

const About = () => {
  const [ref1, visible1] = useVisible();
  const [ref2, visible2] = useVisible();

  return (
    <section className="about">

      {/* ── SECTION 1: Image Left, Text Right ── */}
      <div ref={ref1} className={`about__row ${visible1 ? 'about__row--visible' : ''}`}>
        <div className="about__img-wrap">
          <img src={square} alt="" className="about__square" />
          <img src={hand1} alt="Hand holding house" className="about__photo about__photo--hand" />
        </div>
        <div className="about__text">
          <h2 className="about__heading">
            Not Your<br />Average Realtor
          </h2>
          <p className="about__desc">
            Realtor Empress has an eye for seeing a property's potential,
            coordinating design, and effectively marketing to get homeowners
            top dollar on their sale.
          </p>
        </div>
      </div>

      {/* ── SECTION 2: Text Left, Image Right ── */}
      <div ref={ref2} className={`about__row ${visible2 ? 'about__row--visible' : ''}`} style={{ transitionDelay: '0.15s' }}>
        <div className="about__text">
          <h2 className="about__heading">Why Choose Us?</h2>
          <p className="about__desc">
            Potential ROI Whether you are looking to buy a fixer upper or
            renovate your current home for sale, We will walk you through
            potential returns for projects.
          </p>
          <p className="about__desc">
            Fourteen years of experience in real estate, excellent customer
            service and a commitment to work hard, listen and follow through.
            We provide quality service to build relationships with clients and
            more importantly, maintain those relationships by communicating
            effectively.
          </p>
          <button className="about__btn">Learn More</button>
        </div>
        <div className="about__img-wrap about__img-wrap--man">
          <img src={square} alt="" className="about__square" />
          <img src={man} alt="Realtor" className="about__photo about__photo--man" />
        </div>
      </div>

    </section>
  );
};

export default About;