import React from 'react'
import { useRevealAll } from '../hooks/useReveal'
import './Activities.css'

const activitiesData = [
  {
    category: 'Flagship Events',
    items: [
      {
        title: 'Annual Youth Summit',
        freq: 'Once a Year',
        description: 'Our flagship event bringing together thousands of young people, policymakers, NGOs, and private sector leaders for two days of inspiration, skill sharing, and strategic dialogue on youth development in Uganda.',
        highlights: ['Keynote speeches by national leaders', 'Skills exhibition and demonstration', 'Award ceremony for outstanding youth', 'Networking and partnership fair', 'Cultural performances and talent showcase'],
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
      },
      {
        title: 'Youth Talent Showcase',
        freq: 'Quarterly',
        description: 'Quarterly talent competitions where youth present their artistic, athletic, and innovative abilities to the public, judges, and potential sponsors. Winners access development grants and mentorship support.',
        highlights: ['Music, drama and dance performances', 'Fine art and craft exhibitions', 'Innovation and invention presentations', 'Sports competitions and demonstrations', 'Prizes and development grants'],
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
      },
    ],
  },
  {
    category: 'Community Activities',
    items: [
      {
        title: 'Community Clean-Up Drives',
        freq: 'Monthly',
        description: 'Organised monthly environmental action events where HFCU youth volunteers clean up public spaces, plant trees, and conduct environmental education in their communities.',
        highlights: ['Community waste management', 'Tree planting and greening', 'Environmental awareness talks', 'Youth volunteer recognition', 'Partner with local councils'],
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a1 1 0 011-1h4a1 1 0 011 1v2"/></svg>`,
      },
      {
        title: 'Health & Wellness Camps',
        freq: 'Bi-Monthly',
        description: 'Free community health camps offering medical check-ups, HIV testing and counselling, mental health support, family planning services, and health education facilitated by medical professionals.',
        highlights: ['Free medical consultations', 'HIV testing and counselling', 'Mental health awareness', 'Family planning services', 'Nutrition and wellness talks'],
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>`,
      },
      {
        title: 'Sports & Recreation Leagues',
        freq: 'Weekly',
        description: 'Regular structured sports leagues and recreational activities designed to promote teamwork, physical wellness, discipline, and healthy competition among youth across districts.',
        highlights: ['Football and netball leagues', 'Athletics and track events', 'Indoor games and chess', 'End-of-season tournaments', 'Sports coaching and development'],
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M4.93 4.93l4.24 4.24M14.83 9.17l4.24-4.24M14.83 14.83l4.24 4.24M9.17 14.83l-4.24 4.24"/></svg>`,
      },
    ],
  },
  {
    category: 'Education & Outreach',
    items: [
      {
        title: 'School Outreach Visits',
        freq: 'Weekly',
        description: 'Regular visits to secondary schools and tertiary institutions delivering career guidance, life skills sessions, motivational talks, and direct recruitment into HFCU programs.',
        highlights: ['Career guidance sessions', 'Life skills workshops', 'Program enrolment drives', 'Teacher and parent engagement', 'Resource distribution'],
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>`,
      },
      {
        title: 'Business & Finance Clinics',
        freq: 'Monthly',
        description: 'Practical business workshops covering bookkeeping, SACCO management, business planning, and guidance on accessing micro-finance — designed for youth entrepreneurs and aspiring ones.',
        highlights: ['Business plan development', 'Financial literacy training', 'SACCO formation and management', 'Micro-finance access guidance', 'Market linkage support'],
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>`,
      },
      {
        title: 'Digital Skills Bootcamps',
        freq: 'Quarterly',
        description: 'Intensive 5-day digital skills bootcamps covering computer literacy, social media for business, graphic design basics, digital marketing, and online income generation strategies.',
        highlights: ['Computer and internet basics', 'Social media for business', 'Graphic design fundamentals', 'Digital marketing basics', 'Online freelancing guidance'],
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
      },
      {
        title: 'Youth Leadership Dialogues',
        freq: 'Bi-Monthly',
        description: 'Structured dialogue forums bringing youth together with district leaders, policymakers, and community elders to discuss development priorities and amplify youth voices in governance.',
        highlights: ['Youth-government dialogue', 'Policy review discussions', 'Community needs presentation', 'Youth representation training', 'Action planning sessions'],
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>`,
      },
    ],
  },
]

export default function Activities() {
  useRevealAll()

  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <div className="section-label" style={{ justifyContent: 'center', color: 'rgba(255,255,255,0.6)' }}>Community Engagement</div>
          <h1>Our <em>Activities</em></h1>
          <p>Beyond formal programmes — a vibrant calendar of events, campaigns, and community activities that keep youth engaged, inspired, and connected year-round.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {activitiesData.map((cat, ci) => (
            <div className="act-category" key={ci}>
              <div className="act-category-header reveal">
                <div className="section-label">{cat.category}</div>
                <div className="act-cat-line"></div>
              </div>
              <div className="act-items">
                {cat.items.map((item, ii) => (
                  <div className="act-card reveal" key={ii} style={{ transitionDelay: `${ii * 0.1}s` }}>
                    <div className="act-card-left">
                      <div className="act-card-icon" dangerouslySetInnerHTML={{ __html: item.icon }} />
                      <div className="act-freq-badge">{item.freq}</div>
                    </div>
                    <div className="act-card-body">
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                      <div className="act-highlights">
                        <div className="highlights-label">Key Highlights</div>
                        <ul>
                          {item.highlights.map((h, hi) => (
                            <li key={hi}>
                              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                              {h}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
