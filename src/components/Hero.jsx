import { useState, useEffect } from 'react'
import './Hero.css'

const navLinks = [
  { label: 'Hey',   id: 'hey' },
  { label: 'Work',  id: 'work' },
  { label: 'Story', id: 'story' },
  { label: 'Chat',  id: 'chat' },
]

function Hero() {
  const [active, setActive] = useState('hey')

  useEffect(() => {
    const observers = navLinks.map(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return null
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id) },
        { threshold: 0.3 }
      )
      obs.observe(el)
      return obs
    })
    return () => observers.forEach((o) => o && o.disconnect())
  }, [])

  return (
    <section className="hero" id="hey">
      <nav className="navbar">
        <div className="nav-pill">
          <span className="nav-icon">☀️</span>
          {navLinks.map(({ label, id }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`nav-link ${active === id ? 'active' : ''}`}
            >
              {label}
            </a>
          ))}
        </div>
      </nav>

      <div className="hero-content">
        <p className="hero-tagline">
          Hey! Meet Usman — web developer &amp; social media manager,<br />
          building brands online from code to content.
        </p>
        <h1 className="hero-name">Usman Khan</h1>
      </div>
    </section>
  )
}

export default Hero
