import React from 'react';
import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import Navigation from './components/Navigation';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Hero />
      <Navigation />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
