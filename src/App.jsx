import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Hero from './components/Hero'
import Work from './components/Work'
import Quest from './components/Quest'
import Chat from './components/Chat'
import Creator from './pages/Creator'

function Portfolio() {
  return (
    <div className="portfolio">
      <Hero />
      <Work />
      <Quest />
      <Chat />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/creator" element={<Creator />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
