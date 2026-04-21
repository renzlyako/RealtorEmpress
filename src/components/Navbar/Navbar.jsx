import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo1.png';

const navLinks = [
  { label: 'Home',         id: 'hero' },
  { label: 'About',        id: 'about' },
  { label: 'Services',     id: 'services' },
  { label: 'Projects',     id: 'projects' },
  { label: 'Testimonials', id: 'testimonials' },
];

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('Home');
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (e, link) => {
    e.preventDefault();
    setActiveLink(link.label);
    setMenuOpen(false);
    const target = document.getElementById(link.id);
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - 110;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">

      {/* Logo */}
      <div className="navbar__logo">
        <img src={logo} alt="Realtor Empress Logo" className="navbar__logo-img" />
      </div>

      {/* Desktop links */}
      <ul className="navbar__links">
        {navLinks.map((link) => (
          <li key={link.id} className="navbar__item">
            <a
              href={`#${link.id}`}
              className={`navbar__link ${activeLink === link.label ? 'navbar__link--active' : ''}`}
              onClick={(e) => handleClick(e, link)}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Desktop Contact button */}
      <button type="button" className="navbar__cta navbar__cta--desktop">
        Contact us
      </button>

      {/* Hamburger button — mobile only */}
      <button
        type="button"
        className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="navbar__mobile-menu">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`navbar__mobile-link ${activeLink === link.label ? 'navbar__mobile-link--active' : ''}`}
              onClick={(e) => handleClick(e, link)}
            >
              {link.label}
            </a>
          ))}
          <button type="button" className="navbar__cta navbar__cta--mobile">
            Contact us
          </button>
        </div>
      )}

    </nav>
  );
};

export default Navbar;