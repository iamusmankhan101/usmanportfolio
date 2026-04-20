import './Quest.css'

const cards = [
  // Left column - top
  {
    img: '/Screenshot 2026-03-20 145627.png',
    style: { top: '4%', left: '1%', width: '300px' },
    rotate: '-5deg',
  },
  // Left column - middle
  {
    img: '/Screenshot 2026-03-20 145647.png',
    style: { top: '38%', left: '0%', width: '280px' },
    rotate: '-3deg',
  },
  // Left column - bottom
  {
    img: '/Screenshot 2026-03-20 145657.png',
    style: { bottom: '3%', left: '4%', width: '290px' },
    rotate: '4deg',
  },
  // Right column - top
  {
    img: '/Screenshot 2026-03-20 145746.png',
    style: { top: '3%', right: '1%', width: '300px' },
    rotate: '5deg',
  },
  // Right column - middle
  {
    img: '/Screenshot 2026-03-20 150114.png',
    style: { top: '36%', right: '0%', width: '280px' },
    rotate: '3deg',
  },
  // Right column - bottom
  {
    img: '/Screenshot 2026-03-20 150139.png',
    style: { bottom: '3%', right: '4%', width: '290px' },
    rotate: '-4deg',
  },
]

function Quest() {
  return (
    <section className="quest" id="story">
      {cards.map((card, i) => (
        <div
          className="q-card"
          key={i}
          style={{ ...card.style, transform: `rotate(${card.rotate})` }}
        >
          <img src={card.img} alt={`project ${i + 1}`} className="q-img" />
        </div>
      ))}

      <div className="quest-center">
        <h2 className="quest-title">Code it. Post it.<br />Grow it.</h2>
        <p className="quest-sub">web dev meets social media magic</p>
      </div>

      <div className="quest-mobile-grid">
        {cards.map((card, i) => (
          <img key={i} src={card.img} alt={`project ${i + 1}`} className="quest-mobile-img" />
        ))}
      </div>
    </section>
  )
}

export default Quest
