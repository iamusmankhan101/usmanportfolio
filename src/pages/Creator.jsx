import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Creator.css'

const reels = [
  {
    id: 1,
    title: 'Pine Homes — 5 Marla Apartments',
    category: 'Real Estate',
    likes: '6',
    link: 'https://www.instagram.com/p/DUBBiNRjaki/',
    thumbnail: '/thumb-1.jpg',
    gradient: 'linear-gradient(135deg, #1a5c2a 0%, #0a2e12 100%)',
    caption: '5 Marla 2-bedroom apartments at Pine Homes — modern living with smart investment potential in a prime location.',
    handle: '@greenfuture.pk',
    tags: ['Real Estate', 'Apartments', 'Pakistan'],
  },
  {
    id: 2,
    title: 'RUDA Chahar Bagh Reva — Plot Launch',
    category: 'Real Estate',
    likes: '3',
    link: 'https://www.instagram.com/p/DUIhDBfDdU5/',
    thumbnail: '/thumb-2.jpg',
    gradient: 'linear-gradient(135deg, #14472a 0%, #0b2918 100%)',
    caption: 'RUDA\'s Chahar Bagh Reva offering 5 marla plots with just 30% down payment and an easy 3-year installment plan.',
    handle: '@greenfuture.pk',
    tags: ['RUDA', 'Plots', 'Installment'],
  },
  {
    id: 3,
    title: 'Punjab Anti-Pollution — Awareness Reel',
    category: 'Awareness',
    likes: '3',
    link: 'https://www.instagram.com/p/DTPu-8yDV3d/',
    thumbnail: '/thumb-3.jpg',
    gradient: 'linear-gradient(135deg, #1a3a1a 0%, #0d220d 100%)',
    caption: 'Educating audiences on Punjab\'s new cleanliness rules and pollution control measures — building community trust.',
    handle: '@greenfuture.pk',
    tags: ['Awareness', 'Punjab', 'Environment'],
  },
  {
    id: 4,
    title: 'Chahar Bagh Enclave — Limited Plots',
    category: 'Real Estate',
    likes: '10',
    link: 'https://www.instagram.com/p/DTfdzu9DdqI/',
    thumbnail: '/thumb-4.jpg',
    gradient: 'linear-gradient(135deg, #1c5c32 0%, #0e3018 100%)',
    caption: 'Limited opportunity at RUDA\'s signature Chahar Bagh Enclave — residential plots starting from PKR 585,000.',
    handle: '@greenfuture.pk',
    tags: ['RUDA', 'Chahar Bagh', 'Investment'],
  },
  {
    id: 5,
    title: 'Real Estate as a Long-Term Asset',
    category: 'Brand Story',
    likes: '5',
    link: 'https://www.instagram.com/p/DSFU4qBDe8s/',
    thumbnail: '/thumb-5.jpg',
    gradient: 'linear-gradient(135deg, #163d20 0%, #0a2212 100%)',
    caption: 'Educational content positioning real estate as a secure, long-term asset in an uncertain investment market.',
    handle: '@greenfuture.pk',
    tags: ['Investment', 'Education', 'Real Estate'],
  },
  {
    id: 6,
    title: 'GreenFuture — Property Guide Reel',
    category: 'Brand',
    likes: '14',
    link: 'https://www.instagram.com/p/DRWsjGfDWr1/',
    thumbnail: '/thumb-6.jpg',
    gradient: 'linear-gradient(135deg, #1a4d28 0%, #0d2815 100%)',
    caption: 'Helping buyers navigate the property market with confidence — expert guidance from GreenFuture Properties.',
    handle: '@greenfuture.pk',
    tags: ['Real Estate', 'Consulting', 'Guide'],
  },
  {
    id: 7,
    title: 'Beyond DHA — Lahore Investment Guide',
    category: 'Real Estate',
    likes: '4',
    link: 'https://www.instagram.com/p/DQ9PwZCjQSG/',
    thumbnail: '/thumb-7.jpg',
    gradient: 'linear-gradient(135deg, #18502c 0%, #0c2c18 100%)',
    caption: 'Highlighting emerging Lahore projects — Chahar Bagh, Chahar Bagh Enclave, and Sapphire Bay as smart alternatives to DHA and Bahria.',
    handle: '@greenfuture.pk',
    tags: ['Lahore', 'Investment', 'Guide'],
  },
  {
    id: 8,
    title: 'Chahar Bagh Enclave — Overseas Pakistanis',
    category: 'Real Estate',
    likes: '7',
    link: 'https://www.instagram.com/p/DQ6p4QADYoA/',
    thumbnail: '/thumb-8.jpg',
    gradient: 'linear-gradient(135deg, #1b5530 0%, #0f2e1a 100%)',
    caption: 'Modern living designed exclusively for overseas Pakistanis — invest in a lifestyle, not just land, at Chahar Bagh Enclave.',
    handle: '@greenfuture.pk',
    tags: ['Overseas', 'Chahar Bagh', 'Lifestyle'],
  },
  {
    id: 9,
    title: 'Chahar Bagh Phase 2 — Now Open',
    category: 'Launch',
    likes: '3',
    link: 'https://www.instagram.com/p/DQy5Y8vDTxu/',
    thumbnail: '/thumb-9.jpg',
    gradient: 'linear-gradient(135deg, #174b26 0%, #0b2815 100%)',
    caption: 'Phase 1 sold out — Phase 2 "Chahar Bagh Enclave" now open for bookings with 3, 5, 7, 10 Marla and 1 Kanal plots.',
    handle: '@greenfuture.pk',
    tags: ['Launch', 'RUDA', 'Plots'],
  },
  {
    id: 10,
    title: 'Chahar Bagh Enclave — RUDA Verified',
    category: 'Real Estate',
    likes: '6',
    link: 'https://www.instagram.com/p/DLhYAMxt0G4/',
    thumbnail: '/thumb-10.jpg',
    gradient: 'linear-gradient(135deg, #1a5c2a 0%, #0a3016 100%)',
    caption: 'Addressing investor concerns — Chahar Bagh Enclave is RUDA\'s official signature project and a key part of Ravi City.',
    handle: '@greenfuture.pk',
    tags: ['RUDA', 'Verified', 'Ravi City'],
  },
  {
    id: 11,
    title: 'Germany Trip — EM-Power Europe 2026',
    category: 'Tourism',
    likes: '13',
    link: 'https://www.instagram.com/p/DYExRqhI3MF/',
    thumbnail: '/thumb-11.jpg',
    gradient: 'linear-gradient(135deg, #1a2a4a 0%, #0d1a30 100%)',
    caption: 'Special delegation to EM-Power Europe 2026 in Germany for just 90,000 PKR — making international travel accessible.',
    handle: '@alarbia.international.tour',
    tags: ['Germany', 'Europe', 'Business Travel'],
  },
  {
    id: 12,
    title: 'Mabali Island — Summer Escape',
    category: 'Tourism',
    likes: '22',
    link: 'https://www.instagram.com/p/DX9K3mUoDIC/',
    thumbnail: '/thumb-12.jpg',
    gradient: 'linear-gradient(135deg, #0d2e40 0%, #071c28 100%)',
    caption: 'Beat the Lahore heat in the serene valleys of Mabali Island — comfortable trip with lunch, tea, and smooth transport.',
    handle: '@alarbia.international.tour',
    tags: ['Tourism', 'Travel', 'Summer'],
  },
  {
    id: 13,
    title: 'Al Arabia — Umrah Package 2026',
    category: 'Religious Tourism',
    likes: '10',
    link: 'https://www.instagram.com/p/DYo-QVQoKuX/',
    thumbnail: '/thumb-13.jpg',
    gradient: 'linear-gradient(135deg, #2a1a0a 0%, #1a0d04 100%)',
    caption: 'Al Arabia Travel & Tour\'s special summer Umrah packages — making the sacred journey easy and affordable.',
    handle: '@alarbia.international.tour',
    tags: ['Umrah', 'Travel', 'Religious'],
  },
]

const stats = [
  { value: '13+', label: 'Reels Produced' },
  { value: '2', label: 'Brands Managed' },
  { value: '22', label: 'Peak Likes' },
  { value: '100K+', label: 'Total Reach' },
]

export default function Creator() {
  const [hovered, setHovered] = useState(null)

  return (
    <div className="creator-page">
      {/* Nav */}
      <nav className="creator-nav">
        <div className="creator-nav-pill">
          <Link to="/" className="creator-back">
            <span className="creator-back-arrow">←</span>
            Back to Portfolio
          </Link>
          <div className="creator-nav-badge">
            <span className="badge-dot" />
            Content Creation
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="creator-hero">
        <div className="creator-hero-content">
          <p className="creator-eyebrow">
            Crafting scroll-stopping content for UAE &amp; Pakistan's fastest-growing brands
          </p>
          <h1 className="creator-hero-title">
            Reels that <span className="creator-gradient-text">convert</span>.<br />
            Stories that <span className="creator-gradient-text">stick</span>.
          </h1>
          <div className="creator-stats">
            {stats.map((s, i) => (
              <div className="creator-stat" key={i}>
                <span className="creator-stat-value">{s.value}</span>
                <span className="creator-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* Grid */}
      <main className="creator-main">
        <div className="creator-section-header">
          <span className="creator-section-eyebrow">from brands that trust the work</span>
          <h2 className="creator-section-title">Reels &amp; Campaigns</h2>
          <p className="creator-section-sub">Click any card to watch on Instagram</p>
        </div>

        <div className="reels-grid">
          {reels.map((reel) => (
            <a
              key={reel.id}
              href={reel.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`reel-card ${hovered === reel.id ? 'reel-card--hovered' : ''}`}
              onMouseEnter={() => setHovered(reel.id)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Thumbnail / Gradient BG */}
              <div className="reel-thumb" style={{ background: reel.gradient }}>
                {reel.thumbnail && (
                  <img
                    src={reel.thumbnail}
                    alt={reel.title}
                    className="reel-thumb-img"
                  />
                )}
                <div className="reel-thumb-overlay" />

                {/* Play Button */}
                <div className="reel-play-btn">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>

                {/* Instagram badge */}
                <div className="reel-ig-badge">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                  Instagram
                </div>

              </div>

              {/* Content */}
              <div className="reel-content">
                <div className="reel-meta-row">
                  <span className="reel-category">{reel.category}</span>
                  <span className="reel-handle">{reel.handle}</span>
                </div>
                <h3 className="reel-title">{reel.title}</h3>
                <p className="reel-caption">{reel.caption}</p>
                <div className="reel-tags">
                  {reel.tags.map((tag, i) => (
                    <span className="reel-tag" key={i}>{tag}</span>
                  ))}
                </div>
                <div className="reel-cta">
                  Watch on Instagram
                  <span className="reel-cta-arrow">↗</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </main>

      {/* Footer CTA */}
      <section className="creator-footer-cta">
        <div className="creator-footer-inner">
          <h2 className="creator-footer-title">Let's create something viral</h2>
          <p className="creator-footer-sub">
            Need content that actually converts? Let's talk strategy.
          </p>
          <Link to="/#chat" className="creator-footer-btn">
            Get in touch →
          </Link>
        </div>
      </section>
    </div>
  )
}
