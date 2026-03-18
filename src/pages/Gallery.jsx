import React, { useState } from 'react'
import { useRevealAll } from '../hooks/useReveal'
import './Gallery.css'

const galleryItems = [
  {
    id: 1, category: 'Training',
    title: 'Vocational Training Workshop',
    desc: 'Youth learning carpentry and construction skills at our Kampala training centre.',
    src: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2, category: 'Events',
    title: 'Annual Youth Summit 2024',
    desc: 'Over 2,000 youth gathered for our flagship summit in Kampala.',
    src: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3, category: 'Talent',
    title: 'Talent Showcase Finals',
    desc: 'Incredible performances at our Q3 talent showcase event.',
    src: 'https://images.unsplash.com/photo-1547826039-a3209da9d515?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4, category: 'Outreach',
    title: 'Community Outreach Drive',
    desc: 'Our team reaching youth in rural communities across Uganda.',
    src: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 5, category: 'Health',
    title: 'Health Camp — Mukono',
    desc: 'Free medical check-ups and counselling for community members.',
    src: 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 6, category: 'Training',
    title: 'Digital Skills Bootcamp',
    desc: 'Youth learning computer skills and digital marketing.',
    src: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 7, category: 'Sports',
    title: 'Youth Football League',
    desc: 'District football league finals bringing communities together.',
    src: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 8, category: 'Events',
    title: 'School Career Fair',
    desc: 'Guiding S6 finalists on career paths and opportunities.',
    src: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 9, category: 'Training',
    title: 'Tailoring & Fashion Class',
    desc: 'Women in our tailoring program showcase their creations.',
    src: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 10, category: 'Outreach',
    title: 'Clean-Up Drive — Jinja',
    desc: 'Community cleanup with 200+ youth volunteers in Jinja.',
    src: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 11, category: 'Talent',
    title: 'Drama & Arts Festival',
    desc: 'Performing arts showcase celebrating youth creativity.',
    src: 'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 12, category: 'Health',
    title: 'Mental Health Awareness Day',
    desc: 'Breaking stigma — open dialogue on mental wellness among youth.',
    src: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80',
  },
]

const categories = ['All', 'Training', 'Events', 'Talent', 'Outreach', 'Health', 'Sports']

export default function Gallery() {
  useRevealAll()
  const [filter,   setFilter]   = useState('All')
  const [lightbox, setLightbox] = useState(null)

  const filtered = filter === 'All'
    ? galleryItems
    : galleryItems.filter(g => g.category === filter)

  return (
    <main>
      <section className="page-hero">
        <div className="page-hero-photo">
          <img
            src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=1400&q=80"
            alt="HFCU community moments"
            loading="eager"
          />
        </div>
        <div className="page-hero-overlay" />
        <div className="container page-hero-content">
          <div className="section-label" style={{ justifyContent: 'center', color: 'rgba(255,255,255,0.7)' }}>
            Our Story in Pictures
          </div>
          <h1>Photo <em>Gallery</em></h1>
          <p>Moments of transformation, community, and celebration captured from across our programs and activities.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">

          {/* Filter tabs */}
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

          {/* Grid */}
          <div className="gallery-grid">
            {filtered.map((item, i) => (
              <div
                className="gallery-item reveal"
                key={item.id}
                style={{ transitionDelay: `${(i % 4) * 0.08}s` }}
                onClick={() => setLightbox(item)}
              >
                <div className="gallery-img-wrap">
                  <img src={item.src} alt={item.title} loading="lazy" />
                  <div className="gallery-overlay">
                    <div className="gallery-zoom-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="11" cy="11" r="8"/>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                        <line x1="11" y1="8" x2="11" y2="14"/>
                        <line x1="8"  y1="11" x2="14" y2="11"/>
                      </svg>
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
            <button className="lightbox-close" onClick={() => setLightbox(null)} aria-label="Close">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6"  x2="6"  y2="18"/>
                <line x1="6"  y1="6"  x2="18" y2="18"/>
              </svg>
            </button>
            <div className="lightbox-img">
              <img src={lightbox.src} alt={lightbox.title} />
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