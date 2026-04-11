import { ArrowRight, Download, GitBranch, Link } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid px-6">
      {/* Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10 pointer-events-none orb-green animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full opacity-[0.07] pointer-events-none orb-blue animate-float-slow" />

      <div className="relative z-10 max-w-4xl w-full text-center pt-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-surface border border-border rounded-full mb-8">
          <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
          <span className="font-mono text-soft text-xs tracking-widest uppercase">Disponible para proyectos</span>
        </div>

        {/* Name */}
        <h1 className="font-display text-5xl md:text-7xl font-bold leading-none tracking-tight mb-4">
          <span className="text-light">David </span>
          <span className="text-gradient">Barragán</span>
        </h1>

        {/* Role */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="h-px w-16 bg-border" />
          <p className="font-body text-soft text-lg">Full Stack Web Developer</p>
          <div className="h-px w-16 bg-border" />
        </div>

        {/* Description */}
        <p className="font-body text-dim text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Especializado en <span className="text-accent">React</span>, <span className="text-accent">Node.js</span> y{' '}
          <span className="text-accent">Express</span>. Construyo interfaces rápidas, escalables y con excelente experiencia de usuario.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-accent text-bg font-display font-semibold rounded-full hover:bg-accent-dim transition-all duration-200 hover:scale-105 active:scale-95 no-underline">
            Contáctame <ArrowRight size={16} />
          </a>
          <a href="./assets/cv/CV-DB-ESPAÑOL.jpeg" download
            className="inline-flex items-center gap-2 px-7 py-3.5 border border-border text-soft rounded-full hover:border-accent/40 hover:text-accent transition-all duration-200 no-underline font-display">
            <Download size={16} /> Descargar CV
          </a>
        </div>

        {/* Socials */}
        <div className="flex items-center justify-center gap-4">
          <a href="https://github.com/David-BarraganP" target="_blank" rel="noreferrer"
            className="p-2.5 rounded-xl bg-surface border border-border text-dim hover:text-accent hover:border-accent/30 transition-all duration-200">
            <GitBranch size={18} />
          </a>
          <a href="https://www.linkedin.com/in/david-barrag%C3%A1n-9a353b1b9/" target="_blank" rel="noreferrer"
            className="p-2.5 rounded-xl bg-surface border border-border text-dim hover:text-accent hover:border-accent/30 transition-all duration-200">
            <Link size={18} />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
        <div className="w-5 h-8 border border-muted rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-1.5 bg-accent rounded-full animate-float" />
        </div>
      </div>
    </section>
  );
}
