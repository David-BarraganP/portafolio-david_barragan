const technologies = [
  { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'Vite', icon: 'https://vitejs.dev/logo.svg' },
  { name: 'Tailwind', icon: 'https://miro.medium.com/v2/resize:fit:1200/1*fh7Ev_RKguNCMcuu_wtTng.png' },
  { name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
  { name: 'GitHub', icon: 'https://static.vecteezy.com/system/resources/previews/016/833/872/original/github-logo-git-hub-icon-on-white-background-free-vector.jpg' },
];

export default function Technologies() {
  return (
    <section id="tech" className="py-24 px-6 bg-surface/50">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <p className="font-mono text-accent text-xs tracking-widest uppercase mb-3">02. stack</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-light">Tecnologías</h2>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 mb-16">
          {technologies.map((t, i) => (
            <div key={i}
              className="group flex flex-col items-center gap-3 p-4 bg-card border border-border rounded-2xl hover:border-accent/30 hover:-translate-y-1 transition-all duration-300 cursor-default">
              <div className="w-10 h-10 flex items-center justify-center">
                <img src={t.icon} alt={t.name} className="w-8 h-8 object-contain group-hover:scale-110 transition-transform duration-200"
                  onError={e => { e.target.style.display = 'none'; }} />
              </div>
              <span className="font-body text-dim text-xs group-hover:text-soft transition-colors text-center">{t.name}</span>
            </div>
          ))}
        </div>

        {/* Marquee */}
        <div className="overflow-hidden relative">
          <div className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none bg-gradient-to-r from-bg to-transparent" />
          <div className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none bg-gradient-to-l from-bg to-transparent" />
          <div className="flex gap-8 whitespace-nowrap animate-marquee">
            {[...technologies, ...technologies].map((t, i) => (
              <span key={i} className="font-display text-border text-sm font-semibold">{t.name} ·</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
