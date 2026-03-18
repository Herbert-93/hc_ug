import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

const navLinks = [
  { to: '/',           label: 'Home'       },
  { to: '/about',      label: 'About Us'   },
  { to: '/programs',   label: 'Programs'   },
  { to: '/activities', label: 'Activities' },
  { to: '/gallery',    label: 'Gallery'    },
  { to: '/contact',    label: 'Contact'    },
]

export default function Navbar() {
  const [scrolled,    setScrolled]    = useState(false)
  const [drawerOpen,  setDrawerOpen]  = useState(false)
  const location = useLocation()

  /* scroll listener */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* close drawer on route change */
  useEffect(() => {
    setDrawerOpen(false)
  }, [location.pathname])

  /* lock body scroll when drawer is open */
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [drawerOpen])

  const openDrawer  = () => setDrawerOpen(true)
  const closeDrawer = () => setDrawerOpen(false)

  return (
    <>
      {/* ========== NAVBAR BAR ========== */}
      <header className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="navbar-inner">

          {/* Logo */}
          <Link to="/" className="navbar-logo" onClick={closeDrawer}>
            <div className="logo-emblem">
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="19" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M20 8 L20 32 M12 14 L20 20 L28 14"
                      stroke="currentColor" strokeWidth="1.8"
                      strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="20" cy="8" r="2.5" fill="currentColor"/>
              </svg>
            </div>
            <div className="logo-text">
              <span className="logo-primary">Hope For Communities</span>
              <span className="logo-secondary">Uganda</span>
            </div>
          </Link>

          {/* Desktop links */}
          <nav className="navbar-nav" aria-label="Desktop navigation">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`nav-link${location.pathname === link.to ? ' active' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <Link to="/contact" className="navbar-cta btn-primary">
            <span>Get Involved</span>
          </Link>

          {/* ── Hamburger button (visible on mobile only) ── */}
          <button
            className={`hamburger${drawerOpen ? ' is-open' : ''}`}
            onClick={openDrawer}
            aria-label="Open navigation menu"
            aria-expanded={drawerOpen}
          >
            <span className="ham-bar" />
            <span className="ham-bar" />
            <span className="ham-bar" />
          </button>

        </div>
      </header>

      {/* ========== BACKDROP ========== */}
      <div
        className={`drawer-backdrop${drawerOpen ? ' is-visible' : ''}`}
        onClick={closeDrawer}
        aria-hidden="true"
      />

      {/* ========== SIDE DRAWER ========== */}
      <nav
        className={`side-drawer${drawerOpen ? ' is-open' : ''}`}
        aria-label="Mobile navigation"
        aria-hidden={!drawerOpen}
      >

        {/* Drawer top bar */}
        <div className="drawer-topbar">
          <div className="drawer-brand">
            <div className="drawer-brand-icon">
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="19" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M20 8 L20 32 M12 14 L20 20 L28 14"
                      stroke="currentColor" strokeWidth="1.8"
                      strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="20" cy="8" r="2.5" fill="currentColor"/>
              </svg>
            </div>
            <div className="drawer-brand-text">
              <span className="drawer-brand-name">Hope For Communities</span>
              <span className="drawer-brand-sub">Uganda</span>
            </div>
          </div>

          <button
            className="drawer-close-btn"
            onClick={closeDrawer}
            aria-label="Close navigation menu"
          >
            <svg viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" strokeWidth="2.5"
                 strokeLinecap="round">
              <line x1="18" y1="6"  x2="6"  y2="18"/>
              <line x1="6"  y1="6"  x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        {/* Divider */}
        <div className="drawer-divider" />

        {/* Nav links */}
        <ul className="drawer-links">
          {navLinks.map((link, i) => {
            const isActive = location.pathname === link.to
            return (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={`drawer-item${isActive ? ' is-active' : ''}`}
                  style={{ animationDelay: `${i * 0.06 + 0.05}s` }}
                  onClick={closeDrawer}
                >
                  <span className="drawer-item-label">{link.label}</span>
                  {isActive && <span className="drawer-active-dot" />}
                  <svg className="drawer-item-chevron"
                       viewBox="0 0 24 24" fill="none"
                       stroke="currentColor" strokeWidth="2">
                    <path d="M9 18l6-6-6-6"/>
                  </svg>
                </Link>
              </li>
            )
          })}
        </ul>

        {/* Divider */}
        <div className="drawer-divider" />

        {/* Footer area */}
        <div className="drawer-bottom">
          <Link to="/contact" className="btn-primary drawer-cta-btn" onClick={closeDrawer}>
            <span>Get Involved</span>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>

          <div className="drawer-phone">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M22 16.92v3a2 2 0 01-2.18 2
                       19.79 19.79 0 01-8.63-3.07
                       A19.5 19.5 0 014.11 12
                       19.79 19.79 0 011.04 3.33
                       A2 2 0 013.11 1h3
                       a2 2 0 012 1.72
                       c.127.96.361 1.903.7 2.81
                       a2 2 0 01-.45 2.11L8.09 8.91
                       a16 16 0 006 6
                       l1.27-1.27
                       a2 2 0 012.11-.45
                       c.907.339 1.85.573 2.81.7
                       A2 2 0 0122 16.92z"/>
            </svg>
            <span>+256 700 000 000</span>
          </div>

          <p className="drawer-tagline">Empowering Uganda's Youth</p>
        </div>

      </nav>
    </>
  )
}