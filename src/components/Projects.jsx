import { ExternalLink, GitBranch, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Music App',
    description: 'Aplicación de música donde los usuarios pueden crear sus listas de canciones favoritas, con autenticación y reproducción integrada.',
    image: './assets/img/migProyects/image-music.png',
    stack: ['React', 'Tailwind', 'Axios', 'Spotify API'],
    live: 'https://app-music-zeta.vercel.app/login',
    github: 'https://github.com/David-BarraganP/app-music',
    accent: 'text-accent',
  },
  {
    title: 'E-commerce',
    description: 'Plataforma de comercio electrónico con backend robusto para gestión de productos y procesamiento de compras.',
    image: './assets/img/migProyects/image-ecommerce.png',
    stack: ['JavaScript', 'Jest', 'Express', 'Sequelize', 'bcrypt'],
    live: 'https://entregable-final-frontend.vercel.app/',
    github: 'https://github.com/David-BarraganP/entregable-final',
    accent: 'text-blue-400',
  },
  {
    title: 'Rick & Morty App',
    description: 'Aplicación para explorar dimensiones y personajes de Rick and Morty consumiendo su API oficial.',
    image: './assets/img/migProyects/image-rickM.png',
    stack: ['React', 'Tailwind', 'Axios', 'Rick & Morty API'],
    live: 'https://entregable-3-neon.vercel.app/',
    github: 'https://github.com/David-BarraganP/entregable_3',
    accent: 'text-purple-400',
  },
  {
    title: 'Weather App',
    description: 'App del clima con búsqueda por ciudad o país que muestra temperatura en °C y °F con datos en tiempo real.',
    image: './assets/img/migProyects/imageweather.png',
    stack: ['React', 'Tailwind', 'Weather API'],
    live: 'https://entregable-2-pink.vercel.app/',
    github: 'https://github.com/David-BarraganP/entregable_2',
    accent: 'text-yellow-400',
  },
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
