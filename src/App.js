import React from 'react';
import './App.css';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <Hero />
      <Services />
      <Projects />
    </div>
  );
}

export default App;
