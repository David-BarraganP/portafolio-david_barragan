import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Technologies from './components/Technologies';
import Projects from './components/Projects';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';

function ProgressBar() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const fn = () => {
      const doc = document.documentElement;
      const pct = (window.scrollY / (doc.scrollHeight - doc.clientHeight)) * 100;
      setProgress(pct);
    };
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);
  return (
    <div className="fixed top-0 left-0 h-0.5 z-[10000] progress-bar transition-all duration-75"
      style={{ width: `${progress}%` }} />
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-bg font-body">
      <ProgressBar />
      <Navbar />
      <Hero />
      <About />
      <Technologies />
      <Projects />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
}
