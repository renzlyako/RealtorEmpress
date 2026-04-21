import React, { useEffect, useRef, useState } from 'react';
import './Stats.css';

const stats = [
  { value: '8.5k+', label: 'Happy Homeowners' },
  { value: '12k+', label: 'Properties Listed' },
  { value: '450+', label: 'Trusted Agents' },
];

const StatCard = ({ value, label, delay }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`stats__card ${visible ? 'stats__card--visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <span className="stats__value">{value}</span>
      <span className="stats__label">{label}</span>
    </div>
  );
};

const Stats = () => {
  return (
    <section className="stats">
      <div className="stats__grid">
        {stats.map((stat, index) => (
          <StatCard
            key={index}
            value={stat.value}
            label={stat.label}
            delay={index * 150}
          />
        ))}
      </div>
    </section>
  );
};

export default Stats;