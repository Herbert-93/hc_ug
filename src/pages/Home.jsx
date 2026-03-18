import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useRevealAll } from '../hooks/useReveal'
import './Home.css'

/* ---- Animated Counter ---- */
function Counter({ end, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        const start = performance.now()
        const tick = (now) => {
          const progress = Math.min((now - start) / duration, 1)
          const ease = 1 - Math.pow(1 - progress, 3)
          setCount(Math.round(ease * end))
          if (progress < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      }
    }, { threshold: 0.3 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [end, duration])

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>
}

export default function Home() {
  useRevealAll()

  return (
    <main>

      {/* ===== HERO ===== */}
      <section className="hero">
        {/* Real photo background */}
        <div className="hero-photo">
          <img
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1600&q=80"
            alt="Young people in Uganda gathered together"
            loading="eager"
          />
        </div>
        <div className="hero-overlay" />

        <div className="container hero-content">
          <div className="hero-eyebrow reveal">
            <span className="eyebrow-line" />
            <span>Established in Kampala, Uganda</span>
          </div>

          <h1 className="hero-title reveal" style={{ transitionDelay: '0.1s' }}>
            <em>Igniting Hope,</em><br />
            Transforming<br />
            <span className="hero-highlight">Communities</span>
          </h1>

          <p className="hero-description reveal" style={{ transitionDelay: '0.2s' }}>
            We empower Uganda's youth through vocational training, talent development,
            skills acquisition, and community sensitization — building a generation
            ready to lead with purpose and dignity.
          </p>

          <div className="hero-actions reveal" style={{ transitionDelay: '0.3s' }}>
            <Link to="/programs" className="btn-primary">
              <span>Explore Programs</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
            <Link to="/about" className="btn-outline">
              <span>Our Story</span>
            </Link>
          </div>

          <div className="hero-stats reveal" style={{ transitionDelay: '0.4s' }}>
            <div className="hero-stat">
              <div className="stat-number"><Counter end={2500} suffix="+" /></div>
              <div className="stat-label">Youth Empowered</div>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <div className="stat-number"><Counter end={12} /></div>
              <div className="stat-label">Districts Reached</div>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <div className="stat-number"><Counter end={8} /></div>
              <div className="stat-label">Core Programs</div>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <div className="stat-number"><Counter end={95} suffix="%" /></div>
              <div className="stat-label">Success Rate</div>
            </div>
          </div>
        </div>

        <div className="hero-scroll-indicator">
          <div className="scroll-dot" />
        </div>
      </section>

      {/* ===== MISSION / VISION ===== */}
      <section className="section mv-section">
        <div className="container">
          <div className="mv-grid">

            {/* Photo side */}
            <div className="mv-visual reveal-left">
              <div className="mv-photo-wrap">
                <img
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80"
                  alt="Youth empowerment in Uganda"
                  loading="lazy"
                />
                <div className="mv-photo-badge">
                  <div className="mv-badge-num"><Counter end={10} suffix="+" /></div>
                  <div className="mv-badge-label">Years of Impact</div>
                </div>
                <div className="mv-photo-quote">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
                  <p>Every young person in Uganda deserves a chance to discover their potential.</p>
                </div>
              </div>
            </div>

            {/* Content side */}
            <div className="mv-content reveal-right">
              <div className="section-label">Who We Are</div>
              <h2>A Legacy of <em>Hope</em> &amp; Empowerment</h2>
              <p className="mv-intro">
                Hope For Communities Uganda (HFCU) is a registered non-governmental organisation
                committed to the holistic development of young people across Uganda.
              </p>

              <div className="mv-cards stagger-children">
                <div className="mv-card mission">
                  <div className="mv-card-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  </div>
                  <div>
                    <h4>Our Mission</h4>
                    <p>To empower Uganda's youth through comprehensive training, talent discovery, practical skilling, and community-based sensitization, enabling them to lead purposeful, productive lives.</p>
                  </div>
                </div>

                <div className="mv-card vision">
                  <div className="mv-card-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
                  </div>
                  <div>
                    <h4>Our Vision</h4>
                    <p>A Uganda where every young person is equipped, empowered, and inspired to transform their community and nation through skills, character, and service.</p>
                  </div>
                </div>

                <div className="mv-card values">
                  <div className="mv-card-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
                  </div>
                  <div>
                    <h4>Core Values</h4>
                    <p>Integrity, Dignity, Inclusion, Excellence, Community, and Hope — the pillars that guide every program, every interaction, and every life we touch.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROGRAMS ===== */}
      <section className="section programs-section">
        <div className="container">
          <div className="section-header reveal">
            <div className="section-label">What We Do</div>
            <h2>Our <em>Core Programs</em></h2>
            <p className="section-desc">
              Tailored interventions designed to address the diverse needs of Uganda's youth population —
              from skills to confidence, talent to purpose.
            </p>
          </div>

          <div className="programs-grid stagger-children">
            {programs.map((p, i) => (
              <div className="program-card" key={i}>
                <div className="program-icon-wrap">
                  <div className="program-icon" dangerouslySetInnerHTML={{ __html: p.icon }} />
                </div>
                <div className="program-number">{String(i + 1).padStart(2, '0')}</div>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <Link to="/programs" className="program-link">
                  Learn More
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </Link>
              </div>
            ))}
          </div>

          <div className="programs-cta reveal">
            <Link to="/programs" className="btn-primary">
              <span>View All Programs</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== IMPACT PHOTO STRIP ===== */}
      <section className="photo-strip reveal">
        <div className="photo-strip-inner">
          {photoStrip.map((p, i) => (
            <div className="strip-photo" key={i}>
              <img src={p.src} alt={p.alt} loading="lazy" />
              <div className="strip-photo-overlay">
                <span>{p.label}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== IMPACT STATS ===== */}
      <section className="impact-section">
        <div className="impact-bg" />
        <div className="container">
          <div className="impact-header reveal">
            <div className="section-label" style={{ color: 'rgba(255,255,255,0.7)' }}>Our Impact</div>
            <h2 style={{ color: 'var(--white)' }}>Numbers That <em>Matter</em></h2>
          </div>
          <div className="impact-grid stagger-children">
            {stats.map((s, i) => (
              <div className="impact-stat" key={i}>
                <div className="impact-icon" dangerouslySetInnerHTML={{ __html: s.icon }} />
                <div className="impact-number">
                  <Counter end={s.value} suffix={s.suffix} />
                </div>
                <div className="impact-label">{s.label}</div>
                <div className="impact-desc">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== OBJECTIVES ===== */}
      <section className="section objectives-section">
        <div className="container">
          <div className="objectives-grid">
            <div className="objectives-left reveal-left">
              <div className="section-label">Our Objectives</div>
              <h2>What We <em>Strive</em> to Achieve</h2>
              <p>
                Every program and activity at HFCU is anchored to clear, measurable objectives
                that drive sustainable transformation in the lives of Uganda's youth.
              </p>

              {/* Photo under the text */}
              <div className="objectives-photo reveal">
                <img
                  src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=700&q=80"
                  alt="HFCU community members smiling together"
                  loading="lazy"
                />
              </div>

              <Link to="/about" className="btn-primary" style={{ marginTop: '1.5rem' }}>
                <span>About Our Work</span>
              </Link>
            </div>
            <div className="objectives-right stagger-children">
              {objectives.map((obj, i) => (
                <div className="objective-item" key={i}>
                  <div className="objective-num">{String(i + 1).padStart(2, '0')}</div>
                  <div>
                    <h4>{obj.title}</h4>
                    <p>{obj.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== ACTIVITIES ===== */}
      <section className="section activities-section">
        <div className="container">
          <div className="section-header reveal">
            <div className="section-label">Community Engagement</div>
            <h2>Key <em>Activities</em> We Run</h2>
            <p className="section-desc">
              Beyond our core programs, we host vibrant community activities that bring together youth,
              families, and leaders across Uganda.
            </p>
          </div>
          <div className="activities-grid stagger-children">
            {activities.map((act, i) => (
              <div className="activity-card" key={i}>
                <div className="activity-icon" dangerouslySetInnerHTML={{ __html: act.icon }} />
                <h4>{act.title}</h4>
                <p>{act.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className="cta-banner">
        <div className="cta-photo">
          <img
            src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=1400&q=80"
            alt="Community gathering"
            loading="lazy"
          />
        </div>
        <div className="cta-overlay" />
        <div className="container cta-inner reveal">
          <div className="cta-text">
            <h2>Ready to Make a <em>Difference?</em></h2>
            <p>Join us in shaping the future of Uganda's youth. Whether as a volunteer, partner, or donor — your contribution transforms lives.</p>
          </div>
          <div className="cta-actions">
            <Link to="/contact" className="btn-primary">
              <span>Partner With Us</span>
            </Link>
            <Link to="/programs" className="btn-outline">
              <span>Explore Programs</span>
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}

/* ---- Data ---- */
const photoStrip = [
  { src: 'https://images.unsplash.com/photo-1547826039-a3209da9d515?auto=format&fit=crop&w=500&q=75', alt: 'Youth training', label: 'Vocational Training' },
  { src: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=500&q=75', alt: 'Students in class', label: 'School Outreach' },
  { src: 'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?auto=format&fit=crop&w=500&q=75', alt: 'Community gathering', label: 'Community Events' },
  { src: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=500&q=75', alt: 'Young professional woman', label: 'Leadership' },
  { src: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&w=500&q=75', alt: 'Youth sports', label: 'Sports & Recreation' },
]

const programs = [
  {
    title: 'Youth Vocational Training',
    description: 'Hands-on trade and technical skills training in carpentry, tailoring, plumbing, electrical works, and more — giving youth marketable expertise.',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>`,
  },
  {
    title: 'Talent Discovery & Development',
    description: 'Identifying and nurturing the unique artistic, athletic, and creative gifts of young people through structured development pathways and showcases.',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
  },
  {
    title: 'Youth Skilling Initiative',
    description: 'Entrepreneurship, digital literacy, financial management, and life skills training to prepare youth for the modern economy and self-reliance.',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 20h.01M7 20v-4M12 20v-8M17 20V8M22 4l-5 5-4-4-6 6"/></svg>`,
  },
  {
    title: 'Sensitization Campaigns',
    description: 'Community-wide programs addressing health, rights, civic responsibility, and social issues, creating informed and engaged young citizens.',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>`,
  },
  {
    title: 'Mentorship & Leadership',
    description: 'Structured mentorship linking youth with experienced professionals and community leaders who guide, inspire, and model excellence.',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>`,
  },
  {
    title: 'Community Outreach',
    description: 'Grassroots engagement in schools, churches, villages, and urban centres — taking our programs directly to those who need them most.',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
  },
]

const stats = [
  { value: 2500, suffix: '+', label: 'Youth Empowered', desc: 'Young people trained and transformed', icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>` },
  { value: 12, suffix: '', label: 'Districts Covered', desc: 'Regions across Uganda reached', icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>` },
  { value: 40, suffix: '+', label: 'Partner Organisations', desc: 'NGOs, companies and institutions', icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/></svg>` },
  { value: 350, suffix: '+', label: 'Youth in Business', desc: 'Graduates now running enterprises', icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>` },
]

const objectives = [
  { title: 'Provide Accessible Skills Training', desc: 'Offer free and subsidised vocational and life skills training to youth aged 15–35 across Uganda, prioritising underserved communities.' },
  { title: 'Nurture Talent & Creative Expression', desc: 'Create platforms and pipelines for Uganda\'s gifted youth to develop, showcase, and monetise their talents in arts, sports, and innovation.' },
  { title: 'Promote Civic Awareness & Health', desc: 'Conduct regular sensitization on reproductive health, civic rights, environmental responsibility, and anti-corruption among youth.' },
  { title: 'Foster Youth-Led Entrepreneurship', desc: 'Equip young people with business knowledge, seed capital access, mentorship, and networks to start and sustain viable enterprises.' },
  { title: 'Build Resilient Community Networks', desc: 'Strengthen community cohesion by engaging families, local leaders, faith institutions, and government in joint youth development efforts.' },
  { title: 'Advocate for Youth Policy Change', desc: 'Influence national and local government policies to prioritise youth empowerment, education funding, and employment opportunities.' },
]

const activities = [
  { title: 'Annual Youth Summit', desc: 'A flagship annual gathering bringing together thousands of young people, leaders, and partners to celebrate achievements and chart the future.', icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>` },
  { title: 'Talent Showcase', desc: 'Regular competitions and showcase events where youth present their talents in music, drama, fine art, sports, and innovation to the public.', icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>` },
  { title: 'Community Clean-Up Drives', desc: 'Monthly environmental actions that combine youth mobilisation with civic education, making communities cleaner and youth more responsible.', icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a1 1 0 011-1h4a1 1 0 011 1v2"/></svg>` },
  { title: 'School Outreach Visits', desc: 'Regular visits to secondary schools and tertiary institutions for career guidance, life skills sessions, and HFCU program enrolment drives.', icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>` },
  { title: 'Health & Wellness Camps', desc: 'Free medical check-ups, counselling services, HIV/AIDS testing, and mental health awareness sessions held across districts.', icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>` },
  { title: 'Sports & Recreation Leagues', desc: 'Organised youth sports leagues in football, netball, athletics and indoor games that promote teamwork, discipline, and physical wellness.', icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M4.93 4.93l4.24 4.24M14.83 9.17l4.24-4.24M14.83 14.83l4.24 4.24M9.17 14.83l-4.24 4.24"/></svg>` },
  { title: 'Business & Finance Clinics', desc: 'Practical workshops on bookkeeping, SACCO management, business planning, and accessing micro-finance to support youth entrepreneurs.', icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>` },
  { title: 'Digital Skills Bootcamps', desc: 'Intensive short courses in computer literacy, social media for business, graphic design, and digital marketing for youth entering the modern workforce.', icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>` },
]