import React from 'react'
import { Link } from 'react-router-dom'
import { useRevealAll } from '../hooks/useReveal'
import './About.css'

export default function About() {
  useRevealAll()

  return (
    <main>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="section-label" style={{ justifyContent: 'center', color: 'rgba(255,255,255,0.6)' }}>
            Our Story
          </div>
          <h1>About <em>Hope For Communities</em> Uganda</h1>
          <p>Rooted in compassion, driven by purpose — a decade of transforming Uganda's youth landscape.</p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section">
        <div className="container">
          <div className="about-story-grid">
            <div className="reveal-left">
              <div className="section-label">Our Foundation</div>
              <h2>Born From a <em>Shared Dream</em></h2>
              <p>
                Hope For Communities Uganda (HFCU) was founded with a singular conviction: that every young person in Uganda — regardless of background, region, or circumstance — possesses unique potential that, when properly nurtured, can transform not only their own life but their entire community.
              </p>
              <p>
                What began as a small grassroots initiative in Kampala has grown into a structured, impactful NGO serving thousands of youth across more than a dozen Ugandan districts. We remain deeply rooted in the communities we serve, led by people who understand the challenges and the immense possibilities that Uganda's youth represent.
              </p>
              <p>
                Our approach is holistic — addressing skills, character, health, civic awareness, and economic opportunity — because we know that lasting transformation comes from attending to the whole person.
              </p>
            </div>
            <div className="about-story-visual reveal-right">
              <div className="story-card story-card-1">
                <div className="story-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                </div>
                <h4>Integrity First</h4>
                <p>We hold ourselves to the highest standards of transparency and accountability in everything we do.</p>
              </div>
              <div className="story-card story-card-2">
                <div className="story-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>
                </div>
                <h4>Community-Centred</h4>
                <p>All programs are co-designed with communities to ensure relevance, ownership, and sustainability.</p>
              </div>
              <div className="story-card story-card-3">
                <div className="story-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01"/></svg>
                </div>
                <h4>Youth-Led Culture</h4>
                <p>Young people are not just beneficiaries — they are active leaders, trainers, and champions within HFCU.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Vision Values */}
      <section className="section mvv-section">
        <div className="container">
          <div className="section-header reveal">
            <div className="section-label">Our Purpose</div>
            <h2>Mission, Vision &amp; <em>Values</em></h2>
          </div>
          <div className="mvv-grid stagger-children">
            <div className="mvv-card">
              <div className="mvv-number">01</div>
              <div className="mvv-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <h3>Mission</h3>
              <p>
                To empower Uganda's youth through comprehensive vocational training, talent discovery, practical life skilling, and community-based sensitization programmes that enable them to lead purposeful, productive, and dignified lives.
              </p>
            </div>
            <div className="mvv-card featured">
              <div className="mvv-number">02</div>
              <div className="mvv-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
              </div>
              <h3>Vision</h3>
              <p>
                A Uganda where every young person is fully equipped, deeply empowered, and passionately inspired to transform their family, community, and nation through excellence in skills, character, and service.
              </p>
            </div>
            <div className="mvv-card">
              <div className="mvv-number">03</div>
              <div className="mvv-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              </div>
              <h3>Values</h3>
              <p>
                We are guided by <strong>Integrity</strong>, <strong>Dignity</strong>, <strong>Inclusion</strong>, <strong>Excellence</strong>, <strong>Community</strong>, and <strong>Hope</strong> — principles that anchor every decision, program, and relationship we build.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section team-section">
        <div className="container">
          <div className="section-header reveal">
            <div className="section-label">The People</div>
            <h2>Meet Our <em>Leadership Team</em></h2>
            <p className="section-desc">Passionate individuals united by a shared commitment to Uganda's youth and communities.</p>
          </div>
          <div className="team-grid stagger-children">
            {teamMembers.map((member, i) => (
              <div className="team-card" key={i}>
                <div className="team-avatar" style={{ background: member.color }}>
                  <span>{member.initials}</span>
                </div>
                <div className="team-info">
                  <h4>{member.name}</h4>
                  <div className="team-role">{member.role}</div>
                  <p>{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="section partners-section">
        <div className="container">
          <div className="section-header reveal">
            <div className="section-label">Collaboration</div>
            <h2>Our Partners &amp; <em>Supporters</em></h2>
            <p className="section-desc">We work alongside government bodies, civil society, private sector, and international organisations.</p>
          </div>
          <div className="partners-grid stagger-children">
            {partners.map((p, i) => (
              <div className="partner-item" key={i}>
                <div className="partner-icon" dangerouslySetInnerHTML={{ __html: p.icon }} />
                <div className="partner-name">{p.name}</div>
                <div className="partner-type">{p.type}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta reveal">
        <div className="container">
          <div className="about-cta-inner">
            <h2>Join Our <em>Movement</em></h2>
            <p>Whether you're a youth seeking opportunity, an organisation wanting to partner, or an individual wishing to volunteer — there's a place for you at HFCU.</p>
            <Link to="/contact" className="btn-primary">
              <span>Get In Touch</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

const teamMembers = [
  { name: 'Dr. Grace Nakato', role: 'Executive Director', initials: 'GN', color: 'linear-gradient(135deg, #1B4332, #2D6A4F)', bio: 'A youth development specialist with 15+ years experience in community empowerment across East Africa.' },
  { name: 'Mr. David Ssekandi', role: 'Programs Director', initials: 'DS', color: 'linear-gradient(135deg, #2D6A4F, #40916C)', bio: 'Vocational training expert who has designed and implemented skills programs for over 1,000 youth.' },
  { name: 'Ms. Prossy Nalwoga', role: 'Community Relations Manager', initials: 'PN', color: 'linear-gradient(135deg, #C9A84C, #B8962E)', bio: 'Passionate advocate who coordinates HFCU\'s outreach activities across 12 districts of Uganda.' },
  { name: 'Mr. Brian Mugisha', role: 'Finance & Administration', initials: 'BM', color: 'linear-gradient(135deg, #0D2818, #1B4332)', bio: 'Certified accountant ensuring transparency and accountability in all HFCU financial operations.' },
]

const partners = [
  { name: 'Ministry of Gender', type: 'Government', icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/></svg>` },
  { name: 'UNICEF Uganda', type: 'International', icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>` },
  { name: 'Uganda Youth Network', type: 'Civil Society', icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>` },
  { name: 'National Youth Council', type: 'Government', icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"/></svg>` },
  { name: 'Private Sector Foundation', type: 'Private Sector', icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>` },
  { name: 'GIZ Uganda', type: 'International', icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>` },
]
