import { ExternalLink, GitBranch, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Super Extra',
    description: 'Plataforma de comercio electrónico con backend robusto para gestión de productos y procesamiento de compras.',
    image: '/image.png',
    stack: ['JavaScript', 'Jest', 'Express', 'Sequelize', 'bcrypt'],
    live: 'https://super-extra-front-end.vercel.app/',
    github: 'https://github.com/David-BarraganP/superExtraBack.git',
    accent: 'text-blue-400',
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <p className="font-mono text-accent text-xs tracking-widest uppercase mb-3">03. trabajo</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-light">Proyectos</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <article key={i}
              className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-accent/30 hover:-translate-y-1 transition-all duration-300"
              style={{ boxShadow: '0 0 0 transparent' }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = '0 8px 32px rgba(110,231,183,0.08)'}
              onMouseLeave={e => e.currentTarget.style.boxShadow = '0 0 0 transparent'}>

              {/* Image */}
              <div className="relative overflow-hidden h-44">
                <img src={p.image} alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-card" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-display text-light font-semibold text-lg">{p.title}</h3>
                  <div className="flex gap-2">
                    <a href={p.github} target="_blank" rel="noreferrer"
                      className="p-1.5 text-muted hover:text-light transition-colors">
                      <GitBranch size={15} />
                    </a>
                    <a href={p.live} target="_blank" rel="noreferrer"
                      className={`p-1.5 transition-colors ${p.accent}`}>
                      <ArrowUpRight size={15} />
                    </a>
                  </div>
                </div>
                <p className="font-body text-dim text-sm leading-relaxed mb-4">{p.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.stack.map(s => (
                    <span key={s} className="px-2 py-0.5 bg-surface border border-border rounded-md text-dim text-xs font-mono">{s}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="https://github.com/David-BarraganP" target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 text-soft hover:text-accent transition-colors text-sm font-body no-underline">
            <GitBranch size={16} /> Ver más en GitHub <ExternalLink size={12} />
          </a>
        </div>
      </div>
    </section>
  );
}
