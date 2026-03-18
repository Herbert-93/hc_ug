import React, { useState } from 'react'
import { useRevealAll } from '../hooks/useReveal'
import './Gallery.css'

const galleryItems = [
  { id: 1, category: 'Training', title: 'Vocational Training Workshop', desc: 'Youth learning carpentry skills at our Kampala training centre', color: '#1B4332', pattern: 'circles' },
  { id: 2, category: 'Events', title: 'Annual Youth Summit 2024', desc: 'Over 2,000 youth gathered for our flagship summit', color: '#2D6A4F', pattern: 'lines' },
  { id: 3, category: 'Talent', title: 'Talent Showcase Finals', desc: 'Incredible performances at our Q3 talent showcase event', color: '#40916C', pattern: 'dots' },
  { id: 4, category: 'Outreach', title: 'Community Outreach Drive', desc: 'Our team reaching youth in rural Luwero district', color: '#C9A84C', pattern: 'grid' },
  { id: 5, category: 'Health', title: 'Health Camp – Mukono', desc: 'Free medical check-ups and counselling for community members', color: '#0D2818', pattern: 'diamonds' },
  { id: 6, category: 'Training', title: 'Digital Skills Bootcamp', desc: 'Youth learning computer skills and digital marketing', color: '#1B4332', pattern: 'waves' },
  { id: 7, category: 'Sports', title: 'Youth Football League', desc: 'District football league finals bringing communities together', color: '#2D6A4F', pattern: 'circles' },
  { id: 8, category: 'Events', title: 'School Career Fair', desc: 'Guiding S6 finalists on career paths and opportunities', color: '#40916C', pattern: 'lines' },
  { id: 9, category: 'Training', title: 'Tailoring & Fashion Class', desc: 'Women in our tailoring program showcase their creations', color: '#C9A84C', pattern: 'dots' },
  { id: 10, category: 'Outreach', title: 'Clean-Up Drive – Jinja', desc: 'Community cleanup with 200+ youth volunteers', color: '#0D2818', pattern: 'grid' },
  { id: 11, category: 'Talent', title: 'Drama & Arts Festival', desc: 'Performing arts showcase at the National Theatre', color: '#1B4332', pattern: 'diamonds' },
  { id: 12, category: 'Health', title: 'Mental Health Awareness Day', desc: 'Breaking stigma — open dialogue on mental wellness', color: '#2D6A4F', pattern: 'waves' },
]

const categories = ['All', 'Training', 'Events', 'Talent', 'Outreach', 'Health', 'Sports']

function IllustrationCard({ item }) {
  const svgs = {
    circles: `<circle cx="60" cy="60" r="50" opacity="0.08" fill="white"/><circle cx="60" cy="60" r="35" opacity="0.08" fill="white"/><circle cx="60" cy="60" r="18" opacity="0.1" fill="white"/>`,
    lines: `<line x1="0" y1="20" x2="120" y2="20" stroke="white" stroke-width="1" opacity="0.1"/><line x1="0" y1="40" x2="120" y2="40" stroke="white" stroke-width="1" opacity="0.1"/><line x1="0" y1="60" x2="120" y2="60" stroke="white" stroke-width="1" opacity="0.1"/><line x1="0" y1="80" x2="120" y2="80" stroke="white" stroke-width="1" opacity="0.1"/><line x1="0" y1="100" x2="120" y2="100" stroke="white" stroke-width="1" opacity="0.1"/>`,
    dots: `<circle cx="20" cy="20" r="3" fill="white" opacity="0.15"/><circle cx="60" cy="20" r="3" fill="white" opacity="0.15"/><circle cx="100" cy="20" r="3" fill="white" opacity="0.15"/><circle cx="20" cy="60" r="3" fill="white" opacity="0.15"/><circle cx="60" cy="60" r="3" fill="white" opacity="0.15"/><circle cx="100" cy="60" r="3" fill="white" opacity="0.15"/><circle cx="20" cy="100" r="3" fill="white" opacity="0.15"/><circle cx="60" cy="100" r="3" fill="white" opacity="0.15"/><circle cx="100" cy="100" r="3" fill="white" opacity="0.15"/>`,
    grid: `<rect x="20" y="20" width="30" height="30" rx="4" fill="white" opacity="0.07"/><rect x="70" y="20" width="30" height="30" rx="4" fill="white" opacity="0.07"/><rect x="20" y="70" width="30" height="30" rx="4" fill="white" opacity="0.07"/><rect x="70" y="70" width="30" height="30" rx="4" fill="white" opacity="0.07"/>`,
    diamonds: `<polygon points="60,10 90,60 60,110 30,60" fill="white" opacity="0.07"/><polygon points="60,25 82,60 60,95 38,60" fill="white" opacity="0.07"/>`,
    waves: `<path d="M0 50 Q30 20 60 50 Q90 80 120 50" stroke="white" stroke-width="2" fill="none" opacity="0.15"/><path d="M0 70 Q30 40 60 70 Q90 100 120 70" stroke="white" stroke-width="2" fill="none" opacity="0.1"/>`,
  }

  return (
    <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
      <rect width="120" height="120" fill={item.color}/>
      <g dangerouslySetInnerHTML={{ __html: svgs[item.pattern] || '' }} />
    </svg>
  )
}

export default function Gallery() {
  useRevealAll()
  const [filter, setFilter] = useState('All')
  const [lightbox, setLightbox] = useState(null)

  const filtered = filter === 'All' ? galleryItems : galleryItems.filter(g => g.category === filter)

  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <div className="section-label" style={{ justifyContent: 'center', color: 'rgba(255,255,255,0.6)' }}>Our Story in Pictures</div>
          <h1>Photo <em>Gallery</em></h1>
          <p>Moments of transformation, community, and celebration captured from across our programs and activities.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {/* Filter Tabs */}
          <div className="gallery-filters reveal">
            {categories.map(cat => (
              <button
                key={cat}
                className={`filter-btn ${filter === cat ? 'active' : ''}`}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="gallery-grid">
            {filtered.map((item, i) => (
              <div
                className="gallery-item reveal"
                key={item.id}
                style={{ transitionDelay: `${(i % 4) * 0.08}s` }}
                onClick={() => setLightbox(item)}
              >
                <div className="gallery-img-wrap">
                  <IllustrationCard item={item} />
                  <div className="gallery-overlay">
                    <div className="gallery-overlay-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
                    </div>
                  </div>
                </div>
                <div className="gallery-info">
                  <div className="gallery-cat">{item.category}</div>
                  <div className="gallery-title">{item.title}</div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="gallery-empty">No items found in this category.</div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <div className="lightbox-inner" onClick={e => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setLightbox(null)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
            <div className="lightbox-img">
              <IllustrationCard item={lightbox} />
            </div>
            <div className="lightbox-info">
              <div className="gallery-cat">{lightbox.category}</div>
              <h3>{lightbox.title}</h3>
              <p>{lightbox.desc}</p>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
