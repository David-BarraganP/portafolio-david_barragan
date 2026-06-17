import { GitBranch, Link, Share2 } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="font-display font-bold text-lg text-light">
            <span className="text-accent">D</span>B
          </p>
          <p className="font-body text-muted text-xs mt-1">Back-End Developer</p>
        </div>
        <p className="font-mono text-muted text-xs">© {year} David Barragán. Todos los derechos reservados.</p>
        <div className="flex gap-3">
          {[
            { Icon: GitBranch, href: 'https://github.com/David-BarraganP' },
            { Icon: Link, href: 'https://www.linkedin.com/in/david-barrag%C3%A1n-9a353b1b9/' },
            { Icon: Share2, href: 'https://www.instagram.com/barragan5162/' },
            { Icon: Share2, href: 'https://www.facebook.com/DavidBarragan25/' },
          ].map(({ Icon, href }, i) => (
            <a key={i} href={href} target="_blank" rel="noreferrer"
              className="p-2 rounded-lg text-muted hover:text-accent hover:bg-surface border border-transparent hover:border-border transition-all duration-200">
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
