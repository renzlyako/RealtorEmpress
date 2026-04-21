import React, { useState } from 'react';
import './FAQ.css';

const FAQ_ITEMS = [
  {
    id: 1,
    question: 'How long does a typical renovation take?',
    answer: `Most projects take 3–8 weeks depending on scope. A kitchen refresh may take 2 weeks, while a full interior redesign can run 6–10 weeks. We'll give you a detailed timeline after our initial consultation.`,
  },
  {
    id: 2,
    question: 'Do you handle contractor coordination?',
    answer: `Yes — we manage all contractor relationships so you don't have to. We have a vetted network of tradespeople and handle scheduling, oversight, and quality checks on your behalf.`,
  },
  {
    id: 3,
    question: 'Is the initial consultation free?',
    answer: `Absolutely. Our first consultation is completely free of charge. We'll visit your property, assess the space, and walk you through the best options to maximize your sale price.`,
  },
  {
    id: 4,
    question: 'How do you determine which renovations are worth doing?',
    answer: `We use local market data and comparable sales to identify exactly which upgrades deliver the highest return. Not every renovation is worth it — we'll tell you what to skip and what to prioritize.`,
  },
  {
    id: 5,
    question: 'What areas do you currently serve?',
    answer: `We currently serve the greater metro area and surrounding suburbs. Contact us to check availability for your specific location — we're actively expanding our service area.`,
  },
  {
    id: 6,
    question: 'Can you work within a tight budget?',
    answer: `Yes. We work with all budget sizes and always prioritize high-impact, cost-effective changes. Even small improvements in staging and curb appeal can significantly increase your home's perceived value.`,
  },
  {
    id: 7,
    question: 'Do I need to move out during the renovation?',
    answer: `It depends on the scope of work. For minor updates, most clients stay in the home. For larger projects, we'll advise you on the best approach and work around your schedule wherever possible.`,
  },
];

const FAQItem = ({ item, isOpen, onToggle }) => (
  <div className={`faq__item ${isOpen ? 'faq__item--open' : ''}`}>
    <button
      className="faq__question"
      onClick={onToggle}
      aria-expanded={isOpen}
      aria-controls={`faq-answer-${item.id}`}
    >
      <span className="faq__question-text">{item.question}</span>
      <div className="faq__icon" aria-hidden="true">
        <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
          <line x1="6" y1="1" x2="6" y2="11" className="faq__icon-v" />
          <line x1="1" y1="6" x2="11" y2="6" />
        </svg>
      </div>
    </button>

    <div
      id={`faq-answer-${item.id}`}
      className="faq__answer"
      role="region"
      aria-hidden={!isOpen}
    >
      <p className="faq__answer-text">{item.answer}</p>
    </div>
  </div>
);

const FAQ = () => {
  const [openId, setOpenId] = useState(1);

  const handleToggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="faq">
      <div className="faq__container">

        {/* Header — matches Projects / Testimonials layout */}
        <div className="faq__header">
          <div className="faq__header-left">
            <h2 className="faq__heading">Frequently asked questions</h2>
            <p className="faq__subhead">
              Everything you need to know before getting started.
            </p>
          </div>
          <button type="button" className="faq__contact-btn">
            Ask us anything →
          </button>
        </div>

        {/* Accordion */}
        <div className="faq__list" role="list">
          {FAQ_ITEMS.map((item) => (
            <FAQItem
              key={item.id}
              item={item}
              isOpen={openId === item.id}
              onToggle={() => handleToggle(item.id)}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;