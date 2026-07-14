import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact'; // हे ऍड कर
import Footer from './components/Footer';   // हे ऍड कर

function App() {
  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact /> {/* इथे ऍड कर */}
      <Footer />  {/* इथे ऍड कर */}
    </div>
  );
}

export default App;