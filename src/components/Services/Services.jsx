import React, { useMemo, useRef, useState, useEffect } from 'react';
import './Services.css';
import beforeImg from '../../assets/Before1.png';
import afterImg from '../../assets/After1.png';
import marketing1 from '../../assets/marketing1.png';
import marketing2 from '../../assets/marketing2.png';
import marketing3 from '../../assets/marketing3.png';
import StagingMoodBoard from './StagingMoodBoard';

const serviceTabs = [
  { id: 'interior', label: 'Interior Redesign' },
  { id: 'marketing', label: 'Marketing' },
  { id: 'roi', label: 'ROI Consultation' },
  { id: 'staging', label: 'Property Staging' },
];

/* ── ROI ── */
const ROI_BARS = [
  { label: 'Kitchen Remodel',  pct: 85, color: '#0d2f4f' },
  { label: 'Bathroom Upgrade', pct: 72, color: '#1a4a6b' },
  { label: 'Curb Appeal',      pct: 63, color: '#2e6a9e' },
  { label: 'Staging',          pct: 58, color: '#4a8fc0' },
];

const AnimatedCounter = ({ target, prefix = '', suffix = '' }) => {
  const [val, setVal] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        obs.disconnect();
        let start = null;
        const duration = 1400;
        const step = (ts) => {
          if (!start) start = ts;
          const progress = Math.min((ts - start) / duration, 1);
          const ease = 1 - Math.pow(1 - progress, 3);
          setVal(Math.round(ease * target));
          if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);

  return <span ref={ref}>{prefix}{val.toLocaleString()}{suffix}</span>;
};

const RoiVisual = () => {
  const [animated, setAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div className="roi" ref={ref}>
      <div className="roi__kpis">
        <div className="roi__kpi">
          <span className="roi__kpi-val">
            <AnimatedCounter prefix="$" target={500000} />
          </span>
          <span className="roi__kpi-label">Before</span>
        </div>
        <span className="roi__kpi-arrow">→</span>
        <div className="roi__kpi roi__kpi--highlight">
          <span className="roi__kpi-val">
            <AnimatedCounter prefix="$" target={710000} />
          </span>
          <span className="roi__kpi-label">After</span>
        </div>
        <span className="roi__kpi-badge">
          +<AnimatedCounter target={42} suffix="% ROI" />
        </span>
      </div>

      <div className="roi__bars">
        {ROI_BARS.map((bar, i) => (
          <div className="roi__bar-row" key={bar.label}>
            <div className="roi__bar-meta">
              <span className="roi__bar-label">{bar.label}</span>
              <span className="roi__bar-pct" style={{ color: bar.color }}>{bar.pct}%</span>
            </div>
            <div className="roi__bar-track">
              <div
                className="roi__bar-fill"
                style={{
                  width: animated ? `${bar.pct}%` : '0%',
                  background: bar.color,
                  transitionDelay: `${i * 180}ms`,
                }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="roi__footer">
        <span className="roi__footer-dot" />
        Live estimates based on local market data
      </div>
    </div>
  );
};

/* ── MAIN COMPONENT ── */
const Services = () => {
  const [activeTab, setActiveTab] = useState('interior');
  const [slideIndex, setSlideIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const marketingImages = useMemo(() => [marketing1, marketing2, marketing3], []);
  const displayImages = useMemo(() => [...marketingImages, marketingImages[0]], [marketingImages]);

  useEffect(() => {
    let interval;
    if (activeTab === 'marketing') {
      interval = setInterval(() => {
        if (!isTransitioning) return;
        setSlideIndex((prev) => prev + 1);
      }, 3000);
    } else {
      setSlideIndex(0);
      setIsTransitioning(true);
    }
    return () => clearInterval(interval);
  }, [activeTab, isTransitioning]);

  useEffect(() => {
    if (slideIndex === marketingImages.length) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setSlideIndex(0);
        setTimeout(() => {
          setIsTransitioning(true);
        }, 50);
      }, 600);
      return () => clearTimeout(timeout);
    }
  }, [slideIndex, marketingImages.length]);

  const [spotEnabled, setSpotEnabled] = useState(false);
  const [spot, setSpot] = useState({ x: 0, y: 0 });
  const [radius, setRadius] = useState(120);
  const stageRef = useRef(null);

  const active = useMemo(() => {
    switch (activeTab) {
      case 'marketing':
        return {
          title: 'Marketing That Reaches Buyers',
          subtitle: 'Beautiful visuals, targeted ads, and strong listing strategy.',
          features: ['Professional photography', 'Social + digital campaigns', 'Listing optimization', 'Open house plan'],
        };
      case 'roi':
        return {
          title: 'ROI Consultation',
          subtitle: 'Know what to fix, what to skip, and what returns the most.',
          features: ['Budget planning', 'Project prioritization', 'Contractor coordination', 'Market comps support'],
        };
      case 'staging':
        return {
          title: 'Property Staging',
          subtitle: 'Make the first impression unforgettable.',
          features: ['Declutter + layout', 'Furniture recommendations', 'Light styling', 'Buyer-focused presentation'],
        };
      case 'interior':
      default:
        return {
          title: 'Before → After Renovation',
          subtitle: 'Hover the image to reveal the renovated result.',
          features: ['Design planning', 'Material selection', 'Contractor coordination', 'Finishing touches'],
        };
    }
  }, [activeTab]);

  const updateSpot = (clientX, clientY) => {
    const el = stageRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = Math.max(0, Math.min(rect.width, clientX - rect.left));
    const y = Math.max(0, Math.min(rect.height, clientY - rect.top));
    setSpot({ x, y });
  };

  return (
    <section className="services">
      <div className="services__container">
        <div className="services__header">
          <h2 className="services__heading">Services</h2>
          <p className="services__subhead">Comfortable and convenient upgrades for everyday living.</p>
        </div>

        <div className="services__tabs" role="tablist" aria-label="Services categories">
          {serviceTabs.map((t) => (
            <button
              key={t.id}
              type="button"
              role="tab"
              aria-selected={activeTab === t.id}
              className={`services__tab ${activeTab === t.id ? 'services__tab--active' : ''}`}
              onClick={() => setActiveTab(t.id)}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="services__content">
          <div className="services__stage">
            <div
              ref={stageRef}
              className="services__image-card"
              onMouseEnter={() => setSpotEnabled(true)}
              onMouseLeave={() => setSpotEnabled(false)}
              onMouseMove={(e) => updateSpot(e.clientX, e.clientY)}
              onTouchStart={(e) => {
                const t = e.touches?.[0];
                if (!t) return;
                setSpotEnabled(true);
                updateSpot(t.clientX, t.clientY);
              }}
              onTouchMove={(e) => {
                const t = e.touches?.[0];
                if (!t) return;
                updateSpot(t.clientX, t.clientY);
              }}
              onTouchEnd={() => setSpotEnabled(false)}
              style={{
                '--spot-x': `${spot.x}px`,
                '--spot-y': `${spot.y}px`,
                '--spot-r': `${radius}px`,
              }}
            >
              {activeTab === 'marketing' ? (
                <div className="services__slider">
                  <div
                    className="services__slider-track"
                    style={{
                      transform: `translateX(-${slideIndex * 100}%)`,
                      transition: isTransitioning
                        ? 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)'
                        : 'none',
                    }}
                  >
                    {displayImages.map((img, i) => (
                      <img key={i} src={img} alt={`Marketing ${i}`} className="services__slider-img" />
                    ))}
                  </div>
                </div>
              ) : activeTab === 'roi' ? (
                <RoiVisual />
              ) : activeTab === 'staging' ? (
                <StagingMoodBoard />
              ) : (
                <>
                  <img className="services__img services__img--before" src={beforeImg} alt="Before renovation" />
                  <img
                    className={`services__img services__img--after ${spotEnabled ? 'services__img--after-on' : ''}`}
                    src={afterImg}
                    alt="After renovation"
                  />
                  <div className={`services__spot ${spotEnabled ? 'services__spot--on' : ''}`} />
                </>
              )}

              <div className="services__info">
                <div className="services__info-title">{active.title}</div>
                <div className="services__info-sub">{active.subtitle}</div>
              </div>
            </div>

            {activeTab === 'interior' && (
              <div className="services__controls">
                <div className="services__control-label">Reveal size</div>
                <input
                  className="services__range"
                  type="range"
                  min={70}
                  max={220}
                  value={radius}
                  onChange={(e) => setRadius(Number(e.target.value))}
                  aria-label="Reveal circle size"
                />
              </div>
            )}
          </div>

          <aside className="services__panel">
            <h3 className="services__panel-title">{active.title}</h3>
            <p className="services__panel-desc">{active.subtitle}</p>

            <ul className="services__features" aria-label="Service features">
              {active.features.map((f) => (
                <li key={f} className="services__feature">
                  {f}
                </li>
              ))}
            </ul>

            <button type="button" className="services__cta">
              Learn more
            </button>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Services;
