import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useRevealAll } from '../hooks/useReveal'
import './Programs.css'

const allPrograms = [
  {
    id: 1,
    category: 'Vocational',
    title: 'Youth Vocational Training',
    tagline: 'Hands-on Skills for a Better Future',
    description: 'Our flagship vocational training program equips young people aged 15–35 with practical, marketable trade skills. Delivered in partnership with certified training institutions, the program runs over 3–6 months and covers both theory and on-the-job practice.',
    objectives: [
      'Train 500+ youth per year in certified vocational trades',
      'Achieve 80%+ employment or self-employment rate among graduates',
      'Partner with 20+ industries for apprenticeships and job placements',
      'Provide tool kits and starter materials to graduates',
    ],
    trades: ['Carpentry & Joinery', 'Tailoring & Fashion Design', 'Plumbing & Sanitation', 'Electrical Installation', 'Motor Vehicle Mechanics', 'Bricklaying & Construction', 'Hairdressing & Beauty', 'Welding & Metal Fabrication'],
    duration: '3–6 Months',
    beneficiaries: '15–35 Years',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>`,
  },
  {
    id: 2,
    category: 'Talent',
    title: 'Talent Discovery & Development',
    tagline: 'Every Gift Deserves a Stage',
    description: 'We believe every young Ugandan has a unique gift. Our talent program identifies, nurtures, and creates platforms for youth to showcase their artistic, athletic, and innovative abilities — turning passion into livelihood.',
    objectives: [
      'Identify and enrol 300+ talented youth per year across disciplines',
      'Host quarterly talent showcases in partnering communities',
      'Connect talented youth with professional mentors and coaches',
      'Support 50+ youth per year to monetise their talents',
    ],
    trades: ['Performing Arts & Drama', 'Music & Vocal Training', 'Fine Art & Visual Design', 'Dance & Choreography', 'Athletics & Sport', 'Creative Writing', 'Photography & Film', 'Innovation & Invention'],
    duration: 'Ongoing Cohorts',
    beneficiaries: '13–30 Years',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
  },
  {
    id: 3,
    category: 'Skilling',
    title: 'Youth Skilling Initiative',
    tagline: 'Preparing Youth for the Modern Economy',
    description: 'Beyond trade skills, our skilling initiative addresses the full spectrum of competencies youth need — from entrepreneurship and digital literacy to financial management, communication, and personal leadership.',
    objectives: [
      'Train 1,000+ youth per year in life and business skills',
      'Achieve 70%+ improvement in financial literacy scores',
      'Support 100+ youth to access micro-finance each year',
      'Build a network of 200+ youth entrepreneurs across Uganda',
    ],
    trades: ['Entrepreneurship Fundamentals', 'Digital Literacy & ICT', 'Financial Management & SACCOs', 'Communication & Public Speaking', 'Business Planning & Marketing', 'Leadership & Team Management', 'Problem-Solving & Innovation', 'Job Readiness & CV Writing'],
    duration: '4–8 Weeks',
    beneficiaries: '16–35 Years',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 20h.01M7 20v-4M12 20v-8M17 20V8M22 4l-5 5-4-4-6 6"/></svg>`,
  },
  {
    id: 4,
    category: 'Sensitization',
    title: 'Community Sensitization Campaigns',
    tagline: 'Informed Youth, Stronger Communities',
    description: 'Our sensitization campaigns take critical awareness programmes directly to communities — covering reproductive health, civic rights, environmental stewardship, anti-corruption, and social responsibility.',
    objectives: [
      'Reach 50,000+ community members per year with awareness messages',
      'Conduct quarterly campaigns in all 12 operational districts',
      'Partner with health, legal, and civic institutions for expert input',
      'Reduce teenage pregnancy and school dropout rates in target areas',
    ],
    trades: ['Reproductive Health & Family Planning', 'HIV/AIDS Prevention & Testing', 'Civic Rights & Responsibilities', 'Environmental Conservation', 'Anti-Corruption & Integrity', 'Gender-Based Violence Prevention', 'Mental Health Awareness', 'Drug & Substance Abuse Prevention'],
    duration: 'Year-Round',
    beneficiaries: 'All Ages',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>`,
  },
  {
    id: 5,
    category: 'Mentorship',
    title: 'Mentorship & Leadership Program',
    tagline: 'Building Tomorrow\'s Leaders Today',
    description: 'We connect young people with experienced professionals, community leaders, and successful entrepreneurs who guide, inspire, and model excellence. Our structured mentorship builds both competence and character.',
    objectives: [
      'Match 200+ youth with qualified mentors per year',
      'Run monthly mentorship sessions and leadership clinics',
      'Create a pipeline of 50+ youth leaders for community roles',
      'Establish a HFCU Young Leaders alumni network',
    ],
    trades: ['One-on-One Mentorship', 'Group Leadership Clinics', 'Career Guidance & Counselling', 'Professional Networking Events', 'Public Policy & Advocacy', 'Community Leadership Roles', 'Scholarship & Bursary Support', 'Alumni Network Engagement'],
    duration: '6–12 Months',
    beneficiaries: '18–30 Years',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>`,
  },
  {
    id: 6,
    category: 'Outreach',
    title: 'Community Outreach Program',
    tagline: 'Taking Hope to Every Corner of Uganda',
    description: 'Our outreach teams go where the need is greatest — to villages, schools, churches, and urban centres — carrying HFCU\'s programs and services directly to those who may not otherwise access them.',
    objectives: [
      'Conduct monthly outreach visits in all 12 districts',
      'Enrol 300+ new program participants per outreach cycle',
      'Engage local leaders, schools, and churches as partners',
      'Document and share community success stories and needs',
    ],
    trades: ['Village & Community Visits', 'School Career Fairs', 'Church & Faith Community Engagement', 'Markets & Trade Events', 'District Youth Dialogues', 'Partner Referral Services', 'Beneficiary Follow-up Visits', 'Community Needs Assessments'],
    duration: 'Monthly',
    beneficiaries: 'All Communities',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
  },
]

export default function Programs() {
  useRevealAll()
  const [activeId, setActiveId] = useState(null)

  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <div className="section-label" style={{ justifyContent: 'center', color: 'rgba(255,255,255,0.6)' }}>What We Offer</div>
          <h1>Our <em>Programs</em></h1>
          <p>Six comprehensive programs designed to transform every dimension of a young person's life — from skills to character, talent to leadership.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="programs-list">
            {allPrograms.map((prog, i) => (
              <div className={`program-detail-card reveal ${activeId === prog.id ? 'expanded' : ''}`} key={prog.id}>
                <div className="pdc-header" onClick={() => setActiveId(activeId === prog.id ? null : prog.id)}>
                  <div className="pdc-left">
                    <div className="pdc-icon" dangerouslySetInnerHTML={{ __html: prog.icon }} />
                    <div>
                      <div className="pdc-category">{prog.category}</div>
                      <h3>{prog.title}</h3>
                      <p className="pdc-tagline">{prog.tagline}</p>
                    </div>
                  </div>
                  <div className="pdc-meta">
                    <div className="pdc-meta-item">
                      <span className="meta-label">Duration</span>
                      <span className="meta-value">{prog.duration}</span>
                    </div>
                    <div className="pdc-meta-item">
                      <span className="meta-label">Target</span>
                      <span className="meta-value">{prog.beneficiaries}</span>
                    </div>
                    <div className={`pdc-toggle ${activeId === prog.id ? 'open' : ''}`}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>
                    </div>
                  </div>
                </div>

                <div className="pdc-body">
                  <div className="pdc-body-inner">
                    <div className="pdc-description">
                      <h4>About This Program</h4>
                      <p>{prog.description}</p>
                    </div>
                    <div className="pdc-objectives">
                      <h4>Key Objectives</h4>
                      <ul>
                        {prog.objectives.map((obj, j) => (
                          <li key={j}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                            {obj}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="pdc-trades">
                      <h4>Focus Areas</h4>
                      <div className="trades-grid">
                        {prog.trades.map((t, j) => (
                          <span className="trade-tag" key={j}>{t}</span>
                        ))}
                      </div>
                    </div>
                    <Link to="/contact" className="btn-primary pdc-apply-btn">
                      <span>Apply / Enquire</span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="enrol-cta reveal">
        <div className="container">
          <div className="enrol-cta-inner">
            <h2>Ready to <em>Enrol?</em></h2>
            <p>All our programs are free or heavily subsidised. Contact us to find out how you or someone you know can benefit.</p>
            <Link to="/contact" className="btn-primary">
              <span>Contact Us Today</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
