import React from 'react';
import './Footer.css';

const SERVICES = [
  { label: 'Interior Redesign', href: '#services' },
  { label: 'Marketing',         href: '#services' },
  { label: 'ROI Consultation',  href: '#services' },
  { label: 'Property Staging',  href: '#services' },
];

const COMPANY = [
  { label: 'About',        href: '#about' },
  { label: 'Projects',     href: '#projects' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ',          href: '#faq' },
];

const CONTACT = [
  'hello@realtarempress.com',
  '+1 (555) 000-1234',
  'Seattle, WA',
];

const SOCIALS = [
  {
    label: 'Facebook',
    href: 'https://facebook.com',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: 'TikTok',
    href: 'https://tiktok.com',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.17 8.17 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: 'https://youtube.com',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
        <polygon fill="#0d2f4f" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
      </svg>
    ),
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">

        {/* ── TOP: 4 columns ── */}
        <div className="footer__top">

          {/* Col 1 — Brand + description + socials */}
          <div className="footer__col footer__col--brand">
            <div className="footer__brand-name">Realtor Empress</div>
            <p className="footer__brand-desc">
              We help homeowners sell smarter and faster with expert staging,
              interior design, and proven marketing strategy.
            </p>
            <div className="footer__socials">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="footer__social"
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 — Services */}
          <div className="footer__col">
            <div className="footer__col-title">Services</div>
            {SERVICES.map((s) => (
              <a key={s.label} href={s.href} className="footer__link">{s.label}</a>
            ))}
          </div>

          {/* Col 3 — Company */}
          <div className="footer__col">
            <div className="footer__col-title">Company</div>
            {COMPANY.map((c) => (
              <a key={c.label} href={c.href} className="footer__link">{c.label}</a>
            ))}
          </div>

          {/* Col 4 — Contact */}
          <div className="footer__col">
            <div className="footer__col-title">Contact</div>
            {CONTACT.map((c) => (
              <span key={c} className="footer__link footer__link--plain">{c}</span>
            ))}
          </div>

        </div>

        {/* ── DIVIDER ── */}
        <div className="footer__divider" />

        {/* ── BOTTOM: copyright + badge ── */}
        <div className="footer__bottom">
          <span className="footer__copy">
            © {new Date().getFullYear()} Realtor Empress. All rights reserved.
          </span>
          <div className="footer__legal">
            <a href="#privacy" className="footer__legal-link">Privacy Policy</a>
            <a href="#terms"   className="footer__legal-link">Terms of Service</a>
          </div>
          <span className="footer__badge">Licensed Real Estate Professional</span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
