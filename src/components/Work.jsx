import { useState } from 'react'
import './Work.css'

const webProjects = [
  {
    icon: '🏠',
    title: 'Optimus Properties',
    description: 'A modern real estate platform with property listings, advanced search filters, and a seamless inquiry system.',
    color: '#1a2e1a',
    tags: ['WordPress', 'Elementor', 'WooCommerce'],
    link: 'https://theoptimus.ae',
    mockup1: '/Screenshot 2026-03-20 145746.png',
    mockup2: '/Screenshot 2026-03-20 151933.png',
  },
  {
    icon: '🏟️',
    title: 'Arena Pro',
    description: 'A sports arena management web app for booking, scheduling events and managing facilities end-to-end.',
    color: '#1a1a2e',
    tags: ['React', 'Node.js', 'REST API', 'Tailwind'],
    link: 'https://arenapropk.online',
    mockup1: '/Screenshot 2026-03-20 152040.png',
    mockup2: '/Screenshot 2026-03-20 152117.png',
  },
  {
    icon: '📱',
    title: 'Arena Pro App',
    description: 'Mobile companion app for Arena Pro — letting users browse arenas, book slots and track their reservations on the go.',
    color: '#2e1a2e',
    tags: ['React Native', 'Node.js', 'REST API'],
    link: 'https://arenapropk.online',
    mockup1: 'https://placehold.co/380x260/2e1a2e/ffffff?text=Arena+App',
    mockup2: 'https://placehold.co/560x320/1a0f1a/ffffff?text=Booking+Screen',
  },
  {
    icon: '👁️',
    title: 'Vision Care Web',
    description: 'A clinic website for an eye care brand with appointment booking, service pages and a patient portal.',
    color: '#1a2a3a',
    tags: ['React', 'Tailwind', 'REST API'],
    link: 'https://thevisioncare.shop',
    mockup1: '/Screenshot 2026-03-20 152338.png',
    mockup2: '/Screenshot 2026-03-20 152356.png',
  },
  {
    icon: '🖥️',
    title: 'Vision Care POS',
    description: 'A point-of-sale system for Vision Care clinics — managing inventory, sales, prescriptions and patient records.',
    color: '#2a1a1a',
    tags: ['Laravel', 'PHP', 'MySQL'],
    link: 'https://thevisioncare.shop',
    mockup1: '/Screenshot 2026-03-20 152503.png',
    mockup2: '/Screenshot 2026-03-20 152518.png',
  },
  {
    icon: '🚚',
    title: 'Hawk Dispatch',
    description: 'A logistics dispatch platform for managing drivers, tracking deliveries in real-time and optimizing routes.',
    color: '#2a2a1a',
    tags: ['WordPress', 'Elementor', 'Custom Plugin'],
    link: 'https://hawkdispatchinc.com',
    mockup1: '/Screenshot 2026-03-20 152634.png',
    mockup2: '/Screenshot 2026-03-20 152646.png',
  },
  {
    icon: '🏗️',
    title: 'AMA Developer',
    description: 'A real estate developer website showcasing projects, amenities and enabling direct client inquiries.',
    color: '#1a0a0a',
    tags: ['WordPress', 'Elementor', 'ACF'],
    link: 'https://amadeveloper.ae',
    mockup1: '/Screenshot 2026-03-20 160232.png',
    mockup2: '/Screenshot 2026-03-20 160252.png',
  },
  {
    icon: '🛍️',
    title: 'Drap Store',
    description: 'An e-commerce store offering a curated collection of fashion and lifestyle products with a smooth shopping experience.',
    color: '#1a0f0a',
    tags: ['E-Commerce', 'Shopify'],
    link: 'https://www.drapstore.com',
    mockup1: '/Screenshot 2026-03-29 232825.png',
    mockup2: '/Screenshot 2026-03-29 232851.png',
  },
]

const socialProjects = [
  {
    title: 'Optimus Properties',
    handle: '@theoptimus.ae',
    description: 'Grew brand awareness for a UAE real estate company through targeted content and paid campaigns.',
    brandColor: '#1c3fa8',
    image: '/Screenshot 2026-03-20 153319.png',
    tags: ['Instagram', 'Content Strategy', 'Paid Ads'],
    stats: [{ label: 'Posts', value: '500+' }, { label: 'Followers', value: '6.5K+' }, { label: 'Monthly Reach', value: '30K+' }],
    link: 'https://www.instagram.com/theoptimusproperties?igsh=Y3NscmFlM3F3NWh0',
  },
  {
    title: 'Green Future Properties',
    handle: '@greenfutureproperties',
    description: 'Built a strong social presence for a sustainable real estate brand through creative content and community engagement.',
    brandColor: '#1a3a1a',
    image: '/Eid Mubarak.jpg',
    tags: ['Instagram', 'Real Estate', 'Content Creation'],
    stats: [{ label: 'Posts', value: '700+' }, { label: 'Followers', value: '1.1K+' }, { label: 'Monthly Reach', value: '100K+' }],
    link: 'https://www.instagram.com/greenfuture.pk?igsh=MTM1N29rZjJkaDZtZA==',
  },
  {
    title: 'AMA Developer',
    handle: '@amadeveloper',
    description: 'Managed social media for a real estate developer — driving project launches and lead generation through targeted campaigns.',
    brandColor: '#1a1a1a',
    image: '/Screenshot 2026-03-20 154308.png',
    tags: ['Instagram', 'Facebook', 'Lead Generation'],
    stats: [{ label: 'Posts', value: '100+' }, { label: 'Followers', value: '1.7K+' }, { label: 'Monthly Reach', value: '100K+' }],
    link: 'https://www.instagram.com/ama.developer?igsh=MXN5bjZidWozNnd6eg==',
  },
  {
    title: 'Arena Pro',
    handle: '@arenapropk',
    description: 'Built a sports community on Instagram and TikTok with viral content and influencer collaborations.',
    brandColor: '#0f1a2e',
    image: '/Eid Mubarak (1).jpg',
    tags: ['Instagram', 'TikTok', 'Influencer Marketing'],
    stats: [{ label: 'Posts', value: '20+' }, { label: 'Followers', value: '50+' }, { label: 'Monthly Reach', value: '10K+' }],
    link: 'https://www.instagram.com/arenapropk?igsh=OTh2bHpxZTMyOHJv',
  },
]

function Work() {
  const [tab, setTab] = useState('web')
  const projects = tab === 'web' ? webProjects : socialProjects

  return (
    <section className="work" id="work">
      <div className="work-header">
        <span className="work-subtitle">from 2020 'til today</span>
        <h2 className="work-title">My latest work</h2>
        <div className="work-toggle">
          <button
            className={`toggle-btn ${tab === 'web' ? 'active' : ''}`}
            onClick={() => setTab('web')}
          >
            Web Dev
          </button>
          <button
            className={`toggle-btn ${tab === 'social' ? 'active' : ''}`}
            onClick={() => setTab('social')}
          >
            Social Media
          </button>
        </div>
      </div>

      <div className="work-list">
        {tab === 'web' ? webProjects.map((project, i) => (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="work-card"
            key={`web-${i}`}
          >
            <div className="work-card-top">
              <div className="work-card-meta">
                <span className="work-card-icon" style={{ background: project.color }}>
                  {project.icon}
                </span>
                <h3 className="work-card-title">{project.title}</h3>
              </div>
              <span className="work-card-arrow">→</span>
            </div>
            <p className="work-card-desc">{project.description}</p>
            <div className="work-card-tags">
              {project.tags.map((tag, j) => <span className="work-tag" key={j}>{tag}</span>)}
            </div>
            <div className="work-card-preview">
              <img className="mockup mockup-left" src={project.mockup1} alt={project.title + ' 1'} />
              <img className="mockup mockup-right" src={project.mockup2} alt={project.title + ' 2'} />
            </div>
          </a>
        )) : socialProjects.map((project, i) => (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="social-card"
            key={`social-${i}`}
          >
            <div className="social-card-brand" style={{ background: project.brandColor }}>
              {project.image
                ? <img src={project.image} alt={project.title} className="social-brand-img" />
                : <>
                    <span className="social-brand-name">{project.title}</span>
                    <span className="social-brand-handle">{project.handle}</span>
                  </>
              }
            </div>
            <div className="social-card-body">
              <div className="social-card-top">
                <h3 className="work-card-title">{project.title}</h3>
                <span className="work-card-arrow">→</span>
              </div>
              <p className="work-card-desc">{project.description}</p>
              <div className="social-stats">
                {project.stats.map((s, j) => (
                  <div className="social-stat" key={j}>
                    <span className="stat-value">{s.value}</span>
                    <span className="stat-label">{s.label}</span>
                  </div>
                ))}
              </div>
              <div className="work-card-tags">
                {project.tags.map((tag, j) => <span className="work-tag" key={j}>{tag}</span>)}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Work
