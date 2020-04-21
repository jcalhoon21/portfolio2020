import React from 'react';
import './App.css';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="main ui container">
      <Hero />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
