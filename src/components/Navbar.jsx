import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/programs', label: 'Programs' },
  { to: '/activities', label: 'Activities' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setDrawerOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [drawerOpen])

  return (
    <>
      <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-inner">

          {/* Logo */}
          <Link to="/" className="navbar-logo">
            <div className="logo-emblem">
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="19" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M20 8 L20 32 M12 14 L20 20 L28 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="20" cy="8" r="2.5" fill="currentColor"/>
              </svg>
            </div>
            <div className="logo-text">
              <span className="logo-primary">Hope For Communities</span>
              <span className="logo-secondary">Uganda</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="navbar-nav">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`nav-link ${location.pathname === link.to ? 'active' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <Link to="/contact" className="navbar-cta btn-primary">
            <span>Get Involved</span>
          </Link>

          {/* Hamburger */}
          <button
            className={`menu-toggle ${drawerOpen ? 'open' : ''}`}
            onClick={() => setDrawerOpen(!drawerOpen)}
            aria-label="Toggle navigation menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* ===== SIDE DRAWER BACKDROP ===== */}
      <div
        className={`drawer-backdrop ${drawerOpen ? 'visible' : ''}`}
        onClick={() => setDrawerOpen(false)}
        aria-hidden="true"
      />

      {/* ===== SIDE DRAWER ===== */}
      <aside className={`side-drawer ${drawerOpen ? 'open' : ''}`} aria-label="Mobile navigation">

        {/* Drawer Header */}
        <div className="drawer-header">
          <div className="drawer-logo">
            <div className="drawer-logo-emblem">
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="19" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M20 8 L20 32 M12 14 L20 20 L28 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="20" cy="8" r="2.5" fill="currentColor"/>
              </svg>
            </div>
            <div className="drawer-logo-text">
              <span className="drawer-logo-primary">Hope For Communities</span>
              <span className="drawer-logo-secondary">Uganda</span>
            </div>
          </div>
          <button
            className="drawer-close"
            onClick={() => setDrawerOpen(false)}
            aria-label="Close menu"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        {/* Drawer Nav Links */}
        <nav className="drawer-nav">
          {navLinks.map((link, i) => (
            <Link
              key={link.to}
              to={link.to}
              className={`drawer-link ${location.pathname === link.to ? 'active' : ''}`}
              style={{ '--i': i }}
            >
              <span className="drawer-link-text">{link.label}</span>
              {location.pathname === link.to && (
                <div className="drawer-link-indicator" />
              )}
              <svg className="drawer-link-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          ))}
        </nav>

        {/* Drawer CTA */}
        <div className="drawer-footer">
          <Link
            to="/contact"
            className="drawer-cta btn-primary"
            onClick={() => setDrawerOpen(false)}
          >
            <span>Get Involved</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
          <div className="drawer-contact-snippet">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.11 12a19.79 19.79 0 01-3.07-8.67A2 2 0 013.11 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
            </svg>
            <span>+256 700 000 000</span>
          </div>
          <div className="drawer-tagline">Empowering Uganda's Youth</div>
        </div>

      </aside>
    </>
  )
}