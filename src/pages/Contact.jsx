import React, { useState } from 'react'
import { useRevealAll } from '../hooks/useReveal'
import './Contact.css'

export default function Contact() {
  useRevealAll()
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '', interest: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1200)
  }

  return (
    <main>
      <section className="page-hero">
        <div className="page-hero-photo">
          <img src="https://images.pexels.com/photos/28100865/pexels-photo-28100865.jpeg?auto=compress&cs=tinysrgb&w=1400" alt="Contact Hope For Communities Uganda" loading="eager" />
        </div>
        <div className="page-hero-overlay" />
        <div className="container page-hero-content">
          <div className="section-label" style={{ justifyContent: 'center', color: 'rgba(255,255,255,0.6)' }}>Reach Out</div>
          <h1>Contact <em>Us</em></h1>
          <p>We'd love to hear from you — whether you're a youth seeking a program, a partner organisation, or a donor who wants to make a difference.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-grid">

            {/* Left: Info */}
            <div className="contact-info reveal-left">
              <div className="section-label">Get In Touch</div>
              <h2>Let's <em>Connect</em></h2>
              <p className="contact-intro">
                Whether you wish to enrol in a program, volunteer, partner with us, or simply learn more about Hope For Communities Uganda, we are here to assist you.
              </p>

              <div className="contact-details">
                {contactDetails.map((d, i) => (
                  <div className="contact-detail-item" key={i}>
                    <div className="cd-icon" dangerouslySetInnerHTML={{ __html: d.icon }} />
                    <div>
                      <div className="cd-label">{d.label}</div>
                      <div className="cd-value">{d.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="contact-hours">
                <h4>Office Hours</h4>
                <div className="hours-grid">
                  <div className="hours-item">
                    <span>Monday – Friday</span>
                    <span>8:00 AM – 5:00 PM</span>
                  </div>
                  <div className="hours-item">
                    <span>Saturday</span>
                    <span>9:00 AM – 1:00 PM</span>
                  </div>
                  <div className="hours-item">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>

              <div className="contact-ways">
                <h4>How You Can Help</h4>
                <div className="ways-grid stagger-children">
                  {ways.map((w, i) => (
                    <div className="way-item" key={i}>
                      <div className="way-icon" dangerouslySetInnerHTML={{ __html: w.icon }} />
                      <div>
                        <div className="way-title">{w.title}</div>
                        <div className="way-desc">{w.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="contact-form-wrap reveal-right">
              {submitted ? (
                <div className="form-success">
                  <div className="success-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <h3>Message Received!</h3>
                  <p>Thank you for reaching out. A member of the HFCU team will get back to you within 24–48 hours.</p>
                  <button className="btn-primary" onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', subject: '', message: '', interest: '' }) }}>
                    <span>Send Another Message</span>
                  </button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit} noValidate>
                  <h3>Send Us a Message</h3>
                  <p className="form-subtitle">All fields marked * are required.</p>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        placeholder="Your full name"
                        value={form.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder="Your email address"
                        value={form.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="+256 700 000 000"
                        value={form.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="interest">Area of Interest *</label>
                      <select
                        id="interest"
                        name="interest"
                        required
                        value={form.interest}
                        onChange={handleChange}
                      >
                        <option value="">Select an option</option>
                        <option value="enrol">Enrol in a Program</option>
                        <option value="volunteer">Volunteer</option>
                        <option value="partner">Partnership / Collaboration</option>
                        <option value="donate">Donation / Funding</option>
                        <option value="media">Media / Press Enquiry</option>
                        <option value="general">General Enquiry</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Subject *</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      placeholder="What is your message about?"
                      value={form.subject}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Your Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell us how we can help you..."
                      value={form.message}
                      onChange={handleChange}
                    />
                  </div>

                  <button type="submit" className="btn-primary form-submit" disabled={loading}>
                    <span>{loading ? 'Sending...' : 'Send Message'}</span>
                    {!loading && (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                    )}
                    {loading && (
                      <div className="spinner"></div>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="map-section reveal">
        <div className="map-placeholder">
          <div className="map-overlay">
            <div className="map-pin">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <div className="map-label">
              <strong>Hope For Communities Uganda</strong>
              <span>Plot 14, Kampala Road, Kampala</span>
            </div>
          </div>
          <div className="map-bg-pattern">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="map-bg-line"></div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

const contactDetails = [
  {
    label: 'Visit Us',
    value: 'Plot 14, Kampala Road, Kampala, Uganda',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
  },
  {
    label: 'Call Us',
    value: '+256 700 000 000 / +256 780 000 000',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.11 12a19.79 19.79 0 01-3.07-8.67A2 2 0 013.11 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>`,
  },
  {
    label: 'Email Us',
    value: 'info@hopeforcommunitiesug.org',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
  },
  {
    label: 'Social Media',
    value: '@HopeForCommunitiesUG on all platforms',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>`,
  },
]

const ways = [
  {
    title: 'Volunteer',
    desc: 'Give your time and skills to transform lives',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>`,
  },
  {
    title: 'Donate',
    desc: 'Fund skills training and youth empowerment',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>`,
  },
  {
    title: 'Partner',
    desc: 'Collaborate on programs and joint initiatives',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>`,
  },
  {
    title: 'Mentor',
    desc: 'Guide and inspire Uganda\'s next generation',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>`,
  },
]