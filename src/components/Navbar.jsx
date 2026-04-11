import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { href: '#home', label: 'Inicio' },
  { href: '#about', label: 'Sobre Mí' },
  { href: '#tech', label: 'Tecnologías' },
  { href: '#projects', label: 'Proyectos' },
  { href: '#reviews', label: 'Reseñas' },
  { href: '#contact', label: 'Contacto' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-bg/90 backdrop-blur-md border-b border-border' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#home" className="flex flex-col no-underline">
          <span className="font-display font-bold text-lg text-light">
            <span className="text-accent">D</span>B
            <span className="text-muted font-light text-sm ml-1">/ dev</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l.href} href={l.href}
              className="font-body text-sm text-soft hover:text-accent transition-colors duration-200 tracking-wide no-underline">
              {l.label}
            </a>
          ))}
        </nav>

        <a href="#contact"
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 border border-accent/40 text-accent text-sm rounded-full hover:bg-accent/10 transition-all duration-200 no-underline font-body">
          Trabajemos juntos
        </a>

        <button onClick={() => setOpen(!open)} className="md:hidden text-soft hover:text-accent bg-transparent border-none cursor-pointer">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-surface border-b border-border px-6 py-4 flex flex-col gap-4">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="text-soft hover:text-accent text-sm transition-colors no-underline font-body">
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
